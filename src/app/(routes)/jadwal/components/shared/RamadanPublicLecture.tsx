"use client";

import Image from "next/image";

export default function RamadanPublicLecture() {
  return (
    <>
      {/* start of RPL */}
      <div className="w-[901px] h-[500px] flex flex-col mt-32 items-center">
        {/*  RPL header */}
        <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-4">
          <h1 className="text-[48px] text-white drop-shadow-md">RPL</h1>
          <div className="w-[2px] h-[45px] text-transparent bg-white">.</div>
          <p className="font-semibold text-sm text-[#F4AA3D]">
            Ramadan <br /> Public Lecture
          </p>
        </div>
        {/* end of RPL header */}

        {/* content mimbar subuh */}
        <div className="w-full h-full grid grid-cols-[1fr_2fr]">
          {/* left side */}
          <div className="flex">
            <div className="m-auto">
              {/* guest1 container */}
              <div
                className="w-[220.44px] h-[324.61px] flex flex-col bg-white rounded-[30px] border-[3px] border-black p-1 rotate-[-7deg]"
                style={{
                  boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
                }}
              >
                {/* top part icon container */}
                <div className="w-full h-fit flex flex-row justify-between pl-2 pr-5 align-text-top">
                  {/* yellow circle thing */}
                  <div className="w-4 h-4 bg-[#F4AA3D] border-[2px] border-black rounded-full"></div>
                  <p className="h-3 mb-auto font-black text-lg">...</p>
                </div>

                {/* photo container */}
                <div className="w-[207px] h-[249px] bg-[#EFC828] border border-black mt-4">
                  {/* <Image
                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                width={207}
                height={249}
                alt="sign"
                className=""
              /> */}
                  <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div>
                </div>

                {/* bottom part icon container*/}
                <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-1 pt-1 gap-x-2">
                  <Image
                    src="/images/jadwal/icon_heart.svg"
                    width={15}
                    height={13}
                    alt="sign"
                    className=""
                  />
                  <Image
                    src="/images/jadwal/icon_comment.svg"
                    width={14}
                    height={14}
                    alt="sign"
                    className=""
                  />
                  <Image
                    src="/images/jadwal/icon_share.svg"
                    width={14}
                    height={13}
                    alt="sign"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col justify-center gap-y-10 pl-10 pr-5">
            {/* name */}
            <div className="flex flex-row gap-x-10 items-center">
              <Image
                src="/images/jadwal/icon_person.svg"
                width={91}
                height={91}
                alt="icon_person"
                className=""
              />
              <p className="text-white font-medium text-xl italic">
                Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
              </p>
            </div>
            {/* time */}
            <div className="flex flex-row gap-x-12 items-center pl-3">
              <Image
                src="/images/jadwal/icon_clock.svg"
                width={65}
                height={65}
                alt="icon_clock"
                className=""
              />
              <p className="text-white font-medium text-xl italic">05:00 WIB</p>
            </div>
            {/* place */}
            <div className="flex flex-row gap-x-12 items-center pl-3">
              <img
                src="/images/jadwal/icon_note.svg"
                // width={67}
                // height={67}
                alt="icon_clock"
                className=""
              />
              <p className="text-white font-medium text-xl italic">
                Kausalitas: Hukum Alam atau Tuhan: Pemikiran Religio-Saintifik
                al-Ghazali
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of RPL */}
    </>
  );
}
