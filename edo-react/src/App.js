import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Views/Home";
import About from "./components/Views/About";
import Contact from "./components/Views/Contact";
import Categories from "./components/Views/Categories";
import Product from "./components/Views/Product";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
	const [categ, setCateg] = useState(null);
	const [category, setCategory] = useState(null);

	const url = `http://edouniforma.test/api/categories`;

	function makeTree(data) {
		let tree = [];
		let mata = data.slice();
		for (let obj of mata) {
			if (!obj["parent_id"]) {
				tree[obj.id] = obj;
			} else {
				if (mata[obj["parent_id"] - 1]["childs"]) {
					mata[obj["parent_id"] - 1]["childs"][obj.id] = obj;
				} else {
					mata[obj["parent_id"] - 1]["childs"] = [];
				}
			}
		}
		return tree;
	}

	useEffect(() => {
		axios.get(url).then((response) => {
			setCategory(response.data);
			setCateg(response.data);
			setCategory((p) => makeTree(p));
		});
	}, [url]);

	return (
		<div className="App relative pb-10 min-h-screen">
			<Router>
				<Header category={category} />
				<Switch>
					<Route exact path="/">
						<Home category={category} />
					</Route>
				</Switch>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
				<Switch>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
				<Switch>
					<Route path="/categories/:id">
						<Categories categ={categ} />
					</Route>
				</Switch>
				<Switch>
					<Route path="/product/:cid/:id">
						<Product categ={categ} />
					</Route>
				</Switch>
				<ScrollTopButton />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
