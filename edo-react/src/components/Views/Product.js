import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

function Product({ categ }) {
	const { cid, id } = useParams();
	const [product, setProduct] = useState(null);

	const url = `http://edouniforma.test/api/product/${id}`;
	useEffect(() => {
		axios.get(url).then(function (response) {
			setProduct(response.data);
		});
	}, [url]);

	if (categ && product) {
		if (product) {
			const prod = product[0];

			function currCat(categ) {
				return categ.find((category) => category.id == cid);
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
			const settings = {
				customPaging: function (i) {
					return (
						<div>
							<img
								className="prod-dot-img shadow-lg rounded-lg "
								src={prod["p_img"] ? prod["p_img"][i]["path"] : null}
							/>
						</div>
					);
				},
				dots: true,
				dotsClass: "slick-dots slick-thumb",
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
			};

			return (
				<section className="py-4 px-2 mx-auto container min-h-screen ">
					{returnLinks(currentCat)}
					{prod.code}
					<div
						className={`py-4 md:flex md:flex-wrap pb-48 ${
							prod["p_img"] ? (prod["p_img"].length > 6 ? "pb-56" : null) : null
						}  md:pb-0 `}
					>
						<div className="md:w-1/2 bg-gray-200 py-6 px-4 rounded-lg shadow-lg ">
							<div className=" text-2xl font-semibold pb-4">Produkt Haqqında</div>
							<div
								className="  "
								dangerouslySetInnerHTML={{
									__html: `${prod.description}`,
								}}
							/>
						</div>

						<div className=" md:w-1/2 max-w-xl py-4">
							<Slider {...settings}>
								{prod["p_img"]
									? prod["p_img"].map((img) => (
											<div className="outline-none" key={img.id}>
												<img
													className="mb-4 rounded shadow-md mx-auto"
													src={img["path"]}
												/>
											</div>
									  ))
									: null}
							</Slider>
						</div>
					</div>
				</section>
			);
		}
		return <div></div>;
	}
	return <div></div>;
}

export default Product;
