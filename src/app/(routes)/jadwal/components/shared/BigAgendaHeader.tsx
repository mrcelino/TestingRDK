"use client";

export default function BigAgendaHeader({ text }: any) {
  return (
    <div className="w-[723px] h-[90px] flex bg-white rounded-l-[100px] rounded-tr-[100px] border-[5px] border-black mt-32 justify-center items-center">
      <h2 className="text-[#15575B] font-normal text-[40px] ">{text}</h2>
    </div>
  );
}
