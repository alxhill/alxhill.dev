# Zizi.ai Model Training Dev Log

Working with Jake Elwes on The Zizi Project, I'm working to figure out how we can get some kind of realtime performance of zizi.

This page is a reverse chronological log of the process of figuring it out.

### Links & Resources

- Maximize OpenPose speed: https://github.com/CMU-Perceptual-Computing-Lab/openpose/blob/master/doc/06_maximizing_openpose_speed.md
- 2018 U-Net Paper for Pose to Image generation https://compvis.github.io/vunet/
- PyTorch 2D/3D U-Net Segmentation tutorial (2020): https://towardsdatascience.com/creating-and-training-a-u-net-model-with-pytorch-for-2d-3d-semantic-segmentation-model-building-6ab09d6a0862
- Train a conditional diffusion model from scratch: https://wandb.ai/capecape/train_sd/reports/How-To-Train-a-Conditional-Diffusion-Model-From-Scratch--VmlldzoyNzIzNTQ1
- MosaicML Composer list of speedup techniques: https://github.com/mosaicml/composer
- Impersonator++ - Motion Imitation Library? https://svip-lab.github.io/project/impersonator.html

## 2023-07-19

Going to try and find a better data source, and see how much more complex the model code is when trying to use the existing OpenPose / DensePose outputs to condition the model. In parallel, can investigate realtime OpenPose - [their repo](https://github.com/CMU-Perceptual-Computing-Lab/openpose/blob/master/doc/06_maximizing_openpose_speed.md) seemed to suggest that ~15fps should be achievable, which would be more than enough for our use case.

- Attempting to use run inference on the trained model seems to be _very_ slow - looks like it's doing 1000 steps by default. Thankfully, 50 produced reasonable results (but still didn't run fast on the M1)
- Disappointingly but somewhat unsurprisingly, neither fp16 nor torch.compile worked nicely on the M1. Will have to switch to CUDA to see what optimal perf can be.

## 2023-07-18

The existing zizi models use some combination of openpose, densepose, and vid2vid. This makes them pretty unsuitable for realtime performance, and misses out on a lot of the improvements that have come from the diffusion model world (in contrast to the GANs that vid2vid uses). Instead of trying to make the existing models faster performing, I wondered if it was worth just training a new model from scratch - given that Stable Diffusion has support for OpenPose / DensePose, it seemed likely we could build a similarly controlable model ourselves.

Trained a model based on the simple "train a diffusion model" [HuggingFace tutorial](https://huggingface.co/docs/diffusers/v0.18.2/en/tutorials/basic_training). As a first-attempt, I wanted to get a ballpark sense of what kind of results would be possible.

I trained this model on about 500 images of Me the Drag Queen from one of Jake's videos, first on my M1 MBP and then on Google Colab (free) and on 2x 3090 RTX GPUs rented through vast.ai. The end result was encouraging - the generated images looked pretty close to the original after 50 epochs:

![Model Improvements while training](/docs/assets/images/zizi/first-training.gif)

Sadly, of the three training runs the M1 MBP was by far the slowest - about 2x slower than the Google Colab T4 GPU and dramatically slower than the 2x 3090s.

The development process was pretty smooth - didn't have to make many code changes between environments. Only wrinkle was getting multi-gpu working - ran into the CUDA shared memory issue when trying to start from a notebook (even without running code in any cells), so converted it to a script and used `accelerate launch ...` - much easier. Not too much work bad for that level of perf improvements at least.

Only big surprise is the size of the model binary - about 450MB. The input data is only 65MB, so not clear what's causing that much bloat.