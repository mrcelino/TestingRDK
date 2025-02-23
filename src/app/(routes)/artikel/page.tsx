"use client";

import "swiper/css";
import "swiper/css/navigation";
// <<<<<<< HEAD
import HeroSlider from "../../components/artikel/HeroSlider";
import BigAgendaRamadan from "../../components/artikel/BigAgendaRamadan";
import Samudra from "../../components/artikel/Samudra";
import MimbarSubuh from "../../components/artikel/MimbarSubuh";
import RamadanPublicLecture from "../../components/artikel/Rpl";
// =======
// import HeroSlider from "./HeroSlider";
// import BigAgendaRamadan from "./BigAgendaRamadan";
// import Samudra from "./Samudra";
// import MimbarSubuh from "./MimbarSubuh";
// import RamadanPublicLecture from "./Rpl";
import { useEffect, useState } from "react";
import { Article, fetchArticles } from "@/app/lib/article";
// >>>>>>> 7e356a584f05ce2bcead4b15596178d4027896c3

export default function Artikel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
      setIsLoading(false);
    };
    getArticles();
  }, []);

  return (
    <section>
      <HeroSlider articles={articles} isLoading={isLoading} />

      <article className="p-4 w-11/12 mx-auto">
        <ul>
          <BigAgendaRamadan articles={articles} isLoading={isLoading} />
          <Samudra articles={articles} isLoading={isLoading} />
          <RamadanPublicLecture articles={articles} isLoading={isLoading} />
          <MimbarSubuh articles={articles} isLoading={isLoading} />
        </ul>
      </article>
    </section>
  );
}
