## \[WIP\] Using Stable Diffusion to save $6400 on interior design

Inspired by [@levelsio](https://twitter.com/levelsio)'s [InteriorAI](https://interiorai.com/) project, I used Stable Diffusion to provide some inspiration for our newly purchased home.

_TODO: brief intro on getting quotes from designers_

Starting small, I generated a few images with simple captions - "stylish new york apartment living room" and so on. The results were reasonable, if not particularly exciting.

I wrote a quick function to generate images in multiple styles based on a prompt - substituting in the style in 'new york apartment living room with {style} interior design'. Here are some of the more interesting outputs:

| ![Generated 'minimalist' interior design image](/docs/assets/images/interior-design/plain-prompt.jpg) | ![Generated 'hipster', 'plants' interior design image](/docs/assets/images/interior-design/plain-prompt-2.png) | ![Generated 'zen', 'subtle color' interior design image](/docs/assets/images/interior-design/plain-prompt-3.jpg) |
| :---: | :---: | :---: |
| "minimalist" | "plants", "hipster" | "zen", "subtle color" |

Next, I wanted to see if Stable Diffusion could come up with designs based off existing images of our apartment, using the image-to-image pipeline.

The text-to-image process starts by generating random noise. The noise is iteratively 'removed' over a number of individual steps, creating the final image based on the prompt.

Image-to-image works similarly, but instead of starting with random noise, it starts with the existing image. Alongside the step count, you can also provide a "strength" which determines how much 'noise' Stable Diffusion can remove from the image. This means it can "skip" to a later step and attempt the noise removal process from there, with the input image as its starting point. For example, if you have a 50-step process and a strength of 0.5, the algorithm will only apply the last 25 steps of the process to the starting image. The higher the strength, the more changes Stable Diffusion can make to the input.

| ![Original](/docs/assets/images/interior-design/original.png) | ![Strength 0.4](/docs/assets/images/interior-design/living-bohemian-strength-0-35.png) | ![Strength 0.7](/docs/assets/images/interior-design/living-bohemian-strength-0-7.png) |
| :---: | :---: | :---: |
| Original | Strength 0.4 | Strength 0.7 |

In the context of interior design, a higher strength value sounds desirable - you want the algorithm to paint  walls, move furniture, etc. But there's a tradeoff, because Stable Diffusion doesn't know anything about the structure of your room. It only understands pixels, and strength parameter is (roughly) telling it how many of those pixels it can change. So it's a matter of trial and error to find values that preserves the building's structure, but still changes the design enough to be interesting.

You can see in the above comparison that 0.4 only really changes the carpet and sofa texture, while 0.7 has replaced the window with a new room. As nice as that would be, I suspect our co-op board wouldn't approve. After some time tweaking the parameters I ended up with some usable, if not always realistic results.

_TODO: examples of each room with different prompts_

These ultimately didn't end up as interesting as I'd hoped - the large, white couch was a mainstay in almost every design, and even adding "with colorful sofa" to the prompt didn't change it:

| ![colourful sofa](/docs/assets/images/interior-design/colorful-sofa.png) |
| --- |

When Stable Diffusion 2.0 was released, it came with a model that had been conditioned on both prompts and depth. Depth conditioning means the _structure_ of the image stays the same (so walls won't move) without having to keep any of the 