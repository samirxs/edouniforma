import React from "react";
import SimpleSlider from "../SimpleSlider";
import CategoryCard from "../CategoryCard";
import Banner from "../Banner";
import svg1 from "../../img/clothesssew.svg";
import svg2 from "../../img/flex.svg";
import svg3 from "../../img/logosew.svg";

function Home({ category }) {
	return (
		<div>
			<Banner />
			<section className="text-gray-700 body-font bg-gray-100 ">
				<div className="container px-5 py-10 mx-auto">
					<div className="flex flex-wrap -mx-4 -mb-10 text-center">
						{category
							? category.map((el) =>
									el ? <CategoryCard key={el.id} el={el} /> : null
							  )
							: null}
					</div>
				</div>
			</section>
			<section className="bg-gray-100">
				<div className="container mx-auto">
					<div className="max-w-3xl tracking-wide text-3xl lg:text-5xl font-bold	px-2 pt-16 leading-tight ">
						EDO UNİFORMA, 15 İL MÖVZUDA
					</div>
					<div className=" h-4 bg-red-600 w-16 lg:w-32 mx-2 mt-4"></div>
					<div className="py-16 flex flex-wrap ">
						<div className=" mx-6 mb-2 md:mx-0  px-4 py-8 shadow-lg block md:inline-block text-center md:w-1/2 lg:w-1/3 ">
							{<img src={svg1} className="mx-auto w-32 " alt="tikilish" />}
							<div className=" leading-6 py-3   text-2xl ">
								KORPORATİV ÜSULLA TİKİLİŞ
							</div>
							<div className=" text-lg leading-4 font-light ">
								İstənilən formada və sayda xüsusi iş
								geyimlərinin(uniformalarının) tikilişi
							</div>
						</div>
						<div className="mx-6 mb-2 md:mx-0  px-4 py-8 shadow-lg block md:inline-block text-center   md:w-1/2 lg:w-1/3 ">
							{<img src={svg2} className="mx-auto w-32 " alt="tikilish" />}
							<div className="  leading-6 py-3  text-2xl ">
								LOQOLARIN FLEKS VURULMASI
							</div>
							<div className=" text-lg leading-4 font-light ">
								Loqolar fleks olaraq print edilir
							</div>
						</div>
						<div className="mx-6 mb-2 md:mx-0  px-4 py-8 shadow-lg block md:inline-block text-center  md:w-1/2 lg:w-1/3 ">
							{<img src={svg3} className="mx-auto w-32 " alt="tikilish" />}
							<div className="  leading-6 py-3  text-2xl ">
								LOQOLARIN TİKİŞLƏ VURULMASI
							</div>
							<div className=" text-lg leading-4 font-light ">
								Loqolar xüsusi tikiş maşını ilə vurulur
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
