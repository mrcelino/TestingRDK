"use client";

import Image from "next/image";

export default function SpectacularShow() {
  return (
    <>
      <div className="w-[723px] h-[90px] flex bg-white rounded-l-[100px] rounded-tr-[100px] border-[5px] border-black mt-32 justify-center items-center">
        <h2 className="text-[#15575B] font-normal text-[40px] ">
          Spectacular Show
        </h2>
      </div>

      {/* start of Polaroit Container */}
      <div className="w-fit h-fit flex flex-row mt-20">
        {/* startt of LEFT polaroid */}
        <div className="relative flex flex-col w-[236px] h-[293px] bg-[#FBFBFB] border-[3px] border-black px-[14px] pt-[14px] pb-2 justify-center align-top rotate-[-9deg] translate-x-7">
          {/* photo container */}
          <div className="w-[207px] h-[219px] bg-gray-300 mb-auto">
            <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[10px] italic w-20 text-center">
              Aceh Dance By Rampoe UGM
            </h2>
          </div>
        </div>
        {/* end of LEFT polaroid */}

        {/* startt of center polaroid */}
        <div className="relative flex flex-col w-[236px] h-[293px] bg-[#FBFBFB] border-[3px] border-black px-[14px] pt-[14px] pb-2 justify-center align-top z-20 translate-y-10">
          {/* photo container */}
          <div className="w-[207px] h-[219px] bg-gray-300 mb-auto">
            <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[10px] italic w-20 text-center">
              Aceh Dance By Rampoe UGM
            </h2>
          </div>

          {/* pin top left*/}
          <Image
            src="/images/jadwal/vector_pin.png"
            width={47}
            height={48}
            alt="icon pin"
            className="absolute -top-5 -left-0"
          />
          {/* pin bottom right */}
          <Image
            src="/images/jadwal/vector_pin.png"
            width={47}
            height={48}
            alt="icon pin"
            className="absolute bottom-11 -right-3"
          />
        </div>
        {/* end of center polaroid */}

        {/* startt of right polaroid */}
        <div className="relative flex flex-col w-[236px] h-[293px] bg-[#FBFBFB] border-[3px] border-black px-[14px] pt-[14px] pb-2 justify-center align-top rotate-[10deg] -translate-x-9">
          {/* photo container */}
          <div className="w-[207px] h-[219px] bg-gray-300 mb-auto">
            <div className="w-full h-full bg-[url('/images/jadwal/polaroid_photo_example.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          {/* photo title container */}
          <div className="m-auto">
            <h2 className="text-[#15575B] font-bold text-[10px] italic w-20 text-center">
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
