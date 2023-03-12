# WebGPU Dev Log

Reverse chronological dev-log of my journey learning/using WebGPU.

### Resources

* [WebGPU Explainer](https://gpuweb.github.io/gpuweb/explainer/)
* [alain.xyz WebGPU Intro Blog](https://alain.xyz/blog/raw-webgpu)
* [Rust WebGPU Library](https://github.com/gfx-rs/wgpu)
* [WGSL vs GLSL](https://dmnsgn.me/blog/from-glsl-to-wgsl-the-future-of-shaders-on-the-web/)
* [WebGPU Overview from some guy](https://surma.dev/things/webgpu/) - looks pretty solid

### 2023-03-07

* Got a basic copy-paste matmul compute shader working.
* Found some nice demos with of WebGPU compute and render pipelines with sample code and shaders at [here](https://webgpu.github.io/webgpu-samples/)
* And found a great resource in the form of a ray tracer in GLSL / Vulkan and a tutorial to go along with it [here](https://www.gsn-lib.org/docs/nodes/raytracing.php). This seems like a great starting point of something to convert to WGSL without having to figure everything out from scratch, and already handles some of the more complex RT features my Rust ray tracer supports.

### 2023-02-22

* Lets learn WebGPU! GPUs are cool and proper compute from the web is also cool. So lets see if we can build something interesting here - either, port the Ray Tracer to run on WebGPU, or write a tensor library/something ML related and see if we can run any interesting models in the browser.
* Have not written real JavaScript/TypeScript since before await/async. So there's a learning curve for both of those then.
