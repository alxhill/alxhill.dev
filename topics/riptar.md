# Building a fast tar replacment in Rust

## Context

Background: using the standard `tar` tool can be frustrating - the arguments
are hard to remember and the performance is single-threaded and pretty slow by default.

At Palantir, I wrote a tool that built docker layers from files on-disk. Users had
fairly large conda environments (~4GB) that needed to be copied into a docker-compatible
tar.gz file at a specific path. Our initial implementation used `conda-pack` and took
10-15 minutes, disrupting what should be a fairly iterative flow. Doing the gzip in
parallel dropped the time down to about _6 seconds_ for the same 4GB conda pack.

Technically, this is a sliiightly different file format than .tar.gz because it's
made up of separately gzipped chunks, but docker and all modern tar utilities are
able to untar it with no complaints (the same cannot be said about parallel zips,
unfortunately). Sadly, unix tar doesn't support producing parallel gzips, and
`pigz`, the alternative tool, isn't widely known about or used.

Inspired by the excellent [ripgrep](https://github.com/BurntSushi/ripgrep), I figure
there's a gap in the market for a solid, parallel-first, performance-focussed version
of the standard tar tool, written in Rust (of course), with ease-of-use as an additional
benefit.

![xkcd tar comic](https://imgs.xkcd.com/comics/tar_2x.png)

## Design Decisions

Like ripgrep, riptar is not intended to be a drop-in replacement for tar itself. Instead,
it should be a spiritual successor with a more modern interface.

Generally, riptar should follow a "do what I mean" philosophy - it only needs a single input
(a compressed file), automatically figures out which argument is which (e.g if you pass in a
directory name & a compressed file, and the compressed file exists, it'll assume you want to
extract the file into the directory no matter the order of the arguments).

## Links & Resources

- [ripgrep](https://github.com/BurntSushi/ripgrep)
- [MiGZ repo](https://github.com/linkedin/migz)


## Dev Log

This is mostly a stream-of-consciousness log of my work on the tool for my own records and reflections.

### 2024-11-02

Prior to starting the log, I've got a simple (private) repo with the necessary dependencies/etc.
Quick thoughts so far:

* Getting started is alwas so much harder/slower than expected. I feel like LLMs would actually be perfect for this, if they were better at handling multi-file repos (my brief attempts with cursor suggested this wasn't a thing but didn't look too hard).
* As per usual, tried to bite off too much at first and design an abstraction rather than implementing specific features & developing abstractions as needed.
* Currently using the `tar` and `gzp` dependencies that I used before - however, I remember the `tar` library had a bug that produced invalid headers when converting between the different types (sadly didn't have bandwidth to contribute back - reminds me I should make an issue at some point). It would be good to replace both libraries with implementations directly in this repo as it evolves (plus, good learning opportunity).

