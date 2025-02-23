"use client";

import { Article, fetchArticleById } from "@/app/lib/article";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DetailArtikel() {
	const [article, setArticle] = useState<Article | null>(null);
	const { id } = useParams();
	const router = useRouter();
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const getArticle = async () => {
			if (!id) return;

			const data = await fetchArticleById(Number(id));
			setArticle(data);
		};

		getArticle();
	}, [id]);

	if (!article) {
		return (
			<section className="p-6 animate-pulse">
				<main className="p-2 lg:w-11/12 lg:mx-auto lg:mt-32">
					<div className="h-10 w-3/4 bg-gray-300 rounded-lg"></div>
					<div className="flex items-center gap-5 mt-6">
						<div className="h-6 w-24 bg-gray-300 rounded"></div>
						<div className="w-8 h-8 bg-gray-300 rounded-full"></div>
						<div className="w-[3px] h-8 bg-gray-300"></div>
						<div className="h-5 w-32 bg-gray-300 rounded"></div>
					</div>

					<div className="p-2 rounded mt-4 lg:mt-10 lg:w-3/4 lg:mx-auto">
						<div className="h-[35vh] lg:h-[70vh] w-full bg-gray-300 rounded"></div>
						<div className="h-4 w-3/4 bg-gray-300 rounded mt-4"></div>
						<div className="h-4 w-1/2 bg-gray-300 rounded mt-2"></div>
					</div>

					<div className="mt-10 space-y-4">
						<div className="h-4 w-full bg-gray-300 rounded"></div>
						<div className="h-4 w-5/6 bg-gray-300 rounded"></div>
						<div className="h-4 w-3/4 bg-gray-300 rounded"></div>
						<div className="h-4 w-2/3 bg-gray-300 rounded"></div>
					</div>
				</main>
			</section>
		);
	}

	return (
		<section className="p-6 max-w-screen-2xl mx-auto">
			<main className="p-2 lg:w-11/12 lg:mx-auto lg:mt-32">
				{/* Title */}
				<h1 className="lg:text-4xl md:text-2xl text-xl font-semibold lg:w-11/12 lg:mx-auto mt-16 lg:mt-0 ">
					{article.title}
				</h1>

				{/* RDK News and Date */}
				<div className="flex items-center gap-5 lg:text-2xl mt-6 lg:ml-11">
					<p className="text-sm text-orangeCS italic font-semibold">
						RDK <span className="text-greenCS">News</span>
					</p>
					<Image src="/logo.png" alt="Logo RDK" width={20} height={20} />
					<div className="w-[2px] h-8 bg-greenCS"></div>
					<p className="font-light italic text-greenCS text-sm ">
						{new Date(article.date).toLocaleDateString("id-ID", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</p>
				</div>

				{/* Author and Editor */}
				<div className="flex gap-4 mt-6 lg:ml-12 text-greenCS text-xs md:text-base">
					<p className="font-semibold ">Penulis: {article.author}</p>
					<p className="font-semibold ml-4">Editor: {article.editor}</p>
				</div>

				{/* Image Slider */}
				<div className="p-2 rounded mt-4 lg:mt-10 lg:w-2/3 lg:mx-auto">
					{/* Carousel Wrapper */}
					<div className="carousel w-full overflow-hidden flex flex-row snap-x scroll-smooth">
						{article.article_images.map((image, index) => (
							<div
								key={index}
								className={`carousel-item flex-shrink-0 w-full ${
									activeIndex === index ? "block" : "hidden"
								}`}
							>
								<div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex justify-center">
									<Image
										src={image.publicUrl}
										alt="Carousel Image"
										width={1000}
										height={1000}
										className="rounded-lg object-cover"
									/>
								</div>
							</div>
						))}
					</div>

					{/* Navigation Buttons */}
					<div className="flex w-full justify-center gap-2 py-2 mt-2">
						{article.article_images.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 ${
									activeIndex === index ? "bg-gray-600" : "bg-gray-400"
								}`}
							></button>
						))}
					</div>

					{/* Image Description */}
					{article.article_images.length > 0 && (
						<p className="italic mt-2 text-center text-sm w-[90%] md:w-[85%] lg:w-full mx-auto">
							{article.article_images[activeIndex]?.image_description}
						</p>
					)}
				</div>

				{/* Content */}
				<article className="mt-10 text-justify font-greenCS  md:text-lg">
					{article.content.length > 0 &&
						article.content.map(
							(contentItem, contentIndex) =>
								contentItem.children.length > 0 &&
								contentItem.children.map((child, childIndex) => (
									<p className="mt-6" key={`${contentIndex}-${childIndex}`}>
										{child.text}
									</p>
								))
						)}
				</article>

				{/* Back Button */}
				<button
					onClick={() => router.back()} // Navigasi ke halaman sebelumnya
					className="py-2 px-4 border-2 md:border-[3px] lg:border-4 border-black bg-orangeCS rounded-full flex font-medium items-center italic mt-10 active:bg-orange-500 hover:bg-orange-500 "
				>
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
					<p className="ml-2">Back</p>
				</button>
			</main>
		</section>
	);
}
