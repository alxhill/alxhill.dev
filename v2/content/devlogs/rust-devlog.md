---
title: Rust & Ray Tracing Devlog
---

Reverse chronological dev-log of my journey learning Rust in the hopes it's useful to someone (me) someday (when I inevitably forget how I solved something a week earlier).

### Resources

* [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html)
* [Too Many Lists](https://rust-unofficial.github.io/too-many-lists/)
* [Polymorphism in Rust](https://oswalt.dev/2021/06/polymorphism-in-rust/)

### 2023-02-17

Rendering to Canvas in JS is now working in the browser through WASM:

![shiny spheres in a browser](/docs/assets/images/rust/output-chrome.png)

Overall this was pretty smooth sailing, barring some small self-inflicted bugs it's pretty easy to interoperate between the two languages (it's particularly nice that JS's ImageData supports memory buffers natively, meaning the whole thing is zero-copy). The part that's surprised me most is this:

```rust
pub fn pixels(&self) -> *const Rgba {
    // buffer is a Vec<Rgba>
    self.target.buffer.as_ptr()
}
```

This directly returns a pointer to the underlying `Vec` memory, which seemed like it should be unsafe/discouraged given Rust's focus on memory safety. However, it's _dereferencing_ the pointer that's the unsafe action - sending it around is fine so long as it doesn't get used. Then, when it's sent to JS, it gets used like this:

```javascript
let pixels_array = new Uint8ClampedArray(memory.buffer, scene.pixels(), scene.width() * scene.height() * 4);
```

So JavaScript effectively has full access to Rust's memory, with the data sent between the two languages via raw pointers. I'm sure there are also typed ways to do this, so will investigate that in future.

When I first checked performance, it was running at about ~800ms per frame compared to ~140ms per frame when running natively. Surprisingly, this was mostly due to the console being open - when I closed it, the frame-time dropped to ~260ms per frame (see screenshot).
