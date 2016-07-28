import React from 'react';

class Entry extends React.Component {
	constructor() {
		super();

		this.state = {
      media: {}
    }
	}

	componentDidMount() {
		const { featured_media } = this.props.post;
		this._getMedia(featured_media);
	}

	componentWillUnmount() {
		this.serverRequest.abort(); //always abort requests
	}

	/**
	 _getMedia
	 Get media
	 @params media { string } id of media
	*/
	_getMedia(media) {
		if (!media) return; //return on empty parameter

		//retrieve data
		const params = `/${ media }`,
			url = `https://robinjulius.com/blog/wp-json/wp/v2/media${ params }`;
		
		this.serverRequest = $.getJSON(url, function(data) {
		  this.setState({ media: data }); //set state with new data
		}.bind(this));
	}

	/**
	 _renderMedia
	 Output media
	 @params none {}
	*/
	_renderMedia() {
		if (Object.keys(this.state.media).length === 0) { return; } //return on empty object

		const { media_details, link, alt_text, caption } = this.state.media;

		return(
			<div className="post-image">
				<a href={ link }>
					<img src={ media_details.sizes.medium.source_url } alt={ alt_text ? alt_text : this.props.title } className="img-responsive" />
				</a>

				{/* .image-caption */}
				{ caption ? <div className="image-caption" dangerouslySetInnerHTML={{ __html: caption }} /> : '' }
			</div>
		)
	}

	render() {
		const { title, date, link, excerpt, featured_media } = this.props.post;

		return(
			<div className="entry clearfix">
				<h3 className="post-title">
					<a href={ link }>{ title.rendered }</a>
				</h3>

				{/* media present */}
				{ featured_media ? this._renderMedia() : '' }

				{/* render excerpt use dangerouslySetInnerHTML to be able to output HTML tags without converting to string */}
				{ excerpt ? <div className="article-entry" dangerouslySetInnerHTML={{ __html: excerpt.rendered }} /> : '' }

				<p className="post-datetime">
					Posted on <time dateTime={ date }>{ date.split('T')[0] }</time> {/* post date */}
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