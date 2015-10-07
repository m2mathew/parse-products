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
        .equalTo('category', 'Electronics')
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
                    <h1>Electronics</h1>
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
	}
});
