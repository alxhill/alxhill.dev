## \[WIP\] Using Stable Diffusion to save $6400 on interior design

Inspired by [@levelsio](https://twitter.com/levelsio)'s [InteriorAI](https://interiorai.com/) project, I used Stable Diffusion to provide some inspiration for our newly purchased home.

Starting small, I generate a few images with simple captions - "stylish new york apartment living room" and so on. The results were reasonable, if not particularly inspired:

![Generated image with prompt 'new york apartment living room with stylish minimalist interior design'](/docs/assets/images/interior-design/plain-prompt.jpg)

_TODO: add another image example_

Next, I wanted to see if Stable Diffusion could give us better results by using real images of our apartment and using img2img to adjust the style. Text-to-image works by generating random noise and asking Stable Diffusion to remove the noise using information from a prompt. Image-to-image works the same way, but instead of starting with random noise, it starts with the existing image.