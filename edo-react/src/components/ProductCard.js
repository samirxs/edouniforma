import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ el, currentCat }) {
	return (
		<div className="sm:w-1/2 lg:w-1/3 mb-10 px-4 mx-auto">
			<Link to={`/product/${currentCat.id}/${el.id}`}>
				<div className="rounded-lg h-64 overflow-hidden relative shadow-lg">
					<img
						alt="content"
						className="object-cover object-center h-full w-full mb-4"
						src={el["p_img"].length > 0 ? el["p_img"][0]["path"] : null}
					/>
					<button className="absolute bottom-0 left-0 right-0 mb-4 py-0 mx-auto text-white font-semibold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-1 rounded-lg">
						{el.title}
					</button>
				</div>
			</Link>
		</div>
	);
}

export default ProductCard;
