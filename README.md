# Playwright WebWorker Bug

Intercepting network requests does not work if the request is made from a web worker.

This is a minimal setup to show the issue at hand.

---

## Steps to reproduce the issue:

- checkout repo
- serve files in website folder
  - `cd website`
  - `python3 -m http.server`
- start playwright test
  - `cd playwright`
  - `npm i`
  - `node test.js`

The browser will open and you should be able to see the text "you didn't catch me!". This means that the request was not intercepted by playwright. If you open the `website/main.js`, disable the worker and enable the fetch request that is commented out, it will be intercepted correctly by playwright.
