import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import i1 from "../img/b/1.jpg";
import i2 from "../img/b/2.jpg";
import i3 from "../img/b/3.jpg";
import i4 from "../img/b/4.jpg";
import i5 from "../img/b/5.png";
import i6 from "../img/b/6.png";
import i7 from "../img/b/7.png";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	const myStyle = {
		position: "absolute",
		right: "0",
		zIndex: "10",
	};
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "red", ...myStyle }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	const myStyle = {
		position: "absolute",
		left: "0",
		zIndex: "10",
	};
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "green", ...myStyle }}
			onClick={onClick}
		/>
	);
}

export default function SimpleSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3500,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div className="relative">
			<Slider {...settings}>
				<div>
					<div className="flex justify-around" >
						<img src={i1} alt="" />
					</div>
				</div>
				<div>
					<div className="flex justify-around " >
						<img src={i2} alt="" />
					</div>
				</div>
				<div>
					<div className="flex justify-around " >
						<img src={i3} alt="" />
					</div>
				</div>
				<div>
					<div className="flex justify-around " >
						<img src={i4} alt="" />
					</div>
				</div>
				<div>
					<div className="flex justify-around " >
						<img src={i5} alt="" />
					</div>
				</div>
				<div>
					<div className="flex justify-around " >
						<img src={i6} alt="" />
					</div>
				</div>
				<div>
					<div className="flex justify-around " >
						<img src={i7} alt="" />
					</div>
				</div>
			</Slider>
		</div>
	);
}
