import Image from "next/image";

export default function JadwalGreet({ className, text }: {className : string; text : string}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`relative flex w-[228px] md:w-[380px] lg:w-[779px] h-[46px] md:h-[78px] lg:h-[204px] bg-[#fbfbfb] rounded-[200px] border-[1px] lg:border-[3px] border-black justify-center items-center pl-11 pr-3 md:pl-16 md:pr-14 lg:pr-0 lg:pl-0 shadow-md ${className}`}
    >
      <Image
        src="/images/jadwal/maskot_wave.svg"
        width={296}
        height={392}
        alt="sign"
        className="absolute w-[98px] md:w-[163px] lg:w-[296px] h-[98px] md:h-[163px] lg:h-[392px] -left-10 md:-left-20 lg:-left-40 -top-1/2"
      />
      <p className="text-[#15575B] font-semibold text-[9px] md:text-sm lg:text-2xl w-[430px] font-body italic">
        {text}
      </p>
    </div>
  );
}
