Hello,

I've came across a weird behavior that I try to describe alongside the sample code I put in a dedicated repository.

The issue happens using Tailwind (latest version) with Next.js (latest version) only when using the `next export` version of the build with a **cold run** (no cache involved).

I have a simple component that reads and print its width using `getComputedStyle`. 
That component is used in this chunk in the main App:

```html
<div className='flex flex-col md:flex-row'>
  <div className='flex-1'>
    <LogWidth />
  </div>
  <div className='flex-1'>
    <LogWidth />
  </div>
</div>
```

Running `next dev` LogWidth shows the correct width, both components show half of the page width.
But running `next start` after exporting the static version with `next build && next export`, the width value is wrong and correspond to the full page width in Chrome, and the value is set to `auto` in Safari/Firefox.

Using the same component and application but replacing the Tailwind class:

```html
<div className='wrapper'>
  <div className='child'>
    <LogWidth />
  </div>
  <div className='child'>
    <LogWidth />
  </div>
</div>
```

 using with a pure equivalent CSS code:

```css
.wrapper{
  display: flex;
  flex-direction: column;
}
.child{
  flex: 1;
}

@media (min-width: 768px){
  .wrapper{
    flex-direction: row;
  }
}
```

LogWidth component shows the correct value both in the `dev` and `export` version and in every browser vendors.

I've set up a [sample app repository](https://github.com/abusedmedia/nextjs-tailwind-flex-issue) to show the above behaviour. Just clone it, run `npm run dev` to see the right values, `npm run export` and `npm start` to see the wrong one.
