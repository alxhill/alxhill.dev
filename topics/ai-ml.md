## AI / ML Dev Log

Reverse chronological dev-log of my journey trying to learn modern AI / ML topics, including collections of links and ideas I've come up with along the way.

### Learning Resources

* [fast.ai course](https://course.fast.ai)
* [deeplearning.ai course - Andrew Ng](https://www.deeplearning.ai/courses/deep-learning-specialization/)
* [lightning.ai course - PyTorch DL course](https://lightning.ai/pages/courses/deep-learning-fundamentals/)
* [Coursera Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning?utm_source=deeplearningai&utm_medium=institutions&utm_campaign=WebsiteCoursesDLSTopButton)
* [Transformers from the ground up](https://peterbloem.nl/blog/transformers)
* [Intro to Deep Learning](https://mlvu.github.io/lecture07/) (assuming knowledge of Neural Networks) - good explanation of Tensors.
* Nice [NVIDIA blog post](https://developer.nvidia.com/blog/deep-learning-nutshell-core-concepts/) on CNNs/other foundational DNN stuff.
* [Hacker News thread](https://news.ycombinator.com/item?id=34312248) asking for recommended books/resources/etc. Some interesting suggestions there.
* [GPT in 60 lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
* [Attention is all you need](https://arxiv.org/pdf/1706.03762.pdf) - 2017 paper introducing the Transformer architecture.
* [Andrej Karpathy's GPT from scratch video](https://www.youtube.com/watch?v=kCc8FmEb1nY)

## 2023-03-27

* Started work on a Rust-based Tensor library, originally wanting to fully replace code-based model definitions with pure-config defined execution of GPT-2 using the [60 line NumPy version](https://jaykmody.com/blog/gpt-from-scratch/). Instead, I think it'll be better to try and write it "from scratch" in Rust, and build the tools as I go, given rewriting a bunch of Python that I don't understand isn't proving super productive. Andrej Karpathy to the rescue.
* Decided to name my tensor library "molten", because putting a torch to rusty metal = molten metal, and I'm trying to use Rust and Metal to replace Torch 🚀 (also, the "ten" at the end stands for Tensor).

## 2023-03-17

My explorations around an AI toolkit utimately fizzled out, and I redirected my attention to [Rust and Ray Tracers](/topics/rust.md). The Python-based ML projects were ultimately unsatisfying - Python is a frustrating language to work with, and I was mostly using libraries instead of understanding concepts. Applying ML tooling can be useful, but I prefer to be able to build things myself - even if they won't match modern libraries, having a foundational and engineering-based understanding of modern ML is within reach. Recently I was inspired by the [llama.cpp](https://github.com/ggerganov/llama.cpp) project, which can run Meta's LLaMA models on a CPU with ChatGPT-like performance. The entire implementation is about 20k lines of C and C++, which points to how accessible the core algorithms are - that includes support for various SIMD platforms, so the core inference logic is likely less than a few hundred lines of core mathematical code.

To continue my learning here, I'm starting out from the other end - building a simple Tensor library in Rust. Coming from this direction builds off some existing engineering skills, versus trying to learn the ML and mathematics which has felt more abstract and inaccessible. I'm looking forward to diving into lower-level code (e.g compute shaders and SIMD instructions), and hopefully building towards something capable of doing inference of a (yet to be determined) simple ML model.

## 2022-01-07

* Started setting up my ML toolkit repo using Poetry in an attempt to reduce the pain of conda/pip/etc and use a proper lockfile based dependency management approach. Lets see how this goes or if it's another rabbit hole...annoyingly looks like the Python community hasn't settled on any one tool (e.g there's pyenv, Pipenv, Poetry, PDM, and others all roughly in this space). Sigh. See [here](https://snarky.ca/classifying-python-virtual-environment-workflows/) for a breakdown of the options and [here](https://chriswarrick.com/blog/2023/01/15/how-to-improve-python-packaging/) for an opinionated walk through them all.

## 2022-01-06

* Downloaded and started using MiDaS directly from its own repo for depth estimation. Got it working surprisingly quickly (including using the MPS backend) locally, with decent results.

![Depth map of living room](/docs/assets/images/ai-ml/living-depth.png)
* Some brief tests of the different models showed the dpt_swin2_large_384 model gave the best results in a given time frame. The 512 model took 8s+, while the smaller modules were blurry and had inconsistent accuracy.
* Strangely, on the M2 Air it ran faster on the CPU than the GPU - might be because not all operations are using GPU, PyTorch bugs, or something else. On the M1 Pro, the GPU ran slightly faster.
* The MPS backend returned distored results with the largest, 512 model, while the CPU version ran fine. Maybe a memory issue, or a PyTorch bug? Only affected the larger model which was interesting. Example:

![Broken depth map of living room](/docs/assets/images/ai-ml/broken-depth.png)
* Even the highest resolution models returned profile pictures as cardboard cutout - maybe not trained with enough resolution for faces?

![Profile photo depth map](/docs/assets/images/ai-ml/profile-depth.png)

* ‼️ Finally started a proper repo so I can build up some proper knowledge/understanding of how all this ML code actually works 🚀 [alxhill/ah-ml-toolkit](https://github.com/alxhill/ah-ml-toolkit)

## 2022-12-29

* A good next step for the depth-first editor would be a version of the model that allows more flexibility than the diffusers library allows for. It feels like this is outgrowing how Colab works, which makes it hard to have code across multiple files or tracked in Git. Will play around with alternatives that are more SWE-friendly.

## 2022-12-28

* Excited by the idea of a depth-first browser based editor. Going to explore more with the depth models and see what we can do regarding generated depth maps. Browsers & Three.js have good enough support for 3d rendering, so a lightweight 3d editor would make for a very powerful way to precisely design the composition for a generated image. This tool could have some useful models/depth maps for people, furniture, or even mountains/other types of backgrounds and make generating precise images very easy. So far, unclear exactly what's possible, but I think the concept is strong enough to give it a shot.
* Depth2Img doesn't support fp16, due to `RuntimeError: "LayerNormKernelImpl" not implemented for 'Half'`. Potential PyTorch contribution? Also might be that this specific thing doesn't work well in fp16, see [this issue](https://github.com/pytorch/pytorch/issues/66707). Using full precision for now.
* The depth conditioning is so strong that if the prompt contradicts the depth conditioning, it basically ignores the prompt and returns something like the original image. Here's what happened using depth with strength=1 (so none of the original image is preserved) and the caption "fish swimming through water":

![original](/docs/assets/images/ai-ml/original-minor-changes.png)
![fish swimming through water](/docs/assets/images/ai-ml/fish-through-water.png)

First is the original image (run through SD with low strength for added anonimity) and bottom is the edited. You can see some vague references to water - the carpet, the TV, and the window - but also you can clearly see a TV and a sofa and coffee table - and most notable of all, no fish in sight.

### 2022-12-11

* Working with Jake on the vid2vid stuff he uses. First task: get it running faster using a new Fast-Vid2Vid implementation we've found.
* As per usual, Python/CUDA/dependency issues ruled the day. Did get a working Dockerfile running the code eventually, but haven't seen the actual output generated yet.
* Additionally, will need to figure out how to make Open Pose / Dense Pose return results in near realtime (or remove them from the inputs if there's no way to achieve that, which is apparently supported by the original vid2vid at least).
___
* Going to start experimenting with depth2img, see if it gives more interesting results for the interior design stuff.
* As per usual, fairly annoying to get started with. Sigh.
* Made it work with a full Gradio UI after some wrangling. Gives really good results with strength=1, meaning only the depth content is used to generate the image. This meant it happily changed the texture of the walls and the colours of the sofa (something it didn't do well before), while retaining the shape of the room. Previously it was very common for it to move the walls around in impossible ways, reducing how useful it could actually be.
* Starting to writeup some thoughts/learnings in a blog post.
* Getting a good gradio + write-out setup helped out here, annoying as always when writing python but at least works and saves every image to drive. Should have set that part up a while ago, it's nice to see things progress.


### 2022-11-25

* Gonna try and go one level deeper and run stable diffusion by building up the pipeline without diffusers - basing it off the scripts in the new SD2.0 repo.

### 2022-11-24

* Stable Diffusion 2.0! Got noisy/bad results on first-attempt with the interior design notebook. Locally the default script assumes cuda, trying it with MPS.
* Managed to generate an image by cloning the huggingface space, haven't replicated that in Colab yet.

### 2022-11-20

* Didn't have much time this weekend, but wanted to try going a level deeper and swapping out the scheduler in StableDiffusionPipeline. Tried to use "DPM++ 2M Karras" but it didn't seem to implement a method that the pipeline used and wasn't mentioned as one of the valid types in the StableDiffusionPipeline type annotations. Meanwhile, swapping to some other scheduler complained about using CUDA instead of CPU device and DPM didn't seem to be exported from the diffusers library at all. DDIM ignored the input image even though it was an Img2Img pipeline.


### 2022-11-14

* One-image textual inversion. Results look best on anime. https://github.com/7eu7d7/DreamArtist-stable-diffusion
* Gonna have a shot at seeing how hard it would be to get random number support on the MPS backend.
* Looks like the API is implemented in C++ (Generator.cpp is the class that throws the error).
* Core C++ library, implementing tensors and maths is called "ATen" - https://pytorch.org/cppdocs/. I think this could hypothetically be used in place of the Python API, but is primarily designed as a layer over the C++ API.
* Looks like it may already have been merged into an `mps_master` branch - nice that it's done, shame it's no longer a good first issue. https://github.com/kulinseth/pytorch/pull/131
* Still lots of MPS operators needing implementation in the "good first issue" tag, although some do seem to have PRs/reviews already. Still, even if it's not that it's a good sign there are plenty of first issues to contribute, and seems like contribution quality is varied so likely not the case that every operator has been "taken" even if someone is attempting it. https://github.com/pytorch/pytorch/labels/good%20first%20issue


### 2022-11-13

* Took some new interior photos to play with. Results so far have worked, but haven't been super impressive - not quite at InteriorAI levels. Curious what prompts/strengths he's using for that.
* Need to build a pipeline to make this useful for comparisons - right now it's pretty hard to compare outputs properly.
* Upscaling, inpainting/auto segmentation might be a fun next step. Should use it as a way to dive one level deeper though, rather than just plugging bits together.
* Idea: contribute support for torch generators on MPS backend. CPU didn't work, and returning fixed results is a big blocker to using it much locally.

### 2022-11-12

* Colab Pro is running out fast :(
* Still mostly using instead of learning. But feels good to be iterating fast and producing something new.
* Python is painful, but it's true that you really couldn't do this in Java - even though PyTorch supports Java and amazingly there's a [Java Kernel](https://github.com/frankfliu/IJava) for jupyter (but imagine doing every import by hand...).
	* Maybe that's just a tooling problem - IntelliJ Notebooks anyone? With Kotlin maybe?
* Ran out of memory on a 40GB (!!) GPU. Turns out that's mostly because the standard pipeline is not super efficient - turning on "attention slicing" was enough for now, and in future can easily shrink it down with fp16 mode.
* Note for future self: don't forget to try the optimised swift model locally on an M1 Pro - interesting to see how it compares to the iPhone version. [Blog Post](https://liuliu.me/eyes/stretch-iphone-to-its-limit-a-2gib-model-that-can-draw-everything-in-your-pocket/), [GitHub Repo](https://github.com/liuliu/swift-diffusion)
* *TO READ*: [Transformers from Scratch](https://peterbloem.nl/blog/transformers)

### 2022-11-11

* Bought Colab Pro only to try and make it run locally (update: only sorta worked so good thing I did)
* Python dependencies remain absolute hell and I will never forgive them for it
* Got the diffusers stuff working with a downloaded copy. Turns out the checkpoints are not in the same format as the diffusers stuff, interesting.
* Using diffusers lib does feel like I'm not learning anything - just using it. For now, lets enjoy what we have...
* After wayyy too much messing around with python BS, I have it setup and working on both Colab and local. Colab credits seem to be running out faster than I'd hoped so local might have to be prioritised, even though MPS backend is pretty unstable at the moment. (Update: had a bunch of dependency/conda issues running Colab locally on the M2 Air, should figure out at some point. Maybe just needs ipykernel or something)
* Idea: make the interiorai thing as a huggingface space? Just as a POC?
* Actually the autocorrect product as a huggingface space would also be interesting, saves me having to download and run it all locally too 🤔
* CycleDiffusion looks interesting here - converting from one image to another.
* After way too long, finally got a decent load/save images thing working. Sucks how hard the basics are with an unfamiliar language.

