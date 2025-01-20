import Image from "next/image";

export default function JadwalGreet({ className, text }: any) {
  return (
    <div
      className={`relative flex w-[201px] md:w-[380px] lg:w-[779px] h-[41px] md:h-[78px] lg:h-[204px] bg-[#fbfbfb] rounded-[200px] border-[1px] lg:border-[3px] border-black justify-center items-center pl-11 pr-3 lg:pr-0 lg:pl-0 shadow-md ${className}`}
    >
      <img
        src="/images/maskot.png"
        // width={0}
        // height={0}
        alt="sign"
        className="absolute w-[86px] md:w-[163px] lg:w-[405px] h-[86px] md:h-[163px] lg:h-[405px] -left-8 md:-left-20 lg:-left-40 -top-1/2"
      />
      <p className="text-[#15575B] font-bold text-[8px] md:text-sm lg:text-2xl w-[422px] font-sans italic">
        {text}
      </p>
    </div>
  );
}
