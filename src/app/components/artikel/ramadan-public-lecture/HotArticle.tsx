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

export default function HotArticle({ articles, isLoading }: Props) {
	const hotArticles = articles.filter(
		(slide) =>
			slide.category === "RPL" && slide.like >= 50 && slide.like <= 100
	);

	// Jika Hot Articles kosong, menggunakan semua artikel dengan kategori "RPL"
	const displayedArticles =
		hotArticles.length > 0
			? hotArticles
			: articles.filter((slide) => slide.category === "RPL");

	return (
		<li className="mt-6 text-white max-w-7xl mx-auto">
			{isLoading ? (
				<div className="flex space-x-4 py-6">
					{Array.from({ length: 2 }).map((_, index) => (
						<div
							key={index}
							className="bg-gray-200 animate-pulse w-[90%] lg:w-[1000px] lg:h-[500px] rounded-3xl"
						></div>
					))}
				</div>
			) : displayedArticles.length > 0 ? (
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
					{displayedArticles.slice(0,5).map((article) => (
						<SwiperSlide key={article.id}>
							<Link href={`/artikel/${article.id}`}>
								<div className="relative transition-transform duration-300 ease-in-out hover:scale-105 max-w-2xl mx-auto">
									{/* Gambar utama */}
									<Image
										alt="BAR"
										src={
											article.article_images?.[0]?.publicUrl || "/default.jpg"
										}
										width={800}
										height={400}
										className="lg:h-[400px] h-[300px] object-cover w-[600px] xl:w-[800px] "
									/>

									{/* Informasi RDK News */}
									<div className="absolute bottom-[8rem] md:bottom-[7rem] lg:bottom-[8rem] left-[2rem] flex gap-5 items-center z-30 text-xs lg:text-sm">
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
										<div className="lg:w-[3px] w-[1px] lg:h-6 h-6 bg-white"></div>
										<p className="font-light italic text-white lg:text-lg">
											{new Date(article.date).toLocaleDateString("id-ID", {
												day: "numeric",
												month: "long",
												year: "numeric",
											})}
										</p>
									</div>

									{/* Judul Artikel */}
									<div className="absolute bottom-5 text-center text-sm md:text-xs lg:text-base font-semibold italic text-white p-4 lg:w-[80%] md:w-[90%] w-full left-1/2 transform -translate-x-1/2 z-30 font-body">
										{article.title}
									</div>

									{/* Efek Smoke Green */}
									<Image
										src="/images/smoke-green.png"
										alt="Logo RDK"
										width={2000}
										height={1000}
										className="absolute bottom-0 left-0 right-0 z-20 h-[350px]"
									/>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<div className="flex space-x-4 py-6">
					{Array.from({ length: 3 }).map((_, index) => (
						<div
							key={index}
							className="bg-gray-200 animate-pulse w-[90%] lg:w-[25rem] h-[15rem] rounded-3xl"
						></div>
					))}
				</div>
			)}
		</li>
	);
}
