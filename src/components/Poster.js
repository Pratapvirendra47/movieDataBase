import React from 'react';



const Poster = (props) => {
	console.log('posters',props);
	return (
			<img  
				height="200px"
				src={"https://image.tmdb.org/t/p/w500/"+props.data.file_path}
				style={{
					textDecoration: "none",
					color: "green"
				}} 
			/>
		)
}

export default Poster;