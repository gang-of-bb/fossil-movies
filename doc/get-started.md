Get started
===========

Overview
--------

This project uses npm, gruntjs and bower for dependency management, please refer
to the project doc if you enconter any issue.

Services are defined into the `src/services.js` file, `src/config.js` file is
the requirejs configuration file.
`src/kernel.js` is the boot sequence of this project, defining and starting the
application.

Services
--------

A service is a single scoped module, configured and ready to use. Services are
injected through requirejs and should be namespaced with `services/`.

Default services demonstrates how to declare a service and how to declare
services depending on other services.

``` javascript
define('services/router', ['fossil'], function (Fossil) {
    return new Fossil.Services.Routing();
});
define('services/template', [
    'fossil-handlebars',
    'services/router'
], function (Fossil, router) {
    return new Fossil.Services.Handlebars({expose: true});
});
```

Grunt tasks
-----------

To build project for production or dev environment simply run the dedicated
task:

``` sh
$ grunt release:dev
$ grunt release:production
```

It is possible to define new environments.

Refer to `Gruntfile.js` for further understanding.
