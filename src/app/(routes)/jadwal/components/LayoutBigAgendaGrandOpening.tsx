"use client";

import Image from "next/image";
import BigAgenda from "./shared/BigAgenda";
import JadwalGreet from "./shared/JadwalGreet";
import SpectacularShow from "./shared/SpectacularShow";

export default function LayoutBigAgendaGrandOpening() {
  return (
    <>
      <JadwalGreet
        className={"mt-12"}
        text={
          "Hello, today is special day fo you! Join us in a big agenda of Ramadan!"
        }
      />

      <BigAgenda bigAgendaTitle="Grand Opening" />

      <SpectacularShow />

      <div className="w-[820px] h-[161px] bg-white rounded-[200px] border-[3px] border-black shadow-lg relative flex justify-center items-center mt-40 mb-10">
        <h1 className="text-[#15575B] text-2xl font-bold italic">
          "Stay tuned for exciting agendas this Ramadan!"
        </h1>
        <Image
          src="/images/maskot.png"
          width={318}
          height={318}
          alt="sign"
          className="absolute -right-36 scale-x-[-1]"
        />
      </div>
    </>
  );
}
