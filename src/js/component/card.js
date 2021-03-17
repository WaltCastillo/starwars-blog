import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Card = props => {
	const [dataApi, setdataApi] = useState();

	let url = "https://www.swapi.tech/api/" + props.object + "/" + props.id;
	console.log("url: ", url);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		fetch(url)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log("data: ", data);
				setdataApi(data.result);
			});
	};

	return (
		<div className="card" style={{ width: "250px", heigt: "400px" }}>
			<img className="card-img-top" src={props.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{dataApi.name}</h5>
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
	object: PropTypes.string,
	id: PropTypes.string
};
