"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";

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

export default function Artikel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeIndexSmd, setActiveIndexSmd] = useState(0);
	const [activeIndexMs, setActiveIndexMs] = useState(0);

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

			<article className="p-4 w-11/12 mx-auto">
				<ul>
					{/* Big Agenda Ramadan */}
					<li>
						<h1 className=" text-lg lg:text-2xl font-semibold text-greenCS italic ">
							Big Agenda Ramadan
						</h1>
						<div className="h-0.5 bg-greenCS w-1/2 lg:w-1/3 lg:mt-2"></div>
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
								640: { slidesPerView: 1 }, // Mobile (default)
								768: { slidesPerView: 2 }, // Tablet
								1024: { slidesPerView: 3 }, // Desktop
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
											<Link href="/artikel/big-agenda-ramadan">
												<Image
													alt={slide.title}
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

					{/* Samudra */}
					<li>
						<h1 className=" text-lg lg:text-2xl font-semibold text-greenCS italic ">
							Samudra
						</h1>
						<div className="h-0.5 bg-greenCS w-1/2 lg:w-1/3 lg:mt-2"></div>
						<Swiper
							navigation={{
								nextEl: ".custom-swiper-button-next",
								prevEl: ".custom-swiper-button-prev",
							}}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
								reverseDirection: true,
							}}
							loop={true}
							modules={[Navigation, Autoplay]}
							slidesPerView={1} // Default untuk mobile
							breakpoints={{
								640: { slidesPerView: 1 }, // Mobile (default)
								768: { slidesPerView: 2 }, // Tablet
								1024: { slidesPerView: 3 }, // Desktop
							}}
							onSlideChange={(swiper) => setActiveIndexSmd(swiper.realIndex)}
						>
							{news.map((slide, index) => {
								const isHighlighted = index === activeIndexSmd % news.length; // Ensure highlighting works with looping

								return (
									<SwiperSlide key={index}>
										<div
											className={`bg-white lg:shadow-lg border rounded-3xl my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[15rem] ${
												isHighlighted ? "z-10 object-cover" : "w-[90%] ml-5"
											} `}
										>
											<Link href="/artikel/samudra">
												<Image
													alt={slide.title}
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

					{/* RPL */}
					<li className="mt-4">
						<h1 className=" text-lg lg:text-2xl font-semibold text-greenCS italic ">
							Ramadan Public Lecture
						</h1>
						<div className="h-0.5 bg-greenCS w-1/2 lg:w-1/3 lg:mt-2"></div>
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
							slidesPerView={1} // Default untuk mobile
							breakpoints={{
								640: { slidesPerView: 1 }, // Mobile (default)
								768: { slidesPerView: 2 }, // Tablet
								1024: { slidesPerView: 3 }, // Desktop
							}}
						>
							{news.map((slide, index) => {
								return (
									<SwiperSlide key={index}>
										<div className="bg-white lg:shadow-lg border rounded-3xl my-4 transition-transform duration-300 ease-in-out hover:scale-105 h-[15rem] ">
											<Link href="/artikel/ramadan-public-lecture">
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

					{/* mimbar subuh */}
					<li>
						<h1 className=" text-lg lg:text-2xl font-semibold text-greenCS italic ">
							Mimbar Subuh
						</h1>
						<div className="h-0.5 bg-greenCS w-1/2 lg:w-1/3 lg:mt-2"></div>
						<Swiper
							navigation={{
								nextEl: ".custom-swiper-button-next",
								prevEl: ".custom-swiper-button-prev",
							}}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
								reverseDirection: true,
							}}
							loop={true}
							modules={[Navigation, Autoplay]}
							slidesPerView={1} // Default untuk mobile
							breakpoints={{
								640: { slidesPerView: 1 }, // Mobile (default)
								768: { slidesPerView: 2 }, // Tablet
								1024: { slidesPerView: 3 }, // Desktop
							}}
							onSlideChange={(swiper) => setActiveIndexMs(swiper.realIndex)}
						>
							{news.map((slide, index) => {
								const isHighlighted =
									index === (activeIndexMs + 1) % news.length; // Ensure highlighting works with looping

								return (
									<SwiperSlide key={index}>
										<div
											className={`bg-white lg:shadow-lg border rounded-3xl my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[15rem] ${
												isHighlighted ? "z-10 object-cover" : "lg:w-[90%] lg:ml-5"
											} `}
										>
											<Link href="/artikel/mimbar-subuh">
												<Image
													alt={slide.title}
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
				</ul>
			</article>
		</section>
	);
}
