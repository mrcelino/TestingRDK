"use client";


import DailyAgendaHeader from "./shared/DailyAgendaHeader";
import RamadanPublicLecture from "./shared/RamadanPublicLecture";

// import SpectacularShow from "./shared/SpectacularShow";

interface Profile {
  id: number;
  documentId: string;
  name: string;
  publicUrl: string;
};

interface AgendaItem {
  id: number;
  documentId: string;
  theme: string;
  time: string;
  daily_agenda_type: "Samudera" | "RPL" | "Mimbar_Subuh"; // Pastikan sesuai dengan JSON
  date: string;
  profile: Profile;
};

export default function LayoutDailyAgendaRplOnly({dataDailyAgenda} : {dataDailyAgenda : AgendaItem[]}) {
  return (
    <>
      {dataDailyAgenda.length > 0 ? <DailyAgendaHeader /> : ''}

      {dataDailyAgenda.map((agenda) => {
        switch (agenda.daily_agenda_type) {
          // case "Mimbar_Subuh":
          //   return <MimbarSubuh key={agenda.id} data={agenda} />;
          // case "Samudera":
          //   return <Samudra key={agenda.id} data={agenda} />;
          case "RPL":
            return <RamadanPublicLecture key={agenda.id} data={agenda} />;
          default:
            return null; // Supaya tidak ada error jika ada tipe baru
        }
      })}
      {/*  */}

       {/* <RamadanPublicLecture data={} /> */}
    </>
  );
}
