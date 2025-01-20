"use client";

export default function DailyAgendaHeader() {
  return (
    <>
      {/* start of daily agenda today */}
      <div className="w-[153px] md:w-[318px] lg:w-[820px] h-[30px] md:h-[63px] lg:h-[161px] bg-white rounded-[200px] border lg:border-[3px] border-black shadow-lg relative flex justify-center items-center mt-10 md:mt-20 lg:mt-40">
        <h1 className="text-[#15575B] text-[8px] md:text-base lg:text-3xl font-bold italic">
          Daily Agenda Today
        </h1>
        <img
          src="/images/maskot.png"
          width={318}
          height={318}
          alt="sign"
          className="absolute w-[59px] h-[59px] md:w-[123px] md:h-[123px] lg:w-[318px] lg:h-[318px] -right-4 md:-right-8 lg:-right-36 scale-x-[-1]"
        />
      </div>
      {/* end of daily agenda today */}
    </>
  );
}
