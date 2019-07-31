/*Cast and Crew component where data of cast and crew come to this component*/

import React from 'react';
import { Link } from 'react-router-dom';

const CastAndCrew = (props) => {
	return (
			<Link 
				style={{
					textDecoration: "none",
					color: "black"
				}}
				to={`/castId/${props.castData.id}`}
			>
				<div>
					{
						props.castData.profile_path ? 
						<div
							style={{
								display: "flex"
							}}
						>
							<p>
								<img
									height="100px"
									src={"https://image.tmdb.org/t/p/w500/"+props.castData.profile_path}
								/>
							</p>
							<div
								style={{
									padding: "20px"
								}}
							>
								<p
									style={{
										fontWeight: "bold"
									}}
								>
									{props.castData.name}
								</p>
								<p>
									{props.castData.character}
								</p>
							</div>
						</div> : null
					}
				</div>
			</Link>
		)
}

export default CastAndCrew;