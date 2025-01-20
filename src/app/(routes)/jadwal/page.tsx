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
    // <div className="w-full h-fit flex flex-col bg-gradient-to-b from-[#ffffff] from-1%  to-[#21666A] to-30% bg-scroll items-center">
    //   <div className="w-full h-full bg-[url('/images/jadwal/pattern-for-bg.svg')] bg-opacity-5 bg-repeat flex flex-col items-center">
    <div className="w-full h-fit flex flex-col bg-gradient-to-b from-[#ffffff] from-1% to-[#21666A] to-30% bg-scroll items-center relative">
      <div className="absolute inset-0 bg-[url('/images/jadwal/pattern-for-bg.svg')] bg-repeat opacity-10"></div>
      <div className="w-full h-full relative flex flex-col items-center">
        <JadwalHeader />
        {/* temporary calendar */}
        <div className="w-[182px] lg:w-[637px] h-[140px] lg:h-[550px] bg-white mt-10 lg:mt-20">
          !temporary calendar
        </div>

        {/* rdk logo */}
        <Image
          src="/images/jadwal/rdk_logo_with_title.svg"
          width={0}
          height={0}
          // width={210}
          // height={133}
          alt="sign"
          className="mt-5 md:mt-8 lg:mt-10 w-[51px] h-[32px] md:w-[99px] md:h-[63px] lg:w-[210px] lg:h-[133px]"
        />

        {/* event (untuk check aja)*/}

        <LayoutBigAgendaGrandOpening />
        {/* <LayoutBigAgendaRdkFest /> */}
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
        <div className="flex flex-row mt-2 md:mt-10 lg:mt-20 gap-x-10 md:gap-x-20 lg:gap-x-40 mb-10 z-20">
          {/* button day before */}
          <div className="w-[81px] md:w-[160px] lg:w-[278px] h-[17px] md:h-[34px] lg:h-[59px] bg-[#F4AA3D] hover:bg-[#cc8f33] cursor-pointer border lg:border-[3px] border-black rounded-[30px] items-center justify-center flex flex-row gap-x-4">
            <Image
              src="/images/jadwal/icon_arrow_left.svg"
              width={24}
              height={24}
              alt="icon_arrow"
              className="w-[20px] md:w-[24px] h-[21px] md:h-[24px]"
            />
            <p className="text-black font-medium text-[6px] md:text-sm lg:text-xl italic">Previous Day</p>
          </div>
          {/* button day after */}
          <div className="w-[81px] md:w-[160px] lg:w-[278px] h-[17px] md:h-[34px] lg:h-[59px] bg-[#15575B] hover:bg-[#124c4f] cursor-pointer rounded-[30px] border lg:border-[3px] border-black items-center justify-center flex flex-row gap-x-4">
            <p className="text-white font-medium text-[6px] md:text-sm lg:text-xl italic">Next Day</p>
            <Image
              src="/images/jadwal/icon_arrow_right.svg"
              width={24}
              height={24}
              alt="icon_arrow"
              className="w-[20px] md:w-[24px] h-[21px] md:h-[24px]"
            />
          </div>
        </div>
        {/* end of TWO BUTTON CONTAINER */}

        {/* end bagian content event */}
      </div>
    </div>
  );
}
