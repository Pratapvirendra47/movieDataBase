
/*
  Initial home page where trending movies and popular movies and search movies can be browsed
*/

import React from 'react';
import { Link } from 'react-router-dom';
import MovieData from './components/MovieData.js';
import { 
  getTrendingMovies,
  getPopularMoves,
  getSearchedMovies

} from './api/index';
import './App.css';
import TextField from '@material-ui/core/TextField';


class App extends React.Component { 

  constructor() {
    super();
    this.state = {
      movieArr : []
    }
    this.fetchPopularMovies = this.fetchPopularMovies.bind(this);
    this.fetchTrendingMovies = this.fetchTrendingMovies.bind(this);
    this.fetchSearchQuery =this.fetchSearchQuery.bind(this);
  }

  componentDidMount() {
    this.fetchTrendingMovies();
  }

  fetchPopularMovies() {
    getPopularMoves((movieData) => {
      this.setState({
        movieArr: movieData.results,
        searchQuery: "Popular Movies"
      })
    })
  }

  fetchTrendingMovies() {
    getTrendingMovies((movieData) => {
        this.setState({
          movieArr : movieData.results,
          searchQuery: "Trending Movies"
        })
    });
  }

  fetchSearchQuery(searchMovie) {
    if (searchMovie) {
      getSearchedMovies((movieData) => {
          this.setState({
            movieArr : movieData.results,
            searchQuery: searchMovie
          })
      }, searchMovie);
    }
  }

  render() {

    return (
        <div
          style={{
            background: "ghostwhite",
            height: "100%"
          }}
        >
          <div
            style={{
              width: "1000px",
              margin: "0 auto",
              boxShadow: "0px 0px 24px 3px #888888",
              background: "white"
            }}
          >
            <div
              className="selection-div"
            >
              <div
                className = "trending-movies"
                onClick = {this.fetchTrendingMovies}
              >
                Trending Movies
              </div>
              <div
                className = "popular-movies"
                onClick = {this.fetchPopularMovies}
              >
                Popular Movies
              </div>
              <div
                style={{
                  margin: "32px"
                }}
              >
                <TextField
                  className = "search-box" 
                  variant="outlined"
                  placeholder="Search Movies"
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      this.fetchSearchQuery(e.target.value);
                    }
                  }}
                  onBlur={(e) => {
                    this.fetchSearchQuery(e.target.value);             
                  }}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  margin: "10px",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Results for <span>{this.state.searchQuery}</span>  
              </div>
              {
                this.state.movieArr ?
                  this.state.movieArr.map((data,index) => {
                    return (
                        <div>
                          <MovieData 
                            data = {data}
                          />
                        </div>
                      )
                  }) : null
              }
            </div>
          </div>
        </div>
    )
  }
}

export default App;
