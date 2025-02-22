"use client";

import { Article, fetchArticleById } from "@/app/lib/article";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailArtikel() {
	const [article, setArticle] = useState<Article | null>(null);
	const { id } = useParams(); // Destructuring langsung dari useParams

	useEffect(() => {
		const getArticle = async () => {
			if (!id) return; // Pastikan id tersedia sebelum fetch

			const data = await fetchArticleById(Number(id)); // Pastikan id dikonversi ke angka
			setArticle(data);
		};

		getArticle();
	}, [id]); // Hanya tergantung pada id

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
			<main className="p-2 lg:w-11/12 lg:mx-auto lg:mt-32 font-body">
				<h1 className="lg:text-4xl md:text-2xl text-xl font-semibold lg:w-11/12 lg:mx-auto ">
					{article.title}
				</h1>

				<div className="flex items-center gap-5 lg:text-2xl mt-6 lg:ml-11">
					<p className="text-orangeCS italic font-semibold">
						RDK <span className="text-greenCS">News</span>
					</p>
					<Image
						src="/logo.png"
						alt="Logo RDK"
						width={30}
						height={30}
						className="z-30"
					/>
					<div className="w-[3px] h-8 bg-greenCS"></div>
					{/* Ini diganti jg JANGAN LUPA FORMAT */}
					<p className="font-light italic text-greenCS ">
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

				<div className="p-2 rounded mt-4 lg:mt-10 lg:w-2/3 lg:mx-auto max-w-screen-2xl">
					<Image
						src={`${article.article_images[0].publicUrl}`}
						alt="Kajian Samudra"
						width={500}
						height={10}
						className="lg:h-[80vh] lg:w-[700px] lg:h-[80vh] md:h-[70vh] md:w-[600px] h-[60vh] object-cover mx-auto"
					/>

					<p className="italic mt-5 text-center text-sm w-[90%] md:w-[85%] lg:w-full  mx-auto">
						{article.article_images[0].image_description}
					</p>
				</div>

				{/* Isinya masih belum tepat */}
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

				<Link href={`/artikel`}>
					<button className="py-2 px-4 border-2 md:border-[3px] lg:border-4 border-black bg-orangeCS rounded-full flex font-medium items-center italic mt-10 active:bg-orange-500 hover:bg-orange-500 ">
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
				</Link>
			</main>
		</section>
	);
}
