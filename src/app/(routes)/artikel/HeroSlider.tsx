import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {news} from "./Data";


export default function HeroSlider() {
	return (
		<div className="relative w-full h-[36vh] lg:h-screen">
			<Swiper
				navigation={{
					nextEl: ".custom-swiper-button-next",
					prevEl: ".custom-swiper-button-prev",
				}}
				autoplay={{
					delay: 5000, // Slide otomatis setiap 5 detik
					disableOnInteraction: false, // Tetap auto slide meskipun user berinteraksi
				}}
				loop={true} // Slide akan terus berulang
				modules={[Navigation, Autoplay]}
				className="w-full h-full"
			>
				{news.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="relative w-full h-full">
							<Image
								src={slide.image}
								alt={slide.title}
								layout="fill"
								objectFit="cover"
							/>

							<div className="absolute lg:bottom-[0rem] lg:left-[4rem] top-[7rem] left-4 flex gap-5 items-center z-20 text-xs ">
								<p className="lg:text-xl text-orangeCS italic font-semibold">
									RDK <span className="text-white">News</span>
								</p>
								<Image
									src="/logo.png"
									alt="Logo RDK"
									width={30}
									height={30}
									className="z-20 hidden lg:block"
								/>

								<Image
									src="/logo.png"
									alt="Logo RDK"
									width={20}
									height={20}
									className="z-20 lg:hidden"
								/>

								<div className="lg:w-[3px] w-[1px] lg:h-8 h-6 bg-white"></div>
								<p className="font-light italic text-white lg:text-sm">
									March, 12 2025
								</p>
							</div>

							<div className="absolute lg:bottom-10 lg:text-3xl text-center font-semibold italic text-white p-4 lg:w-[65%] block lg:mx-[14rem] z-20 bottom-5 w-full">
								{slide.title}
							</div>

							<Image
								src="/images/smoke-green.png"
								alt="smoke-rdk"
								width={2000}
								height={100}
								className="absolute bottom-0 left-0 right-0 lg:h-[30rem] z-10 h-[10rem]"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Tombol Navigasi */}
			<div className="custom-swiper-button-prev absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer hover:text-gray-200 text-white lg:text-6xl hidden lg:block">
				❮
			</div>

			<div className="custom-swiper-button-next absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer hover:text-gray-200 text-white lg:text-6xl hidden lg:block">
				❯
			</div>
		</div>
	);
}
