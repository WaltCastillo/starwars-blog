import React from "react";
import "../../styles/home.scss";

//components
import { Card } from "../component/card";

export const Home = () => {
	return (
		<div className="container">
			<div className="text-center mt-5">
				<div className="scrolling-wrapper">
					<div className="card">
						<Card
							id={"1"}
							object={"people"}
							image={
								"https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg"
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
