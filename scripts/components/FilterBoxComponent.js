var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="input-field col s6 right filter-icon">
                <i className="material-icons prefix">&#xE8B6;</i>
                <input placeholder="Search" id="filterBox" type="text" ref="inputText"></input>
            </div>
        );
    }
});
