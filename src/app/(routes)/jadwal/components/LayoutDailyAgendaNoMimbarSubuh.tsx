"use client";

import DailyAgendaHeader from "./shared/DailyAgendaHeader";
import RamadanPublicLecture from "./shared/RamadanPublicLecture";
import Samudra from "./shared/Samudra";
// import SpectacularShow from "./shared/SpectacularShow";

export default function LayoutDailyAgendaNoMimbarSubuh() {
  return (
    <>
      <DailyAgendaHeader />

      {/* tanpa mimbar subuh */}

      {/*  */}

      <Samudra />

      {/*  */}

      <RamadanPublicLecture />
    </>
  );
}
