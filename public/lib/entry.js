var _ = require('lodash'),
    React = require('react');

_.each(['apples', 'oranges', 'pears'], function(e) {
   document.write(e + '<br/>');
});

React.render(
<h1>Hello, world!</h1>,
    document.body
);
