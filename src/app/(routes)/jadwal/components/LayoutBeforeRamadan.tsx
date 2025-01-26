"use client";

import Image from "next/image";

// import SpectacularShow from "./shared/SpectacularShow";

export default function LayoutBeforeRamadan() {
  return (
    <>
      <div className="w-[201px] h-[41px] md:w-[380px] md:h-[78px] lg:w-[820px] lg:h-[161px] bg-white rounded-[200px] border lg:border-[3px] border-black shadow-lg relative flex justify-center items-center mt-10 md:mt-20 lg:mt-40 mb-10">
        <h1 className="text-[#15575B] text-[8px] md:text-sm lg:text-2xl font-bold italic">
          Sorry, the agenda is not available yet. <br /> Stay tuned for Ramadan!
        </h1>
        <Image
          src="/images/maskot.png"
          width={318}
          height={318}
          alt="sign"
          className="absolute w-[86px] h-[86px] md:w-[163px] md:h-[163px] lg:w-[318px] lg:h-[318px] -left-9 md:-left-20 lg:-left-36"
        />
      </div>
    </>
  );
}
