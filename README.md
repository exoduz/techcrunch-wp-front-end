# TechCrunch coding challenge #

## Problem ##
Use Wordpress and a frontend JS library of your choice (`Angular`, `Backbone`, `React`...) to load Wordpress posts on the homepage. The displayed posts will be only from the category "techcrunch".

The request to the DB needs to be cached. The front end library will query the backend on page load, retrieve the posts and display them nicely on the homepage. (you can use [WP REST plugin](http://v2.wp-api.org/))

You can use a Wordpress theme, and you are welcome to use `SASS` (or any `CSS` preprocessor), and `Bootstrap` but it's not mandatory. Make it nice visually but keep the design very simple.

## Installation ##
The URL for the API has to be changed in 2 places `js/components/App.js` and `js/components/Posts/Entry.js`

## Demo ##
[https://robinjulius.com/work/techcrunch](https://robinjulius.com/work/techcrunch)

## TODO ##
- Using something like dotenv to declare variables to be used within the React components (this applies mostly to the URL of the API)
- Loading screen when Ajax call initiated for posts.
- Date formatting on posts.
- Post categories (currently multiple category retrieval not supported by WP REST API v2... yet).
- Expiry of localStorage.

## Assumptions ##
- Data used is dummy data.
- Just the posts, no sidebar, etc.
- No pagination.
- No need for individual post page to be created.
- Once built, it should work as a theme but won't have access to global functions or hooks in WordPress.

## Used ##
- [ReactJS](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io/)
- [Bootstrap](http://getbootstrap.com/)
- [Font Awesome](http://fontawesome.io/)
- [React router](https://github.com/reactjs/react-router)
- [WP Rest API](http://v2.wp-api.org/)