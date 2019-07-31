
/* This component consist of all the details of movie 
	further enhancement can be made to add extra details of the movie
*/

import React from 'react';

import { 
	getMovieDetails,
	getCastAndCrew,
	getMovieReviews,
	getMovieImages

} from '../api/index';

import CastDetails from './CastAndCrew.js';
import Header from './Header';
import Poster from './Poster'
import '../css/movieDetail.css';

class MovieDetail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movieInDetails: {},
			castAndCrew: [],
			showReview: false,
			showCastAndCrew: false,
			showPosters: false,
			backdrops: false,
			movieImages: {}
		}
		this.fetchMovieInDetails = this.fetchMovieInDetails.bind(this);
	}

	componentDidMount() {
		const movieId = window.location.pathname.split('/')[2];
		this.fetchMovieInDetails(movieId);
	}

	fetchMovieInDetails(movieId) {
		getMovieDetails((movieDetails) => {
			getCastAndCrew((castDetails) => {
				getMovieReviews((movieReviews) => {
					getMovieImages((images) => {
						this.setState({
							movieInDetails : movieDetails,
							castAndCrew: castDetails.cast,
							crewDetails: castDetails.crew,
							movieReviews: movieReviews.results,
							movieImages: images
						})
					}, movieId)
				}, movieId)
			}, movieId)
		}, movieId);
	}

	render() {
		return (
			<div className="movie-detail-outer-div">
				<div
					style={{
						margin: "0 auto",
						width: "1000px"
					}}
				>
					<Header />
					<div className="movie-detail-inner-div">
						<img 
							height="450px"
							src={"https://image.tmdb.org/t/p/w500/"+this.state.movieInDetails.poster_path}
						/>
						<div className="movie-data">
							<div className="movie-title">
								{this.state.movieInDetails.original_title}
							</div>
							<div className="movie-overview">
								{this.state.movieInDetails.overview}
							</div>
							<div className="movie-overview">
								<b>Release Date</b> : <span>{this.state.movieInDetails.release_date}</span>
							</div>
							<div className="movie-overview">
								<b>Runtime</b> : <span>{this.state.movieInDetails.runtime}</span> minutes
							</div>
							<div className="movie-overview">
								<a target="_blank" href={this.state.movieInDetails.homepage}>{this.state.movieInDetails.homepage}</a>
							</div>
						</div>
					</div>
					<div
						style={{
							width: "1000px",
							margin: "0 auto",
							marginBottom: "10px",
							fontSize: "20px",
							fontWeight: "bold",
						}}
					>
						 Posters
					</div>	
					{
						this.state.movieImages.posters  ? 
							this.state.movieImages.posters.map((data, index) => {
								if (index < 10) {
									return (
										<span>
											<Poster data = {data} />
										</span>
										)
								} else {
									return;
								}
							}) : 
						null
					}


					{/* Movie Reviews*/}

					{
						this.state.movieReviews ? 
							<div
								style={{
									margin: "0 auto",
									width: "1000px",
									textAlign: "justify"
								}}
							>
								<div
									style={{
										marginBottom: '20px',
										fontSize: "20px",
										fontWeight: "bold",
										cursor: "pointer"
									}}
									onClick={() => {
										this.setState({
											showReview: !this.state.showReview
										})
									}}
								>
									Click for Reviews  
								</div>
								{
									this.state.showReview ?  
										this.state.movieReviews.map((data, index) => {
											if (index < 6) {
												return (
													<div
														style={{
															marginTop: "14px",
															marginBottom: "50px",
															fontSize: "15px"
														}}
													>
														<div
															style={{
																marginBottom: "10px"
															}}
														>
															<b> A review by </b><b>{data.author}</b>
														</div>
														<div>
															{data.content}
														</div>
													</div>
												)
											}
										}) : null
								}
							</div> : null
					}
						{/*  Cast and Crew Details*/}
					{
						this.state.castAndCrew ? 
							<div>
								<div
									style={{
										width: "1000px",
										margin: "0 auto",
										marginBottom: "10px",
										fontSize: "20px",
										fontWeight: "bold",
										cursor: "pointer"
									}}
									onClick = {()=> {
										this.setState({
											showCastAndCrew: !this.state.showCastAndCrew
										})
									}}
								>
									Click for Cast and Crew
								</div>
								{
									this.state.showCastAndCrew ? 
										<div
											style={{
												display:"flex",
												margin: "0 auto",
												width: "1000px"
											}}
										>
											<div
												style={{
													width: "60%"
												}}
											>
												<span
													style={{
														paddingLeft: "50px",
														fontWeight: "bold"
													}}

												>
													Cast 
												</span> 
											{
												this.state.castAndCrew ? 
												this.state.castAndCrew.map((data) => {
													return (
														<div
															style={{
																paddingLeft: "50px",
																width: "50%"
															}}
														>
															<CastDetails castData = {data}/>
														</div>
													)	
												}) : null
											}
											</div>
											<div
												style={{
													width: "60%"
												}}
											>
												<span
													style={{
														paddingLeft: "50px",
														fontWeight: "bold"
													}}
												>	
													Crew
												</span> 
											{
												this.state.crewDetails ? 
												this.state.crewDetails.map((data) => {
													return (
														<div
															style={{
																paddingLeft: "50px",
																width: "50%"
															}}
														>
															<CastDetails castData = {data}/>
														</div>
													)	
												}) : null
											}
											</div>
										</div> : 
									null
								}

							</div>
						: null
					}
					<div
						style={{
							width: "1000px",
							margin: "0 auto",
							marginBottom: "10px",
							fontSize: "20px",
							fontWeight: "bold",
							cursor: "pointer"
						}}
						onClick = {()=> {
							this.setState({
								backdrops: !this.state.backdrops
							})
						}}
					>
						Click for Backdrops
					</div>
					{
						this.state.movieImages.backdrops && this.state.backdrops ? 
							this.state.movieImages.backdrops.map((data, index) => {
								if (index < 10) {
									return (
										<span
											style={{
												margin: "10px"
											}}
										>
											<Poster data = {data} />
										</span>
										)
								} else {
									return;
								}
							}) : 
						null
					}
				</div>
			</div>
		)
	}
}
export default MovieDetail;