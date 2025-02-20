"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { fetchArticles, Article } from "@/app/lib/article";


export default function TopArticle() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };

    getArticles();
  }, []);

  return (
    <div className="relative w-full  lg:h-screen">
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
        {articles.length > 0 ? (
          articles.filter((article) => article.category === "Samudera").map((article) => (
            <SwiperSlide key={article.id}>
              <div className="relative w-full h-full ">
                {/* Menampilkan gambar dari article_images */}
                {article.article_images.length > 0 ? (
                  <Image
                    src={article.article_images[0].publicUrl}
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

                <div className="absolute lg:bottom-[0rem] lg:left-[4rem] md:bottom-[-20px] md:left-[4rem] top-[7rem] left-4 flex gap-5 items-center z-20 text-xs ">
                  <p className="lg:text-xl text-orangeCS italic font-semibold">
                    RDK <span className="text-white">News</span>
                  </p>
                  <Image
                    src="/logo.png"
                    alt="Logo RDK"
                    width={30}
                    height={30}
                    className="z-20 hidden lg:block"
                  />
                  <Image
                    src="/logo.png"
                    alt="Logo RDK"
                    width={20}
                    height={20}
                    className="z-20 lg:hidden"
                  />
                  <div className="lg:w-[3px] w-[1px] lg:h-8 h-6 bg-white"></div>
                  <p className="font-light italic text-white lg:text-sm">
                    {new Date(article.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                {/* Judul Artikel */}
                <div className="absolute lg:bottom-16 bottom-5 text-center font-semibold italic text-white p-4 lg:w-[65%] block lg:mx-[14rem] md:w-[80%] md:mx-[6rem] md:bottom-14 md:block z-20 w-full lg:text-3xl text-lg">
                  {article.title} 
                </div>

                {/* Kategori Artikel / Opsional */}
                <div className="absolute lg:bottom-16 bottom-3 text-center text-sm text-white bg-gray-800 bg-opacity-75 px-4 py-1 rounded-full w-fit mx-auto left-1/2 transform -translate-x-1/2">
                  {article.category} 
                </div>

                <Image
                  src="/images/smoke-green.png"
                  alt="smoke-rdk"
                  width={2000}
                  height={100}
                  className="absolute bottom-0 left-0 right-0 lg:h-[30rem] md:h-[25rem] h-[16rem]"
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-white">Memuat artikel...</p>
        )}
      </Swiper>

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
