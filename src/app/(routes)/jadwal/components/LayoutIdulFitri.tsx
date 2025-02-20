// LayoutIdulFitri.tsx

"use client";

import Image from "next/image";
// import BigAgenda from "./shared/BigAgenda";

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
  image_spectacular_shows: [];
  source_person: [Source_person];
  moderator: Moderator;
}

export default function LayoutIdulFitri({
  dataBigAgenda,
}: {
  dataBigAgenda: AgendaItem[];
}) {
  // console.log(
  //   "chechk source person",
  //   dataBigAgenda[0].source_person[0].profile
  // );
  // console.log("chechk moderator", dataBigAgenda[0].moderator.profile);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="400"
        className="w-[206px] h-[30px] md:w-[380px] md:h-[56px] lg:w-[608px] lg:h-[90px] bg-[#F4AA3D] border lg:border-[3px] border-black flex justify-center items-center rounded-[20px] lg:rounded-[30px] mt-5 md:mt-12 lg:mt-24"
      >
        <h1 className="text-[#fbfbfb] font-normal text-xs md:text-base lg:text-[32px] font-heading">
          Eid Mubarak 1446 H
        </h1>
      </div>

      <div className="flex relative z-20 w-[253px] h-[53px] md:w-[464px] md:h-[95px] lg:w-[942px] lg:h-[247px] bg-white border lg:border-[3px] border-black rounded-[100px] justify-center items-center translate-y-8 md:translate-y-14 lg:translate-y-28">
        <div className="flex flex-col justify-center items-end font-black text-xs md:text-lg lg:text-[38px] text-[#15575B] translate-x-1 md:translate-x-6 lg:-translate-x-20 gap-y-0.5 md:gap-y-2 lg:gap-y-10 font-body">
          <h2>تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ</h2>
          <h2>كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ</h2>
        </div>

        <Image
          src="/images/jadwal/maskot_star.svg"
          width={297}
          height={396}
          alt="sign"
          className="absolute w-[108px] h-[108px] md:w-[199px] md:h-[199px] lg:w-[297px] lg:h-[396px] -right-10 -bottom-6 md:-right-16 lg:right-8 md:-bottom-12 lg:-bottom-16 scale-x-[-1]"
        />
        <Image
          src="/images/jadwal/petik-kuning.svg"
          width={72}
          height={61}
          alt="sign"
          className="absolute w-[18px] h-[15.25px] md:w-[36px] md:h-[30.5px] lg:w-[72px] lg:h-[61px] left-4 -top-2 md:left-8 lg:left-24 md:-top-4 lg:-top-8"
        />
      </div>

      <div className="relative w-full h-fit bg-transparent bg-white flex flex-col items-center justify-center pt-10 pb-20">
        {/* start of special eid mubarak header */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          className="w-[221px] h-[21px] md:w-[407px] md:h-[41px] lg:w-[641px] lg:h-[90px] bg-[#F4AA3D] border lg:border-[3px] border-black shadow-[rgba(21,87,91,1)_-2px_2px_0px] md:shadow-[rgba(21,87,91,1)_-4px_4px_0px] lg:shadow-[rgba(21,87,91,1)_-8px_8px_0px] rounded-tl-[100px] rounded-br-[100px] flex justify-center items-center mt-8 md:mt-20 lg:mt-56 mb-2"
        >
          <h1 className="text-[#fbfbfb] font-normal text-[10px] md:text-[12px] lg:text-2xl font-heading">
            Special Eid al-Fitr Prayer
          </h1>
        </div>
        {/* end of special eid mubarak header */}

        {/* starrt of foto pengisi acarra container */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-[300px] md:w-[354px] lg:w-[672px] h-[280px] md:h-[204px] lg:h-[389px] mt-6 md:mt-8 lg:mt-10">
          {/* left side */}
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            {/* guest1 container */}
            <div className="relative w-[79px] md:w-[116px] lg:w-[220.44px] h-[121px] md:h-[171px] lg:h-[324.61px] flex flex-col bg-white rounded-[5px] md:rounded-[15px] lg:rounded-[30px] border lg:border-[3px] border-black lg:p-1 rotate-[-7deg] items-center shadow-[3px_1px_0px_rgba(0,0,0,2)] lg:shadow-[8px_1px_0px_rgba(0,0,0,2)]">
              {/* top part icon container */}
              <div className="w-full h-fit flex flex-row justify-between pl-0.5 md:pl-2 lg:pl-2 pr-2 md:pr-3 lg:pr-5 pt-1 align-middle">
                {/* yellow circle thing */}
                <div className="w-[6px] md:w-2 lg:w-4 h-[6px] md:h-2 lg:h-4 bg-[#F4AA3D] border lg:border-[2px] border-black rounded-full"></div>
                {/* <p className="h-[0.5px] lg:h-3 mb-auto font-black text-xs lg:text-lg">...</p> */}
                <div className="w-fit h-fit flex flex-row gap-x-[1.5px] lg:gap-x-1 my-auto">
                  {/* triple dots */}
                  <div className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                  <div className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                  <div className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                </div>
              </div>

              {/* photo container */}
              <div className="w-[74px] md:w-[109px] lg:w-[207px] h-[93px] md:h-[131px] lg:h-[249px] bg-[#EFC828] border border-black mt-1 lg:mt-4">
                {/* <Image
                                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                                width={207}
                                height={249}
                                alt="sign"
                                className=""
                              /> */}
                {/* <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div> */}
                <div
                  style={{
                    backgroundImage: `url("${
                      dataBigAgenda[0].moderator !== null
                        ? dataBigAgenda[0].moderator.profile.publicUrl
                        : "???"
                    }")`,
                  }}
                  className="bg-cover bg-center w-full h-full"
                ></div>
              </div>

              {/* bottom part icon container*/}
              <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-0.5 lg:pl-1 pt-0.5 lg:pt-1 gap-x-0.5 md:gap-x-1 lg:gap-x-2">
                <Image
                  src="/images/jadwal/icon_heart.svg"
                  width={15}
                  height={13}
                  alt="sign"
                  className="w-[6px] h-[6px] md:w-[9px] md:h-[9px] lg:w-[15px] lg:h-[13px]"
                />
                <Image
                  src="/images/jadwal/icon_comment.svg"
                  width={14}
                  height={14}
                  alt="sign"
                  className="w-[6px] h-[6px] md:w-[9px] md:h-[9px] lg:w-[14px] lg:h-[14px]"
                />
                <Image
                  src="/images/jadwal/icon_share.svg"
                  width={14}
                  height={13}
                  alt="sign"
                  className="w-[6px] h-[6px] md:w-[9px] md:h-[9px] lg:w-[14px] lg:h-[14px]"
                />
              </div>

              <img
                src="/images/jadwal/shadow.svg"
                alt=""
                className="absolute -bottom-6 md:-bottom-12 lg:-bottom-24 rotate-[7deg]"
              />

              {/* container nama guest nya (cuma untuk mobile) */}
              <div className="absolute md:hidden top-1/2 left-24 w-[193px] h-[36px] bg-[#FBFBFB] border border-black rounded-tr-[100px] rounded-bl-[100px] rotate-[7deg] flex items-center justify-center px-2 shadow-md">
                <h2 className="font-bold text-[8px] text-[#F4AA3D] text-center italic font-body">
                  {/* Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed. */}
                  {dataBigAgenda[0].moderator !== null
                    ? dataBigAgenda[0].moderator.profile.name
                    : "???"}
                </h2>
              </div>
              {/* label imam */}
              <div className="absolute md:hidden top-[43.5px] left-[115px] w-[142px] h-[15px] bg-[#F4AA3D] rounded-t-[30px] flex justify-center items-center rotate-[7deg]">
                <h3 className="text-[8px] text-white italic font-bold font-body">
                  Imam
                </h3>
              </div>
            </div>
          </div>
          {/* end of guest1 container */}

          {/* right side */}
          <div
            className="flex w-full"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            {/* guest2 container */}
            <div className="relative w-[79px] md:w-[116px] lg:w-[220.44px] h-[121px] md:h-[171px] lg:h-[324.61px] flex flex-col bg-white rounded-[5px] md:rounded-[15px] lg:rounded-[30px] border lg:border-[3px] border-black lg:p-1 ml-auto rotate-[8deg] items-center shadow-[3px_1px_0px_rgba(0,0,0,2)] lg:shadow-[8px_1px_0px_rgba(0,0,0,2)]">
              {/* top part icon container */}
              <div className="w-full h-fit flex flex-row justify-between pl-0.5 md:pl-2 lg:pl-2 pr-2 md:pr-3 lg:pr-5 pt-1 align-middle">
                {/* yellow circle thing */}
                <div className="w-[6px] md:w-2 lg:w-4 h-[6px] md:h-2 lg:h-4 bg-[#F4AA3D] border lg:border-[2px] border-black rounded-full"></div>
                {/* <p className="h-[0.5px] lg:h-3 mb-auto font-black text-xs lg:text-lg">...</p> */}
                <div className="w-fit h-fit flex flex-row gap-x-[1.5px] lg:gap-x-1 my-auto">
                  {/* triple dots */}
                  <div className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                  <div className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                  <div className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                </div>
              </div>

              {/* photo container */}
              <div className="w-[74px] md:w-[109px] lg:w-[207px] h-[93px] md:h-[131px] lg:h-[249px] bg-[#15575B] border border-black mt-1 lg:mt-4">
                {/* <Image
                                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                                width={207}
                                height={249}
                                alt="sign"
                                className=""
                              /> */}
                {/* <img src="/images/jadwal/examplePhotoPengisiAcara.svg" alt="" className="w-fit h-fit "/> */}
                {/* <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div> */}
                <div
                  style={{
                    backgroundImage: `url("${
                      dataBigAgenda[0]?.source_person.length > 0
                        ? dataBigAgenda[0].source_person[0].profile.publicUrl
                        : "???"
                    }")`,
                  }}
                  className="bg-cover bg-center w-full h-full"
                ></div>
              </div>

              {/* bottom part icon container*/}
              <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-0.5 lg:pl-1 pt-0.5 lg:pt-1 gap-x-0.5 md:gap-x-1 lg:gap-x-2">
                <Image
                  src="/images/jadwal/icon_heart.svg"
                  width={15}
                  height={13}
                  alt="sign"
                  className="w-[6px] h-[6px] md:w-[9px] md:h-[9px] lg:w-[15px] lg:h-[13px]"
                />
                <Image
                  src="/images/jadwal/icon_comment.svg"
                  width={14}
                  height={14}
                  alt="sign"
                  className="w-[6px] h-[6px] md:w-[9px] md:h-[9px] lg:w-[14px] lg:h-[14px]"
                />
                <Image
                  src="/images/jadwal/icon_share.svg"
                  width={14}
                  height={13}
                  alt="sign"
                  className="w-[6px] h-[6px] md:w-[9px] md:h-[9px] lg:w-[14px] lg:h-[14px]"
                />
              </div>

              <img
                src="/images/jadwal/shadow.svg"
                alt=""
                className="absolute -bottom-6 md:-bottom-12 lg:-bottom-24 rotate-[-8deg]"
              />

              {/* container nama khatib nya (cuma untuk mobile) */}
              <div className="absolute md:hidden top-1/2 right-24 w-[193px] h-[36px] bg-[#F4AA3D] border border-black rounded-tr-[100px] rounded-bl-[100px] rotate-[-8deg] flex items-center justify-center px-2 shadow-md">
                <h2 className="font-bold text-[8px] text-[#15575B] text-center italic font-body">
                  {/* Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed. */}
                  {dataBigAgenda[0]?.source_person.length > 0
                    ? dataBigAgenda[0].source_person[0].profile.name
                    : "???"}
                </h2>
              </div>
              {/* label khatib */}
              <div className="absolute md:hidden top-[46px] right-[135px] w-[142px] h-[15px] bg-white rounded-t-[30px] flex justify-center items-center rotate-[-8deg] shadow-lg">
                <h3 className="text-[8px] text-[#15575B] italic font-bold font-body">
                  Khatib
                </h3>
              </div>
            </div>
          </div>
          {/* end of right side */}
        </div>
        {/* end of foto pengisi acarra container */}

        {/* starrt of nama pengisi acara container (yang ada dua dibelah) */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          className="relative hidden w-[200px] md:w-[523px] lg:w-[778px] h-[28px] md:h-[60px] lg:h-[90px] rounded-[100px] bg-white md:flex flex-row mt-4 md:mt-8 lg:mt-14"
        >
          {/* left name container */}
          <div className="w-1/2 h-full border lg:border-[3px] border-black rounded-l-[100px] flex justify-center items-center">
            <p className="md:w-[219px] lg:w-[289px] text-[#F4AA3D] font-bold italic text-[4px] md:text-[10px] lg:text-[14px] text-center font-body">
              {/* Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed. */}
              {dataBigAgenda[0].moderator?.profile?.name || "???"}
            </p>
          </div>
          {/* right name container */}
          <div className="w-1/2 h-full bg-[#F4AA3D] border lg:border-[3px] border-black rounded-r-[100px] flex justify-center items-center">
            <p className="md:w-[219px] lg:w-[289px] text-[#15575B] font-bold italic text-[4px] md:text-[10px] lg:text-[14px] text-center font-body">
              {/* Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed. */}
              {dataBigAgenda[0].source_person[0]?.profile?.name || "???"}
            </p>
          </div>

          {/* khatib and imam label (on top of pengisi acara container) */}
          <div className="flex flex-row justify-around items-center absolute left-3.5 md:left-[38px] lg:left-[58px] -top-1.5 md:-top-3.5 lg:-top-[26px] w-[172px] lg:w-[650px] h-[6px] md:h-[15px] lg:h-[26px] md:w-[437px] pt-1 rounded-t-[30px] bg-[#15575B] text-white font-bold italic text-[4px] md:text-[8px] lg:text-sm">
            <p>Imam</p>
            <p>Khatib</p>
          </div>
        </div>
        {/* end of nama pengisi acara container (yang ada dua dibelah) */}

        {/* start of box info event */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="500"
          className="w-[282px] md:w-[388px] lg:w-[893px] h-[69px] md:h-[81px] lg:h-[187px] bg-[#FBFBFB] border lg:border-[3px] border-black flex flex-col rounded-[50px] items-center justify-center mt-5 md:mt-8 lg:mt-10 py-1 md:py-2 lg:py-5"
        >
          <div className="relative flex flex-col text-center items-center font-body">
            {/* <p className="text-[#FFC359] font-semibold text-[8px] md:text-[8px] lg:text-base italic">
              Ramadan Berdaya:
            </p> */}
            <p className="text-[#15575B] font-semibold max-w-[190px] md:max-w-[250px] lg:max-w-[550px] text-[8px] md:text-[8px] lg:text-base italic font-body">
              {/* Upaya Kolaboratif Mewujudkan <br />
              Pembangunan Inklusif dan Berkelanjutan */}
              {dataBigAgenda[0]?.theme || "???"}
            </p>
            <Image
              src={"images/jadwal/petik-kuning.svg"}
              width={20}
              height={30}
              alt="petik"
              className="w-[5px] h-[7px] md:w-[10px] md:h-[15px] lg:w-[20px] lg:h-[30px] absolute top-0.5 md:-top-2 lg:-top-2 -left-1 md:-left-4 lg:-left-10"
            />
            <Image
              src={"images/jadwal/petik-kuning.svg"}
              width={20}
              height={30}
              alt="petik"
              className="w-[5px] h-[7px] md:w-[10px] md:h-[15px] lg:w-[20px] lg:h-[30px] absolute bottom-0 md:-bottom-2 lg:-bottom-2 -right-3 md:-right-5 lg:-right-10 rotate-180"
            />
          </div>
          <hr className="border-b-[0.5px] lg:border-b-2 border-black w-9/12 my-auto" />
          {/* tempat dan waktu */}
          <div className="w-fit flex flex-row justify-center items-center md:mx-auto lg:mr-0 lg:ml-0">
            <div className="flex flex-row gap-x-1 md:gap-x-3 lg:gap-x-7 items-center">
              {/* icon location */}
              <img
                src="images/jadwal/vector_location.svg"
                alt=""
                className="w-[8px] md:w-[11px] lg:w-[26px] h-[9px] md:h-[13px] lg:h-[31px]"
              />
              {/* lokasi */}
              <p className="font-medium text-[6px] md:text-[6px] lg:text-sm text-[#15575B] italic">
                {/* Mardliyyah <br /> Islamic Center UGM */}
                {dataBigAgenda[0]?.place || "???"}
              </p>
            </div>
            <div className="text-transparent bg-[#15575B] w-[12px] md:w-[17px] lg:w-[40px] h-[1px] rotate-90">
              .
            </div>
            <div className="flex flex-row gap-x-1 lg:gap-x-6 items-center ml-auto">
              {/* icon calendar */}
              <img
                src="images/jadwal/vektor_kalender.svg"
                alt=""
                className="w-[10px] md:w-[14px] lg:w-[32px] h-[9px] md:h-[13px] lg:h-[30px]"
              />
              {/* waktu */}
              <p className="w-14 lg:w-20 font-medium text-[6px] md:text-[6px] lg:text-sm text-[#15575B] italic flex flex-row">
                {/* 08:00 WIB */}
                {/* {dataBigAgenda[0].time !== null
                  ? dataBigAgenda[0].time + " WIB"
                  : "Null"} */}
                {dataBigAgenda[0]?.time
                  ? dataBigAgenda[0].time.slice(0, 5) + " WIB"
                  : "Null"}
              </p>
            </div>
          </div>
        </div>
        {/* end of box info event */}

        {/* div untuk background putih dibelakang two button */}
        <div className="absolute bg-white w-full h-52 -bottom-44"></div>
      </div>
    </>
  );
}
