import React from 'react';

/*Header file that can be common in all the files that include header*/


const Header = () => {
	return (
			<div
				style={{
					background: 'black',
					color: 'green',
					padding: "25px",
					fontSize: "21px",
					fontWeight: "bold"
				}}
			>
				<a 
					style={{
						textDecoration: "none",
						color: "green"
					}}
					href={window.location.origin}> HOME 
				</a>
			</div>
		)
}

export default Header;