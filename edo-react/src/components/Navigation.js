import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import NavigationMenu from "./NavigationMenu";

function Navigation({category}) {
	const [showMenu, setShowMenu] = useState(false);

	const maskTransitions = useTransition(showMenu, null, {
		from: { position: "absolute", opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
	const menuTransitions = useTransition(showMenu, null, {
		from: { opacity: 0, transform: "translateX(-100%)" },
		enter: { opacity: 1, transform: "translateX(0%)" },
		leave: { opacity: 0, transform: "translateX(-100%)" },
	});

	return (
		<nav>
			<div className="p-2">
				<FontAwesomeIcon
					className="text-white cursor-pointer"
					size="2x"
					icon={faBars}
					onClick={() => setShowMenu((prevState) => !prevState)}
				/>
			</div>
			{maskTransitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
							onClick={() => setShowMenu(false)}
						></animated.div>
					)
			)}
			{menuTransitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className=" nav fixed scrolling-auto overflow-auto top-0 left-0 w-4/5 h-full z-50 shadow-2xl py-1 px-4"
						>
							<NavigationMenu category={category} setShowMenu={setShowMenu} />
						</animated.div>
					)
			)}
		</nav>
	);
}

export default Navigation;
