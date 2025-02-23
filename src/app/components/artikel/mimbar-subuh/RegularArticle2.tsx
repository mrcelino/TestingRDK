"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Article, updateArticleLike } from "@/app/lib/article";

<<<<<<< HEAD:src/app/components/artikel/mimbar-subuh/RegularArticle2.tsx
export default function RegularArticles2() {
	const [articles, setArticles] = useState<Article[]>([]);
	const [likedArticles, setLikedArticles] = useState<Record<number, boolean>>(
		{}
	);
	const [isLoading, setIsLoading] = useState(true);
	const regularArticles = articles.filter(
		(slide) =>
			slide.category === "Mimbar_Subuh" &&
			slide.like > 0
	);

	// Jika regularArticles kosong, menggunakan semua artikel dengan kategori "Mimbar_Subuh"
	const displayedArticles =
		regularArticles.length > 0
			? regularArticles
			: articles.filter((slide) => slide.category === "Mimbar_Subuh");

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
					setLikedArticles(prev); // Rollback state
				}
			);

			return newLikedArticles;
		});
	};

	return (
		<li className="mb-10 max-w-7xl mx-auto">
			{isLoading ? (
				<div className="flex space-x-4 mt-6">
					{[...Array(3)].map((_, index) => (
						<div
							key={index}
							className="bg-gray-200 animate-pulse w-[90%] lg:w-[25rem] h-[15rem] rounded-3xl"
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
					{displayedArticles.map((slide) => (
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

									<Link href={`/artikel/${slide.id}`}>
										<h3 className="p-5 text-center font-bold italic text-greenCS text-sm ml-8">
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
=======
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

  // const [likedArticles, setLikedArticles] = useState<Record<number, boolean>>(
  // 	{}
  // );
  //   const [isLoading, setIsLoading] = useState(true);
  const regularArticles = article.filter(
    (slide) =>
      slide.category === "Mimbar_Subuh" && slide.like >= 0 && slide.like <= 50
  );

  // Jika regularArticles kosong, menggunakan semua artikel dengan kategori "Mimbar_Subuh"
  const displayedArticles =
    regularArticles.length > 0
      ? regularArticles
      : article.filter((slide) => slide.category === "Mimbar_Subuh");

  //   useEffect(() => {
  //     const getArticles = async () => {
  //       const data = await fetchArticles();
  //       setArticles(data);
  //       setIsLoading(false);
  //     };
  //     getArticles();
  //   }, []);

  // const handleLike = async (articleId: number) => {
  // 	// Optimistic UI update
  // 	setArticles((prevArticles) =>
  // 		prevArticles.map((article) =>
  // 			article.id === articleId
  // 				? {
  // 						...article,
  // 						like: article.like + (likedArticles[articleId] ? -1 : 1),
  // 				  }
  // 				: article
  // 		)
  // 	);

  // 	// Pastikan state terbaru digunakan
  // 	setLikedArticles((prev) => {
  // 		const newLikedArticles = { ...prev, [articleId]: !prev[articleId] };

  // 		// Update backend dengan nilai terbaru
  // 		updateArticleLike(articleId, newLikedArticles[articleId] ? 1 : -1).catch(
  // 			() => {
  // 				// Jika gagal, rollback UI
  // 				setArticles((prevArticles) =>
  // 					prevArticles.map((article) =>
  // 						article.id === articleId
  // 							? {
  // 									...article,
  // 									like: article.like + (newLikedArticles[articleId] ? -1 : 1),
  // 							  }
  // 							: article
  // 					)
  // 				);
  // 				setLikedArticles(prev); // Rollback state
  // 			}
  // 		);

  // 		return newLikedArticles;
  // 	});
  // };

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
        <div className="flex space-x-4 mt-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 animate-pulse w-[90%] lg:w-[25rem] h-[15rem] rounded-3xl"></div>
          ))}
        </div>
      ) : displayedArticles.length > 0 ? (
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
          }}>
          {displayedArticles.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="my-4 mt-6 transition-transform duration-300 ease-in-out hover:scale-105 h-[17rem] max-w-lg mx-auto">
                <Link
                  href={`/artikel/${slide.id}`}
                  passHref
                  className="max-w-7xl">
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
                    onClick={() => handleLike(slide.id)}>
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
                    <h3 className="p-5 text-center font-bold italic text-greenCS text-sm ml-8">
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
>>>>>>> 7e356a584f05ce2bcead4b15596178d4027896c3:src/app/(routes)/artikel/mimbar-subuh/RegularArticle2.tsx
}
