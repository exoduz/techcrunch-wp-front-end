# TechCrunch coding challenge #

## Problem ##
Use Wordpress and a frontend JS library of your choice (`Angular`, `Backbone`, `React`...) to load Wordpress posts on the homepage. The displayed posts will be only from the category "techcrunch".

The request to the DB needs to be cached. The front end library will query the backend on page load, retrieve the posts and display them nicely on the homepage. (you can use [WP REST plugin](http://v2.wp-api.org/))

You can use a Wordpress theme, and you are welcome to use `SASS` (or any `CSS` preprocessor), and `Bootstrap` but it's not mandatory. Make it nice visually but keep the design very simple.

## Assumptions ##
- Data used is dummy data.
- Just the posts, no sidebar, etc.
- No pagination was implemented.

## Could do better ##
- Loading screen when Ajax call initiated for posts.
- Get author info.
- Get category info.
- Date formatting on posts.

## Used ##
- [ReactJS](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io/)
- [Bootstrap](http://getbootstrap.com/)
- [Font Awesome](http://fontawesome.io/)
- [React router](https://github.com/reactjs/react-router)
- [WP Rest API](http://v2.wp-api.org/)