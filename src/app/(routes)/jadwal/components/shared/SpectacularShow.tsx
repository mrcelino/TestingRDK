"use client";

import Image from "next/image";

export default function SpectacularShow() {
  return (
    <>
      <div className="w-[291px] md:w-[380px] lg:w-[723px] h-[39px] md:h-[51px] lg:h-[90px] flex bg-white rounded-l-[100px] rounded-tr-[100px] border lg:border-[5px] border-black mt-8 md:mt-16 lg:mt-32 justify-center items-center">
        <h2 className="text-[#15575B] font-normal text-sm md:text-base lg:text-[40px] ">
          Spectacular Show
        </h2>
      </div>

      {/* start of Polaroit Container */}
      <div className="w-fit h-fit flex flex-row mt-6 md:mt-10 lg:mt-20">
        {/* startt of LEFT polaroid */}
        <div className="relative flex flex-col w-[118px] md:w-[119px] lg:w-[236px] h-[146px] md:h-[148px] lg:h-[293px] bg-[#FBFBFB] border lg:border-[3px] border-black px-[2px] md:px-[7px] lg:px-[14px] pt-[6px] md:pt-[7px] lg:pt-[14px] lg:pb-2 justify-center align-top rotate-[-9deg] translate-x-5 lg:translate-x-7">
          {/* photo container */}
          <div className="w-[103px] md:w-[104px] lg:w-[207px] h-[109px] md:h-[110px] lg:h-[219px] bg-gray-300 mx-auto lg:mb-auto">
            <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[8px] md:text-[6px] lg:text-[10px] italic w-20 md:w-12 lg:w-20 text-center">
              Aceh Dance By Rampoe UGM
            </h2>
          </div>
        </div>
        {/* end of LEFT polaroid */}

        {/* startt of center polaroid */}
        <div className="relative flex flex-col w-[118px] md:w-[119px] lg:w-[236px] h-[146px] md:h-[148px] lg:h-[293px] bg-[#FBFBFB] border lg:border-[3px] border-black px-[2px] md:px-[7px] lg:px-[14px] pt-[6px] md:pt-[7px] lg:pt-[14px] lg:pb-2 justify-center align-top z-20 translate-y-5 lg:translate-y-10">
          {/* photo container */}
          <div className="w-[103px] md:w-[104px] lg:w-[207px] h-[109px] md:h-[110px] lg:h-[219px] bg-gray-300 mx-auto lg:mb-auto">
            <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[8px] md:text-[6px] lg:text-[10px] italic w-20 md:w-12 lg:w-20 text-center">
              Aceh Dance By Rampoe UGM
            </h2>
          </div>

          {/* pin top left*/}
          <img
            src="/images/jadwal/vector_pin.png"
            // width={47}
            // height={48}
            alt="icon pin"
            className="absolute w-[24px] md:w-6 lg:w-[47px] h-[24px] md:h-6 lg:h-[48px] -top-3 md:-top-3 lg:-top-5 -left-0"
          />
          {/* pin bottom right */}
          <img
            src="/images/jadwal/vector_pin.png"
            // width={47}
            // height={48}
            alt="icon pin"
            className="absolute w-[24px] md:w-6 lg:w-[47px] h-[24px] md:h-6 lg:h-[48px] bottom-6 md:bottom-6 lg:bottom-11 -right-2 lg:-right-3"
          />
        </div>
        {/* end of center polaroid */}

        {/* startt of right polaroid */}
        <div className="relative flex flex-col w-[118px] md:w-[119px] lg:w-[236px] h-[146px] md:h-[148px] lg:h-[293px] bg-[#FBFBFB] border lg:border-[3px] border-black px-[2px] md:px-[7px] lg:px-[14px] pt-[6px] md:pt-[7px] lg:pt-[14px] lg:pb-2 justify-center align-top rotate-[10deg] -translate-x-6 lg:-translate-x-9">
          {/* photo container */}
          <div className="w-[103px] md:w-[104px] lg:w-[207px] h-[109px] md:h-[110px] lg:h-[219px] bg-gray-300 mx-auto lg:mb-auto">
            <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[8px] md:text-[6px] lg:text-[10px] italic w-20 md:w-12 lg:w-20 text-center">
              Aceh Dance By Rampoe UGM
            </h2>
          </div>
        </div>
        {/* end of right polaroid */}
      </div>
      {/* End of Polaroit Container */}
    </>
  );
}
