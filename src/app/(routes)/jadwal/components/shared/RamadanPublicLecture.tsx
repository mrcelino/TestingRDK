"use client";

import Image from "next/image";

interface Profile {
  id: number;
  documentId: string;
  name: string;
  publicUrl: string;
}

interface AgendaItem {
  id: number;
  documentId: string;
  theme: string;
  time: string;
  daily_agenda_type: "Samudera" | "RPL" | "Mimbar_Subuh"; // Pastikan sesuai dengan JSON
  date: string;
  profile: Profile;
}

export default function RamadanPublicLecture({ data }: { data: AgendaItem }) {
  return (
    <>
      {/* start of RPL */}
      <div className="w-[300px] md:w-[450px] lg:w-[901px] h-[160px] md:h-[250px] lg:h-[500px] flex flex-col mt-8 md:mt-16 lg:mt-32 items-center">
        {/*  RPL header */}
        <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-1.5 md:gap-x-4">
          <h1 className="text-sm font-normal md:text-base lg:text-[48px] text-white drop-shadow-md font-heading">
            RPL
          </h1>
          <div className="w-[1px] h-[14px] md:h-[11px] lg:h-[45px] text-transparent bg-white">
            .
          </div>
          <p className="font-semibold text-[10px] md:text-[10px] lg:text-sm text-[#F4AA3D] drop-shadow-md font-title">
            Ramadan Public <br /> Lecture
          </p>
        </div>
        {/* end of RPL header */}

        {/* content rpl   */}
        <div className="w-full h-full grid grid-cols-[1fr_2fr]">
          {/* left side */}
          <div className="flex">
            <div className="mr-auto my-auto">
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
                      backgroundImage: `url("${data.profile.publicUrl}")`,
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
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col justify-center gap-y-2 md:gap-y-5 lg:gap-y-10 pl-2.5 pr-0 md:pl-10 md:pr-2 lg:pr-3 font-body">
            {/* name */}
            <div className="flex flex-row gap-x-2 md:gap-x-6 lg:gap-x-10 items-center pl-2">
              <Image
                src="/images/jadwal/icon_person.svg"
                width={91}
                height={91}
                alt="icon_person"
                className="w-[22px] h-[22px] md:w-[33px] md:h-[33px] lg:w-[91px] lg:h-[91px]"
              />
              <p className="text-white font-medium text-[8px] md:text-[10px] lg:text-xl italic">
                {/* Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed. */}
                {data.profile.name}
              </p>
            </div>
            {/* time */}
            <div className="flex flex-row gap-x-2.5 md:gap-x-8 lg:gap-x-12 items-center pl-3">
              <Image
                src="/images/jadwal/icon_clock.svg"
                width={65}
                height={65}
                alt="icon_clock"
                className="w-[15px] h-[15px] md:w-[24px] md:h-[24px] lg:w-[91px] lg:h-[91px]"
              />
              <p className="text-white font-medium text-[8px] md:text-[10px] lg:text-xl italic">
                {/* 05:00 WIB */}
                {data.time.slice(0, 5)} WIB
              </p>
            </div>
            {/* place */}
            <div className="flex flex-row gap-x-2.5 md:gap-x-8 lg:gap-x-12 items-center pl-3">
              <img
                src="/images/jadwal/icon_note.svg"
                // width={67}
                // height={67}
                alt="icon_clock"
                className="w-[17px] h-[17px] md:w-[24px] md:h-[24px] lg:w-[91px] lg:h-[91px]"
              />
              <p className="text-white font-medium text-[8px] md:text-[10px] lg:text-xl italic">
                {/* Kausalitas: Hukum Alam atau Tuhan: Pemikiran Religio-Saintifik
                al-Ghazali */}
                {data.theme}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of RPL */}
    </>
  );
}
