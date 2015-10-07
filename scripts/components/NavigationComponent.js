var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var currentUser = Parse.User.current();
		var currentPage = Backbone.history.getFragment();

		var links = [
			<li key="home" className={currentPage === '' ? 'active' : ''}><a href="#">Home</a></li>,
			<li key="list" className={currentPage === 'list' ? 'active' : ''}><a href="#list">List</a></li>,
			<li key="books" className={currentPage === 'category/books' ? 'active' : ''}><a href="#category/books">Books</a></li>,
			<li key="electronics" className={currentPage === 'category/electronics' ? 'active' : ''}><a href="#category/electronics">Electronics</a></li>,
			<li key="clothing" className={currentPage === 'category/clothing' ? 'active' : ''}><a href="#category/clothing">Clothing</a></li>
		];

		if(currentUser) {
			links.push(<li key="add" className={currentPage === 'add' ? 'active' : ''}><a href="#add">Add Product</a></li>)
			links.push(<li key="logout"><a href="#logout" onClick={this.onLogout}>Logout</a></li>)
			links.push(<li key="username" className="displayedUser">{currentUser.getEmail()}</li>);
		}
		else {
			links.push(<li key="login" className={currentPage === 'login' ? 'active' : ''}><a href="#login">Login</a></li>);
			links.push(<li key="register" className={currentPage === 'register' ? 'active' : ''}><a href="#register">Register</a></li>);
		}


		return (
			<div className="nav-wrapper blue darken-4">
				<div className="brand-logo left">
					<a href="#">Pleasantly Parsed Products</a>
				</div>
				<ul id="nav-mobile" className="right">
					{links}
				</ul>
			</div>
		);
	},
	onLogout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('', {trigger: true});
	}
})
