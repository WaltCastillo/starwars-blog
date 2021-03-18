import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

//components
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadData();
	}, []);

	return (
		<div className="container">
			<div className="text-center mt-5">
				<div className="scrolling-wrapper">
					{store.personajes.map((item, index) => {
						<div className="card">
							<Card
								id={item}
								object={"people"}
								image={
									"https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg"
								}
								description={""}
							/>
						</div>;
					})}
				</div>
			</div>
		</div>
	);
};
