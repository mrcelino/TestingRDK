"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Article, fetchArticles, updateArticleLike } from "@/app/lib/article";

export default function Samudra() {
	const [articles, setArticles] = useState<Article[]>([]);
	const [likedArticles, setLikedArticles] = useState<Record<number, boolean>>(
		{}
	);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getArticles = async () => {
			const data = await fetchArticles();
			setArticles(data);
			setIsLoading(false);
		};
		getArticles();
	}, []);

	const handleLike = async (articleId: number) => {
		// Optimistic UI update
		setArticles((prevArticles) =>
			prevArticles.map((article) =>
				article.id === articleId
					? {
							...article,
							like: article.like + (likedArticles[articleId] ? -1 : 1),
					  }
					: article
			)
		);

		// Pastikan state terbaru digunakan
		setLikedArticles((prev) => {
			const newLikedArticles = { ...prev, [articleId]: !prev[articleId] };

			// Update backend dengan nilai terbaru
			updateArticleLike(articleId, newLikedArticles[articleId] ? 1 : -1).catch(
				() => {
					// Jika gagal, rollback UI
					setArticles((prevArticles) =>
						prevArticles.map((article) =>
							article.id === articleId
								? {
										...article,
										like: article.like + (newLikedArticles[articleId] ? -1 : 1),
								  }
								: article
						)
					);
					setLikedArticles(prev); // Rollback state like
				}
			);

			return newLikedArticles;
		});
	};

	return (
		<li className="mb-10 max-w-7xl mx-auto">
			{/* Title and Nav View More */}
			<div className="flex justify-between items-center">
				<div>
					<h1 className=" text-lg lg:text-2xl font-semibold text-greenCS italic ">
						Samudra
					</h1>
					<div className="h-0.5 bg-greenCS lg:mt-2 lg:w-[25rem]"></div>
				</div>

				<Link href={"/artikel/samudra"}>
					<button className="text-greenCS font-semibold italic hover:scale-105">
						View More...
					</button>
				</Link>
			</div>

			{isLoading ? (
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
					}}
					loop={true}
					modules={[Navigation, Autoplay]}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
				>
					{articles.length > 0 ? (
						articles
							.filter((slide) => slide.category === "Samudera")
							.map((slide) => {
								

								return (
									<SwiperSlide key={slide.id}>
										<div
											className={`my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[17rem] max-w-lg mx-auto`}
										>
											<Link
												href={`/artikel/${slide.id}`}
												passHref
												className="max-w-7xl"
											>
												<Image
													alt={slide.title}
													src={
														slide.article_images?.[0]?.publicUrl ||
														"/default.jpg"
													}
													width={1000}
													height={300}
													className="rounded-t-3xl bg-black h-44 w-[500px] xl:w-full object-cover rounded-t-3xl "
												/>
											</Link>
											<div className="flex bg-white rounded-b-3xl border-2 relative">
												<div
													className="absolute left-2 top-6 cursor-pointer"
													onClick={() => handleLike(slide.id)}
												>
													<Image
														alt="like"
														src={
															likedArticles[slide.id]
																? "/svg/like-filled.svg"
																: "/svg/like.svg"
														}
														width={36}
														height={36}
														className="transition-transform scale-x-100 hover:scale-110 transition-transform duration-300 ease-in-out"
													/>

													<p className="text-greenCS text-center font-heading text-sm">
														{slide.like}
													</p>
												</div>

												<h3 className="p-5 text-center font-bold italic text-greenCS text-sm ml-8">
													{slide.title}
												</h3>
											</div>
										</div>
									</SwiperSlide>
								);
							})
					) : (
						<div className="text-center py-4 text-gray-500">
							<p className="font-heading text-lg">Kajian Belum tersedia</p>
						</div>
					)}
				</Swiper>
			)}
		</li>
	);
}
