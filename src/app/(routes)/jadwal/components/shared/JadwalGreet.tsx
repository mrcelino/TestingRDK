import Image from "next/image";

export default function JadwalGreet({ className, text }: any) {
  return (
    <div
      className={`relative flex w-[228px] md:w-[380px] lg:w-[779px] h-[46px] md:h-[78px] lg:h-[204px] bg-[#fbfbfb] rounded-[200px] border-[1px] lg:border-[3px] border-black justify-center items-center pl-11 pr-3 lg:pr-0 lg:pl-0 shadow-md ${className}`}
    >
      <Image
        src="/images/maskot.png"
        width={405}
        height={405}
        alt="sign"
        className="absolute w-[98px] md:w-[163px] lg:w-[405px] h-[98px] md:h-[163px] lg:h-[405px] -left-10 md:-left-24 lg:-left-40 -top-1/2"
      />
      <p className="text-[#15575B] font-bold text-[10px] md:text-sm lg:text-2xl w-[422px] font-sans italic">
        {text}
      </p>
    </div>
  );
}
