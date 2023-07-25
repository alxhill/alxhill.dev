# Zizi.ai Model Training Dev Log

Working with Jake Elwes on The Zizi Project, we're trying to build a realtime performance of zizi.

### Links & Resources

- [OpenPose GitHub page on inference speed](https://github.com/CMU-Perceptual-Computing-Lab/openpose/blob/master/doc/06_maximizing_openpose_speed.md)
- [2018 U-Net Paper for Pose to Image generation](https://compvis.github.io/vunet/)
- [Weights & Biases Article on conditional diffusion training](https://wandb.ai/capecape/train_sd/reports/)
- [MosaicML Composer list of speedup techniques](https://github.com/mosaicml/composer)
- [Impersonator++ - Motion Imitation Library using GANs](https://svip-lab.github.io/project/impersonator.html)
- [GitHub of some papers for realtime pose estimation](https://github.com/cbsudux/awesome-human-pose-estimation#real-time-pose-estimation)
- [YouTube tutorial making a diffusion model from scratch (with simple conditioning)](https://www.youtube.com/watch?v=TBCRlnwJtZU)
- [Conditional MNIST from scratch](https://github.com/TeaPearce/Conditional_Diffusion_MNIST)
- [In-depth explanation of VAE / Diffusion Model Maths](https://towardsdatascience.com/generating-images-using-vaes-gans-and-diffusion-models-48963ddeb2b2)
- [❗️ Annotated PyTorch Paper Explanations](https://nn.labml.ai/)

## 2023-07-25

- Midnight breakthrough! Trained 5 epochs with pose conditioning and it's working surprisingly well. Here's an original image and the produced output using only the pose:

![raw_img](zizi/pose-v1/raw.png)
![sample_1](zizi/pose-v1/sample-1.png)
![sample_2](zizi/pose-v1/sample-2.png)

This would need much more training & much much higher resolution to be actually useful, but as a POC I'm pretty happy! Worth noting that this is also still all in pixel space, so we haven't done any encoding/decoding into a lower res latent space which would make higher resolution images possible.

## 2023-07-24

- Still struggling with creating a conditional model - using diffusers consistently OOMs when I add any value for the "encoder hidden states" value & creating a VAE also oomd trying to encode a single image. I'm sure I'm doing lots wrong but so hard to know what, and none of the guides so far are at the right level (eather too basic or too complex/abstract).
- Resolved! There were a few things going wrong, as expected. First, the model was huge due to a cross_attention_dim param that defaulted to 1280. Secondly, PyTorch seems to have a weird bug that consistently OOMed on CPUs but not on CUDA (in spite of having much less CUDA memory). Finally, we figured out that the `encoder_hid_dim` param on the UNet2DConditional class allowed us to tell the model what the third param needed to be. I don't expect this to provide particularly good results (afact the `encoder_hidden_states` is for providing latents, not conditions - but this can be a fun little test right? 😇)

## 2023-07-23

- Did some brief inference perf testing & saw that the MPS backend can generate the meth/zizi images pretty quickly. torch.compile ran slower on my M1 mac but probably works much better on CUDA. Needed to pass in some weird `backend="aot_eager"` param to `torch.compile` to get it to work. [Link](https://github.com/pytorch/pytorch/pull/96980/files)

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
