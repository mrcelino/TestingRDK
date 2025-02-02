"use client";

import Image from "next/image";
import { useState } from "react";
import {
  add,
  sub,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";

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
import Calendar from "./components/shared/Calendar";
import LayoutAgendaNotReleased from "./components/LayoutAgendaNotReleased";

export default function JadwalPage() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  const [currentMonth, setCurrentMonth] = useState<string>(
    format(today, "MMM-yyyy")
  );
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const highlightDates = [
    parseISO("2025-03-01"),
    parseISO("2025-03-01"),
    parseISO("2025-03-21"),
    parseISO("2025-03-22"),
    parseISO("2025-03-30"),
  ];

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  function nextDay() {
    setSelectedDay(add(selectedDay, { days: 1 }));
  };
  
  // Fungsi untuk Previous Day
  function previousDay() {
    setSelectedDay(sub(selectedDay, { days: 1 }));
  };

  return (
    // <div className="w-full h-fit flex flex-col bg-gradient-to-b from-[#ffffff] from-1%  to-[#21666A] to-30% bg-scroll items-center">
    //   <div className="w-full h-full bg-[url('/images/jadwal/pattern-for-bg.svg')] bg-opacity-5 bg-repeat flex flex-col items-center">
    <div className="w-full h-fit flex flex-col bg-gradient-to-b from-[#ffffff] from-1% to-[#21666A] to-30% bg-scroll items-center relative">
      <div className="absolute inset-0 lg:bg-[url('/images/jadwal/pattern-for-bg.svg')] bg-repeat opacity-5"></div>
      <div className="w-full h-full relative flex flex-col items-center">
        <JadwalHeader />
        {/* temporary calendar */}
        {/* <div className="w-[182px] lg:w-[637px] h-[140px] lg:h-[550px] bg-white mt-10 lg:mt-20">
          !temporary calendar
        </div> */}
        <Calendar
          days={days}
          selectedDay={selectedDay}
          currentMonth={currentMonth}
          highlightDates={highlightDates}
          onPreviousMonth={previousMonth}
          onNextMonth={nextMonth}
          onSelectDay={setSelectedDay}
        />

        {/* rdk logo */}
        <Image
          src="/images/jadwal/rdk_logo_with_title.svg"
          width={0}
          height={0}
          // width={210}
          // height={133}
          alt="sign"
          className="mt-5 md:mt-8 lg:mt-10 w-[63px] h-[40px] md:w-[99px] md:h-[63px] lg:w-[210px] lg:h-[133px]"
        />

        {/* event (untuk check aja)*/}
        

        <LayoutBigAgendaGrandOpening />
        {/* <LayoutBigAgendaRdkFest /> */}
        {/* <LayoutBigAgendaMIT /> */}
        {/* <LayoutDailyAgendaOnly /> */}
        {/* <LayoutDailyAgendaNoMimbarSubuh /> */}
        {/* <LayoutDailyAgendaRplOnly /> */}
        {/* <LayoutBeforeRamadan /> */}
        {/* <LayoutAgendaNotReleased /> */}
        {/* <LayoutAfterRamadan /> */}
        {/* <Layout2LastDay /> */}
        {/* <LayoutIdulFitri /> */}

        {/* event */}

        {/*  */}

        {/* TWO BUTTON CONTAINER */}
        <div className="flex flex-row mt-4 md:mt-10 lg:mt-20 gap-x-10 md:gap-x-20 lg:gap-x-40 mb-10 z-20">
          {/* button previous day */}
          <div onClick={previousDay} className="w-[81px] md:w-[160px] lg:w-[278px] h-[17px] md:h-[34px] lg:h-[59px] bg-[#F4AA3D] hover:bg-[#cc8f33] cursor-pointer border lg:border-[3px] border-black rounded-[30px] items-center justify-center flex flex-row gap-x-4">
            <Image
              src="/images/jadwal/icon_arrow_left.svg"
              width={24}
              height={24}
              alt="icon_arrow"
              className="w-[20px] md:w-[24px] h-[21px] md:h-[24px]"
            />
            <p className="text-black font-medium text-[6px] md:text-sm lg:text-xl italic">
              Previous Day
            </p>
          </div>
          {/* button day after */}
          <div onClick={nextDay} className="w-[81px] md:w-[160px] lg:w-[278px] h-[17px] md:h-[34px] lg:h-[59px] bg-[#15575B] hover:bg-[#124c4f] cursor-pointer rounded-[30px] border lg:border-[3px] border-black items-center justify-center flex flex-row gap-x-4">
            <p className="text-white font-medium text-[6px] md:text-sm lg:text-xl italic">
              Next Day
            </p>
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
