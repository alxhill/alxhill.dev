## AI / ML Dev Log

Roughly reverse chronological dev-log of my journey trying to learn modern AI / ML topics.

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

