"use client";

import Image from "next/image";

export default function JadwalHeader() {
  return (
    <div className="relative flex w-[635px] h-[185px] bg-[#15575B] rounded-[50px] mx-auto justify-center items-center ">
      <Image
        src="/images/headerJadwalPlus.png"
        width={182}
        height={182}
        alt="sign"
        className="absolute left-0 top-1/2"
      />
      {/* header title container */}
      <div className="flex flex-col text-center">
        <h1 className="text-red-400 text-4xl">Agenda</h1>
        <h1 className="text-red-400 text-3xl">Ramadhan Di Kampus</h1>
        <h1 className="text-red-400 text-2xl">Universitas Gadjah Mada</h1>
      </div>
    </div>
  );
}
