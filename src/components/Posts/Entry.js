import React from 'react';

class Entry extends React.Component {

	render() {
		console.log(this.props.post)
		const { title, time, link, excerpt } = this.props.post;

		return(
			<div className="entry">
				<h3 className="post-title">
					<a href={ link }>{ title.rendered }</a>
				</h3>
				<p className="post-datetime">
					Posted on <time dateTime={ time }>{ time }</time>
				</p>
				{ excerpt ? <div className="article-entry" dangerouslySetInnerHTML={{ __html: excerpt.rendered }} /> : '' }
			</div>
		)
	}
}

Entry.defaultProps = {
  post: {}
};

Entry.propTypes = {
	post: React.PropTypes.object.isRequired
}

export default Entry;