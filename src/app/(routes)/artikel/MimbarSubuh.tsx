import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { news } from "./Data";
import { useState } from "react";
import Link from "next/link";

export default function MimbarSubuh() {
	const [activeIndexMs, setActiveIndexMs] = useState(0);
	return (
		<li>
			<h1 className=" text-lg lg:text-2xl font-semibold text-greenCS italic ">
				Mimbar Subuh
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
					const isHighlighted = index === (activeIndexMs + 1) % news.length; // Ensure highlighting works with looping

					return (
						<SwiperSlide key={index}>
							<div
								className={`bg-white lg:shadow-lg border rounded-3xl my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[15rem] ${
									isHighlighted ? "z-10 object-cover lg:w-[25rem] transform lg:-translate-x-4" : "lg:w-[90%] lg:ml-5"
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
	);
}
