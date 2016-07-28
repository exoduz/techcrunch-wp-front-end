import React from 'react';

class Entry extends React.Component {
	render() {
		console.log(this.props.post)
		const { title, date, link, excerpt } = this.props.post;

		return(
			<div className="entry">
				<h3 className="post-title">
					<a href={ link }>{ title.rendered }</a>
				</h3>
				{ excerpt ? <div className="article-entry" dangerouslySetInnerHTML={{ __html: excerpt.rendered }} /> : '' }
				
				<p className="post-datetime">
					Posted on <time dateTime={ date }>{ date.split('T')[0] }</time>
				</p>
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