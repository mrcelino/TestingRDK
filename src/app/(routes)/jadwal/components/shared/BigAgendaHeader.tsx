"use client";

export default function BigAgendaHeader({ text }: any) {
  return (
    <div className="w-[174px] md:w-[380px] lg:w-[723px] h-[23px] md:h-[51px] lg:h-[90px] flex bg-white rounded-l-[100px] rounded-tr-[100px] border lg:border-[5px] border-black mt-8 md:mt-16 lg:mt-32 justify-center items-center">
      <h2 className="text-[#15575B] font-normal text-[8px] md:text-base lg:text-[40px] ">{text}</h2>
    </div>
  );
}
