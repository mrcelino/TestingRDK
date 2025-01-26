"use client";

import Image from "next/image";

// import SpectacularShow from "./shared/SpectacularShow";

export default function LayoutBeforeRamadan() {
  return (
    <>
      <div className="w-[820px] h-[161px] bg-white rounded-[200px] border-[3px] border-black shadow-lg relative flex justify-center items-center mt-40 mb-10">
        <h1 className="text-[#15575B] text-2xl font-bold italic">
          Sorry, the agenda is not available yet. <br /> Stay tuned for Ramadan!
        </h1>
        <Image
          src="/images/maskot.png"
          width={318}
          height={318}
          alt="sign"
          className="absolute -left-36"
        />
      </div>
    </>
  );
}
