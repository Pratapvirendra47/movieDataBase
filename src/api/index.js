
/*
	API Credentials

*/

let API_URL = "https://api.themoviedb.org/3/";
let API_KEY = "9caa3f44d5ad31800b3a58bc7be226cc";

/*
	api to call treding movies

*/

function getTrendingMovies(cb) {

	fetch(`${API_URL}trending/movie/day?api_key=${API_KEY}`,{
		method: 'GET'
	}).then(response => response.json()).then(data => {
		cb(data);
	}).catch(err => {
		console.log('error while fetching the movies', err);
	})
}


/*
	 api to call to popular movies
*/

function getPopularMoves(cb) {

	fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,{
		method: 'GET'
	}).then(response => response.json()).then(data => {
		cb(data);
	}).catch(err => {
		console.log('error while fetching the movies', err);
	})

}

/*
	api to call search movie by titles 

*/


function getSearchedMovies(cb, searchQuery) {
	let url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`;
	fetch(url, {
		method: 'GET'
	}).then(response => response.json()).then(data => {
		cb(data);
	}).catch(err => {
		console.log('error while search query', err);
	})

}

/*
	api to fetch movie Details
*/


function getMovieDetails(cb, movieId) {
	let url = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
	fetch(url, {
		method: 'GET'
	}).then(response => response.json()).then(data => {
		cb(data);
	}).catch(err => {
		console.log('error while fetching details', err);
	})
}

/*
	api to fetch movie cast and crew
*/

function getCastAndCrew (cb, movieId) {
	let url = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
	fetch(url, {
		method: 'GET'
	}).then(response => response.json()).then(data => {
		cb(data);
	}).catch(err => {
		console.log('error while fetching details', err);
	})

}


/*
	api to fetch movie reviews
*/

function getMovieReviews(cb, movieId) {
	let url = `${API_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
	fetch(url, {
		method: 'GET'
	}).then(response => response.json()).then(data => {
		cb(data);
	}).catch(err => {
		console.log('error while fetching details', err);
	})
}

/*
	api to fetch movie images
*/

function getMovieImages(cb, movieId) {
	let url = `${API_URL}movie/${movieId}/images?api_key=${API_KEY}`;
	fetch(url, {
		method: 'GET'
	}).then(response => response.json()).then(data => {
		cb(data);
	}).catch(err => {
		console.log('error while fetching details', err);
	})
}

/*
	API to fetch personDetails
*/

function getPersonDetails(cb, personId) {
	let url = `${API_URL}person/${personId}?api_key=${API_KEY}`;
	fetch(url, {
		method: 'GET'
	}).then(response => response.json()).then(data => {
		cb(data);
	}).catch(err => {
		console.log('error while fetching details', err);
	})
}


/*
	API to fetch images
*/
function getPersonImages(cb, personId) {
	let url = `${API_URL}person/${personId}/images?api_key=${API_KEY}`;
	fetch(url, {
		method: 'GET'
	}).then(response => response.json()).then(data => {
		cb(data);
	}).catch(err => {
		console.log('error while fetching details', err);
	})
}

export {
	getTrendingMovies,
	getPopularMoves,
	getSearchedMovies,
	getMovieDetails,
	getCastAndCrew,
	getMovieReviews,
	getMovieImages,
	getPersonDetails,
	getPersonImages
}