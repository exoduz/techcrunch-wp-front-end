import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="nav">
						<a href="/" className="logo-link">
							<img src="assets/img/logos/logo.svg" alt="TechCrunch Logo" className="logo" />
						</a>

						<div className="tag-line">
							<p>Here's to another coding challenge. <i className="fa fa-code"></i></p>
						</div>{ /* .tag-line */}
					</div>{/* .nav */}
				</div>{/* .container */}
			</header>
		)
	}
}

export default Header;