# test-todomvc-using-keyboard
[![ci status][ci image]][ci url] [![badges status][badges image]][badges url] [![renovate-app badge][renovate-badge]][renovate-app]
![cypress version](https://img.shields.io/badge/cypress-9.3.0-brightgreen) ![cypress-real-events version](https://img.shields.io/badge/cypress--real--events-1.5.0-brightgreen) [![CircleCI](https://circleci.com/gh/bahmutov/test-todomvc-using-keyboard/tree/main.svg?style=svg)](https://circleci.com/gh/bahmutov/test-todomvc-using-keyboard/tree/main)

Read the blog post [Testing A Web App Using The Keyboard Only](https://glebbahmutov.com/blog/test-app-using-the-keyboard/).

Try the app at [https://glebbahmutov.com/test-todomvc-using-keyboard/](https://glebbahmutov.com/test-todomvc-using-keyboard/)

Let's test if TodoMVC application is accessible and can be used with keyboard only.

![The running tests](./images/keyboard-only.gif)

See the test in [cypress/integration/spec.js](./cypress/integration/spec.js)

Testing the site [dylanb.github.io/todomvc](https://dylanb.github.io/todomvc/) with the source code available in [dylanb/todomvc](https://github.com/dylanb/todomvc) repo and brought into [public](./public) folder to fix the editing of items using the keyboard.

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2021

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/test-todomvc-using-keyboard/issues) on Github

## MIT License

Copyright (c) 2021 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[ci image]: https://github.com/bahmutov/test-todomvc-using-keyboard/workflows/ci/badge.svg?branch=main
[ci url]: https://github.com/bahmutov/test-todomvc-using-keyboard/actions
[badges image]: https://github.com/bahmutov/test-todomvc-using-keyboard/workflows/badges/badge.svg?branch=main
[badges url]: https://github.com/bahmutov/test-todomvc-using-keyboard/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
