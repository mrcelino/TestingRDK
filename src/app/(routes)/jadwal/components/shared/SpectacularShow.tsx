"use client";

import Image from "next/image";

// import Image from "next/image";

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
  image_spectacular_shows: ImageSpectacularShows[];
  source_person: [Source_person];
  moderator: Moderator;
}

export default function SpectacularShow({
  dataBigAgenda,
}: {
  dataBigAgenda: AgendaItem[];
}) {
  // console.log("check spec shows", dataBigAgenda[0]);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-[157px] md:w-[203px] lg:w-[354px] h-[29px] md:h-[42px] lg:h-[71px] flex bg-white rounded-l-[100px] rounded-[100px] border lg:border-[3px] border-black mt-8 md:mt-16 lg:mt-32 justify-center items-center"
      >
        <h2 className="text-[#15575B] font-normal text-xs md:text-sm lg:text-[24px] font-heading [text-shadow:_0_2.5px_5px_rgb(0_0_0_/_0.4)]">
          Spectacular Show
        </h2>
      </div>

      {/* start of Polaroit Container */}
      <div
        data-aos="flip-down"
        data-aos-duration="1000"
        className="w-fit h-fit flex flex-row mt-6 md:mt-10 lg:mt-20 mb-4"
      >
        {/* startt of LEFT polaroid */}
        <div className="relative flex flex-col w-[118px] md:w-[119px] lg:w-[236px] h-[146px] md:h-[148px] lg:h-[293px] bg-[#FBFBFB] border lg:border-[3px] border-black px-[2px] md:px-[7px] lg:px-[14px] pt-[6px] md:pt-[7px] lg:pt-[14px] lg:pb-2 justify-center align-top rotate-[-9deg] translate-x-5 lg:translate-x-7">
          {/* photo container */}
          <div className="w-[103px] md:w-[104px] lg:w-[207px] h-[109px] md:h-[110px] lg:h-[219px] bg-gray-300 mx-auto lg:mb-auto">
            {/* <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div> */}
            {/* <div
              style={{
                backgroundImage:
                  (dataBigAgenda[0].image_spectacular_shows as any)?.length > 1
                    ? `url("${
                        (dataBigAgenda[0].image_spectacular_shows as any)[1]
                          .publicUrl
                      }")`
                    : "none",
              }}
              className="bg-cover bg-no-repeat bg-center w-full h-full"
            ></div> */}
            <div
              style={{
                backgroundImage:
                  `url("${dataBigAgenda[0]?.image_spectacular_shows?.[1]?.publicUrl}")` ||
                  "??",
              }}
              className="bg-cover bg-no-repeat bg-center w-full h-full"
            ></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[8px] md:text-[6px] lg:text-[10px] italic w-20 md:w-12 lg:w-20 text-center font-body">
              {/* Aceh Dance By Rampoe UGM */}
              {/* {(dataBigAgenda[0].image_spectacular_shows as any)?.length > 1
                ? (dataBigAgenda[0].image_spectacular_shows as any)[1].title
                : "???"} */}
              {dataBigAgenda?.[0]?.image_spectacular_shows?.[1]?.title || "??"}
            </h2>
          </div>
        </div>
        {/* end of LEFT polaroid */}

        {/* startt of center polaroid */}
        <div className="relative flex flex-col w-[118px] md:w-[119px] lg:w-[236px] h-[146px] md:h-[148px] lg:h-[293px] bg-[#FBFBFB] border lg:border-[3px] border-black px-[2px] md:px-[7px] lg:px-[14px] pt-[6px] md:pt-[7px] lg:pt-[14px] lg:pb-2 justify-center align-top z-20 translate-y-5 lg:translate-y-10">
          {/* photo container */}
          <div className="w-[103px] md:w-[104px] lg:w-[207px] h-[109px] md:h-[110px] lg:h-[219px] bg-gray-300 mx-auto lg:mb-auto">
            {/* <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div> */}
            <div
              style={{
                backgroundImage:
                  `url("${dataBigAgenda?.[0]?.image_spectacular_shows?.[0]?.publicUrl}")` ||
                  "none",
              }}
              className="bg-cover bg-no-repeat bg-center w-full h-full"
            ></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[8px] md:text-[6px] lg:text-[10px] italic w-20 md:w-12 lg:w-20 text-center font-body">
              {/* Aceh Dance By Rampoe UGM */}?
              {dataBigAgenda?.[0]?.image_spectacular_shows?.[0]?.title || "???"}
            </h2>
          </div>

          {/* pin top left*/}
          <Image
            src="/images/jadwal/vector_pin.png"
            width={500}
            height={500}
            alt="icon pin"
            className="absolute w-[24px] md:w-6 lg:w-[47px] h-[24px] md:h-6 lg:h-[48px] -top-3 md:-top-3 lg:-top-5 -left-0"
          />
          {/* pin bottom right */}
          <Image
            src="/images/jadwal/vector_pin.png"
            width={500}
            height={500}
            alt="icon pin"
            className="absolute w-[24px] md:w-6 lg:w-[47px] h-[24px] md:h-6 lg:h-[48px] bottom-6 md:bottom-6 lg:bottom-11 -right-2 lg:-right-3"
          />
        </div>
        {/* end of center polaroid */}

        {/* startt of right polaroid */}
        <div className="relative flex flex-col w-[118px] md:w-[119px] lg:w-[236px] h-[146px] md:h-[148px] lg:h-[293px] bg-[#FBFBFB] border lg:border-[3px] border-black px-[2px] md:px-[7px] lg:px-[14px] pt-[6px] md:pt-[7px] lg:pt-[14px] lg:pb-2 justify-center align-top rotate-[10deg] -translate-x-6 lg:-translate-x-9">
          {/* photo container */}
          <div className="w-[103px] md:w-[104px] lg:w-[207px] h-[109px] md:h-[110px] lg:h-[219px] bg-gray-300 mx-auto lg:mb-auto">
            {/* <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div> */}
            <div
              style={{
                backgroundImage:
                  `url("${dataBigAgenda?.[0]?.image_spectacular_shows?.[2]?.publicUrl}")` ||
                  "none",
              }}
              className="bg-cover bg-no-repeat bg-center w-full h-full"
            ></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[8px] md:text-[6px] lg:text-[10px] italic w-20 md:w-12 lg:w-20 text-center font-body">
              {/* Aceh Dance By Rampoe UGM */}
              {dataBigAgenda?.[0]?.image_spectacular_shows?.[2]?.title ||
                "none"}
            </h2>
          </div>
        </div>
        {/* end of right polaroid */}
      </div>
      {/* End of Polaroit Container */}
    </>
  );
}
