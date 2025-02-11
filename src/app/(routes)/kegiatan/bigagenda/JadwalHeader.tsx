"use client";

import Image from "next/image";

export default function JadwalHeader() {
  return (
    <div className="relative flex w-[216px] h-[63px] md:w-[335px] md:h-[98px] lg:w-[635px] lg:h-[185px] bg-[#15575B] rounded-[50px] border lg:border-[3px] border-black mx-auto mt-12 md:mt-16 lg:mt-0 justify-center items-center mb-10">
      {/* left cross thing (i dunno the name bruh) */}
      <Image
        src="/images/kegiatan/headerJadwalPlus.svg"
        width={182}
        height={182}
        alt="sign"
        className="absolute w-[62px] h-[62px] md:w-[96px] md:h-[96px] lg:w-[182px] lg:h-[182px] -left-5 md:-left-10 lg:-left-20 top-0"
        />
      {/* right cross thing (i dunno the name bruh) */}
      <Image
        src="/images/kegiatan/headerJadwalPlus.svg"
        width={182}
        height={182}
        alt="sign"
        className="absolute w-[62px] h-[62px] md:w-[96px] md:h-[96px] lg:w-[182px] lg:h-[182px] -right-5 md:-right-10 lg:-right-20 top-0 scale-x-[-1]"
        />
      {/* header title container */}
      <div className="flex flex-col text-center">
      {/* <h1 className="bg-clip-text bg-gradient-to-b from-[0.001%] from-black/65 to-white text-transparent text-sm md:text-lg lg:text-4xl font-semibold font-heading">Agenda</h1> */}
        <h1 className="text-white text-sm md:text-lg lg:text-4xl font-medium font-heading">Big Events</h1>
        <h1 className="text-[#EFC828] text-xs md:text-lg lg:text-3xl font-semibold font-heading">Ramadhan Di Kampus</h1>
        <h1 className="text-white text-[10px] md:text-base lg:text-2xl font-semibold font-body italic">Universitas Gadjah Mada</h1>
      </div>
    </div>
  );
}