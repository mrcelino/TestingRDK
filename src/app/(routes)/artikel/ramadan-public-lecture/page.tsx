"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const news = [
	{
		id: 1,
		title:
			"Ratusan Mahasiswa UGM ramaikan acara Ramadan Festival UGM. Presiden RI, Prabowo Subianto beri apresiasi penuh!",
		image: "/images/artikel/kajian.png",
		preview:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.",
	},
	{
		id: 2,
		title:
			"Mahasiswa UGM menyandang gelar sebagai soerang agent terbaik di Indonesia",
		image: "/images/artikel/kajian-2.png",
		preview:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.",
	},
	{
		id: 3,
		title: "Kajian Ust Khalid",
		image: "/images/artikel/kajian-3.jpg",
		preview:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.",
	},
	{
		id: 4,
		title: "Kajian Ust Khalid",
		image: "/images/artikel/kajian-4.jpg",
		preview:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.",
	},
	{
		id: 5,
		title: "Kajian Ust Khalid",
		image: "/images/artikel/kajian-5.jpg",
		preview:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.",
	},
];

export default function RamadanPublicLecture() {
	const pathname = usePathname();
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section>
			{/* Hero Slider */}
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

								<div className="absolute lg:bottom-[11rem] lg:left-[4rem] top-[7rem] left-4 flex gap-5 items-center z-20 text-xs ">
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
									<p className="font-light italic text-white">March, 12 2025</p>
								</div>

								<div className="absolute lg:bottom-10 lg:text-3xl text-center font-semibold italic text-white p-4 lg:w-[65%] block lg:mx-[14rem] z-20 bottom-5 w-full">
									{slide.title}
								</div>

								<Image
									src="/images/smoke-green.png"
									alt="Logo RDK"
									width={2000}
									height={100}
									className="absolute bottom-0 left-0 right-0 lg:h-96 z-10 h-[10rem]"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Tombol Navigasi */}
				<div className="custom-swiper-button-prev absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer hover:text-gray-200 text-white lg:text-5xl hidden lg:block">
					❮
				</div>

				<div className="custom-swiper-button-next absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer hover:text-gray-200 text-white lg:text-5xl hidden lg:block">
					❯
				</div>
			</div>

			<main className="p-4 mb-10 w-11/12 mx-auto">
				<div className="relative z-20 lg:mx-auto bg-gradient-to-r from-white via-[#15575B] to-white lg:bg-transparent lg:p-0 h-10 lg:h-20">
					<p className="lg:text-3xl text-xl font-semibold text-white text-center mx-auto absolute top-1 lg:top-5 w-full italic">
						Ramadan Public Lecture
					</p>
				</div>

				{/* Kajian RPL */}
				<ul>
					{/* Top News on the right */}
					<li>
						<Swiper
							navigation={{
								nextEl: ".custom-swiper-button-next",
								prevEl: ".custom-swiper-button-prev",
							}}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							loop={true}
							modules={[Navigation, Autoplay]}
							slidesPerView={1}
							breakpoints={{
								640: {
									slidesPerView: 1,
								},
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 3,
								},
							}}
							onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
						>
							{news.map((slide, index) => {
								const isHighlighted = index === (activeIndex + 2) % news.length; // Ensure highlighting works with looping

								return (
									<SwiperSlide key={index}>
										<div
											className={`bg-white lg:shadow-lg border rounded-3xl my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[15rem] ${
												isHighlighted ? "z-10 object-cover" : "lg:w-[90%]"
											} `}
										>
											<Link href="/artikel/ramadan-public-lecture/1">
												<Image
													alt="Mimbar Subuh"
													src={slide.image}
													width={500}
													height={300}
													className={`rounded-t-3xl bg-black h-40 object-cover`}
												/>
												<div className="flex mx-4">
													<Image
														alt="samudra"
														src="/svg/like.svg"
														width={48}
														height={48}
														className="transition-transform scale-x-100 hover:scale-110 transition-transform duration-300 ease-in-out"
													/>
													<h3 className="p-4 text-center font-bold italic text-greenCS text-sm ">
														Novelis terkenal, JS. Khairen{" "}
														<span className="font-normal">
															ajak mahasiswa perbanyak literasi di UGM
														</span>
													</h3>
												</div>
											</Link>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</li>

					{/* Norma News */}
					<li className="mt-4">
						<Swiper
							spaceBetween={20}
							navigation={{
								nextEl: ".custom-swiper-button-next",
								prevEl: ".custom-swiper-button-prev",
							}}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							loop={true}
							modules={[Navigation, Autoplay]}
							slidesPerView={1}
							breakpoints={{
								640: {
									slidesPerView: 1,
								},
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 3,
								},
							}}
						>
							{news.map((slide, index) => {
								return (
									<SwiperSlide key={index}>
										<div className="bg-white lg:shadow-lg border rounded-3xl my-4 transition-transform duration-300 ease-in-out hover:scale-105 h-[15rem] ">
											<Link href="/artikel/ramadan-public-lecture/1">
												<Image
													alt="Mimbar Subuh"
													src={slide.image}
													width={400}
													height={300}
													className={`rounded-t-3xl bg-black h-40 object-cover`}
												/>
												<div className="flex mx-4">
													<Image
														alt="samudra"
														src="/svg/like.svg"
														width={48}
														height={48}
														className="transition-transform scale-x-100 hover:scale-110 transition-transform duration-300 ease-in-out"
													/>
													<h3 className="p-4 text-center font-bold italic text-greenCS text-sm ">
														Novelis terkenal, JS. Khairen{" "}
														<span className="font-normal">
															ajak mahasiswa perbanyak literasi di UGM
														</span>
													</h3>
												</div>
											</Link>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</li>

					{/* Hot News */}
					<li className="mt-6 text-white">
						<Swiper
							spaceBetween={10}
							navigation={{
								nextEl: ".custom-swiper-button-next",
								prevEl: ".custom-swiper-button-prev",
							}}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							loop={true}
							modules={[Navigation, Autoplay]}
							slidesPerView={1}
							breakpoints={{
								640: {
									slidesPerView: 1,
								},
								768: {
									slidesPerView: 2,
								},
							}}
						>
							{news.map((slide, index) => (
								<SwiperSlide key={index}>
									<div className="relative transition-transform duration-300 ease-in-out hover:scale-105 ">
										{/* Gambar utama */}
										<Image
											alt="Mimbar Subuh"
											src={slide.image}
											width={600}
											height={400}
											className="lg:h-[400px] h-[300px] object-cover"
										/>

										{/* Informasi RDK News */}
										<div className="absolute bottom-[8rem] left-[2rem] flex gap-5 items-center z-30 text-xs">
											<p className="lg:text-sm text-orangeCS italic font-semibold">
												RDK <span className="text-white">News</span>
											</p>
											<Image
												src="/logo.png"
												alt="Logo RDK"
												width={16}
												height={16}
												className="z-30"
											/>
											<div className="lg:w-[3px] w-[1px] lg:h-8 h-6 bg-white"></div>
											<p className="font-light italic text-white">
												March, 12 2025
											</p>
										</div>

										{/* Judul Artikel */}
										<div className="absolute bottom-5 text-center text-sm lg:text-base font-semibold italic text-white p-4 lg:w-[80%] w-full left-1/2 transform -translate-x-1/2 z-30">
											{slide.title}
										</div>

										{/* Efek Smoke Green */}
										<Image
											src="/images/smoke-green.png"
											alt="Logo RDK"
											width={2000}
											height={1000}
											className="absolute bottom-0 left-0 right-0 z-20 h-[250px]"
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</li>
				</ul>

				{/* Back to home */}
				<Link href="/artikel">
					<button className="py-2 px-4 border-4 border-black bg-orangeCS rounded-full flex font-medium items-center italic mt-10 active:bg-orange-500 hover:bg-orange-500">
						<svg
							width="26"
							height="26"
							viewBox="0 0 26 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M24 12.5H4M2 14.5L13 3.5M2 12.5L13 21.5"
								stroke="black"
								strokeWidth="3"
							/>
						</svg>

						<p className="ml-2">Back to Home</p>
					</button>
				</Link>
			</main>
		</section>
	);
}
