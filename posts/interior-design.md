## \[WIP\] Using Stable Diffusion to save $6400 on interior design

Inspired by [@levelsio](https://twitter.com/levelsio)'s [InteriorAI](https://interiorai.com/) project, I used Stable Diffusion to provide some inspiration for our newly purchased home.

_TODO: brief intro on getting quotes from designers_

Starting small, I generated a few images with simple captions - "stylish new york apartment living room" and so on. The results were reasonable, if not particularly inspired:

![Generated image with prompt 'new york apartment living room with stylish minimalist interior design'](/docs/assets/images/interior-design/plain-prompt.jpg)

_TODO: add another image example_

Next, I wanted to see if Stable Diffusion could give us better results with images of our apartment, using img2img to adjust the style. 

Text-to-image works by generating random noise and asking Stable Diffusion to remove the noise using information from a prompt. When running the pipeline, the chosen number of steps determines how many steps the noise-removal should do to recreate the original image.

Image-to-image works similarly, but instead of starting with random noise, it starts with the existing image. Alongside the step count, you can also provide a "strength" which determines how noisy Stable Diffusion should consider the image to be. It then "skips" to a later step and attempts the noise removal process using your starting image. So if you had 50 steps and a strength of 0.5, the algorithm will do the last 25 steps of its process to generate a new image. So a strength of 1 destroys the whole image, while a strength of 0 leaves it unchanged.

| ![Original](/docs/assets/images/interior-design/original.png) | ![Strength 0.4](/docs/assets/images/interior-design/living-bohemian-strength-0-35.png) | ![Strength 0.7](/docs/assets/images/interior-design/living-bohemian-strength-0-7.png) |
| --- | --- | --- |
| Original | Strength 0.4 | Strength 0.7 |

In the context of interior design, a higher strength value sounds desirable - you want the algorithm to paint  walls, move furniture, etc. But there's a tradeoff, because Stable Diffusion doesn't know anything about the structure of your room. It only understands pixels, and strength parameter is (roughly) telling it how many of those pixels it can change. So it's a matter of trial and error to find values that preserves the building's structure, but still changes the design enough to be interesting.

_TODO: examples of rooms with different prompts_

