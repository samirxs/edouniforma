import React from "react";
import { useParams, Link } from "react-router-dom";
import CategoryCard from "../CategoryCard";
import ProductList from "../ProductList";
import Banner from "../Banner";

function Categories({ categ }) {
	const { id } = useParams();

	if (categ) {
		function currCat(categ) {
			return categ.find((el) => el.id == id);
		}
		const currentCat = currCat(categ);

		function returnLinks(currCat) {
			if (currCat.id < 4) {
				return (
					<div className="inline-block text-lg ">
						<Link to="/">
							Əsas{" "}
							<div className=" rounded-full w-1 h-1 bg-red-700 inline-block mb-1 mx-1 "></div>
						</Link>
						<Link to={`/categories/${currCat.id}`}>
							{currCat.title}
							<div className=" rounded-full w-1 h-1 bg-red-700 inline-block mb-1 mx-1 "></div>
						</Link>
					</div>
				);
			}
			const nextCat = categ.find((el) => el.id == currCat["parent_id"]);
			return (
				<div className="inline-block">
					{returnLinks(nextCat)}
					<Link to={`/categories/${currCat.id}`}>
						{currCat.title}
						<div className=" rounded-full w-1 h-1 bg-red-700 inline-block mb-1 mx-1 "></div>
					</Link>
				</div>
			);
		}

		if (!(currentCat["product"].length > 0)) {
			return (
				<section className="body-font">
					<Banner title={currentCat.title} />
					<div className="bg-gray-100">
						<div className="container px-5 py-8 mx-auto">
							{returnLinks(currentCat)}
							<div className="flex flex-wrap pt-2 -mx-4 -mb-10 text-center">
								{/* {categ.map((el) =>
									currentCat["id"] == el["parent_id"] ? (
										<CategoryCard el={el} key={el.id} />
									) : null
								)} */}
								{currentCat.childs
									? currentCat.childs.map((el) => (
											<CategoryCard el={el} key={el.id} />
									  ))
									: null}
							</div>
						</div>
					</div>
				</section>
			);
		}
		return (
			<div className="">
				<Banner title={currentCat.title} />
				<div className="bg-gray-100">
					<div className="container mx-auto px-5 py-8 body-font">
						{returnLinks(currentCat)}
						<ProductList currentCat={currentCat} />
					</div>
				</div>
			</div>
		);
	}
	return <div></div>;
}

export default Categories;
