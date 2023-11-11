# Gaussian Splatting on Metal Dev Log

### Links & Resources

- [Apple Metal-cpp home page](https://developer.apple.com/metal/cpp/)
- [Metal Sample Code](https://developer.apple.com/metal/sample-code/)
- [Performing Calculations on a GPU - sample code](https://developer.apple.com/documentation/metal/performing_calculations_on_a_gpu)

## 2023-11-10

Today: lets get started on writing a sort in Metal and see how far we can get.

* Spent way way too long getting clangd to work and compile Objective-C++ correctly. Now it does work it's great, but that was a lot of wasted time...
* Creating a `GPUSort` cpp class to create the metal shader / buffer / etc directly from the device, ideally without needing to spin up the whole AppDelegate stuff needed to display things on the screen. This reminds me how much I've forgotton about C++, can barely remember how to write a standard class.
* Got the basic structure of the `GPUSort` class working nicely. It handles all the data transfer, command encoding and execution on the GPU. It correctly doubles an array of values passed to it, although so far slower than a CPU version.
* Now trying to figure out how to split the work into blocks. Have a simple version that does 2 elements at a time, still not sure what the optimal split would be (or, how I should do the parallel sort piece).

Doubling 16777216 values:
| Elements | GPU | CPU |
|--|--|--|
| 1 | 9460µs | 4437µs |
| 2 | 8536µs | 3672µs |
| 8 | 7877μs | 3148μs |
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
