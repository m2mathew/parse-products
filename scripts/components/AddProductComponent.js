var React = require('react');
var Backbone
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red red-text">{this.state.error}</p>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onAddProduct}>
						<h1>Add Product</h1>
						{errorElement}
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="name" className="validate" />
								<label>Product Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea id="textarea1" className="materialize-textarea" ref="description"></textarea>
								<label>Description</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input type="number" className="validate" ref="price" />
								<label>Price</label>
							</div>
							<div className="input-field col s6">
								<select className="browser-default" ref="type">
									<option defaultValue="" disabled selected>Category</option>
									<option defaultValue="books">Books</option>
									<option defaultValue="electronics">Electronics</option>
									<option defaultValue="clothing">Clothing</option>
								</select>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn blue darken-3">Add Product</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onAddProduct: function(e) {
		e.preventDefault();

		var newProduct = new ProductModel({
			name: this.refs.name.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			price: this.refs.price.getDOMNode().value,
			category: this.refs.type.getDOMNode().value
		});
		newProduct.save();
		this.props.router.navigate('list', {trigger: true});
	}
});
