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
          "Hello, today is special day fo you! Join us in a big agenda of Ramadan!"
        }
      />

      <BigAgenda bigAgendaTitle="Grand Opening" />

      <SpectacularShow />

      <div className="w-[153px] md:w-[318px] lg:w-[820px] h-[38px] md:h-[63px] lg:h-[161px] bg-white rounded-[200px] border lg:border-[3px] border-black shadow-lg relative flex justify-center items-center mt-16 lg:mt-40 mb-6 lg:mb-10">
        <h1 className="text-[#15575B] text-[8px] md:text-[12px] lg:text-2xl font-bold italic">
          "Stay tuned for exciting agendas this Ramadan!"
        </h1>
        <img
          src="/images/maskot.png"
          // width={318}
          // height={318}
          alt="sign"
          className="absolute w-[69px] h-[69px] md:w-[123px] md:h-[123px] lg:w-[318px] lg:h-[318px] -right-9 md:-right-14 lg:-right-36 scale-x-[-1]"
        />
      </div>
    </>
  );
}
