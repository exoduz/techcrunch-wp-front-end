import React from 'react';
import ReactDOM from 'react-dom';

/**
 3rd party scripts
*/
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
require('../js/app.js');

/**
 CSS
*/
require('../css/normalize.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../node_modules/font-awesome/css/font-awesome.css');
require('../css/main.css');
require('../css/print.css');

/**
 React helpers
*/


/**
 React components
*/
import Header from './Layout/Header';
import Posts from './Posts/Posts';
import Footer from './Layout/Footer';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
      posts: []
    }
	}

	componentDidMount() {
		this._getPosts('techcrunch');
	}

	componentWillUnmount() {
		this.serverRequest.abort(); //always abort requests
	}

	/**
	 _getPosts
	 Get posts
	 @params category { string } category to retrieve
	*/
	_getPosts(category) {
		//retrieve data
		const params = `?filter[category_name]=${ category }` || '',
			url = `https://robinjulius.com/blog/wp-json/wp/v2/posts${ params }`;
		
		this.serverRequest = $.getJSON(url, function(data) {
		  this.setState({ posts: data }); //set state with new data
		}.bind(this));
	}

	render() {
		return (
			<div>
				<Header />
				<Posts posts={ this.state.posts } />
				<Footer />				
			</div>
		)
	}
}

export default App;
