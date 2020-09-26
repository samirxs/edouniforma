import React from "react";
import img from "../img/accueil.jpg";

function Banner({ title, description }) {
	const style = {
		position: "fixed",
		left: "0",
		top: "0",
		right: "0",
		bottom: "0",
		zIndex: "-1",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundImage: `url(${img})`,
	};

	return (
		<div className="banner">
			<div className="banner__home">
				<div style={style} className="banner__bg"></div>
				<div className="container mx-auto">
					<div className=" max-w-5xl mx-auto  py-20 ">
						<div className=" mx-2 title_l text-xl font-semibold ">
							EDO UNİFORMA
						</div>
						<div className=" mx-2 text-4xl py-4 lg:text-6xl text-gray-100 font-semibold leading-tight">
							{title
								? title
								: "AZƏRBAYCANDA UNİFORMA & QORUYUCU VASİTƏLƏR MAĞAZASI"}
						</div>
						<div className="bg-white opacity-75 inline-block px-2 rounded-md text-black text-lg max-w-md ">
							{description
								? description
								: null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
