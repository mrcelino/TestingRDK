"use client";

import Image from "next/image";
import JadwalHeader from "./components/JadwalHeader";
import JadwalGreet1 from "./components/shared/JadwalGreet1";

export default function JadwalPage() {
  return (
    <div className="w-full h-[5572px] flex flex-col bg-gradient-to-b from-[#ffffff] from-1%  to-[#21666A] to-30% bg-scroll items-center">
      <JadwalHeader />
      {/* temporary calendar */}
      <div className="w-[637px] h-[550px] bg-white mt-20">
        !temporary calendar
      </div>

      {/* rdk logo */}
      <Image
        src="/images/jadwal/rdk_logo_with_title.svg"
        width={210}
        height={133}
        alt="sign"
        className="mt-10"
      />
      {/* ini kotak yang nge grreet itulah apaalah */}
      <JadwalGreet1 className={"mt-12"} />

      {/* start bagian content event */}
      {/* header even1 */}
      <div className="w-[723px] h-[90px] flex bg-white rounded-l-[100px] rounded-tr-[100px] border-[5px] border-black mt-32 justify-center items-center">
        <h2 className="text-[#15575B] font-normal text-[40px] ">
          RDK Festival
        </h2>
      </div>

      {/* starrt of foto pengisi acarra container */}
      <div className="grid grid-cols-2 w-[672px] h-[389px] bg-white/10 mt-10">
        {/* left side */}
        <div>
          {/* guest1 container */}
          <div
            className="w-[220.44px] h-[324.61px] flex flex-col bg-white rounded-[30px] border-[3px] border-black p-1 rotate-[-7deg]"
            style={{
              boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
            }}
          >
            {/* top part icon container */}
            <div className="w-full h-fit flex flex-row justify-between pl-2 pr-5 align-text-top">
              {/* yellow circle thing */}
              <div className="w-4 h-4 bg-[#F4AA3D] border-[2px] border-black rounded-full"></div>
              <p className="h-3 mb-auto font-black text-lg">...</p>
            </div>

            {/* photo container */}
            <div className="w-[207px] h-[249px] bg-[#EFC828] border border-black mt-4">
              {/* <Image
                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                width={207}
                height={249}
                alt="sign"
                className=""
              /> */}
              <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div>
            </div>

            {/* bottom part icon container*/}
            <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-1 pt-1 gap-x-2">
              <Image
                src="/images/jadwal/icon_heart.svg"
                width={15}
                height={13}
                alt="sign"
                className=""
              />
              <Image
                src="/images/jadwal/icon_comment.svg"
                width={14}
                height={14}
                alt="sign"
                className=""
              />
              <Image
                src="/images/jadwal/icon_share.svg"
                width={14}
                height={13}
                alt="sign"
                className=""
              />
            </div>
          </div>
        </div>
        {/* end of guest1 container */}

        {/* right side */}
        <div className="flex w-full bg-red-300">
          {/* guest2 container */}
          <div
            className="w-[220.44px] h-[324.61px] flex flex-col bg-white rounded-[30px] border-[3px] border-black p-1 ml-auto rotate-[8deg]"
            style={{
              boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
            }}
          >
            {/* top part icon container */}
            <div className="w-full h-fit flex flex-row justify-between pl-2 pr-5 align-text-top">
              {/* yellow circle thing */}
              <div className="w-4 h-4 bg-[#F4AA3D] border-[2px] border-black rounded-full"></div>
              <p className="h-3 mb-auto font-black text-lg">...</p>
            </div>

            {/* photo container */}
            <div className="w-[207px] h-[249px] bg-[#15575B] border border-black mt-4">
              {/* <Image
                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                width={207}
                height={249}
                alt="sign"
                className=""
              /> */}
              {/* <img src="/images/jadwal/examplePhotoPengisiAcara.svg" alt="" className="w-fit h-fit "/> */}
              <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div>
            </div>

            {/* bottom part icon container*/}
            <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-1 pt-1 gap-x-2">
              <Image
                src="/images/jadwal/icon_heart.svg"
                width={15}
                height={13}
                alt="sign"
                className=""
              />
              <Image
                src="/images/jadwal/icon_comment.svg"
                width={14}
                height={14}
                alt="sign"
                className=""
              />
              <Image
                src="/images/jadwal/icon_share.svg"
                width={14}
                height={13}
                alt="sign"
                className=""
              />
            </div>
          </div>
        </div>
        {/* end of right side */}
      </div>
      {/* end of foto pengisi acarra container */}

      {/* starrt of nama pengisi acara container (yang ada dua dibelah) */}
      <div className="w-[778px] h-[90px] rounded-[100px] bg-white flex flex-row mt-10">
        {/* left name container */}
        <div className="w-1/2 h-full border-[3px] border-black rounded-l-[100px] flex justify-center items-center">
          <p className="w-[289px] text-[#F4AA3D] font-bold italic text-[14px] text-left">
            Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
          </p>
        </div>
        {/* right name container */}
        <div className="w-1/2 h-full bg-[#F4AA3D] border-[3px] border-black rounded-r-[100px] flex justify-center items-center">
          <p className="w-[289px] text-[#15575B] font-bold italic text-[14px] text-left">
            Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
          </p>
        </div>
      </div>
      {/* end of nama pengisi acara container (yang ada dua dibelah) */}

      {/* start of moderator container */}
      <div className="w-[367px] h-[102px] bg-red-500 mt-10 relative flex items-center justify-end">
        {/* photo container */}
        <div className="absolute top-0 left-0 w-[102px] h-[102px] bg-white rounded-full border-[3px] border-black z-10">
          {/* gambar moderator */}
          {/* <img
                src="/images/maskot.png"
                // width={207}
                // height={248}
                alt="sign"
                className="rounded-full w-fit h-fit object-cover overflow-hidden"
              /> */}
          <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full rounded-full overflow-hidden"></div>
        </div>

        {/* moderrator name container */}
        <div className="relative w-[83%] h-[69px] bg-white border-[3px] border-black rounded-[100px] flex flex-col items-start justify-center pl-[40px]">
          {/* moderator name */}
          <h1 className="text-[#F4AA3D] font-bold text-sm italic">
            Andri Pratama, M.Phil.
          </h1>
          <hr className="absolute top-1/2 left-0 w-4/6 border-[2px] border-black" />
          {/* ini hr dummy (ignore aja) */}
          <hr className="py-1" />
          <p className="text-[#15575B] font-bold text-xs italic">
            As Moderator
          </p>
        </div>
      </div>
      {/* end of moderator container */}

      {/* start of box info event */}
      <div className="w-[893px] h-[187px] bg-[#FBFBFB] flex flex-col rounded-[50px] items-center justify-center mt-10 py-5">
        <div className="relative flex flex-col bg-red-300 text-center">
          <p className="text-[#FFC359] font-semibold text-base italic">
            Ramadan Berdaya:
          </p>
          <p className="text-[#15575B] font-semibold text-base italic">
            Upaya Kolaboratif Mewujudkan <br />
            Pembangunan Inklusif dan Berkelanjutan
          </p>
          <p className="absolute -top-6 -left-10 text-[55px] font-extrabold text-[#FFC359] font-serif">
            "
          </p>
          <p className="absolute -bottom-6 -right-10 text-[55px] font-extrabold text-[#FFC359] font-serif rotate-180">
            "
          </p>
        </div>
        <hr className="border-b-2 border-black w-9/12 my-auto" />
        {/* tempat dan waktu */}
        <div className="w-fit flex flex-row bg-red-300 justify-center items-center">
          <div className="flex flex-row gap-x-7 justify-start items-center">
            {/* icon location */}
            <img src="images/jadwal/vector_location.svg" alt="" />
            {/* lokasi */}
            <p className="font-medium text-sm text-[#15575B] italic">
              Mardliyyah <br /> Islamic Center UGM
            </p>
          </div>
          {/* <div className="ml-6 mr-6 text-[#15575B] text-3xl my-auto">|</div> */}
          <div className="text-transparent bg-[#15575B] w-[40px] h-[1px] rotate-90">
            .
          </div>
          <div className="flex flex-row gap-x-8 justify-start items-center">
            {/* icon calendar */}
            <img src="images/jadwal/vektor_kalender.svg" alt="" />
            {/* waktu */}
            <p className="w-20 font-medium text-sm text-[#15575B] italic flex flex-row">
              08:00 WIB
            </p>
          </div>
        </div>
      </div>
      {/* end of box info event */}

      <div className="w-[723px] h-[90px] flex bg-white rounded-l-[100px] rounded-tr-[100px] border-[5px] border-black mt-32 justify-center items-center">
        <h2 className="text-[#15575B] font-normal text-[40px] ">
          Spectacular Show
        </h2>
      </div>

      {/* start of Polaroit Container */}
      <div className="w-fit h-fit bg-red-300 flex flex-row mt-20">
        {/* startt of LEFT polaroid */}
        <div className="relative flex flex-col w-[236px] h-[293px] bg-[#FBFBFB] border-[3px] border-black px-[14px] pt-[14px] pb-2 justify-center align-top rotate-[-9deg] translate-x-7">
          {/* photo container */}
          <div className="w-[207px] h-[219px] bg-gray-300 mb-auto">
            <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[10px] italic w-20 text-center">
              Aceh Dance By Rampoe UGM
            </h2>
          </div>
        </div>
        {/* end of LEFT polaroid */}

        {/* startt of center polaroid */}
        <div className="relative flex flex-col w-[236px] h-[293px] bg-[#FBFBFB] border-[3px] border-black px-[14px] pt-[14px] pb-2 justify-center align-top z-20 translate-y-10">
          {/* photo container */}
          <div className="w-[207px] h-[219px] bg-gray-300 mb-auto">
            <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[10px] italic w-20 text-center">
              Aceh Dance By Rampoe UGM
            </h2>
          </div>

          {/* pin top left*/}
          <Image
            src="/images/jadwal/vector_pin.png"
            width={47}
            height={48}
            alt="icon pin"
            className="absolute -top-5 -left-0"
          />
          {/* pin bottom right */}
          <Image
            src="/images/jadwal/vector_pin.png"
            width={47}
            height={48}
            alt="icon pin"
            className="absolute bottom-11 -right-3"
          />
        </div>
        {/* end of center polaroid */}

        {/* startt of right polaroid */}
        <div className="relative flex flex-col w-[236px] h-[293px] bg-[#FBFBFB] border-[3px] border-black px-[14px] pt-[14px] pb-2 justify-center align-top rotate-[10deg] -translate-x-9">
          {/* photo container */}
          <div className="w-[207px] h-[219px] bg-gray-300 mb-auto">
            <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[10px] italic w-20 text-center">
              Aceh Dance By Rampoe UGM
            </h2>
          </div>
        </div>
        {/* end of right polaroid */}
      </div>
      {/* End of Polaroit Container */}

      {/* start of daily agenda today */}
      <div className="w-[820px] h-[161px] bg-white rounded-[200px] border-[3px] border-black shadow-lg relative flex justify-center items-center mt-40">
        <h1 className="text-[#15575B] text-3xl font-bold italic">
          Daily Agenda Today
        </h1>
        <img
          src="/images/maskot.png"
          width={318}
          height={318}
          alt="sign"
          className="absolute -right-36 scale-x-[-1]"
        />
      </div>
      {/* end of daily agenda today */}

      {/* start of mimbar subuh */}
      <div className="w-[901px] h-[500px] flex flex-col bg-white/10 mt-32 items-center">
        {/* mimbar subuh header */}
        <h1 className="text-[48px] text-white drop-shadow-md">Mimbar Subuh</h1>
        {/* end of mimbar subuh header */}

        {/* content mimbar subuh */}
        <div className="w-full h-full bg-red-300 grid grid-cols-[1fr_2fr]">
          {/* left side */}
          <div className="bg-red-400 flex">
            <div className="m-auto">
              {/* guest1 container */}
              <div
                className="w-[220.44px] h-[324.61px] flex flex-col bg-white rounded-[30px] border-[3px] border-black p-1 rotate-[-7deg]"
                style={{
                  boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
                }}
              >
                {/* top part icon container */}
                <div className="w-full h-fit flex flex-row justify-between pl-2 pr-5 align-text-top">
                  {/* yellow circle thing */}
                  <div className="w-4 h-4 bg-[#F4AA3D] border-[2px] border-black rounded-full"></div>
                  <p className="h-3 mb-auto font-black text-lg">...</p>
                </div>

                {/* photo container */}
                <div className="w-[207px] h-[249px] bg-[#EFC828] border border-black mt-4">
                  {/* <Image
                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                width={207}
                height={249}
                alt="sign"
                className=""
              /> */}
                  <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div>
                </div>

                {/* bottom part icon container*/}
                <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-1 pt-1 gap-x-2">
                  <Image
                    src="/images/jadwal/icon_heart.svg"
                    width={15}
                    height={13}
                    alt="sign"
                    className=""
                  />
                  <Image
                    src="/images/jadwal/icon_comment.svg"
                    width={14}
                    height={14}
                    alt="sign"
                    className=""
                  />
                  <Image
                    src="/images/jadwal/icon_share.svg"
                    width={14}
                    height={13}
                    alt="sign"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="bg-red-600 flex flex-col justify-center gap-y-10 pl-10 pr-5">
            {/* name */}
            <div className="flex flex-row gap-x-10 items-center">
              <Image
                src="/images/jadwal/icon_person.svg"
                width={91}
                height={91}
                alt="icon_person"
                className=""
              />
              <p className="text-white font-medium text-xl italic">
                Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
              </p>
            </div>
            {/* time */}
            <div className="flex flex-row gap-x-12 items-center pl-3">
              <Image
                src="/images/jadwal/icon_clock.svg"
                width={65}
                height={65}
                alt="icon_clock"
                className=""
              />
              <p className="text-white font-medium text-xl italic">05:00 WIB</p>
            </div>
            {/* place */}
            <div className="flex flex-row gap-x-12 items-center pl-3">
              <img
                src="/images/jadwal/icon_note.svg"
                // width={67}
                // height={67}
                alt="icon_clock"
                className=""
              />
              <p className="text-white font-medium text-xl italic">
                Kausalitas: Hukum Alam atau Tuhan: Pemikiran Religio-Saintifik
                al-Ghazali
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of mimbar subuh */}

      {/*  */}

      {/* start of samudra */}
      <div className="w-[901px] h-[500px] flex flex-col bg-white/10 mt-32 items-center">
        {/* samudra header */}
        <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-4">
          <h1 className="text-[48px] text-white drop-shadow-md">Samudra</h1>
          <div className="w-[2px] h-[45px] text-transparent bg-white">.</div>
          <p className="font-semibold text-sm text-[#F4AA3D]">
            Safari Ilmu <br /> di Bulan Ramadan
          </p>
        </div>
        {/* end of samudra header */}

        {/* content mimbar subuh */}
        <div className="w-full h-full bg-red-300 grid grid-cols-[2fr_1fr]">
          {/* left side */}
          <div className="bg-red-200 flex flex-col justify-center gap-y-10 pl-5 pr-10">
            {/* name */}
            <div className="flex flex-row gap-x-10 items-center">
              <Image
                src="/images/jadwal/icon_person.svg"
                width={91}
                height={91}
                alt="icon_person"
                className=""
              />
              <p className="text-white font-medium text-xl italic">
                Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
              </p>
            </div>
            {/* time */}
            <div className="flex flex-row gap-x-12 items-center pl-3">
              <Image
                src="/images/jadwal/icon_clock.svg"
                width={65}
                height={65}
                alt="icon_clock"
                className=""
              />
              <p className="text-white font-medium text-xl italic">05:00 WIB</p>
            </div>
            {/* place */}
            <div className="flex flex-row gap-x-12 items-center pl-3">
              <img
                src="/images/jadwal/icon_note.svg"
                // width={67}
                // height={67}
                alt="icon_clock"
                className=""
              />
              <p className="text-white font-medium text-xl italic">
                Kausalitas: Hukum Alam atau Tuhan: Pemikiran Religio-Saintifik
                al-Ghazali
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="bg-red-600 flex flex-col justify-center gap-y-10 pl-10 pr-5">
            <div className="flex w-full bg-red-300">
              {/* guest2 container */}
              <div
                className="w-[220.44px] h-[324.61px] flex flex-col bg-white rounded-[30px] border-[3px] border-black p-1 ml-auto rotate-[8deg] mx-auto"
                style={{
                  boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
                }}
              >
                {/* top part icon container */}
                <div className="w-full h-fit flex flex-row justify-between pl-2 pr-5 align-text-top">
                  {/* yellow circle thing */}
                  <div className="w-4 h-4 bg-[#F4AA3D] border-[2px] border-black rounded-full"></div>
                  <p className="h-3 mb-auto font-black text-lg">...</p>
                </div>

                {/* photo container */}
                <div className="w-[207px] h-[249px] bg-[#15575B] border border-black mt-4">
                  {/* <Image
                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                width={207}
                height={249}
                alt="sign"
                className=""
              /> */}
                  {/* <img src="/images/jadwal/examplePhotoPengisiAcara.svg" alt="" className="w-fit h-fit "/> */}
                  <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div>
                </div>

                {/* bottom part icon container*/}
                <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-1 pt-1 gap-x-2">
                  <Image
                    src="/images/jadwal/icon_heart.svg"
                    width={15}
                    height={13}
                    alt="sign"
                    className=""
                  />
                  <Image
                    src="/images/jadwal/icon_comment.svg"
                    width={14}
                    height={14}
                    alt="sign"
                    className=""
                  />
                  <Image
                    src="/images/jadwal/icon_share.svg"
                    width={14}
                    height={13}
                    alt="sign"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of samudra */}

      {/*  */}

      {/* start of RPL */}
      <div className="w-[901px] h-[500px] flex flex-col bg-white/10 mt-32 items-center">
        {/*  RPL header */}
        <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-4">
          <h1 className="text-[48px] text-white drop-shadow-md">RPL</h1>
          <div className="w-[2px] h-[45px] text-transparent bg-white">.</div>
          <p className="font-semibold text-sm text-[#F4AA3D]">
            Ramadan <br /> Public Lecture
          </p>
        </div>
        {/* end of RPL header */}

        {/* content mimbar subuh */}
        <div className="w-full h-full bg-red-300 grid grid-cols-[1fr_2fr]">
          {/* left side */}
          <div className="bg-red-400 flex">
            <div className="m-auto">
              {/* guest1 container */}
              <div
                className="w-[220.44px] h-[324.61px] flex flex-col bg-white rounded-[30px] border-[3px] border-black p-1 rotate-[-7deg]"
                style={{
                  boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
                }}
              >
                {/* top part icon container */}
                <div className="w-full h-fit flex flex-row justify-between pl-2 pr-5 align-text-top">
                  {/* yellow circle thing */}
                  <div className="w-4 h-4 bg-[#F4AA3D] border-[2px] border-black rounded-full"></div>
                  <p className="h-3 mb-auto font-black text-lg">...</p>
                </div>

                {/* photo container */}
                <div className="w-[207px] h-[249px] bg-[#EFC828] border border-black mt-4">
                  {/* <Image
                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                width={207}
                height={249}
                alt="sign"
                className=""
              /> */}
                  <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div>
                </div>

                {/* bottom part icon container*/}
                <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-1 pt-1 gap-x-2">
                  <Image
                    src="/images/jadwal/icon_heart.svg"
                    width={15}
                    height={13}
                    alt="sign"
                    className=""
                  />
                  <Image
                    src="/images/jadwal/icon_comment.svg"
                    width={14}
                    height={14}
                    alt="sign"
                    className=""
                  />
                  <Image
                    src="/images/jadwal/icon_share.svg"
                    width={14}
                    height={13}
                    alt="sign"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="bg-red-600 flex flex-col justify-center gap-y-10 pl-10 pr-5">
            {/* name */}
            <div className="flex flex-row gap-x-10 items-center">
              <Image
                src="/images/jadwal/icon_person.svg"
                width={91}
                height={91}
                alt="icon_person"
                className=""
              />
              <p className="text-white font-medium text-xl italic">
                Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
              </p>
            </div>
            {/* time */}
            <div className="flex flex-row gap-x-12 items-center pl-3">
              <Image
                src="/images/jadwal/icon_clock.svg"
                width={65}
                height={65}
                alt="icon_clock"
                className=""
              />
              <p className="text-white font-medium text-xl italic">05:00 WIB</p>
            </div>
            {/* place */}
            <div className="flex flex-row gap-x-12 items-center pl-3">
              <img
                src="/images/jadwal/icon_note.svg"
                // width={67}
                // height={67}
                alt="icon_clock"
                className=""
              />
              <p className="text-white font-medium text-xl italic">
                Kausalitas: Hukum Alam atau Tuhan: Pemikiran Religio-Saintifik
                al-Ghazali
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of RPL */}

      {/*  */}

      {/* TWO BUTTON CONTAINER */}
      <div className="flex flex-row mt-20 gap-x-40">
        {/* button day before */}
        <div className="w-[278px] h-[59px] bg-[#F4AA3D] border-[3px] border-black rounded-[30px] items-center justify-center flex flex-row gap-x-4">
          <Image
            src="/images/jadwal/icon_arrow_left.svg"
            width={24}
            height={24}
            alt="icon_arrow"
            className=""
          />
          <p className="text-black font-medium text-xl italic">Day Before</p>
        </div>
        {/* button day after */}
        <div className="w-[278px] h-[59px] bg-[#15575B] rounded-[30px] border-[3px] border-black items-center justify-center flex flex-row gap-x-4">
          <p className="text-white font-medium text-xl italic">Next Day</p>
          <Image
            src="/images/jadwal/icon_arrow_right.svg"
            width={24}
            height={24}
            alt="icon_arrow"
            className=""
          />
        </div>
      </div>
      {/* end of TWO BUTTON CONTAINER */}

      {/* end bagian content event */}
    </div>
  );
}
