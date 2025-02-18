"use client";

import Image from "next/image";
import BigAgenda from "./shared/BigAgenda";
import DailyAgendaHeader from "./shared/DailyAgendaHeader";
import JadwalGreet from "./shared/JadwalGreet";
import MimbarSubuh from "./shared/MimbarSubuh";
import RamadanPublicLecture from "./shared/RamadanPublicLecture";
import Samudra from "./shared/Samudra";
import BigAgendaHeader from "./shared/BigAgendaHeader";
// import SpectacularShow from "./shared/SpectacularShow";

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

export default function LayoutBigAgendaGebyarSore({
  dataBigAgenda,
  dataDailyAgenda,
}: {
  dataBigAgenda: BigAgendaItem[];
  dataDailyAgenda: DailyAgendaItem[];
}) {
  // console.log("check data mit big agenda", dataDailyAgenda);
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
          "Hello, today is special day fo you! Join us in a big agenda of Ramadan!"
        }
      />

      <BigAgendaHeader text={"Gebyar Sore"} />

      {/* start of box info event */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-[282px] md:w-[388px] lg:w-[893px] h-[69px] md:h-[81px] lg:h-[187px] bg-[#FBFBFB] border lg:border-[3px] border-black flex flex-col rounded-[50px] items-center justify-center mt-5 md:mt-8 lg:mt-10 py-1 md:py-2 lg:py-5 lg:mb-16"
      >
        <div className="relative flex flex-col text-center">
          {/* <p className="text-[#FFC359] font-semibold text-[8px] md:text-[8px] lg:text-base italic font-body">
            Ramadan Berdaya:
          </p> */}
          <p className="text-[#15575B] font-semibold max-w-[190px] md:max-w-[250px] lg:max-w-[550px] text-[8px] md:text-[8px] lg:text-base italic font-body">
            {/* Upaya Kolaboratif Mewujudkan <br />
                  Pembangunan Inklusif dan Berkelanjutan */}
            {dataBigAgenda[0].theme !== ""
              ? dataBigAgenda[0].theme
              : "The theme will be announced soon."}
          </p>
          <Image
            src={"images/jadwal/petik-kuning.svg"}
            width={20}
            height={30}
            alt="petik"
            className="w-[5px] h-[7px] md:w-[10px] md:h-[15px] lg:w-[20px] lg:h-[30px] absolute top-0.5 md:-top-1 lg:-top-2 -left-1 md:-left-4 lg:-left-10"
          />
          <Image
            src={"images/jadwal/petik-kuning.svg"}
            width={20}
            height={30}
            alt="petik"
            className="w-[5px] h-[7px] md:w-[10px] md:h-[15px] lg:w-[20px] lg:h-[30px] absolute bottom-0 md:-bottom-1 lg:-bottom-2 -right-3 md:-right-5 lg:-right-10 rotate-180"
          />
        </div>
        <hr className="border-b-[0.5px] lg:border-b-2 border-black w-9/12 my-auto" />
        {/* tempat dan waktu */}
        <div className="w-fit flex flex-row justify-center items-center md:mx-auto lg:mr-0 lg:ml-0">
          <div className="flex flex-row gap-x-1 md:gap-x-3 lg:gap-x-7 items-center">
            {/* icon location */}
            <img
              src="images/jadwal/vector_location.svg"
              alt=""
              className="w-[8px] md:w-[11px] lg:w-[26px] h-[9px] md:h-[13px] lg:h-[31px]"
            />
            {/* lokasi */}
            <p className="font-medium text-[6px] md:text-[6px] lg:text-sm text-[#15575B] italic font-body">
              {/* Mardliyyah <br /> Islamic Center UGM */}
              {dataBigAgenda[0].place !== "" ? dataBigAgenda[0].place : "???"}
            </p>
          </div>
          <div className="text-transparent bg-[#15575B] w-[12px] md:w-[17px] lg:w-[40px] h-[1px] rotate-90">
            .
          </div>
          <div className="flex flex-row gap-x-1 lg:gap-x-6 items-center ml-auto">
            {/* icon calendar */}
            <img
              src="images/jadwal/vektor_kalender.svg"
              alt=""
              className="w-[10px] md:w-[14px] lg:w-[32px] h-[9px] md:h-[13px] lg:h-[30px]"
            />
            {/* waktu */}
            <p className="lg:w-20 font-medium text-[6px] md:text-[6px] lg:text-sm text-[#15575B] italic flex flex-row font-body">
              {/* 08:00 WIB */}
              {dataBigAgenda[0].time
                ? dataBigAgenda[0].time.slice(0, 5) + " WIB"
                : "???"}
            </p>
          </div>
        </div>
      </div>
      {/* end of box info event */}

      <div className="w-[290px] md:w-[470px] md:h-[440px] lg:w-[893px] lg:h-[868px] mt-5 md:mt-10 lg:mt-6 md:mb-16 lg:mb-2">
        {/* <!-- Our Events Section --> */}
        <section className="w-full h-[40px] md:h-[60px] lg:h-[90px] px-2 sm:px-4 md:max-w-5xl border-[2px] lg:border-[5px] border-black rounded-t-[50px] bg-[#F4AA3D] justify-center items-center flex">
          <h1 className="md:text-2xl lg:text-4xl text-lg font-medium text-[#15575B] font-heading">
            Our Events
          </h1>
        </section>

        {/* <!-- Event List Container --> */}
        <section className="w-full h-[260px] md:h-[450px] lg:h-[758px] border-x-[2px] lg:border-x-[5px] border-b-[2px] lg:border-b-[5px] border-black rounded-b-[50px] bg-white font-body flex justify-center items-center">
          <div className="space-y-2 md:space-y-6 lg:space-y-9">
            <div
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="flex w-[190px] md:w-[290px] lg:w-[663px] bg-white rounded-full mx-auto max-w-3xl shadow-lg"
            >
              <div className="relative bg-[#15575B] w-[20%] h-full flex items-center justify-center min-h-[30px] md:min-h-[45px] lg:min-h-[72px] rounded-l-full">
                <div className="absolute -right-[5px] lg:-right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] xl:border-y-[15px] border-y-transparent border-l-[8px] xl:border-l-[15px] border-l-[#15575B]"></div>
                <span className="text-white text-[13px] md:text-base lg:text-2xl font-bold">
                  1
                </span>
              </div>
              <div className="px-4 py-2 w-[80%] flex items-center justify-center">
                <span className="text-[#15575B] text-[9px] md:text-base lg:text-2xl font-semibold">
                  Permainan Interaktif
                </span>
              </div>
            </div>

            {/* <!-- Event Items --> */}
            <div className="space-y-2 md:space-y-6 lg:space-y-9">
              <div
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="flex w-[190px] md:w-[290px] lg:w-[663px] bg-white rounded-full mx-auto max-w-3xl shadow-lg"
              >
                <div className="relative bg-[#F4AA3D] w-[20%] h-full flex items-center justify-center min-h-[30px] md:min-h-[45px] lg:min-h-[72px] rounded-l-full">
                  <div className="absolute -right-[5px] lg:-right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] xl:border-y-[15px] border-y-transparent border-l-[8px] xl:border-l-[15px] border-l-[#F4AA3D]"></div>
                  <span className="text-white text-[13px] md:text-base lg:text-2xl font-bold">
                    2
                  </span>
                </div>
                <div className="px-4 py-2 w-[80%] flex items-center justify-center">
                  <span className="text-[#15575B] text-[9px] md:text-base lg:text-2xl font-semibold">
                    Karya Kolaborasi
                  </span>
                </div>
              </div>
              <div
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="flex w-[190px] md:w-[290px] lg:w-[663px] bg-white rounded-full mx-auto max-w-3xl shadow-lg"
              >
                <div className="relative bg-[#15575B] w-[20%] h-full flex items-center justify-center min-h-[30px] md:min-h-[45px] lg:min-h-[72px] rounded-l-full">
                  <div className="absolute -right-[5px] lg:-right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] xl:border-y-[15px] border-y-transparent border-l-[8px] xl:border-l-[15px] border-l-[#15575B]"></div>
                  <span className="text-white text-[13px] md:text-base lg:text-2xl font-bold">
                    3
                  </span>
                </div>
                <div className="px-4 py-2 w-[80%] flex items-center justify-center">
                  <span className="text-[#15575B] text-[9px] md:text-base lg:text-2xl font-semibold">
                    Buka Bersama
                  </span>
                </div>
              </div>
              <div
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="flex w-[190px] md:w-[290px] lg:w-[663px] bg-white rounded-full mx-auto max-w-3xl shadow-lg"
              >
                <div className="relative bg-[#F4AA3D] w-[20%] h-full flex items-center justify-center min-h-[30px] md:min-h-[45px] lg:min-h-[72px] rounded-l-full">
                  <div className="absolute -right-[5px] lg:-right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] xl:border-y-[15px] border-y-transparent border-l-[8px] xl:border-l-[15px] border-l-[#F4AA3D]"></div>
                  <span className="text-white text-[13px] md:text-base lg:text-2xl font-bold">
                    4
                  </span>
                </div>
                <div className="px-4 py-2 w-[80%] flex items-center justify-center">
                  <span className="text-[#15575B] text-[9px] md:text-base lg:text-2xl font-semibold">
                    Edukasi Anak
                  </span>
                </div>
              </div>
              <div
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="flex w-[190px] md:w-[290px] lg:w-[663px] bg-white rounded-full mx-auto max-w-3xl shadow-lg"
              >
                <div className="relative bg-[#15575B] w-[20%] h-full flex items-center justify-center min-h-[30px] md:min-h-[45px] lg:min-h-[72px] rounded-l-full">
                  <div className="absolute -right-[5px] lg:-right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] xl:border-y-[15px] border-y-transparent border-l-[8px] xl:border-l-[15px] border-l-[#15575B]"></div>
                  <span className="text-white text-[13px] md:text-base lg:text-2xl font-bold">
                    5
                  </span>
                </div>
                <div className="px-4 py-2 w-[80%] flex items-center justify-center">
                  <span className="text-[#15575B] text-[9px] md:text-base lg:text-2xl font-semibold">
                    Sosialisasi Kesehatan
                  </span>
                </div>
              </div>
              <div
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="flex w-[190px] md:w-[290px] lg:w-[663px] bg-white rounded-full mx-auto max-w-3xl shadow-lg"
              >
                <div className="relative bg-[#F4AA3D] w-[20%] h-full flex items-center justify-center min-h-[30px] md:min-h-[45px] lg:min-h-[72px] rounded-l-full">
                  <div className="absolute -right-[5px] lg:-right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] xl:border-y-[15px] border-y-transparent border-l-[8px] xl:border-l-[15px] border-l-[#F4AA3D]"></div>
                  <span className="text-white text-[13px] md:text-base lg:text-2xl font-bold">
                    6
                  </span>
                </div>
                <div className="px-4 py-2 w-[80%] flex items-center justify-center">
                  <span className="text-[#15575B] text-[9px] md:text-base lg:text-2xl font-semibold">
                    RDK Berbagi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {sortedDailyAgenda.length > 0 ? <DailyAgendaHeader /> : ""}

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
    </>
  );
}
