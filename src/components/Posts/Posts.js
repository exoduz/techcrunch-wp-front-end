import React from 'react';

/**
 React components
*/
import Entry from './Entry';

class Posts extends React.Component {

	componentWillUnmount() {
		this.serverRequest.abort(); //always abort requests
	}

	/**
	 _renderEntry
	 Output entry
	 @params entry { object } entry data
	*/
	_renderEntry(data) {
		const { id } = data;

		return (
			<Entry
				key={ id }
				post={ data }/>
		)
	}

	render() {
		const { posts } = this.props;

		return (
			<section id="posts">
				<div className="container">
					{ posts.map((data) => this._renderEntry(data)) }
				</div>{/* .container */}
			</section>
		)
	}
}

Posts.defaultProps = {
  posts: []
};

Posts.propTypes = {
	posts: React.PropTypes.array.isRequired
}

export default Posts;