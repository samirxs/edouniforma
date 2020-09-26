import React from "react";
import { Link } from "react-router-dom";

const HeaderCategory = ({ el }) => {
	return (
		<div className="text-gray-100 ">
			<div className="h-categ cursor-pointer text-xl  ">
				<Link to={`/categories/${el.id}`}>{el.title}</Link>
			</div>
			<ul>
				{el.childs
					? el.childs.map((ele) => (
							<div key={ele.id}>
								<li className="pl-4  ">
									{" "}
									<Link to={`/categories/${ele.id}`}>{ele.title}</Link>
								</li>
							</div>
					  ))
					: null}
			</ul>
		</div>
	);
};

export default HeaderCategory;
