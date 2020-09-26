import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ el }) {
	return (
		<div className="sm:w-1/2 lg:w-1/3 mb-10 px-6 mx-auto">
			<Link to={`/categories/${el.id}`}>
				<div className="rounded-md h-64 overflow-hidden relative shadow-lg">
					<div className="categ-card">
						<div className="mt-24 categ-card-t mx-auto inline-block px-5 py-6 border-2 text-white text-xl font-semibold">
							{el.title}
						</div>
					</div>
					<img
						alt="content"
						className="object-cover object-center h-full w-full"
						src={el["c_img"] ? el["c_img"]["path"] : null}
					/>
					{/* <div className="px-4 py-4 absolute h-full w-full top-0 left-0 right-0 ">
						<div className="flex h-full items-center h-1/2 ">
							<div className=" categ-card-t mx-auto inline-block px-2 border-2 text-white text-xl font-semibold">
								{el.title}
							</div>
						</div>
					</div> */}
				</div>
			</Link>
		</div>
	);
}

export default CategoryCard;
