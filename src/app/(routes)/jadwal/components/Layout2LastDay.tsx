// Layout2LastDay.tsx

"use client";

import Image from "next/image";
import BigAgendaHeader from "./shared/BigAgendaHeader";

export default function Layout2LastDay() {
  return (
    <>
      <div className="w-[779px] h-[204px] bg-white rounded-[200px] border-[3px] border-black shadow-lg relative flex justify-center items-center mt-40 mb-32">
        <h1 className="text-[#15575B] text-2xl font-bold italic">
          Sorry, No Agenda Today!
        </h1>
        <Image
          src="/images/maskot.png"
          width={405}
          height={405}
          alt="sign"
          className="absolute -left-36"
        />
      </div>

      <div className="flex relative w-full h-[77px] bg-[#F4AA3D] justify-center items-center">
        <h1 className="text-white font-bold text-2xl italic">DON’T WORRY!</h1>
        <Image
          src="/images/jadwal/Warning.svg"
          width={156}
          height={156}
          alt="sign"
          className="absolute right-64 z-10 hover:scale-105 transition"
        />
      </div>

      <div className="flex relative w-full h-[154px] bg-[#fbfbfb] justify-center items-center mb-14">
        <h1 className="text-[#15575B] font-bold text-2xl italic">
          You Can Have Iftar at the Mosque!
        </h1>
        <Image
          src="/images/jadwal/caution_sign.svg"
          width={116}
          height={116}
          alt="sign"
          className="absolute left-[400px] z-10 hover:scale-125 transition"
        />
      </div>

      {/* start info buka puasa */}
      <img src="/images/jadwal/info_buka_example.png" alt="informasi_berbuka" className="w-[595px] object-contain rounded-[3px] hover:scale-105 transition"/>
      {/* end info buka puasa */}
    </>
  );
}
