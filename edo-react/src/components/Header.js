import React from "react";
import Navigation from "./Navigation";
import labor from "../img/labor-day.png";
import {Link} from "react-router-dom";

function Header() {
	return (
		<header className=" bg-black ">
			<div className="mx-auto px-4 pt-1 container">
				<div className="flex justify-between items-center">
					<div className=" flex justify-between items-center ">
						<Link
							to="/"
							className=" inline-block  text-4xl font-bold text-gray-100 "
						>
							edo
						</Link>
						<img src={labor} alt="kaska" className="labor-logo pl-4" />
					</div>
					<Navigation />
				</div>
			</div>
		</header>
	);
}

export default Header;
