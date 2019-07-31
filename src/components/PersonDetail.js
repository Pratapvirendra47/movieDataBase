
/*This Component Returns the personal details of the character
	More Details can be added to the component
*/

import React from 'react';
import { 
	getPersonDetails,
	getPersonImages 

} from '../api/index';

import Header from './Header'

class PersonDetail extends React.Component {
	
	constructor() {
		super();
		this.state = {
			personDetails : {}
		}

		this.fetchPersonInDetails = this.fetchPersonInDetails.bind(this);
	}


	componentDidMount() {
		const personId = window.location.pathname.split('/')[2];
		this.fetchPersonInDetails(personId);
	}

	fetchPersonInDetails(personId) {
		getPersonDetails((personDetails) => {
			getPersonImages((images) => {
				this.setState({
					personDetails: personDetails,
					personimages: images
				})
			}, personId)
		}, personId)
	}
	render() {
		return(
				<div
					style={{
						height: "100%"
					}}
				>
					<div
						style={{
							width: "1000px",
							height: "auto",
							margin: "0 auto",
							boxShadow: "0px 0px 24px 3px #888888"
						}}
					>
						<Header />
						{
							this.state.personDetails ?
							<div
								style={{
									display: "flex"
								}}
							>
								<div
									style={{
										height: "1000px"
									}}
								>
									<img 
										height="500px"
										src = {"https://image.tmdb.org/t/p/w500/"+this.state.personDetails.profile_path}
									/>
									<div
										style={{
											margin: "10px",
										}}
									>
										<div
											style={{
												fontSize: "20px",
												fontWeight: "bold"
											}}
										>
											Personal Details
										</div>
										{
											this.state.personDetails.birthday ?
												<div>
													<div
														style={{
															marginTop: "15px",
															fontWeight: "bold"
														}}
													>
														Birthday
													</div>
													<div
														style={{
															fontSize:"15px"
														}}
													>
														{this.state.personDetails.birthday}
													</div>
												</div> :
											null
										}
										{
											this.state.personDetails.place_of_birth ? 
												<div>
													<div
														style={{
															marginTop: "15px",
															fontWeight: "bold"
														}}
													>
													Place of Birth
													</div>
													<div
														style={{
															fontSize:"15px"
														}}
													>
														{this.state.personDetails.place_of_birth}
													</div>
												</div> : 
											null
										}
										{
											this.state.personDetails.known_for_department ?
												<div>
													<div
														style={{
															marginTop: "15px",
															fontWeight: "bold"
														}}
													>
														Known for
													</div>
													<div
														style={{
															fontSize:"15px"
														}}
													>
														{this.state.personDetails.known_for_department}
													</div>
												</div> : 
											null
										}
										{
											this.state.personDetails.also_known_as ?
												<div>
													<div
														style={{
															marginTop: "15px",
															fontWeight: "bold"
														}}
													>
														Also known as
													</div>
													{
														this.state.personDetails.also_known_as ? 
															this.state.personDetails.also_known_as.map((data) => {
																return (
																	<div
																		style={{
																			fontSize:"15px"
																		}}
																	>
																		{data}
																	</div>
																)
															}) : 
														null
													}
												</div> :
											null
											
										}
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column"
									}}
								>
									<div
										style={{
											height: "500px"
										}}
									>
										<div
											style={{
												margin: "10px",
												textAlign: "justify",
												fontSize: "52px",
												fontWeight: "bold"
											}}
										>
											{this.state.personDetails.name}
										</div>

										<div
											style={{
												margin: "10px",
												textAlign: "justify"
											}}
										>
											<div
												style={{
													fontSize: "30px",
													fontWeight: "bold",
													marginBottom: "10px"
												}}
											>
												Biography
											</div>
											<div
											>
												{this.state.personDetails.biography}
											</div>
										</div>
									</div>
									<div
										style={{
											fontSize: '20px',
											fontWeight: 'bold'
										}}
									>
										<div
											style={{
												cursor: "pointer",
												marginBottom: "10px"
											}}
											onClick={() => {
												this.setState({
													showImages: !this.state.showImages
												})
											}}
										>
											Images
										</div>
										<div>
											{
												this.state.personimages ? 
													this.state.personimages.profiles.map((data, index) => {
														if (index < 10) {
														return (
																<span>
																	<img
																		height="200px"
																		src={`https://image.tmdb.org/t/p/w500/${data.file_path}`}
																	/>
																</span>
															)
														}	
													}) : 
												null
											}
										</div>
									</div>
								</div>
							</div> : null
						}
					</div>
				</div>
			)
	}
}

export default PersonDetail;