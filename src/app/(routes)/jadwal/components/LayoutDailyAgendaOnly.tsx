"use client";

import DailyAgendaHeader from "./shared/DailyAgendaHeader";
import MimbarSubuh from "./shared/MimbarSubuh";
import RamadanPublicLecture from "./shared/RamadanPublicLecture";
import Samudra from "./shared/Samudra";
// import SpectacularShow from "./shared/SpectacularShow";

export default function LayoutDailyAgendaOnly() {
  return (
    <>
      <DailyAgendaHeader />

      <MimbarSubuh />

      {/*  */}

      <Samudra />

      {/*  */}

      <RamadanPublicLecture />
    </>
  );
}
