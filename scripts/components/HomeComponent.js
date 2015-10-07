var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<h1>Home</h1>
				</div>
                <div className="row">
                    <div className="center"><img src="https://d13yacurqjgara.cloudfront.net/users/5276/screenshots/1962034/casual_friday_icon_kendrickkidd_1x.jpg"/>
                    </div>
                    <div className="center">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/166442/screenshots/656063/dribbble-book.jpg"/>
                    </div>
                    <div className="center">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/257123/screenshots/1267584/aapple-ii_1x.jpg"/>
                    </div>
                </div>
			</div>
		);
	}
});
