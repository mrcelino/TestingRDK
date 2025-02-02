"use client";

import BigAgenda from "./shared/BigAgenda";
import DailyAgendaHeader from "./shared/DailyAgendaHeader";
import JadwalGreet from "./shared/JadwalGreet";
import MimbarSubuh from "./shared/MimbarSubuh";
import RamadanPublicLecture from "./shared/RamadanPublicLecture";
import Samudra from "./shared/Samudra";
// import SpectacularShow from "./shared/SpectacularShow";

export default function LayoutBigAgendaMIT() {
  return (
    <>
      {/* ini kotak yang nge grreet itulah apaalah */}
      <JadwalGreet
        className={"mt-12"}
        text={
          "Hello, today is special day fo you! Join us in a big agenda of Ramadan!"
        }
      />

      {/* start bagian content event */}
      <BigAgenda bigAgendaTitle={"Muslimah Inspiring Talk"} />

      <DailyAgendaHeader />

      <MimbarSubuh />

      {/*  */}

      <Samudra />

      {/*  */}

      <RamadanPublicLecture />
    </>
  );
}
