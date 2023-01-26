## Rust Dev Log

Reverse chronological dev-log of my journey trying to learn Rust.

### 2023-01-22

* Rust is fun but really quite hard. Small refactors can take ages and require a lot of rethinking of ownership - in particular, adding a reference to an Object through a Hit was a pretty painful change.
* Got more objects rendering and have some better structure in place to implement support for shading/lighting.
* Val sent a great article on implementing linked lists in Rust that runs through a lot of Rust concepts: https://rust-unofficial.github.io/too-many-lists/

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
