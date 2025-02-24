"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Article, updateArticleLike } from "@/app/lib/article";
import LoadingSkeleton from "../LoadingSkeleton";

interface Props {
	articles: Article[];
	isLoading: boolean;
}

export default function RegularArticles2({ articles, isLoading }: Props) {
	const [article, setArticles] = useState<Article[]>([]);

	useEffect(() => {
		const fetchArticles = async () => {
			setArticles(articles);
		};
		fetchArticles();
	}, [articles]);

	const regularArticles = article.filter(
		(slide) =>
			slide.category === "Samudera" 
	);

	const handleLike = async (articleId: number) => {
		// Optimistic UI update
		updateArticleLike(articleId);
		setArticles((prevArticles) =>
			prevArticles.map((article) =>
				article.id === articleId
					? {
							...article,
							hasLiked: !article.hasLiked,
							like: article.hasLiked ? article.like - 1 : article.like + 1,
					  }
					: article
			)
		);
	};

	return (
		<li className="mb-10 max-w-7xl mx-auto">
			{isLoading ? (
				<LoadingSkeleton />
			) : regularArticles.length > 0 ? (
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
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
				>
					{regularArticles.map((slide) => (
						<SwiperSlide key={slide.id}>
							<div className="my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[18rem] max-w-lg mx-auto">
								<Link
									href={`/artikel/${slide.id}`}
									passHref
									className="max-w-7xl"
								>
									<Image
										alt={slide.title}
										src={slide.article_images?.[0]?.publicUrl || "/default.jpg"}
										width={1000}
										height={300}
										className="rounded-t-3xl bg-black h-44 w-[500px] xl:w-full object-cover"
									/>
								</Link>
								<div className="flex justify-center bg-white rounded-b-3xl border-2 relative">
									<div
										className="absolute left-2 top-6 cursor-pointer"
										onClick={() => handleLike(slide.id)}
									>
										<Image
											alt="like"
											src={
												// likedArticles[slide.id]
												slide.hasLiked
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

									<Link href={`/artikel/${slide.id}`}>
										<h3 className="p-5 text-center font-bold italic flex flex-col justify-center items-center text-greenCS text-sm ml-8 xl:min-h-[6.8rem]  min-h-[7.6rem]">
											{slide.title}
										</h3>
									</Link>
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
