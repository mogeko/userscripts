---
"better-steam-rating": patch
---

Some details optimized:

- `packages/better-steam-rating/src/main.js:39:17`
  `Date.now()` is more readable and also avoids unnecessary instantiation of Date object.

- `packages/better-steam-rating/src/main.js:40:16`
  `packages/better-steam-rating/src/main.js:67:21`
  `packages/better-steam-rating/src/main.js:81:157`
  Add a non-fractional number to 10.
