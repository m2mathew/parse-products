var React = require('react');
var ProductModel = require('../models/ProductModel');

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
                <div className="row">
                    <table className="striped">
                        <thead>
                            <tr>
                                <th data-field="id">Name</th>
                                <th data-field="name">Description</th>
                                <th data-field="price">Price</th>
                                <th data-field="category">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content}
                        </tbody>
                    </table>
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
    }
});


// <li key="books" className={currentPage === 'category/books' ? 'active' : ''}><a href="#category/books">Books</a></li>,
            // <li key="electronics" className={currentPage === 'category/electronics' ? 'active' : ''}><a href="#category/electronics">Electronics</a></li>,
            // <li key="clothing" className={currentPage === 'category/clothing' ? 'active' : ''}><a href="#category/clothing">Clothing</a></li>
