"use client";

export default function DailyAgendaHeader() {
  return (
    <>
      {/* start of daily agenda today */}
      <div className="w-[820px] h-[161px] bg-white rounded-[200px] border-[3px] border-black shadow-lg relative flex justify-center items-center mt-40">
        <h1 className="text-[#15575B] text-3xl font-bold italic">
          Daily Agenda Today
        </h1>
        <img
          src="/images/maskot.png"
          width={318}
          height={318}
          alt="sign"
          className="absolute -right-36 scale-x-[-1]"
        />
      </div>
      {/* end of daily agenda today */}
    </>
  );
}
