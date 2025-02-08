"use client";

import BigAgenda from "./shared/BigAgenda";
import DailyAgendaHeader from "./shared/DailyAgendaHeader";
import JadwalGreet from "./shared/JadwalGreet";
import MimbarSubuh from "./shared/MimbarSubuh";
import RamadanPublicLecture from "./shared/RamadanPublicLecture";
import Samudra from "./shared/Samudra";
import SpectacularShow from "./shared/SpectacularShow";

// interface untuk dailyAgenda

interface DailyAgendaItem {
  id: number;
  documentId: string;
  theme: string;
  time: string;
  daily_agenda_type: "Samudera" | "RPL" | "Mimbar_Subuh"; // Pastikan sesuai dengan JSON
  date: string;
  profile: Profile;
}

// interface untuk big agenda
interface ImageSpectacularShows {
  id: number;
  documentId: string;
  publicUrl: string;
  title: string;
}

interface Profile {
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
  profile: Profile;
}

interface Source_person {
  id: number;
  documentId: string;
  profile: Profile;
}

interface BigAgendaItem {
  id: number;
  documentId: string;
  theme: string;
  place: string;
  date: string;
  time: string;
  big_agenda_type: string;
  image_spectacular_shows: [ImageSpectacularShows];
  source_person: [Source_person];
  moderator: Moderator;
}

export default function LayoutBigAgendaRdkFest({
  dataBigAgenda,
  dataDailyAgenda,
}: {
  dataBigAgenda: BigAgendaItem[];
  dataDailyAgenda: DailyAgendaItem[];
}) {
  const agendaOrder = ["Mimbar_Subuh", "Samudera", "RPL"]; // buat sorting kalau semisal api nya amburadul urutan nya (awikwok)

  //sort.
  const sortedDailyAgenda = dataDailyAgenda.sort((a, b) => {
    return (
      agendaOrder.indexOf(a.daily_agenda_type) -
      agendaOrder.indexOf(b.daily_agenda_type)
    );
  });
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
      <BigAgenda
        bigAgendaTitle={"RDK Festival"}
        dataBigAgenda={dataBigAgenda[0]}
      />

      <SpectacularShow dataBigAgenda={dataBigAgenda} />

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

      {/*  */}

      {/* <Samudra /> */}

      {/*  */}

      {/* <RamadanPublicLecture /> */}
    </>
  );
}
