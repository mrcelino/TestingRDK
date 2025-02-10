"use client";

export default function BigAgendaHeader({ text }: any) {
  return (
    <div className="w-[227px] md:w-[380px] lg:w-[723px] h-[39px] md:h-[51px] lg:h-[90px] flex bg-[#F4AA3D] md:bg-white rounded-l-[100px] rounded-tr-[100px] border lg:border-[5px] border-black mt-10 md:mt-16 lg:mt-32 justify-center items-center">
      <h2 className="text-white md:text-[#15575B] font-normal text-sm md:text-base lg:text-[40px] ">{text}</h2>
    </div>
  );
}
