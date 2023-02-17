## Rust Dev Log

Reverse chronological dev-log of my journey learning Rust in the hopes it's useful to someone (me) someday (when I inevitably forget how I solved something a week earlier).

### Resources

* [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html)
* [Too Many Lists](https://rust-unofficial.github.io/too-many-lists/)
* [Polymorphism in Rust](https://oswalt.dev/2021/06/polymorphism-in-rust/)

### 2023-02-15

Decided to try compiling the current ray tracer to WASM, to see both how hard it is and what the perf is like.
* Getting it setup was surprisingly simple - good tutorial here: [https://rustwasm.github.io/docs/book/game-of-life/implementing.html](https://rustwasm.github.io/docs/book/game-of-life/implementing.html).
* The development flow is poor - `wasm-pack` doesn't seem to integrate nicely with npm or webpack's dev server (although that may partly be because I'm using such old versions).
* Communicating between the two languages is interesting. You can directly access Rust's memory from JS, which seems like it implicitly breaks a lot of Rust's promises. Will see what best-practices look like after I've played around with it some more.
* It took a few hours to get the whole thing wired up and to break out OS-level dependencies (i.e the pixel canvas library for showing on-screen couldn't be compiled to wasm I believe), but once that was done it was surprisingly smooth sailing. I setup a simple `JsBuffer` implementing the same RenderTarget trait as before and read out a single pixel from it successfully - next step is to get it working fully in Canvas.

### 2023-02-06

I spent some time trying to solve the lifetime issue with the allocator/scene. Here's the outline of what I was trying to get working:

```rust
let scene_arena = Bump::new();
let scene = Scene::new(&scene_alloc);

let obj = scene_arena.alloc(Object:new(...));
// other allocations

scene.add_object(obj);

pixel_canvas.render(move |image| => {
    render_to(&scene, &mut CanvasTarget::new(image))
})
```

So the state of the world is:
* The main function creates a `scene_arena` and a `scene` that stores references to values created by the arena.
* The pixel_canvas library takes in a closure as its render function. The closure is `FnMut + 'static`.
* The material/light/objects are constructed directly in the main function, and moved into the arena's `alloc` method. This means they're owned by the arena, and the arena is owned by `main()`.
* The closure is a `move` closure, meaning it moves any referenced values to be owned by the closure.

This code fails to compile as `scene_arena` does not live long enough.

I spent a long time trying to fix this and tried a number of solutions that didn't work.
* Moving scene_arena into the closure isn't possible, as it's borrowed by Scene::new().
    * We can remove that borrow - it's only used in the constructor to create two `Vec`s within the arena, not strictly necessary.
    * But the error persists - unintuitively, I think `scene_arena.alloc()` counts as a borrow in some way and the error isn't quite descriptive enough.
* Moving the allocator into the Scene. 
    * This fails as the arena is created in the `new()` method so doesn't live long enough to be a part of the `Scene` object.
    * I thought this was due to the `Vec::new_in(&arena)` borrow, but removing that just changed the original "does not live long enough" error to move from the scene_arena to the scene itself. Sad.
* Make the Scene own the objects.

Scene was defined as:
```rust
    #[derive(Debug)]
    pub struct Scene<'w> {
        pub objects: Vec<&'w Object<'w>>,
        pub lights: Vec<&'w Light>,
        pub bg_color: RGBColor,
    }
```
So my first thought was that we could switch this to:
```rust
#[derive(Debug)]
pub struct Scene {
    pub objects: Vec<Object>,
    pub lights: Vec<Light>,
    pub bg_color: RGBColor,
}
```
Unfortunately, it's not that simple - the definition of Object is:
```rust
#[derive(Debug)]
pub struct Object<'w> {
    pub geometry: Geometry,
    pub material: &'w dyn Shadeable,
}
```
This means that `Vec<Object>` has the same problem as `Scene` - someone needs to own the reference to the material. Generics can't help us here, as `Vec<Object<T>>` can have different values for `T`. And Rust doesn't allow `pub material: dyn Shadeable` as dynamic types can't be sized.

Ultimately, I switched back to using `Arc<dyn Shadeable>` inside the object instead of a reference, and then was finally able to move the scene into the closure and run the render function on it. This also made me realise that the arena wasn't doing anything, as at the end of the day it was owned entirely by the `main()` function. So, I removed that, switched to constructing Arc's for the materials and making Objects that get moved directly into the Scene.

Other solutions would be making Scene own the materials and providing a reference or borrow of a material to an object when it gets created. Still not sure how this would fit with generics though. Alternatively, could switch to using an enum implementing Shadeable for materials instead of `dyn Shadeable`, which is less efficient but avoids the `Sized` issue with dynamic traits.

### 2023-02-05

* Hardest part of Rust has to be refactoring. Without a full understanding of lifetimes/etc, it's really hard to say if a structural change will make sense and pass the borrow checker. For example, it was fairly easy to move the code to using references and an arena allocator, but trying to move that allocator into the Scene object didn't work - I'm still trying to wrap my head around why and what a first-class Rust approach would be.
* Shiny plus shadows - starting to look like a proper shiny-sphere ray tracer demo image.
 
![four shiny spheres with shadows](/docs/assets/images/rust/output-4.png)

### 2023-02-04

* Switched to arena allocation - mostly easier than expected, and basically removes all need for Arc/Box from the structs (instead, references with explicit lifetimes). However, did run into an interesting problem with the library used to display it on screen - it uses a function passed in to render, which means it has a lifetime longer than the main function. Disabling on-screen display for now, keen to figure out how to resolve this "properly".

### 2023-02-02

* Some more intermediate progress that I haven't written about:

![three spheres with materials](/docs/assets/images/rust/output-3.png)

* Given the memory challenges I think using an arena to allocate objects might actually make most sense here. Effectively, all objects, lights, viewplanes, materials, etc are in the arena (as we know they have to live for the whole lifetime of the tracing), and rays, hits, and so on can then have precise lifetimes / ownership as the raytracing is running. This should mean I can avoid the `Arc<>` wrappers on Materials and Objects just to pass around references. Will experiment once I've added some more fun features.
* Turned on full optimizations, saw frame-time drop from 500+ms down to ~80ms. So, I can put off learning async / threads for a little longer at least :)

### 2023-01-22

* Rust is fun but really quite hard. Small refactors can take ages and require a lot of rethinking of ownership - in particular, adding a reference to an Object through a Hit meant I had to change how I stored objects everywhere (and also, because geometry structs actually generate the hit I have to do some gross stuff with Option / unwrap - a refactor for a future day).
* Got more objects rendering and have some better structure in place to implement support for shading/lighting.
* Val sent a great article on implementing linked lists in Rust that runs through a lot of Rust concepts: [https://rust-unofficial.github.io/too-many-lists/](https://rust-unofficial.github.io/too-many-lists/)

![two spheres and a plane](/docs/assets/images/rust/output-2.png)

### 2023-01-17

* Had to do some restructuring to split out the ray casting from the view plane to add support for anti-aliasing and different camera types. Feels very hard to name things, in a "is this even a sensible thing to abstract?" kind of way.

### 2023-01-16

* Got the old raytracer working with some extra linking flags - still works pretty well, but surprisingly hard to convert it directly to Rust. Writing object-oriented code in Rust means spending lots of time fighting with the compiler, will be interesting to see what a more natural structure would feel like as I gain more experience.
* Spent a long time messing around with Rc / borrows / lifetime markers to share a single struct object. In the end, the simplest solution was to skip all that and store a full copy - learnt a lot though.
* Was hoping to get live-output showing up as the ray tracer is running. This turned out to be really quite hard, and probably requiring some of the async/threading primitives. For now, got a simple "show on screen" vs "save to disk" thing working okay.
* We now have visible output:

![a red circle](/docs/assets/images/rust/output-1.png)

### 2023-01-14

* Tried to build my old C++ raytracer and ran into SFML linking issues. My old scripts didn't work because the default download of SFML isn't built for aarm64. Great way to spend a Sunday morning.
* Got rustup & rustfmt setup. All languages should have default formatters.

### 2023-01-13

* Ray tracer is progressing slowly but nicely. Rust traits and type system seem pretty great - being able to use traits to implement core language features (e.g Drop, Deref, Add etc) seems like a powerful construct. Started dealing with some amount of memory handling - storing a list of arbitrary - but has been pretty simple so far. Hard to tell if I'm doing things in a "Rust-native" way, but I figure that'll come with time.
* Not sure how to do polymorphism yet - `Vec<Box<dyn Hittable>>` seems to work, but also feels like something's off with it. Will keep playing around for now.
* Asked ChatGPT to convert the operator overloads from my C++ code into Rust trait implementations and it worked near-flawlessly. We are living in the future.
* Started using GitHub Copilot and it suggested a near-perfect implementation of the Sphere `hit` function: 🤯

![Copilot generated hit function](/docs/assets/images/rust/hit-func.png)

### 2022-04-01

* Started working on the ray tracer while flying back to NY.
* Rust using traits, not classes/inheritance, is surprisingly similar to Go instead of C++. The generic system seems very powerful, with the expected mental overhead that causes. Overall seems nice so far.
* Tried copying over the base C++ from the book's source (which sadly the website for is dead). Most of the core data classes (e.g Point3D, Ray) convert directly into a Struct + Trait pattern quite nicely.
* Using ChatGPT as a learning-assistant started off great - gave me some super useful, in-context code samples (generating a basic Vector2D struct), and helping me add relevant traits/methods. Asking for explanations also seemed to give good results. Unfortunately, it quickly entered hallucination territory - asking "Does Rust support method overloading?" gave this response: 
![ChatGPT Q&A](/docs/assets/images/rust/chatgpt.png)
This is false - Rust does not support method overloading at all ([link](https://internals.rust-lang.org/t/justification-for-rust-not-supporting-function-overloading-directly/7012)).
* Haven't done any meaningful memory allocation yet - I'm sure the fun will begin soon with the borrow checker.

### 2022-??-??

_Adding some writeups here a few days after actually trying to use Rust_

* Started with CLion + the Rust plugin.
* Had some very interesting conversations with ChatGPT, useful for asking for example "starter code", as well as some more conceptual questions. Hard to know if it's correct (and asking specific questions about e.g config/obscure errors was definitely not giving correct answers), but I did validate a few things.
* Decided a Ray Tracer would be a fun starter project, complex enough to actually learn the language but interesting enough to see it through. Might be a little challenging, but the Ray Tracing from the Ground Up book includes lots of C++ that shouldn't be toooo hard to convert directly to Rust. Plus, I have the C++ ray tracer made at university still floating around somewhere...
