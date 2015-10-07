'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
Parse.initialize("TxRn8SR0tZvKRYkBZSp8aieqgJjXbSJ16oX1zdR9", "F2L7RQFb3tXVgDmiqMslqXmVZKD4nfRsKCLYPf7w");

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var AddProductComponent = require('./components/AddProductComponent');
var LoginComponent = require('./components/LoginComponent');
var BooksComponent = require('./components/BooksComponent');
var ElectronicsComponent = require('./components/ElectronicsComponent');
var ClothingComponent = require('./components/ClothingComponent');
var RegisterComponent = require('./components/RegisterComponent');
var ProductListComponent = require('./components/ProductListComponent');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'add': 'add',
		'list': 'list',
		'category/books': 'books',
		'category/electronics': 'electronics',
		'category/clothing': 'clothing',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	add: function() {
		React.render(<AddProductComponent router={r} />, app);
	},
	list: function() {
		React.render(<ProductListComponent router={r} />, app);
	},
	books: function() {
		React.render(<BooksComponent router={r} />, app);
	},
	electronics: function() {
		React.render(<ElectronicsComponent router={r} />, app);
	},
	clothing: function() {
		React.render(<ClothingComponent router={r} />, app);
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);
