"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Article, fetchArticles } from "@/app/lib/article";

export default function HotArticle() {
	const [articles, setArticles] = useState<Article[]>([]);
	const [loading, setLoading] = useState(true);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const getArticles = async () => {
			const data = await fetchArticles();
			setArticles(data);
			setLoading(false);
		};
		getArticles();
	}, []);

	return (
		<li>
			{loading ? (
				<div className="flex space-x-4 py-6">
					{Array.from({ length: 3 }).map((_, index) => (
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
					}}
					loop={true}
					modules={[Navigation, Autoplay]}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 1, spaceBetween: 20 },
						768: { slidesPerView: 2, spaceBetween: 20 },
						1024: { slidesPerView: 3, spaceBetween: 0 },
					}}
					onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				>
					{articles.length > 0 ? (
						articles
							.filter((slide) => slide.category === "Big_Agenda_Ramadhan")
							.map((slide, index) => {
								const totalBigAgenda = articles.filter(
									(slide) => slide.category === "Big_Agenda_Ramadhan"
								).length;
								const isHighlighted =
									index === (activeIndex + 2) % totalBigAgenda;

								return (
									<SwiperSlide key={slide.id}>
										<div
											className={`bg-white lg:shadow-lg border rounded-3xl my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[15rem] ${
												isHighlighted
													? "z-10 lg:w-[25rem] lg:-translate-x-6"
													: "lg:w-[90%]"
											}`}
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
														alt="like"
														src="/svg/like.svg"
														width={48}
														height={48}
														className="transition-transform scale-x-100 hover:scale-110 transition-transform duration-300 ease-in-out"
													/>
													<h3 className=" text-center font-bold italic text-greenCS text-sm md:text-xs lg:text-sm p-2 md:p-3 lg:p-2">
														{slide.title}
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
