import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList({ currentCat }) {
	const [products, setProducts] = useState(null);
	const url = "http://edouniforma.test/api/products";
	useEffect(() => {
		const data = {
			id: currentCat.id,
		};
		axios
			.post(url, data)
			.then(function (response) {
				setProducts(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [currentCat]);

	if (products) {
		return (
			<section className="text-gray-700 body-font">
				<div className="container px-5 py-8 mx-auto">
					<div className="flex flex-wrap -mx-4 -mb-10 text-center">
						{products.map((el) => (
							<ProductCard key={el.id} el={el} currentCat={currentCat} />
						))}
					</div>
				</div>
			</section>
		);
	}
	return <div></div>;
}

export default ProductList;
