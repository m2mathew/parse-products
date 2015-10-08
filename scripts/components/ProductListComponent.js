var React = require('react');
var ProductModel = require('../models/ProductModel');
var FilterBoxComponent = require('./FilterBoxComponent');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            products: [],
            currentType: null
        };
    },
    componentWillMount: function() {
        var query = new Parse.Query(ProductModel);
        query
        .find().then(
            (product) => {
                this.setState({ products: product });
            },
            (err) => {
                console.log(err);
            }
        );
    },
    render: function() {
        var content = (<div> loading... </div>);
        if(this.state.products) {
            content = this.state.products.map(function(product) {
                return (
                <tr key={product.id}>
                    <td>{product.get('name')}</td>
                    <td>{product.get('description')}</td>
                    <td>${product.get('price')}.00</td>
                    <td>{product.get('category')}</td>
                </tr>
                );
            });
        }
        return (
            <div className="container">
                <div className="row">
                    <h1>Products</h1>
                </div>
                <div className="row">
                    <button onClick={this.showClothing} className="sort-buttons waves-effect waves-light btn blue darken-2">Clothing</button>
                    <button onClick={this.showElectronics} className="sort-buttons waves-effect waves-light btn blue darken-2">Electronics</button>
                    <button onClick={this.showBooks} className="sort-buttons waves-effect waves-light btn blue darken-2">Books</button>
                    <button className="sort-buttons waves-effect waves-light btn blue lighten-2">Show All</button>
                </div>
                <form className="row" onSubmit={this.filterBox}>
                    <FilterBoxComponent />
                </form>
                <div className="row">
                    <table className="striped">
                        <thead>
                            <tr>
                                <th data-field="id">Name</th>
                                <th data-field="name">Description</th>
                                <th data-field="price">Price</th>
                                <th data-field="category">Category</th>
                                <th data-field="dateCreated">Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                    <div className="row">
                        <button onClick={this.showCheapest} className="sort-buttons-bottom waves-effect waves-light btn blue-grey lighten-1">Show 10 Cheapest</button>
                        <button onClick={this.showNewest} className="sort-buttons-bottom waves-effect waves-light btn blue-grey lighten-1">Show 10 Newest</button>
                    </div>
                </div>
            </div>
        );
    },
    showClothing: function() {
        this.props.router.navigate('category/clothing', {trigger: true});
    },
    showElectronics: function() {
        this.props.router.navigate('category/electronics', {trigger: true});
    },
    showBooks: function() {
        this.props.router.navigate('category/books', {trigger: true});
    },
    showNewest: function() {
        this.props.router.navigate('newest', {trigger: true});
    },
    showCheapest: function() {
        this.props.router.navigate('cheapest', {trigger: true});
    },
    filterBox: function(e) {
        e.preventDefault();
        var searchInput = this.refs.inputText.getDOMNode().value;
        this.query.equalTo('name', searchInput);
    }
});
