Boilerplate Fossil project
==========================

This project is awesome.
To get started with this boilerplate layout, refer to the [get
started guide](./doc/get-started.md)

Requirements
------------

[Nodejs](http://nodejs.org/) and [ruby](https://www.ruby-lang.org/) are required
to build this project.

When Ruby is installed, install bundler gem as follow:

``` sh
$ gem install bundler
```

When node is installed, please install `grunt-cli`:

``` sh
$ npm install grunt-cli
```

**Note**: ruby and bundler are required to run [Bourbon](http://bourbon.io)
[sass](http://sass-lang.com/) library.

Install
-------

Once all dependancies installed, just run the following to install all
project dependencies.

``` sh
$ npm install
$ bundler install
```

Contribute
----------

Feel free to contribute to this project, simply fork it and send me a pull
request.

If anything is broken, open an issue.

### Develop

Default grunt task build development environment, starts a server, and a watcher
to compile files on change.

``` sh
$ grunt
```

### Run tests

``` sh
$ npm test
```

License
-------

Fossil is an open source project licensed under the MIT license. See
`LICENSE` file for more informations.
