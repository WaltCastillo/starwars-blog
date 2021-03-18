import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);

	let element = store.personajes[props.id];
	console.log("element :", element);

	return (
		<div className="card" style={{ width: "250px", heigt: "400px" }}>
			<img className="card-img-top" src={props.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{element != undefined ? element.properties.name : "todavia no carga"}</h5>
				<p className="card-text">description</p>
				<a href="#" className="btn btn-primary">
					Learn more
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	id: PropTypes.number
};
