"use client";

import Image from "next/image";

export default function DailyAgendaHeader() {
  return (
    <>
      {/* start of daily agenda today */}
      <div data-aos="fade-right"
            data-aos-duration="950"
            data-aos-delay="400" className="w-[212px] md:w-[318px] lg:w-[820px] h-[42px] md:h-[63px] lg:h-[161px] bg-white rounded-[200px] border lg:border-[3px] border-black shadow-lg relative flex justify-center items-center mt-10 md:mt-20 lg:mt-40">
        <h1 className="text-[#15575B] text-xs md:text-base lg:text-3xl font-bold italic font-body">
          Daily Agenda Today
        </h1>
        <Image
          src="/images/jadwal/maskot_wave.svg"
          width={500}
          height={500}
          alt="sign"
          className="absolute w-[83px] h-[83px] md:w-[123px] md:h-[123px] lg:w-[318px] lg:h-[318px] -right-9 md:-right-8 lg:-right-36 scale-x-[-1]"
        />
      </div>
      {/* end of daily agenda today */}
    </>
  );
}
