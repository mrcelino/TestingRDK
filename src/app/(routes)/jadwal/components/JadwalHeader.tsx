"use client";

import Image from "next/image";

export default function JadwalHeader() {
  return (
    <div className="relative flex w-[635px] h-[185px] bg-[#15575B] rounded-[50px] border-[3px] border-black mx-auto mt-24 justify-center items-center ">
      {/* left cross thing (i dunno the name bruh) */}
      <Image
        src="/images/jadwal/headerJadwalPlus.svg"
        width={182}
        height={182}
        alt="sign"
        className="absolute -left-20 top-0"
        />
      {/* right cross thing (i dunno the name bruh) */}
      <Image
        src="/images/jadwal/headerJadwalPlus.svg"
        width={182}
        height={182}
        alt="sign"
        className="absolute -right-20 top-0 scale-x-[-1]"
        />
      {/* header title container */}
      <div className="flex flex-col text-center">
        <h1 className="text-white text-4xl font-normal">Agenda</h1>
        <h1 className="text-[#EFC828] text-3xl font-normal">Ramadhan Di Kampus</h1>
        <h1 className="text-white text-2xl font-semibold">Universitas Gadjah Mada</h1>
      </div>
    </div>
  );
}
