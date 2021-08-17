# test-todomvc-using-keyboard
[![ci status][ci image]][ci url] [![badges status][badges image]][badges url] [![renovate-app badge][renovate-badge]][renovate-app]
![cypress version](https://img.shields.io/badge/cypress-8.3.0-brightgreen) ![cypress-real-events version](https://img.shields.io/badge/cypress--real--events-1.5.0-brightgreen)

Try the app at [https://glebbahmutov.com/test-todomvc-using-keyboard/](https://glebbahmutov.com/test-todomvc-using-keyboard/)

Let's test if TodoMVC application is accessible and can be used with keyboard only.

![The running tests](./images/keyboard-only.gif)

See the test in [cypress/integration/spec.js](./cypress/integration/spec.js)

Testing the site [dylanb.github.io/todomvc](https://dylanb.github.io/todomvc/) with the source code available in [dylanb/todomvc](https://github.com/dylanb/todomvc) repo and brought into [public](./public) folder to fix the editing of items using the keyboard.

[ci image]: https://github.com/bahmutov/test-todomvc-using-keyboard/workflows/ci/badge.svg?branch=main
[ci url]: https://github.com/bahmutov/test-todomvc-using-keyboard/actions
[badges image]: https://github.com/bahmutov/test-todomvc-using-keyboard/workflows/badges/badge.svg?branch=main
[badges url]: https://github.com/bahmutov/test-todomvc-using-keyboard/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
