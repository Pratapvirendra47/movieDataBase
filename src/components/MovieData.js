/* Movie intial Data component that is called by MovieDetails component*/

import React from 'react';
import { Link } from 'react-router-dom';

class MovieData extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link
				style={{
					textDecoration: "none"
				}}
				to={`/movieId/${this.props.data.id}`}
			>
				<div
					style={{
						color: "black"
					}}
				>
					<div
						style={{
							display : 'flex',
							margin: '10px'
						}}
					>
						<img
							style={{
								height:'200px'
							}}
							src = {"https://image.tmdb.org/t/p/w500/"+this.props.data.poster_path}
						/>	
						<div
							style={{
								padding: "50px"
							}}
						>
							<div
								style={{
									marginBottom: "10px"
								}}
							>
								<b>{this.props.data.original_title}</b>
							</div>
							<div>
								{this.props.data.overview}
							</div>
						</div>
					</div>
				</div>
			</Link>
		)
	}
}
export default MovieData;