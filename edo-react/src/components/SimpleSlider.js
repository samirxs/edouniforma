import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Slide from "./Slide";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	const myStyle = {
		position: "absolute",
		right: "10px",
		zIndex: "10",
		outline: 'none'
	};
	return (
		<div
			className={className}
			style={{ ...style, display: "block", ...myStyle }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	const myStyle = {
		position: "absolute",
		left: "10px",
		zIndex: "10",
		outline: 'none'
	};
	return (
		<div
			className={className}
			style={{ ...style, display: "block", ...myStyle }}
			onClick={onClick}
		/>
	);
}

export default function SimpleSlider() {
	const url = `http://edouniforma.test/api/sliders`;
	const [slides, setSlides] = useState(null);

	useEffect(() => {
		axios.get(url).then((response) => {
			setSlides(response.data);
		});
	}, [url]);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 6000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	if (slides) {
		return (
			<div className="relative">
				<Slider {...settings}>
					{slides.map((slide) => (
						<Slide key={slide['id']} slide={slide} />
					))}
				</Slider>
			</div>
		);
	}
	return <div></div>;
}
