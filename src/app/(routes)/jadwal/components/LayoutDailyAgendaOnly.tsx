"use client";

import DailyAgendaHeader from "./shared/DailyAgendaHeader";
import MimbarSubuh from "./shared/MimbarSubuh";
import RamadanPublicLecture from "./shared/RamadanPublicLecture";
import Samudra from "./shared/Samudra";
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

export default function LayoutDailyAgendaOnly( {dataDailyAgenda} : {dataDailyAgenda : AgendaItem[]}) {
  const agendaOrder = ["Mimbar_Subuh", "Samudera", "RPL"]; // buat sorting kalau semisal api nya amburadul urutan nya (awikwok)

  //sort.
  const sortedDailyAgenda = dataDailyAgenda.sort((a, b) => {
    return agendaOrder.indexOf(a.daily_agenda_type) - agendaOrder.indexOf(b.daily_agenda_type);
  });

  return (
    <>
      {sortedDailyAgenda.length > 0 ? <DailyAgendaHeader /> : ''}

      {sortedDailyAgenda.map((agenda) => {
        switch (agenda.daily_agenda_type) {
          case "Mimbar_Subuh":
            return <MimbarSubuh key={agenda.id} data={agenda} />;
          case "Samudera":
            return <Samudra key={agenda.id} data={agenda} />;
          case "RPL":
            return <RamadanPublicLecture key={agenda.id} data={agenda} />;
          default:
            return null; // Supaya tidak ada error jika ada tipe baru
        }
      })}
      {/* <MimbarSubuh /> */}
      {/* <Samudra />      
      <RamadanPublicLecture /> */}
    </>
  );
}
