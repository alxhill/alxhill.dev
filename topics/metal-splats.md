# Gaussian Splatting on Metal Dev Log

### Links & Resources

- [Apple Metal-cpp home page](https://developer.apple.com/metal/cpp/)
- [Metal Sample Code](https://developer.apple.com/metal/sample-code/)
- [Performing Calculations on a GPU - sample code](https://developer.apple.com/documentation/metal/performing_calculations_on_a_gpu)
- [Simple GPU Sorting Tutorial in O(n^2)](https://www.alanzucconi.com/2017/12/13/gpu-sorting-1/)

## 2023-11-12

* Found a simple O(n^2) parallel sort that iteratively swaps values in each pass. Well suited to GPUs and a good sorting litmus test.
* Had some fun getting the implementation working - usual C++ sharp edges, e.g had an m_data_buffer private member that hid the value in the parent class causing segfaults, and some other general structure / who-does-what kind of problems. Overall, it works! However, it's currently hilariously slow compared to my CPU radix sort implementation:

| Elements | CPU | GPU |
|--|--|--|
| 32    | 1µs    | 5773µs    |
| 65536 | 4993µs | 9034348µs (over 9 seconds!) |

* I think this is more likely to be a problem with the way I'm implementing the two-pass system, encoding each command one-by-one and waiting for completion. The fact that even the 32 element version (which is just 32 passes through a very small amount of data) takes so long implies to me that this is all overhead, not any actual problem with the compute. To test out this theory, will need to refactor the whole thing to push all the passes onto the command queue at once.
* Looking at one of Apple's sample codes to figure out the right way to setup multiple commands on the GPU over the same data, (Image Filtering with Heaps and Events)[https://developer.apple.com/documentation/metal/memory_heaps/implementing_a_multistage_image_filter_using_heaps_and_events]. I don't quite get why they use this event thing to wait for compute, clearly something missing in my understanding of what guarantees the GPU is offering (maybe they're not using the waitUntilCompleted thing for faster perf?).
* Switched to encoding two passes at a time, which executes but currently returns incorrect results. Sad. Perf seems better thought.
* Fixed the two-pass implementation (wasn't actually using the odd pass kernel 🤦🏼‍♂️). It is faster! 4547352µs (~4.5 seconds) which is roughly half the previous time, suggesting my previous thesis of "it's all overhead not compute time" is correct. So, lets encode all the commands at once and see how that goes.
* Encoding all at once works and is substantially faster - we're now well under a second for 2^16 values (278113µs / 0.27 seconds). Curious if this scales to much larger pipelines (i.e how big can the command buffer be?) and how much of the time is spent on the encoding vs actual GPU execution. Will do some simple logging timer stuff, but also worth looking into the metal profiling/debugging tools further now things are getting interesting. Also, the buffer we're using is explicitly a shared buffer between GPU and CPU - but within passes, it doesn't need to be shared at all. An alternative approach where we first copy into a private GPU buffer before execution might be interesting to play around with.
* Some timing logs below:

```
// array size of 65536
std::sort() execution time: 4030 µs
sort_radix() execution time: 7227 µs
[0µs] - Starting encoding pass
[9µs | Δ9µs] - Finished encoding
[9µs | Δ0µs] - Committed command buffer
[303µs | Δ293µs] - Execution completed
slow_sort_gpu() execution time: 303853 µs

// array size of 1048576
std::sort() execution time: 58079 µs
sort_radix() execution time: 96485 µs
[0µs] - Starting encoding pass
[112µs | Δ112µs] - Finished encoding
[112µs | Δ0µs] - Committed command buffer
[26947µs | Δ26834µs] - Execution completed
slow_sort_gpu() execution time: 26948016 µs
```

## 2023-11-11

* Got the code into a more usable structure moving forwards - can now easily test many separate GPU functions without starting from scratch each time. Also having fun hitting the many rough edges of C++ - e.g (you can't call virtual methods from a constructor)[https://stackoverflow.com/questions/14549489/how-to-fix-pure-virtual-function-called-runtime-error], but it just fails at runtime with no compiler warnings if you do despite this being a Known Limitation.
* Tested different batch sizes running the GPU double function. Got best performance out of 128, but still roughly 4x slower than just cpu (300µs vs 1100µs for 1048576 elements). At 1024 performance started degrading again.
* Not sure what the best next-step is for an actual GPU sort. Maybe a small 64 element sort written in Metal, which could later compose into something larger?

## 2023-11-10

Today: lets get started on writing a sort in Metal and see how far we can get.

* Spent way way too long getting clangd to work and compile Objective-C++ correctly. Now it does work it's great, but that was a lot of wasted time...
* Creating a `GPUSort` cpp class to create the metal shader / buffer / etc directly from the device, ideally without needing to spin up the whole AppDelegate stuff needed to display things on the screen. This reminds me how much I've forgotton about C++, can barely remember how to write a standard class.
* Got the basic structure of the `GPUSort` class working nicely. It handles all the data transfer, command encoding and execution on the GPU. It correctly doubles an array of values passed to it, although so far slower than a CPU version.
* Now trying to figure out how to split the work into blocks. Have a simple version that does 2 elements at a time, still not sure what the optimal split would be (or, how I should do the parallel sort piece).

Doubling 16777216 values:

| Elements | GPU | CPU |
|--|--|--|
| 1  | 9460µs | 4437µs |
| 2  | 8536µs | 3672µs |
| 8  | 7877μs | 3148μs |
| 64 | 9367µs | 3747µs |

(the CPU value should technically be the same every time, so this really just shows some of the variance in this simple testing script).

Seems like will need to do a little more work to optimise the Metal compute. It's also possible that despite this being a very parallelisable problem, CPUs are just efficient enough at it and it's memory-bound enough that the parallel advantage isn't coming through.

## Unlogged Work

Started on this a few months back but forgot to do any writeups.

Decided to do some C++ / Metal integration as that felt like a relatively well-supported/well trodden path. Ran into some annoyances with the build system as usual, but ended up with a simple enough Makefile for both the metal shaders and the C++ part.

The two things that make it annoying:
1. Metal shaders have a separate proprietary compiler and have to be pulled into a bundle in their own way. Annoyingly, there was a weird bug that led to different behaviour with the same shader when I compiled/combined the shaders in one particular way (I forget which).
2. Showing a window with the results is done via Objective-C (Objective-C++ in this case), meaning two ways to define classes and manage memory.

### Goals

Gaussian splats take a huge number of values, sort them by distance from camera (I think), and then remove occluded values. One of the reasons this works so well is that GPUs can do sorting very very fast. CUDA has some sophisticated GPU sorting libraries already, but Metal doesn't seem to - so, writing a sorting algorithm in Metal seemed like a good starting point.

There are two algorithms that commonly get implemented on GPUs - Bitonic Sort and Radix Sort. I spent a while trying to figure out how the bitonic sorting algorithm actually works before switching to a simple Radix and implementing it in raw C++ as a baseline for performance. It took a while to get into the swing of that kind of coding, but eventually wrote a working in-place binary radix sort (phew). It performs pretty well - just 2x slower than std::sort on large random data.

```
Generating 33554432 random integers
Generated 33554432 random integers
std::sort() execution time: 2194525 microseconds
sort_radix() execution time: 3719207 microseconds
```
