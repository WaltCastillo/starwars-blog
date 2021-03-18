import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	let url = "https://www.swapi.tech/api/";
	console.log("url: ", url);

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			personajes: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			loadData: () => {
				const store = getStore();
				fetch(url + "people")
					.then(res => {
						return res.json();
					})
					.then(data => {
						// data es la lista de personas
						// debo recorrer la lista y por cada elemento
						// buscar en la Api su información
						// guardar la respuesta en el store

						data.results.map(characther => {
							console.log(characther.url);
							fetch(characther.url)
								.then(res => {
									return res.json();
								})
								.then(response => {
									console.log(response);
									setStore({ personajes: [...store.personajes, response] });
								});
						});
					});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
