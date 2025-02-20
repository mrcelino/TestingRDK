"use client";
import Image from "next/image";
import BigAgendaHeader from "./BigAgendaHeader";

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

export default function BigAgenda({
  bigAgendaTitle,
  dataBigAgenda,
}: {
  bigAgendaTitle: string;
  dataBigAgenda: AgendaItem;
}) {
  return (
    <>
      {/* header even1 */}
      <BigAgendaHeader text={bigAgendaTitle} />

      {/* starrt of foto pengisi acarra container */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-[300px] md:w-[354px] lg:w-[672px] h-[280px] md:h-[204px] lg:h-[389px] mt-6 md:mt-8 lg:mt-10">
        {/* left side */}
        <div data-aos="fade-right" data-aos-duration="1000">
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
                  backgroundImage:
                    dataBigAgenda.source_person?.length > 0
                      ? `url("${dataBigAgenda.source_person[0]?.profile?.publicUrl}")`
                      : "none",
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
                {dataBigAgenda.source_person?.length > 0
                  ? dataBigAgenda.source_person[0]?.profile?.name
                  : "Guest will be annouced soon"}
              </h2>
            </div>
          </div>
        </div>
        {/* end of guest1 container */}

        {/* right side */}
        <div
          className="flex w-full"
          data-aos="fade-left"
          data-aos-duration="1000"
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
                  backgroundImage:
                    (dataBigAgenda.source_person as any)?.length > 1
                      ? `url("${
                          (dataBigAgenda.source_person as any)[1]?.profile
                            ?.publicUrl
                        }")`
                      : "none",
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

            {/* container nama guest nya (cuma untuk mobile) */}
            <div className="absolute md:hidden top-1/2 right-24 w-[193px] h-[36px] bg-[#F4AA3D] border border-black rounded-tr-[100px] rounded-bl-[100px] rotate-[-8deg] flex items-center justify-center px-2 shadow-md">
              <h2 className="font-bold text-[8px] text-[#15575B] text-center italic font-body">
                {/* Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed. */}
                {(dataBigAgenda.source_person as any)?.length > 1
                  ? (dataBigAgenda.source_person as any)[1]?.profile?.name
                  : "Guest will be annouced soon"}
              </h2>
            </div>
          </div>
        </div>
        {/* end of right side */}
      </div>
      {/* end of foto pengisi acarra container */}

      {/* starrt of nama pengisi acara container (yang ada dua dibelah) */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="hidden md:flex w-[240px] md:w-[523px] lg:w-[778px] h-[28px] md:h-[60px] lg:h-[90px] rounded-[100px] bg-white flex-row mt-4 lg:mt-10"
      >
        {/* left name container */}
        <div className="w-1/2 h-full border lg:border-[3px] border-black rounded-l-[100px] flex justify-center items-center">
          <p className="md:w-[219px] lg:w-[289px] text-[#F4AA3D] font-bold italic text-[4px] md:text-[10px] lg:text-[14px] text-center font-body">
            {/* Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed. */}
            {dataBigAgenda.source_person?.length > 0
              ? dataBigAgenda.source_person[0]?.profile?.name
              : "Guest will be annouced soon"}
          </p>
        </div>
        {/* right name container */}
        <div className="w-1/2 h-full bg-[#F4AA3D] border lg:border-[3px] border-black rounded-r-[100px] flex justify-center items-center">
          <p className="md:w-[219px] lg:w-[289px] text-[#15575B] font-bold italic text-[4px] md:text-[10px] lg:text-[14px] text-center font-body">
            {/* Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed. */}
            {(dataBigAgenda.source_person as any)?.length > 1
              ? (dataBigAgenda.source_person as any)[1]?.profile?.name
              : "Guest will be annouced soon"}
          </p>
        </div>
      </div>
      {/* end of nama pengisi acara container (yang ada dua dibelah) */}

      {/* start of moderator container */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-[163px] h-[45px] md:w-[238px] md:h-[67px] lg:w-[367px] lg:h-[102px] mt-5 lg:mt-10 relative flex items-center justify-end"
      >
        {/* photo container */}
        <div className="absolute top-0 left-0 w-[45px] h-[45px] md:w-[68px] md:h-[68px] lg:w-[102px] lg:h-[102px] bg-white rounded-full border lg:border-[3px] border-black z-10">
          {/* gambar moderator */}
          {/* <img
                        src="/images/maskot.png"
                        // width={207}
                        // height={248}
                        alt="sign"
                        className="rounded-full w-fit h-fit object-cover overflow-hidden"
                      /> */}
          {/* <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full rounded-full overflow-hidden"></div> */}
          <div
            style={{
              backgroundImage: `url("${
                dataBigAgenda.moderator?.profile?.publicUrl !== "" ||
                dataBigAgenda.moderator?.profile != null
                  ? dataBigAgenda.moderator?.profile?.publicUrl
                  : "?"
              }")`,
            }}
            className="bg-cover bg-center w-full h-full rounded-full overflow-hidden"
          ></div>
        </div>

        {/* moderrator name container */}
        <div className="relative w-[83%] h-[30px] md:h-[45px] lg:h-[69px] bg-white border lg:border-[3px] border-black rounded-[100px] flex flex-col items-start justify-center pl-5 md:pl-9 lg:pl-[40px]">
          {/* moderator name */}
          <h1 className="text-[#F4AA3D] font-bold text-[8px] md:text-[10px] lg:text-sm italic font-body">
            {/* Andri Pratama, M.Phil. */}
            {dataBigAgenda.moderator?.profile?.name || "???"}
          </h1>
          <hr className="absolute top-1/2 left-0 w-4/6 lg:border-[2px] border-black" />
          {/* ini hr dummy (ignore aja) */}
          <hr className="py-[1px] lg:py-1" />
          <p className="text-[#15575B] font-bold text-[8px] md:text-[10px] lg:text-xs italic font-body">
            As Moderator
          </p>
        </div>
      </div>
      {/* end of moderator container */}

      {/* start of box info event */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-[282px] md:w-[388px] lg:w-[893px] h-[69px] md:h-[81px] lg:h-[187px] bg-[#FBFBFB] border lg:border-[3px] border-black flex flex-col rounded-[50px] items-center justify-center mt-5 md:mt-8 lg:mt-10 py-1 md:py-2 lg:py-5"
      >
        <div className="relative flex flex-col text-center">
          {/* <p className="text-[#FFC359] font-semibold text-[8px] md:text-[8px] lg:text-base italic font-body">
            Ramadan Berdaya:
          </p> */}
          <p className="text-[#15575B] font-semibold max-w-[190px] md:max-w-[250px] lg:max-w-[550px] text-[8px] md:text-[8px] lg:text-base italic font-body">
            {/* Upaya Kolaboratif Mewujudkan <br />
            Pembangunan Inklusif dan Berkelanjutan */}
            {dataBigAgenda.theme !== ""
              ? dataBigAgenda.theme
              : "The theme will be announced soon."}
          </p>
          <Image
            src={"images/jadwal/petik-kuning.svg"}
            width={20}
            height={30}
            alt="petik"
            className="w-[5px] h-[7px] md:w-[10px] md:h-[15px] lg:w-[20px] lg:h-[30px] absolute top-0.5 md:-top-1 lg:-top-2 -left-1 md:-left-4 lg:-left-10"
          />
          <Image
            src={"images/jadwal/petik-kuning.svg"}
            width={20}
            height={30}
            alt="petik"
            className="w-[5px] h-[7px] md:w-[10px] md:h-[15px] lg:w-[20px] lg:h-[30px] absolute bottom-0 md:-bottom-1 lg:-bottom-2 -right-3 md:-right-5 lg:-right-10 rotate-180"
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
            <p className="font-medium text-[6px] md:text-[6px] lg:text-sm text-[#15575B] italic font-body">
              {/* Mardliyyah <br /> Islamic Center UGM */}
              {dataBigAgenda.place !== "" ? dataBigAgenda.place : "???"}
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
            <p className="lg:w-20 font-medium text-[6px] md:text-[6px] lg:text-sm text-[#15575B] italic flex flex-row font-body">
              {/* 08:00 WIB */}
              {dataBigAgenda.time
                ? dataBigAgenda.time.slice(0, 5) + " WIB"
                : "???"}
            </p>
          </div>
        </div>
      </div>
      {/* end of box info event */}
    </>
  );
}
