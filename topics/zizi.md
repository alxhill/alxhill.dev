# Zizi.ai Model Training Dev Log

Working with Jake Elwes on The Zizi Project, I'm working to figure out how we can get some kind of realtime performance of zizi.

This page is a reverse chronological log of the process of figuring it out.

### Links & Resources

- [OpenPose GitHub page on inference speed](https://github.com/CMU-Perceptual-Computing-Lab/openpose/blob/master/doc/06_maximizing_openpose_speed.md)
- [2018 U-Net Paper for Pose to Image generation](https://compvis.github.io/vunet/)
- [Weights & Biases Article on conditional diffusion training](https://wandb.ai/capecape/train_sd/reports/)
- [MosaicML Composer list of speedup techniques](https://github.com/mosaicml/composer)
- [Impersonator++ - Motion Imitation Library using GANs](https://svip-lab.github.io/project/impersonator.html)
- [GitHub of some papers for realtime pose estimation](https://github.com/cbsudux/awesome-human-pose-estimation#real-time-pose-estimation)
- [YouTube tutorial making a diffusion model from scratch (with simple conditioning)](https://www.youtube.com/watch?v=TBCRlnwJtZU)

## 2023-07-20

- Moving from the UNet2D class to the UNet2DConditional doesn't seem as simple as I'd hoped. The UNet2D class basically took in raw image tensors, but for the conditional version it seems to expect an already-embedded vector to condition on. Unclear if I _need_ to use an Autoencoder / VAE system like Stable Diffusion does, or if I can just ignore all that for now & find some simpler ways to condition the unet.
- One thought is that we don't really have to use openpose or densepose to condition the model, we can just as well do something super cheap like an edge-finding tool or segmentation model as a way to speed up the ETE process.

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
