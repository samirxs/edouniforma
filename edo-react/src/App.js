import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Views/Home";
import About from "./components/Views/About";
import Contact from "./components/Views/Contact";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {


	return (
		<div className="App relative pb-10 min-h-screen">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
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
				<ScrollTopButton />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
