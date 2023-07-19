# Zizi.ai Model Training Dev Log

Working with Jake Elwes on The Zizi Project, I'm working to figure out how we can get some kind of realtime performance of zizi.

This page is a reverse chronological log of the process of figuring it out.

### Links & Resources

## 2023-07-19

Going to try and find a better data source, and see how much more complex the model code is when trying to use the existing OpenPose / DensePose outputs to condition the model. In parallel, can investigate realtime OpenPose - [their repo]() seemed to suggest that ~15fps should be achievable, which would be more than enough for our use case.

## 2023-07-18

The existing zizi models use some combination of openpose, densepose, and vid2vid. This makes them pretty unsuitable for realtime performance, and misses out on a lot of the improvements that have come from the diffusion model world (in contrast to the GANs that vid2vid uses). Instead of trying to make the existing models faster performing, I wondered if it was worth just training a new model from scratch - given that Stable Diffusion has support for OpenPose / DensePose, it seemed likely we could build a similarly controlable model ourselves.

Trained a model based on the simple "train a diffusion model" [HuggingFace tutorial](https://huggingface.co/docs/diffusers/v0.18.2/en/tutorials/basic_training). As a first-attempt, I wanted to get a ballpark sense of what kind of results would be possible.

I trained this model on about 500 images of Me the Drag Queen from one of Jake's videos, first on my M1 MBP and then on Google Colab (free) and on 2x 3090 RTX GPUs rented through vast.ai. The end result was encouraging - the generated images looked pretty close to the original after 50 epochs:

![Model Improvements while training](/docs/assets/images/zizi/first-training.gif)

Sadly, of the three training runs the M1 MBP was by far the slowest - about 2x slower than the Google Colab T4 GPU and dramatically slower than the 2x 3090s.

The development process was pretty smooth - didn't have to make many code changes between environments. Only wrinkle was getting multi-gpu working - ran into the CUDA shared memory issue when trying to start from a notebook (even without running code in any cells), so converted it to a script and used `accelerate launch ...` - much easier. Not too much work bad for that level of perf improvements at least.
