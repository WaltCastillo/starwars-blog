import React from "react";
import "../../styles/home.scss";

//components
import { Card } from "../component/card";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<div>
				<Card
					title={"Luke"}
					image={
						"https://suttonsquareraleigh.com/wp-content/uploads/sites/2/2018/02/placeholder-400x200-300x150.png"
					}
				/>
			</div>
		</div>
	);
};
