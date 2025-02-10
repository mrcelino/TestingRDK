"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  add,
  sub,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  parseISO,
  startOfToday,
  isBefore,
  isAfter,
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
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

// interfaces untuk daily agendaaa
interface DailyProfile {
  id: number;
  documentId: string;
  name: string;
  publicUrl: string;
}

interface DailyAgendaItem {
  id: number;
  documentId: string;
  theme: string;
  time: string;
  daily_agenda_type: "Samudera" | "RPL" | "Mimbar_Subuh";
  date: string;
  profile: DailyProfile;
}

interface DailyAPIResponse {
  data: DailyAgendaItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      total: number;
    };
  };
}

// interafaces sementara untuk big agendaaa
interface BigProfile {
  id: number;
  documentId: string;
  name: string;
  publicUrl: string;
}

interface Moderator {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  profile: BigProfile;
}

interface Source_person {
  id: number;
  documentId: string;
  profile: BigProfile;
}

interface ImageSpectacularShows {
  id: number;
  documentId: string;
  publicUrl: string;
  title: string;
}

interface bigAgendaItem {
  id: number;
  documentId: string;
  theme: string;
  place: string;
  date: string;
  time: string;
  big_agenda_type: "MIT" | "Grand_Opening" | "RDK_Festival" | "Special_Eid" | "Two_Last_Day";
  image_spectacular_shows: [ImageSpectacularShows];
  source_person: Source_person;
  moderator: Moderator;
}

interface bigAPIResponse {
  data: bigAgendaItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      total: number;
    };
  };
}

export default function JadwalPage() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  const [currentMonth, setCurrentMonth] = useState<string>(
    format(today, "MMM-yyyy")
  );
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const [layout, setLayout] = useState<string>("");
  const [dailyAgenda, setDailyAgenda] = useState<DailyAgendaItem[]>([]);
  const [bigAgenda, setBigAgenda] = useState<any[]>([]);
  const [highlightDates, setHighlightDates] = useState<Date[]>([]);

  // fetching daily agenda & big agenda
  useEffect(() => {
    const fetchAgendas = async () => {
      try {
        const date = format(selectedDay, "yyyy-MM-dd");

        // Jalankan kedua fetch secara paralel dengan Promise.all
        const [dailyResponse, bigResponse] = await Promise.all([
          // fetch(`https://be-rdk-website-production.up.railway.app/api/daily-agendas?date=${date}`),
          fetch(`http://localhost:1337/api/daily-agendas?date=${date}`),
          // fetch(`https://be-rdk-website-production.up.railway.app/api/big-agenda?date=${date}`)
          fetch(`http://localhost:1337/api/big-agenda?date=${date}`),
        ]);

        // Parse JSON response
        const [dailyData, bigData]: [DailyAPIResponse, bigAPIResponse] =
          await Promise.all([dailyResponse.json(), bigResponse.json()]);

        // Set state
        setDailyAgenda(dailyData.data);
        setBigAgenda(bigData.data);

        console.log("Daily Agenda:", dailyData.data);
        console.log("Big Agenda:", bigData.data);
      } catch (error) {
        console.error("Error fetching agendas:", error);
      }
    };

    fetchAgendas();
  }, [selectedDay]);

  // useEffect(() => {
  //   const fetchAgendas = async () => {
  //     const date = format(selectedDay, "yyyy-MM-dd");

  //     // Fetch daily agenda
  //     const dailyResponse = await fetch(
  //       `https://be-rdk-website-production.up.railway.app/api/daily-agendas?date=${date}`
  //     );
  //     const dailyData = await dailyResponse.json();
  //     setDailyAgenda(dailyData.data);
  //     console.log("Daily Agenda:", dailyData.data);

  //     // Fetch big agenda
  //     const bigResponse = await fetch(
  //       `https://be-rdk-website-production.up.railway.app/api/big-agenda?date=${date}`
  //     );
  //     const bigData = await bigResponse.json();
  //     setBigAgenda(bigData.data);
  //     console.log("Big Agenda:", bigData.data);
  //   };

  //   fetchAgendas();
  // }, [selectedDay]);

  // Menentukan Highlited Dates berdasarkan Tanggal-tanggal big agenda
  useEffect(() => {
    const fetchHighlightDates = async () => {
      try {
        const response = await fetch(
          // "https://be-rdk-website-production.up.railway.app/api/big-agenda"
          "http://localhost:1337/api/big-agenda"
        );
        const data = await response.json();

        if (data?.data) {
          const highlightDates = data.data
            .filter(({ date }: { date: string }) => {
              const formattedDate = format(parseISO(date), "yyyy-MM-dd");
              return (
                formattedDate !== "2025-03-28" && formattedDate !== "2025-03-29" // ini biar 28 dan 29 ga ikut highlited date karena dia bukan big agenda tapi 2lastday (2lastday nya dimaskin ke big-agenda buat naruh gambar doang)
              );
            })
            .map(({ date }: { date: string }) => parseISO(date));

          setHighlightDates(highlightDates);
        }
      } catch (error) {
        console.error("Error fetching highlight dates:", error);
      }
    };

    fetchHighlightDates();
  }, []);

  // useEffect(() => {
  //   const fetchHighlightDates = async () => {
  //     try {
  //       const response = await fetch(
  //         // "https://be-rdk-website-production.up.railway.app/api/big-agenda"
  //         "http://localhost:1337/api/big-agenda"
  //       );
  //       const data = await response.json();

  //       if (data?.data) {
  //         const highlightDates = data.data.map(({ date }: { date: string }) =>
  //           parseISO(date)
  //         );
  //         setHighlightDates(highlightDates);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching highlight dates:", error);
  //     }
  //   };

  //   fetchHighlightDates();
  // }, []);

  // ini untuk decide layout apa yang mau digunakan
  useEffect(() => {
    const tanggal = format(selectedDay, "yyyy-MM-dd");

    // Tanggal batas
    const beforeRamadanDate = parseISO("2025-03-01");
    const afterRamadanDate = parseISO("2025-03-30");
    console.log(highlightDates[0])

    if (isBefore(selectedDay, highlightDates[0])) {
      setLayout("LayoutBeforeRamadan");
    } else if (isAfter(selectedDay, afterRamadanDate)) {
      setLayout("LayoutAfterRamadan");
    } else {
      // Cek agenda besar
      const bigAgendaForDate = bigAgenda.find(
        (agenda) => agenda.date === tanggal
      );

      if (bigAgendaForDate) {
        // Set layout berdasarkan jenis agenda besar
        switch (bigAgendaForDate.big_agenda_type) {
          case "RDK_Festival":
            setLayout("LayoutBigAgendaRdkFest");
            break;
          case "Grand_Opening":
            setLayout("LayoutBigAgendaGrandOpening");
            break;
          case "MIT":
            setLayout("LayoutBigAgendaMIT");
            break;
          case "Special_Eid":
            setLayout("LayoutIdulFitri");
            break;
          case "Two_Last_Day":
            setLayout("Layout2LastDay");
            break;
          default:
            setLayout("LayoutAgendaNotReleased");
            break;
        }
      } else if (dailyAgenda.length > 0) {
        // Jika tidak ada agenda besar, cek dailyyy cihuyy
        if (dailyAgenda.length === 3) {
          setLayout("LayoutDailyAgendaOnly");
        } else if (dailyAgenda.length === 1) {
          setLayout("LayoutDailyAgendaRplOnly");
        } else if (dailyAgenda.length === 2) {
          setLayout("LayoutDailyAgendaNoMimbarSubuh");
        } else {
          setLayout("LayoutAgendaNotReleased");
        }
      } else {
        setLayout("LayoutAgendaNotReleased");
      }
    }
  }, [selectedDay, dailyAgenda, bigAgenda]);

  console.log(layout);

  // const highlightDates = [
  //   parseISO("2025-03-01"),
  //   parseISO("2025-03-08"),
  //   parseISO("2025-03-21"),
  //   parseISO("2025-03-22"),
  //   parseISO("2025-03-30"),
  // ];

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
  }

  function previousDay() {
    setSelectedDay(sub(selectedDay, { days: 1 }));
  }

  return (
    <div className="w-full h-fit flex flex-col bg-gradient-to-b from-[#ffffff] from-1% to-[#21666A] to-30% bg-scroll items-center relative">
      <div className="absolute w-full h-fit top-1/3 max-w-[1920px]">
        <div className="flex w-full justify-between opacity-75">
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
        </div>

        <div className="flex w-full justify-between mt-[18rem]">
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09] mt-[8rem]"></div>
        </div>
        <div className="flex w-full justify-between mt-10">
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09] mt-[8rem]"></div>
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
        </div>

        <div className="flex w-full justify-between mt-[18rem]">
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09] mt-[8rem]"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/images/jadwal/pattern-bg-mobile3.svg')] lg:bg-[url('/images/jadwal/pattern-for-bg.svg')] bg-repeat opacity-10 lg:opacity-[0.08] mix-blend-difference"></div>
      <div className="w-full h-full relative flex flex-col items-center">
        <JadwalHeader />

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

        {layout === "LayoutBeforeRamadan" && <LayoutBeforeRamadan />}
        {layout === "LayoutAfterRamadan" && <LayoutAfterRamadan />}
        {layout === "LayoutDailyAgendaOnly" && (
          <LayoutDailyAgendaOnly dataDailyAgenda={dailyAgenda} />
        )}
        {layout === "LayoutDailyAgendaRplOnly" && (
          <LayoutDailyAgendaRplOnly dataDailyAgenda={dailyAgenda} />
        )}
        {layout === "LayoutDailyAgendaNoMimbarSubuh" && (
          <LayoutDailyAgendaNoMimbarSubuh dataDailyAgenda={dailyAgenda} />
        )}
        {layout === "LayoutBigAgendaGrandOpening" && (
          <LayoutBigAgendaGrandOpening
            dataBigAgenda={bigAgenda}
            // bigAgenda={bigAgenda.find(
            //   (agenda) => agenda.big_agenda_type === "Grand_Opening"
            // )}
          />
        )}
        {layout === "LayoutBigAgendaMIT" && (
          <LayoutBigAgendaMIT
            dataBigAgenda={bigAgenda}
            dataDailyAgenda={dailyAgenda}
            // bigAgenda={bigAgenda.find(
            //   (agenda) => agenda.big_agenda_type === "MIT"
            // )}
          />
        )}
        {layout === "LayoutBigAgendaRdkFest" && (
          <LayoutBigAgendaRdkFest
            dataBigAgenda={bigAgenda}
            dataDailyAgenda={dailyAgenda}
            // bigAgenda={bigAgenda.find(
            //   (agenda) => agenda.big_agenda_type === "RDK_Festival"
            // )}
          />
        )}
        {layout === "Layout2LastDay" && <Layout2LastDay dataBigAgenda={bigAgenda} />}
        {layout === "LayoutIdulFitri" && (
          <LayoutIdulFitri dataBigAgenda={bigAgenda} />
        )}
        {layout === "LayoutAgendaNotReleased" && <LayoutAgendaNotReleased />}

        {/* event */}

        {/* event (untuk check aja)*/}

        {/* <LayoutBigAgendaGrandOpening /> */}
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

        {/* ini masih coba coba */}
        {/* {layout === "LayoutBeforeRamadan" && <LayoutBeforeRamadan />}
        {layout === "LayoutBigAgendaGrandOpening" && (
          <LayoutBigAgendaGrandOpening />
        )}
        {layout === "LayoutBigAgendaMIT" && <LayoutBigAgendaMIT />}
        {layout === "LayoutAgendaRdkFest" && <LayoutBigAgendaRdkFest />}
        {layout === "LayoutDailyAgendaOnly" && <LayoutDailyAgendaOnly />}
        {layout === "Layout2LastDay" && <Layout2LastDay />}
        {layout === "LayoutIdulFitri" && <LayoutIdulFitri />}
        {layout === "LayoutAgendaNotReleased" && <LayoutAgendaNotReleased />}
        {layout === "LayoutAfterRamadan" && <LayoutAfterRamadan />} */}

        {/*  */}

        {/* TWO BUTTON CONTAINER */}
        <div className="flex flex-row mt-4 md:mt-10 lg:mt-20 gap-x-10 md:gap-x-20 lg:gap-x-40 mb-10 z-20">
          {/* button previous day */}
          <div
            onClick={previousDay}
            className="w-[100px] md:w-[160px] lg:w-[278px] h-[25px] md:h-[34px] lg:h-[59px] bg-[#F4AA3D] hover:bg-[#cc8f33] cursor-pointer border lg:border-[3px] border-black rounded-[30px] items-center justify-center flex flex-row gap-x-4"
          >
            {/* <Image
              src="/images/jadwal/icon_arrow_left.svg"
              width={24}
              height={24}
              alt="icon_arrow"
              className="w-[20px] md:w-[24px] h-[21px] md:h-[24px]"
            /> */}
            <ArrowLeftIcon
              className="h-4 w-4 md:h-7 md:w-7 lg:w-10 lg:h-10"
              aria-hidden="true"
            />
            <p className="text-black font-medium text-[8px] md:text-sm lg:text-xl italic">
              Previous Day
            </p>
          </div>
          {/* button day after */}
          <div
            onClick={nextDay}
            className="w-[100px] md:w-[160px] lg:w-[278px] h-[25px] md:h-[34px] lg:h-[59px] bg-[#15575B] hover:bg-[#124c4f] cursor-pointer rounded-[30px] border lg:border-[3px] border-black items-center justify-center flex flex-row gap-x-4"
          >
            <p className="text-white font-medium text-[8px] md:text-sm lg:text-xl italic">
              Next Day
            </p>
            {/* <Image
              src="/images/jadwal/icon_arrow_right.svg"
              width={24}
              height={24}
              alt="icon_arrow"
              className="w-[20px] md:w-[24px] h-[21px] md:h-[24px]"
            /> */}
            <ArrowRightIcon
              className="h-4 w-4 md:h-7 md:w-7 lg:w-10 lg:h-10 text-white"
              aria-hidden="true"
            />
          </div>
        </div>
        {/* end of TWO BUTTON CONTAINER */}

        {/* end bagian content event */}
      </div>
    </div>
  );
}
