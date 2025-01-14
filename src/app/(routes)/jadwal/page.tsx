"use client";

import Image from "next/image";
import JadwalHeader from "./components/shared/JadwalHeader";
import LayoutBigAgendaGrandOpening from "./components/LayoutBigAgendaGrandOpening";
import LayoutBigAgendaMIT from "./components/LayoutBigAgendaMIT";
import LayoutDailyAgendaOnly from "./components/LayoutDailyAgendaOnly";
import LayoutDailyAgendaNoMimbarSubuh from "./components/LayoutDailyAgendaNoMimbarSubuh";
import LayoutDailyAgendaRplOnly from "./components/LayoutDailyAgendaRplOnly";
import LayoutBeforeRamadan from "./components/LayoutBeforeRamadan";
import LayoutAfterRamadan from "./components/LayoutAfterRamadan";
import Layout2LastDay from "./components/Layout2LastDay";
import LayoutIdulFitri from "./components/LayoutIdulFitri";
import LayoutBigAgendaRdkFest from "./components/LayoutBigAgendaRdkFest";

export default function JadwalPage() {
  return (
    <div className="w-full h-fit flex flex-col bg-gradient-to-b from-[#ffffff] from-1%  to-[#21666A] to-30% bg-scroll items-center">
      <JadwalHeader />
      {/* temporary calendar */}
      <div className="w-[637px] h-[550px] bg-white mt-20">
        !temporary calendar
      </div>

      {/* rdk logo */}
      <Image
        src="/images/jadwal/rdk_logo_with_title.svg"
        width={210}
        height={133}
        alt="sign"
        className="mt-10"
      />

      {/* event (untuk check aja)*/}

      {/* <LayoutBigAgendaGrandOpening /> */}
      <LayoutBigAgendaRdkFest />
      {/* <LayoutBigAgendaMIT /> */}
      {/* <LayoutDailyAgendaOnly /> */}
      {/* <LayoutDailyAgendaNoMimbarSubuh /> */}
      {/* <LayoutDailyAgendaRplOnly /> */}
      {/* <LayoutBeforeRamadan /> */}
      {/* <LayoutAfterRamadan /> */}
      {/* <Layout2LastDay /> */}
      {/* <LayoutIdulFitri /> */}

      {/* event */}

      {/*  */}

      {/* TWO BUTTON CONTAINER */}
      <div className="flex flex-row mt-20 gap-x-40 mb-10 z-20">
        {/* button day before */}
        <div className="w-[278px] h-[59px] bg-[#F4AA3D] hover:bg-[#cc8f33] cursor-pointer border-[3px] border-black rounded-[30px] items-center justify-center flex flex-row gap-x-4">
          <Image
            src="/images/jadwal/icon_arrow_left.svg"
            width={24}
            height={24}
            alt="icon_arrow"
            className=""
          />
          <p className="text-black font-medium text-xl italic">Day Before</p>
        </div>
        {/* button day after */}
        <div className="w-[278px] h-[59px] bg-[#15575B] hover:bg-[#124c4f] cursor-pointer rounded-[30px] border-[3px] border-black items-center justify-center flex flex-row gap-x-4">
          <p className="text-white font-medium text-xl italic">Next Day</p>
          <Image
            src="/images/jadwal/icon_arrow_right.svg"
            width={24}
            height={24}
            alt="icon_arrow"
            className=""
          />
        </div>
      </div>
      {/* end of TWO BUTTON CONTAINER */}

      {/* end bagian content event */}
    </div>
  );
}
