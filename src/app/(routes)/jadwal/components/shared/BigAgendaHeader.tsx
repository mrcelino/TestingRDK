"use client";

export default function BigAgendaHeader({ text }: {text : string}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-[227px] md:w-[380px] lg:w-[723px] h-[39px] md:h-[51px] lg:h-[90px] flex bg-[#F4AA3D] md:bg-white rounded-l-[100px] rounded-tr-[100px] border lg:border-[5px] border-black mt-10 md:mt-16 lg:mt-32 justify-center items-center"
    >
      <h2 className="text-white md:text-[#15575B] font-normal text-sm md:text-base lg:text-[40px] font-heading [text-shadow:_0_2.5px_5px_rgb(0_0_0_/_0.4)]">
        {text}
      </h2>
    </div>
  );
}
