# [Webpack](http://webpack.github.io/) Playground

A project to learn and experiment with the [webpack]((http://webpack.github.io/) module bundler.

### Development

1. Start local webpack server
    ```bash
    $ webpack-dev-server --progress --colors --debug
    ```

    > This serves all changes out of memory.  Remember to run `webpack` by itself to persist changes

2. Open <http://localhost:8080/webpack-dev-server/bundle>
3. Make code changes.  Changes will live reload.
4. Persist changes by running
    ```bash
    $ webpack
    ```

### Directory and File Details

`public/` - client side files
`public/lib/index.js` - webpacks entry point

---

`react-app.js` - react application example

demonstrates the usage of

* jsx loader
* css loader
* es6 support

---

`angular-app.js` - angular application example

demonstrates the usage of

* ng-cache loader for views and partials

---