"use client";

import BigAgenda from "./shared/BigAgenda";
import DailyAgendaHeader from "./shared/DailyAgendaHeader";
import JadwalGreet from "./shared/JadwalGreet";
import MimbarSubuh from "./shared/MimbarSubuh";
import RamadanPublicLecture from "./shared/RamadanPublicLecture";
import Samudra from "./shared/Samudra";
import SpectacularShow from "./shared/SpectacularShow";

export default function LayoutBigAgendaRdkFest() {
  return (
    <>
      {/* ini kotak yang nge grreet itulah apaalah */}
      <JadwalGreet
        className={"mt-12"}
        text={
          "Hello, today is special day for you! Join us in a big agenda of Ramadan!"
        }
      />

      {/* start bagian content event */}
      <BigAgenda bigAgendaTitle={"RDK Festival"} />

      <SpectacularShow />

      <DailyAgendaHeader />

      <MimbarSubuh />

      {/*  */}

      <Samudra />

      {/*  */}

      <RamadanPublicLecture />
    </>
  );
}
