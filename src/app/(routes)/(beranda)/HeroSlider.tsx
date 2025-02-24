"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider() {
	const [isLanding, setIsLanding] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLanding(false);
		}, 2000); // Animasi berlangsung selama 2 detik

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="relative">
			<div>
				{/* Background Image */}
				<Image
					src="/images/home/hero-slider.jpg"
					alt="Hero Slider"
					height={805}
					width={1507}
					className="h-[350px] md:h-[600px] lg:h-[120vh] w-full object-cover object-center"
				/>

				{/* Overlay */}
				<Image
					src="/images/home/box_shadow.png"
					alt="Box Shadow"
					height={805}
					width={1507}
					className="absolute top-0 right-0 left-0 h-full w-full"
				/>
			</div>

			{/* Logo - Awalnya di tengah, lalu pindah ke posisi normal */}
			<Image
				src="/svg/logoordk.svg"
				alt="Hero Slider"
				height={42}
				width={160}
				className={`absolute transition-all duration-1000 hidden md:block ${
					isLanding
						? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[40%] scale-150"
						: "lg:top-[10rem] top-[12rem] md:left-10 lg:w-[20%] 2xl:h-[200px] 2xl:w-[30rem] 2xl:top-40 2xl:left-[0rem]"
				}`}
			/>

			{/* Logo untuk mobile */}
			<Image
				src="/svg/logoordk.svg"
				alt="Hero Slider"
				height={42}
				width={64}
				className={`z-20 absolute transition-all duration-1000 md:hidden ${
					isLanding
						? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] scale-150"
						: "top-28 left-5 w-[20%] max-w-7xl"
				}`}
			/>

			{/* Teks - Awalnya hidden, lalu muncul dengan animasi */}
			<div
				className={`z-20 absolute font-semibold text-white italic left-5 top-40 md:top-[18rem] lg:top-[19rem] max-w-7xl md:left-10 transition-all duration-1000 ${
					isLanding ? "opacity-0 translate-y-20" : "opacity-100"
				}`}
			>
				<p className="xl:text-[6rem] lg:text-[4rem] md:text-5xl text-3xl">
					Ramadhan Di
				</p>
				<p className="xl:text-[6rem] lg:text-[4rem] md:text-5xl text-3xl">
					Kampus
				</p>
				<p className="xl:text-[3rem] lg:text-[2rem] text-orangeCS md:text-2xl text-xl lg:mt-4">
					Universitas Gadjah Mada
				</p>
			</div>
		</div>
	);
}
