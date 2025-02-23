"use client";


import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import TopArticle from "../../../components/artikel/ramadan-public-lecture/TopArticle";
import RegularArticles1 from "../../../components/artikel/ramadan-public-lecture/RegularArticle1";
import RegularArticles2 from "../../../components/artikel/ramadan-public-lecture/RegularArticle2";
import HotArticle from "../../../components/artikel/ramadan-public-lecture/HotArticle";



export default function BigAgendaRamadan() {

	return (
		<section className="font-body">
			{/* Top Article */}
			<TopArticle />

			<main className="p-4 mb-10 w-11/12 mx-auto">
				<div className="relative z-20 lg:mx-auto bg-gradient-to-r from-white via-[#15575B] to-white lg:bg-transparent lg:p-0 h-10 lg:h-20 max-w-7xl mx-auto">
					<p className="lg:text-3xl text-xl font-semibold text-white text-center mx-auto absolute top-1 lg:top-5 w-full italic">
						Ramadan Public Lecture
					</p>
				</div>

				<ul>
				
					<RegularArticles1 />
					<RegularArticles2 />
					<HotArticle />
				
				</ul>

				{/* Back to Home Article */}
				<Link href="/artikel">
					<button className="py-2 px-4 border-4 border-black bg-orangeCS rounded-full flex font-medium items-center italic mt-10 active:bg-orange-500 hover:bg-orange-500 ">
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

						<p className="ml-2 ">Back to Home</p>
					</button>
				</Link>

			</main>
		</section>
	);
}
