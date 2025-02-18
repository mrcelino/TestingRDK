"use client";

import Image from "next/image";

export default function LayoutAfterRamadan() {
  return (
    <>
      <div className="relative flex w-full h-[37px] md:h-[91px] lg:h-[153px] bg-[#F4AA3D] border-t lg:border-t-[5px] border-b lg:border-b-[5px] border-black justify-center items-center mt-10">
        <h1 className="text-[#fbfbfb] font-bold italic text-[8px] md:text-base lg:text-4xl z-20">
          Ramadan is over, <br />
          See you again in the next Ramadan
        </h1>
        <Image
          src="/images/jadwal/maskot_wave.svg"
          width={434}
          height={434}
          alt="sign"
          className="absolute w-[106px] h-[106px] md:w-[257px] md:h-[257px] lg:w-[434px] lg:h-[434px] left-2 md:left-20 lg:left-28 -bottom-3 md:-bottom-7 lg:-bottom-14 z-20"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="400"
        />
        <div className="absolute w-full h-[73px] md:h-[120px] lg:h-[180px] bg-white text-transparent -bottom-[74px] md:-bottom-[122px] lg:-bottom-[185px] z-10">
          .
        </div>
      </div>
    </>
  );
}
