
/** @jsx React.DOM */
'use strict'

require('../stylesheets/main.css');

// require helper that uses es6 features
var helper = require('./helper');

var React = require('react')
var Hello = React.createClass({

    displayName: 'HelloReact',
    render: function () {

        var itemNodes = this.props.items.map(function (item) {
            return (
                <li>{item.name}</li>
            );
        });

        return (<div>
            <h3>{this.props.title}</h3>
            <ul onClick={this.props.onClick}>{itemNodes}</ul>
        </div>)
    }
});

var props = {
    name: 'Tricia'
};

var items = [
    {name: 'bread'},
    {name: 'milk'},
    {name: 'apples'},
    {name: 'peaches'},
    {name: helper('pears')}
];

function clickHandler() {
    console.log('clickHandler called');
}

React.render(
    <Hello {...props} title="Grocery List" items={items} onClick={clickHandler}/>,
    document.body
);
