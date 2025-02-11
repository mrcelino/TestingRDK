// Layout2LastDay.tsx

"use client";

import Image from "next/image";
// import BigAgendaHeader from "./shared/BigAgendaHeader";

interface ImageSpectacularShows {
  id: number;
  documentId: string;
  publicUrl: string;
  title: string;
}

interface Profile {
  id: number;
  documentId: string;
  name: string;
  publicUrl: string;
}

interface Moderator {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  profile: Profile;
}

interface Source_person {
  id: number;
  documentId: string;
  profile: Profile;
}

interface AgendaItem {
  id: number;
  documentId: string;
  theme: string;
  place: string;
  date: string;
  time: string;
  big_agenda_type: string;
  image_spectacular_shows: [ImageSpectacularShows];
  source_person: [Source_person];
  moderator: Moderator;
}

export default function Layout2LastDay({
  dataBigAgenda,
}: {
  dataBigAgenda: AgendaItem[];
}) {
  return (
    <>
      <div className="w-[243px] h-[58px] md:w-[380px] md:h-[78px] lg:w-[779px] lg:h-[204px] bg-white rounded-[200px] border lg:border-[3px] border-black shadow-lg relative flex justify-center items-center mt-10 md:mt-16 lg:mt-40 mb-8 md:mb-14 lg:mb-32">
        <h1 className="text-[#15575B] text-xs md:text-sm lg:text-2xl font-bold italic">
          Sorry, No Agenda Today!
        </h1>
        <Image
          src="/images/jadwal/maskot_stand.svg"
          width={405}
          height={405}
          alt="sign"
          className="absolute w-[84px] h-[84px] md:w-[163px] md:h-[163px] lg:w-[405px] lg:h-[405px] -left-6 md:-left-16 lg:-left-36"
        />
      </div>

      <div className="flex relative max-w-[1920px] w-full h-[23px] md:h-[38px] lg:h-[77px] bg-[#F4AA3D] justify-center items-center">
        <h1 className="text-white font-bold text-sm md:text-2xl lg:text-2xl italic">
          DON’T WORRY!
        </h1>
        <Image
          src="/images/jadwal/Warning.svg"
          width={156}
          height={156}
          alt="sign"
          className="absolute right-4 md:right-16 lg:right-64 z-10 w-[70px] h-[70px] md:w-[91px] md:h-[91px] lg:w-[156px] lg:h-[156px] hover:scale-125 transition"
        />
      </div>

      <div className="flex relative max-w-[1920px] w-full h-[76px] md:h-[77px] lg:h-[154px] bg-[#fbfbfb] justify-center items-center mb-7 md:mb-10 lg:mb-14">
        <h1 className="text-[#15575B] font-bold text-xs md:text-base lg:text-2xl italic">
          You Can Have Iftar at the Mosque!
        </h1>

        <Image
          src="/images/jadwal/caution_sign.svg"
          width={116}
          height={116}
          alt="sign"
          className="absolute w-[69px] h-[69px] md:w-[68px] md:h-[68px] lg:w-[116px] lg:h-[116px] left-0.5 md:left-[200px] lg:left-[400px] z-10 hover:scale-125 transition"
        />
      </div>

      {/* start info buka puasa */}
      {dataBigAgenda[0].image_spectacular_shows?.length > 0 ? (
        <img
          // src="/images/jadwal/info_buka_example.png"
          src={dataBigAgenda[0].image_spectacular_shows[0].publicUrl}
          alt="informasi_berbuka"
          className="w-[300px] md:w-[332px] lg:w-[595px] object-contain rounded-[10px] hover:scale-105 transition"
        />
      ) : (
        <h1 className="text-lg lg:text-3xl font-semibold text-white font-title my-2 md:my-5 lg:my-10 hover:scale-105 transition-all hover:drop-shadow-xl">Information will be released soon !!!</h1>
      )}

      {/* end info buka puasa */}
    </>
  );
}
