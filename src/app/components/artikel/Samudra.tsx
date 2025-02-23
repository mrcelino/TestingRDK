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
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const getArticles = async () => {
			try {
				const data = await fetchArticles();
				setArticles(data);
			} catch (error) {
				console.error("Failed to fetch articles", error);
			} finally {
				setIsLoading(false);
			}
		};
		getArticles();
	}, []);

	const samudraArticles = articles
		.filter((slide) => slide.category === "Samudera" && slide.like >= 50)
		.slice(0, 5);

	const displayedArticles =
		samudraArticles.length > 0
			? samudraArticles
			: articles.filter((slide) => slide.category === "Samudera");

	const handleLike = async (articleId: number) => {
		setArticles((prev) =>
			prev.map((article) =>
				article.id === articleId
					? {
							...article,
							like: article.like + (likedArticles[articleId] ? -1 : 1),
					  }
					: article
			)
		);

		setLikedArticles((prev) => {
			const updatedLikes = { ...prev, [articleId]: !prev[articleId] };
			updateArticleLike(articleId, updatedLikes[articleId] ? 1 : -1).catch(
				() => {
					setArticles((prev) =>
						prev.map((article) =>
							article.id === articleId
								? {
										...article,
										like: article.like + (updatedLikes[articleId] ? -1 : 1),
								  }
								: article
						)
					);
					setLikedArticles(prev);
				}
			);
			return updatedLikes;
		});
	};

	return (
		<li className="mb-10 max-w-7xl mx-auto">
			<div className="flex justify-between items-center">
				<div>
					<h1 className="text-lg lg:text-2xl font-semibold text-greenCS italic">
						Samudra
					</h1>
					<div className="h-0.5 w-[12rem] bg-greenCS lg:mt-2 lg:w-[25rem]"></div>
				</div>
				<Link href="/artikel/samudra">
					<button className="text-sm lg:text-base text-greenCS font-semibold italic hover:scale-105">
						View More...
					</button>
				</Link>
			</div>

			{isLoading ? (
				<div className="flex space-x-4 mt-6">
					{[...Array(3)].map((_, index) => (
						<div
							key={index}
							className={`bg-gray-200 animate-pulse w-[90%] lg:w-[25rem] h-[15rem] rounded-3xl ${
								index >= 1 ? "hidden sm:block" : ""
							} ${index >= 2 ? "hidden lg:block" : ""}`}
						></div>
					))}
				</div>
			) : displayedArticles.length > 0 ? (
				<Swiper
					spaceBetween={20}
					navigation={{
						nextEl: ".custom-swiper-button-next",
						prevEl: ".custom-swiper-button-prev",
					}}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					loop={true}
					modules={[Navigation, Autoplay]}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
				>
					{displayedArticles.map((slide) => (
						<SwiperSlide key={slide.id}>
							<div className="my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[18rem] max-w-lg mx-auto">
								<Link href={`/artikel/${slide.id}`} className="max-w-7xl">
									<Image
										alt={slide.title}
										src={slide.article_images?.[0]?.publicUrl || "/default.jpg"}
										width={1000}
										height={300}
										className="rounded-t-3xl bg-black h-44 w-[500px] xl:w-full object-cover"
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
											className="transition-transform hover:scale-110 duration-300"
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
					))}
				</Swiper>
			) : (
				<div className="text-center py-4 text-gray-500">
					<p className="font-heading text-lg">Kajian Belum tersedia</p>
				</div>
			)}
		</li>
	);
}
