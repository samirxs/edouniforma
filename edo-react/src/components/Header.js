import React, { useState } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import HeaderCategory from "./HeaderCategory";

function Header({ category }) {
	const [isShown, setIsShown] = useState(false);

	const header__middle = {
		backgroundColor: " #0d0d0d",
	};
	const header__top = {
		backgroundColor: "#DF0618",
	};

	return (
		<header  className="w-full " >
			<div style={header__top} className="hidden lg:block ">
				<div className="inner container mx-auto px-8">
					<div className="flex justify-between py-1 ">
						<div></div>
						<ul className="flex justify-evenly ">
							<li className="text-gray-200">+994 000 000 00 00</li>
							<li className="pl-12 hover:text-gray-200 transition duration-300 ease-linear text-gray-900 ">
								<Link to="/contact">Bizimlə Əlaqə</Link>
							</li>
							<li className="pl-12 hover:text-gray-200 transition duration-300 ease-linear text-gray-900 ">
								<Link to="/about">Haqqımızda</Link>
							</li>
							<li className="pl-12">
								<Link to="/">
									<FontAwesomeIcon
										icon={faInstagram}
										size="lg"
										className="text-gray-100"
									/>
								</Link>
							</li>
							<li className="pl-12 pr-2">
								<Link to="/">
									<FontAwesomeIcon
										icon={faFacebook}
										size="lg"
										className="text-gray-100"
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div onMouseLeave={() => setIsShown(false)} style={header__middle} className="w-full" >
				<div className="mx-auto px-4 container py-3">
					<div className="flex justify-between items-center">
						<div className=" flex justify-between items-center ">
							<Link
								to="/"
								className=" inline-block  text-4xl font-bold text-gray-100 "
							>
								<svg
									width="80"
									height="60"
									viewBox="0 0 360 240"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0 52.4697V240H297.346L360 181.388V0H56.088L0 52.4697Z"
										fill="#DF0618"
									/>
									<path
										d="M49.344 171V78.264H117.744V96.12H72.528V115.56H112.416V133.704H72.528V153.144H117.744V171H49.344ZM128.797 171V78.264H168.973C178.381 78.264 186.301 79.848 192.733 83.016C199.165 86.088 204.061 91.08 207.421 97.992C210.781 104.808 212.461 113.88 212.461 125.208C212.461 141.144 208.765 152.76 201.373 160.056C194.077 167.352 183.277 171 168.973 171H128.797ZM151.981 153.144H165.805C170.797 153.144 174.973 152.424 178.333 150.984C181.789 149.448 184.381 146.664 186.109 142.632C187.933 138.6 188.845 132.792 188.845 125.208C188.845 117.528 188.029 111.624 186.397 107.496C184.861 103.272 182.365 100.344 178.909 98.712C175.549 96.984 171.181 96.12 165.805 96.12H151.981V153.144ZM267.626 172.44C252.554 172.44 241.082 168.6 233.21 160.92C225.338 153.24 221.402 141.288 221.402 125.064C221.402 107.88 225.338 95.544 233.21 88.056C241.082 80.568 252.554 76.824 267.626 76.824C282.698 76.824 294.17 80.568 302.042 88.056C309.914 95.544 313.85 107.88 313.85 125.064C313.85 141.288 309.914 153.24 302.042 160.92C294.17 168.6 282.698 172.44 267.626 172.44ZM267.626 152.712C275.402 152.712 281.066 150.504 284.618 146.088C288.266 141.576 290.09 134.568 290.09 125.064C290.09 114.696 288.266 107.4 284.618 103.176C281.066 98.856 275.402 96.696 267.626 96.696C259.754 96.696 253.994 98.856 250.346 103.176C246.794 107.4 245.018 114.696 245.018 125.064C245.018 134.568 246.794 141.576 250.346 146.088C253.994 150.504 259.754 152.712 267.626 152.712Z"
										fill="#F5F5F5"
									/>
								</svg>
							</Link>
							<div className="text-lg color pl-4 ">
								<Link to="/">EDO UNİFORMA</Link>
							</div>
						</div>
						<div className="justify-evenly text-gray-100 px-4 hidden lg:flex ">
							{category
								? category.map((el) => (
										<div key={el.id} onMouseEnter={() => setIsShown(el)}>
											<div className=" h-categ px-5 text-lg  md:text-2xl text-gray-100 cursor-pointer ">
												<Link to={`/categories/${el.id}`}>{el.title}</Link>
											</div>
										</div>
								  ))
								: null}
						</div>
						<div className=" lg:hidden ">
							<Navigation category={category} />
						</div>
					</div>
					<div>
						{isShown && (
							<div
								onMouseEnter={() => setIsShown((prev) => prev)}
								className=" justify-evenly py-4 pb-8  max-w-6xl mx-auto hidden lg:flex"
							>
								{isShown.childs
									? isShown.childs.map((el) => (
											<HeaderCategory key={el.id} el={el} />
									  ))
									: null}
								{console.log(isShown)}
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
