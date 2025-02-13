"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import { fetchArticles, Article } from "@/app/lib/article";
import { useEffect } from "react";
import { Arima } from "next/font/google";

export default function RegularArticle() {
	const [articles, setArticles] = useState<Article[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getArticles = async () => {
			const data = await fetchArticles();
			setArticles(data);
			setLoading(false);
		};

		getArticles();
	}, []);

	return (
		<li className="mt-4">
			{loading ? (
				// Skeleton Loader
				<div className="flex space-x-4 mt-6">
					{[...Array(3)].map((_, index) => (
						<div
							key={index}
							className="bg-gray-200 animate-pulse w-[90%] lg:w-[25rem] h-[15rem] rounded-3xl"
						></div>
					))}
				</div>
			) : (
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
					slidesPerView={1} // Default for mobile
					breakpoints={{
						640: { slidesPerView: 1 }, // Mobile
						768: { slidesPerView: 2 }, // Tablet
						1024: { slidesPerView: 3 }, // Desktop
					}}
				>
					{articles.length > 0 ? (
						// Render articles
						articles
							.filter((slide) => slide.category === "Samudera")
							.map((slide) => {
								
								return (
									<SwiperSlide key={slide.id}>
										
										<div
											className={`bg-white lg:shadow-lg border rounded-3xl my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[15rem]  `}
										>
											<Link href={`/artikel/${slide.id}`} passHref>
												<Image
													alt={slide.title}
													src={
														slide.article_images?.[0]?.publicUrl ||
														"/default.jpg"
													}
													width={500}
													height={300}
													className="rounded-t-3xl bg-black h-40 object-cover"
												/>
												<div className="flex mx-4">
													<Image
														alt="icon love"
														src="/svg/like.svg"
														width={48}
														height={48}
														className="transition-transform scale-x-100 hover:scale-110 transition-transform duration-300 ease-in-out"
													/>

													{/* Ganti p-2 ketika pakai api atau ikutin yang hot aja */}
													<h3 className="p-4 text-center font-bold italic text-greenCS text-sm ">
														Novelis terkenal, JS. Khairen
														<span className="font-normal">
															ajak mahasiswa perbanyak literasi di UGM
														</span>
													</h3>
												</div>
											</Link>
										</div>
									</SwiperSlide>
								);
							})
					) : (
						<div className="text-center py-4 text-gray-500">
							Tidak ada kajian
						</div>
					)}
				</Swiper>
			)}
		</li>
	);
}
