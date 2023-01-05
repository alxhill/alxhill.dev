## Rust Dev Log

Reverse chronological dev-log of my journey trying to learn Rust.

### 2022-04-01

* Started working on the ray tracer while flying back to NY.
* Rust using traits, not classes/inheritance, is surprisingly similar to Go instead of C++. The generic system seems very powerful, with the expected mental overhead that causes. Overall seems nice so far.
* Tried copying over the base C++ from the book's source (which sadly the website for is dead). Most of the core data classes (e.g Point3D, Ray) convert directly into a Struct + Trait pattern quite nicely.
* Using ChatGPT as a learning-assistant started off great - gave me some super useful, in-context code samples (generating a basic Vector2D struct), and helping me add relevant traits/methods. Asking for explanations also seemed to give good results. Unfortunately, it quickly entered hallucination territory - asking "Does Rust support method overloading?" gave this response: 
![ChatGPT Q&A](/docs/assets/images/rust/chatgpt.png)
This is completely false - Rust does not support method overloading at all: https://internals.rust-lang.org/t/justification-for-rust-not-supporting-function-overloading-directly/7012.
* Haven't done any meaningful memory allocation yet - I'm sure the fun will begin soon with the borrow checker.

### 2022-??-??

_Adding some writeups here a few days after actually trying to use Rust_

* Started with CLion + the Rust plugin.
* Had some very interesting conversations with ChatGPT, useful for asking for example "starter code", as well as some more conceptual questions. Hard to know if it's correct (and asking specific questions about e.g config/obscure errors was definitely not giving correct answers), but I did validate a few things.
* Decided a Ray Tracer would be a fun starter project, complex enough to actually learn the language but interesting enough to see it through. Might be a little challenging, but the Ray Tracing from the Ground Up book includes lots of C++ that shouldn't be toooo hard to convert directly to Rust. Plus, I have the C++ ray tracer made at university still floating around somewhere...
