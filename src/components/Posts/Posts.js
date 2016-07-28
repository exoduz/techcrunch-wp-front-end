import React from 'react';

/**
 React components
*/
import Entry from './Entry';

class Posts extends React.Component {

	/**
	 _renderEntry
	 Output entry
	 @params entry { object } entry data
	*/
	_renderEntry(entry) {
		const { id } = entry;

		return (
			<Entry
				key={ id }
				entry={ entry }/>
		)
	}

	render() {
		const { posts } = this.props;

		return (
			<section id="posts">
				{ posts.map((entry) => this._renderEntry(entry)) }
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