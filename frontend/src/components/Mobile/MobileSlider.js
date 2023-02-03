import { React, useEffect, useState } from "react";

import MobileCardTemp from "./MobileCardTemp";

import Slider from "react-slick";
const url_proxy = "https://syntax-terminators-hosting-api.vercel.app/";

export default function MobileSlider() {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		console.log("GOT URL");
		fetch(`${url_proxy}products/showdb`)
			.then((res) => {
				jsonRes = res.json();
				setProduct(jsonRes));
				console.log(jsonRes);
				console.log("GOT JSON");
			})
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
	return (
		<div className="m-4">
			<h1 className="text-2xl">Mobiles</h1>
			<Slider {...settings} className=" -mb-16 m-8 ">
				{product.map((mobile) => {
					const { _id } = mobile;
					return (
						<div className="px-2">
							<MobileCardTemp {...mobile} key={_id} />
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
