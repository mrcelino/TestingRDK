"use client";

import Image from "next/image";

export default function LayoutAfterRamadan() {
  return (
    <>
      <div className="relative flex w-full h-[153px] bg-[#F4AA3D] border-t-[5px] border-b-[5px] border-black justify-center items-center mt-10">
        <h1 className="text-[#fbfbfb] font-bold italic text-4xl ">
          Ramadan is over, <br />
          See you again in the next Ramadan
        </h1>
        {
          <Image
            src="/images/maskot.png"
            width={434}
            height={434}
            alt="sign"
            className="absolute left-28 -bottom-14"

          />
        }
      </div>
    </>
  );
}
