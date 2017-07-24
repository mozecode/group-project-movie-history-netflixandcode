'use strict';

let $ = require('jquery'); 
let movieListTemplate = require('../templates/movieList.hbs');

module.exports.makeMovieList = (movieList) => {
	console.log("movielist", movieList);
	return movieListTemplate({movies: movieList});
};
