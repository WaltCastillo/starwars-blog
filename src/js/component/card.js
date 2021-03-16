import React, { useEffect } from "react";
import PropTypes from "prop-types";

export const Card = props => {
	let url = "https://www.swapi.tech/api/" + props.object + "/" + props.id;
	console.log("url: ", url);

	useEffect(() => {
		fetch(url)
			.then(r => {
				return r.json();
			})
			.then(e => {
				console.log("e: ", e);
			});
	});

	return (
		<div className="card" style={{ width: "250px", heigt: "400px" }}>
			<img className="card-img-top" src={props.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">hola</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	object: PropTypes.string,
	id: PropTypes.string
};
