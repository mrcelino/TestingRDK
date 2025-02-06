"use client";

import Image from "next/image";
import BigAgenda from "./shared/BigAgenda";
import JadwalGreet from "./shared/JadwalGreet";
import SpectacularShow from "./shared/SpectacularShow";

export default function LayoutBigAgendaGrandOpening() {
  return (
    <>
      <JadwalGreet
        className={"mt-6 md:mt-8 lg:mt-12"}
        text={
          "Hello, today is special day for you! Join us in a big agenda of Ramadan!"
        }
      />

      <BigAgenda bigAgendaTitle="Grand Opening" />

      <SpectacularShow />

      <div className="w-[200px] md:w-[318px] lg:w-[820px] h-[48px] md:h-[63px] lg:h-[161px] bg-white rounded-[200px] border lg:border-[3px] border-black shadow-lg relative flex justify-center items-center text-center mt-16 lg:mt-40 mb-6 lg:mb-10 px-2 md:px-6">
        <h1 className="text-[#15575B] text-[8px] md:text-[12px] lg:text-2xl font-semibold italic font-body">
          "Stay tuned for exciting agendas this Ramadan!"
        </h1>
        <img
          src="/images/jadwal/maskot_wave.svg"
          width={235}
          height={311}
          alt="sign"
          className="absolute w-[69px] h-[69px] md:w-[123px] md:h-[123px] lg:w-[235px] lg:h-[311px] -right-9 md:-right-14 lg:-right-32 scale-x-[-1]"
        />
      </div>
    </>
  );
}
