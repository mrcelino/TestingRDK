"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Article } from "@/app/lib/article";
import Link from "next/link";

interface Props {
	articles: Article[];
	isLoading: boolean;
}

export default function TopArticle({ articles, isLoading }: Props) {
	const regularArticles = articles.filter(
		(slide) => slide.category === "Mimbar_Subuh" && slide.like >= 100
	);

	const displayedArticles =
		regularArticles.length > 0
			? regularArticles
			: articles.filter((slide) => slide.category === "Mimbar_Subuh");

	return (
		<div className="relative w-full  lg:h-screen">
			{isLoading ? (
				<div className="flex items-center justify-center h-96 md:h-[500px] mt-5 md:mt-8 lg:mt-10 scale-50 md:scale-75 lg:scale-100">
					<div className="loader"></div>
					<style jsx>{`
						.loader {
							border: 8px solid #f4aa3d;
							border-top: 8px solid #15575b;
							border-radius: 50%;
							width: 50px;
							height: 50px;
							animation: spin 1s linear infinite;
						}

						@keyframes spin {
							0% {
								transform: rotate(0deg);
							}
							100% {
								transform: rotate(360deg);
							}
						}
					`}</style>
				</div>
			) : displayedArticles.length > 0 ? (
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
					className="w-full h-full"
				>
					{displayedArticles.slice(0, 3).map((article) => (
						<SwiperSlide key={article.id}>
							<div className="relative w-full h-full ">
								<Link href={`/artikel/${article.id}`}>
									{/* Menampilkan gambar dari article_images */}
									{article.article_images.length > 0 ? (
										<Image
											src={
												article.article_images[0].publicUrl ||
												"/images/default.png"
											}
											alt={article.title}
											width={1507}
											height={805}
											className="w-full md:h-[520px]  md:h-[520px]  object-cover lg:h-full"
										/>
									) : (
										<div className="w-full h-full bg-gray-500 flex items-center justify-center">
											<p className="text-white">Gambar tidak tersedia</p>
										</div>
									)}

									<div className="absolute 2xl:bottom-[16rem] lg:bottom-[14rem] lg:left-[4rem] md:bottom-[10rem] bottom-[8rem] md:left-[4rem]  left-4 flex gap-5 items-center z-20 text-xs ">
										<p className="lg:text-xl text-orangeCS italic font-semibold">
											RDK <span className="text-white">News</span>
										</p>
										<Image
											src="/svg/logo-rdk.svg"
											alt="Logo RDK"
											width={30}
											height={30}
											className="hidden lg:block"
										/>
										<Image
											src="/svg/logo-rdk.svg"
											alt="Logo RDK"
											width={20}
											height={20}
											className="lg:hidden"
										/>
										<div className="lg:w-[3px] w-[1px] lg:h-8 h-6 bg-white"></div>
										<p className="font-light italic text-white lg:text-lg">
											{new Date(article.date).toLocaleDateString("id-ID", {
												day: "numeric",
												month: "long",
												year: "numeric",
											})}
										</p>
									</div>

									{/* Judul Artikel */}
									<div className=" absolute lg:bottom-16 md:bottom-14 bottom-5 text-center font-semibold italic text-white p-4  z-50 w-full lg:text-3xl md:text-xl lg:w-[75%] md:w-[70%] left-1/2 transform -translate-x-1/2">
										{article.title}
									</div>

									<Image
										src="/images/smoke-green.png"
										alt="smoke-rdk"
										width={1507}
										height={100}
										className="absolute bottom-0 left-0 right-0 lg:h-[30rem] md:h-[25rem] h-[16rem] w-full"
									/>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<p className="text-center text-white">Memuat artikel...</p>
			)}

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
