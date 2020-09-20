import React from "react";
import InNavBar from "./InNavBar/index";
import {Link} from "react-router-dom";

function NavigationMenu({setShowMenu, category}) {
	return (
		<div>
			<div className="border-b-2 flex justify-between items-center text-center">
				<div className="inline-block text-4xl font-bold text-gray-900 mx-auto">
					<Link onClick={() => setShowMenu(false)} to="/">
						edo
					</Link>
				</div>
			</div>
			<div className=" pb-8 ">
				<InNavBar category={category} setShowMenu={setShowMenu} />
			</div>
		</div>
	);
}

export default NavigationMenu;
