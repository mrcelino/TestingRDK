// LayoutIdulFitri.tsx

"use client";

import Image from "next/image";

export default function LayoutIdulFitri() {
  return (
    <>
      <div className="w-[136px] h-[20px] md:w-[380px] md:h-[56px] lg:w-[608px] lg:h-[90px] bg-[#F4AA3D] border lg:border-[3px] border-black flex justify-center items-center rounded-[20px] lg:rounded-[30px] mt-5 md:mt-10 lg:mt-20">
        <h1 className="text-[#fbfbfb] font-normal text-[8px] md:text-base lg:text-[32px]">
          Eid Mubarak 1446 H
        </h1>
      </div>

      <div className="flex relative w-[166px] h-[34px] md:w-[464px] md:h-[95px] lg:w-[942px] lg:h-[247px] bg-white border lg:border-[3px] border-black rounded-[100px] justify-center items-center translate-y-4 md:translate-y-12 lg:translate-y-36">
        <div className="flex flex-col justify-center items-end font-bold text-[6px] md:text-sm lg:text-[32px] text-[#15575B] translate-x-1 md:translate-x-10 lg:-translate-x-20 gap-y-0.5 md:gap-y-2 lg:gap-y-10">
          <h2>تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ</h2>
          <h2>كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ</h2>
        </div>

        <img
          src="/images/maskot.png"
          width={328}
          height={328}
          alt="sign"
          className="absolute w-[71px] h-[71px] md:w-[199px] md:h-[199px] lg:w-[328px] lg:h-[328px] -right-6 -bottom-4 md:-right-16 lg:right-10 md:-bottom-12 lg:-bottom-24 scale-x-[-1]"
        />
      </div>

      <div className="w-full h-fit bg-white flex flex-col items-center justify-center py-10">
        {/* start of special eid mubarak header */}
        <div
          className="w-[146px] h-[14px] md:w-[407px] md:h-[41px] lg:w-[641px] lg:h-[90px] bg-[#F4AA3D] border lg:border-[3px] border-black shadow-[rgba(21,87,91,1)_-2px_2px_0px] md:shadow-[rgba(21,87,91,1)_-4px_4px_0px] lg:shadow-[rgba(21,87,91,1)_-8px_8px_0px] rounded-tl-[100px] rounded-br-[100px] flex justify-center items-center mt-2 md:mt-20 lg:mt-56 mb-10 "
          // style={{
          //   boxShadow: "-8px 8px 0px rgba(21, 87, 91, 1)", // arah ke kanan bawah
          // }}
        >
          <h1 className="text-[#fbfbfb] font-normal text-[6px] md:text-[12px] lg:text-2xl">
            Special Eid al-Fitr Prayer
          </h1>
        </div>
        {/* end of special eid mubarak header */}

        {/* starrt of foto pengisi acarra container */}
        <div className="grid grid-cols-2 w-[162px] md:w-[354px] lg:w-[672px] h-[94px] md:h-[204px] lg:h-[389px] mt-2 md:mt-8 lg:mt-10">
          {/* left side */}
          <div>
            {/* guest1 container */}
            <div
              className="relative w-[53px] md:w-[116px] lg:w-[220.44px] h-[78px] md:h-[171px] lg:h-[324.61px] flex flex-col bg-white rounded-[5px] md:rounded-[15px] lg:rounded-[30px] border lg:border-[3px] border-black lg:p-1 rotate-[-7deg] items-center"
              style={{
                boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
              }}
            >
              {/* top part icon container */}
              <div className="w-full h-fit flex flex-row justify-between pl-0.5 md:pl-2 lg:pl-2 pr-2 md:pr-3 lg:pr-5 align-middle">
                {/* yellow circle thing */}
                <div className="w-1 md:w-2 lg:w-4 h-1 md:h-2 lg:h-4 bg-[#F4AA3D] border lg:border-[2px] border-black rounded-full"></div>
                {/* <p className="h-[0.5px] lg:h-3 mb-auto font-black text-xs lg:text-lg">...</p> */}
                <div className="w-fit h-fit flex flex-row gap-x-[2px] lg:gap-x-1 my-auto">
                  <div className="w-[1px] h-[1px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                  <div className="w-[1px] h-[1px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                  <div className="w-[1px] h-[1px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                </div>
              </div>

              {/* photo container */}
              <div className="w-[50px] md:w-[109px] lg:w-[207px] h-[60px] md:h-[131px] lg:h-[249px] bg-[#EFC828] border border-black mt-1 lg:mt-4">
                {/* <Image
                                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                                width={207}
                                height={249}
                                alt="sign"
                                className=""
                              /> */}
                <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div>
              </div>

              {/* bottom part icon container*/}
              <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-0.5 lg:pl-1 pt-0.5 lg:pt-1 gap-x-0.5 md:gap-x-1 lg:gap-x-2">
                <Image
                  src="/images/jadwal/icon_heart.svg"
                  width={15}
                  height={13}
                  alt="sign"
                  className="w-[5px] h-[5px] md:w-[9px] md:h-[9px] lg:w-[15px] lg:h-[13px]"
                />
                <Image
                  src="/images/jadwal/icon_comment.svg"
                  width={14}
                  height={14}
                  alt="sign"
                  className="w-[5px] h-[5px] md:w-[9px] md:h-[9px] lg:w-[14px] lg:h-[14px]"
                />
                <Image
                  src="/images/jadwal/icon_share.svg"
                  width={14}
                  height={13}
                  alt="sign"
                  className="w-[5px] h-[5px] md:w-[9px] md:h-[9px] lg:w-[14px] lg:h-[14px]"
                />
              </div>

              <img
                src="/images/jadwal/shadow.svg"
                alt=""
                className="absolute -bottom-6 lg:-bottom-24 rotate-[7deg]"
              />
            </div>
          </div>
          {/* end of guest1 container */}

          {/* right side */}
          <div className="flex w-full">
            {/* guest2 container */}
            <div
              className="relative w-[53px] md:w-[116px] lg:w-[220.44px] h-[78px] md:h-[171px] lg:h-[324.61px] flex flex-col bg-white rounded-[5px] md:rounded-[15px] lg:rounded-[30px] border lg:border-[3px] border-black lg:p-1 ml-auto rotate-[8deg] items-center"
              style={{
                boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
              }}
            >
              {/* top part icon container */}
              <div className="w-full h-fit flex flex-row justify-between pl-0.5 md:pl-2 lg:pl-2 pr-2 md:pr-3 lg:pr-5 align-middle">
                {/* yellow circle thing */}
                <div className="w-1 md:w-2 lg:w-4 h-1 md:h-2 lg:h-4 bg-[#F4AA3D] border lg:border-[2px] border-black rounded-full"></div>
                {/* <p className="h-[0.5px] lg:h-3 mb-auto font-black text-xs lg:text-lg">...</p> */}
                <div className="w-fit h-fit flex flex-row gap-x-[2px] lg:gap-x-1 my-auto">
                  <div className="w-[1px] h-[1px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                  <div className="w-[1px] h-[1px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                  <div className="w-[1px] h-[1px] md:w-[3px] md:h-[3px] lg:w-[6px] lg:h-[6px] bg-black text-transparent rounded-full">
                    .
                  </div>
                </div>
              </div>

              {/* photo container */}
              <div className="w-[50px] md:w-[109px] lg:w-[207px] h-[60px] md:h-[131px] lg:h-[249px] bg-[#15575B] border border-black mt-1 lg:mt-4">
                {/* <Image
                                src="/images/jadwal/examplePhotoPengisiAcara.svg"
                                width={207}
                                height={249}
                                alt="sign"
                                className=""
                              /> */}
                {/* <img src="/images/jadwal/examplePhotoPengisiAcara.svg" alt="" className="w-fit h-fit "/> */}
                <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full"></div>
              </div>

              {/* bottom part icon container*/}
              <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-0.5 lg:pl-1 pt-0.5 lg:pt-1 gap-x-0.5 md:gap-x-1 lg:gap-x-2">
                <Image
                  src="/images/jadwal/icon_heart.svg"
                  width={15}
                  height={13}
                  alt="sign"
                  className="w-[5px] h-[5px] md:w-[9px] md:h-[9px] lg:w-[15px] lg:h-[13px]"
                />
                <Image
                  src="/images/jadwal/icon_comment.svg"
                  width={14}
                  height={14}
                  alt="sign"
                  className="w-[5px] h-[5px] md:w-[9px] md:h-[9px] lg:w-[14px] lg:h-[14px]"
                />
                <Image
                  src="/images/jadwal/icon_share.svg"
                  width={14}
                  height={13}
                  alt="sign"
                  className="w-[5px] h-[5px] md:w-[9px] md:h-[9px] lg:w-[14px] lg:h-[14px]"
                />
              </div>

              <img
                src="/images/jadwal/shadow.svg"
                alt=""
                className="absolute -bottom-6 lg:-bottom-24 -left-1 rotate-[-8deg]"
              />
            </div>
          </div>
          {/* end of right side */}
        </div>
        {/* end of foto pengisi acarra container */}

        {/* starrt of nama pengisi acara container (yang ada dua dibelah) */}
        <div className="relative w-[200px] md:w-[523px] lg:w-[778px] h-[28px] md:h-[60px] lg:h-[90px] rounded-[100px] bg-white flex flex-row mt-4 lg:mt-10">
          {/* left name container */}
          <div className="w-1/2 h-full border lg:border-[3px] border-black rounded-l-[100px] flex justify-center items-center">
            <p className="md:w-[219px] w-[289px] text-[#F4AA3D] font-bold italic text-[4px] md:text-[10px] lg:text-[14px] text-left">
              Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
            </p>
          </div>
          {/* right name container */}
          <div className="w-1/2 h-full bg-[#F4AA3D] border lg:border-[3px] border-black rounded-r-[100px] flex justify-center items-center">
            <p className="md:w-[219px] w-[289px] text-[#15575B] font-bold italic text-[4px] md:text-[10px] lg:text-[14px] text-left">
              Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
            </p>
          </div>

          {/* khatib and imam label (on top of pengisi acara container) */}
          <div className="flex flex-row justify-around items-center absolute left-3.5 md:left-[38px] lg:left-[58px] -top-1.5 md:-top-3.5 lg:-top-[26px] w-[172px] lg:w-[650px] h-[6px] md:h-[15px] lg:h-[26px] md:w-[437px] pt-1 rounded-t-[30px] bg-[#15575B] text-white font-bold italic text-[4px] md:text-[8px] lg:text-sm">
            <p>Imam</p>
            <p>Khatib</p>
          </div>
        </div>
        {/* end of nama pengisi acara container (yang ada dua dibelah) */}

        {/* start of moderator container */}
        <div className="w-[109px] h-[30px] md:w-[238px] md:h-[67px] lg:w-[367px] lg:h-[102px] mt-5 lg:mt-10 relative flex items-center justify-end">
          {/* photo container */}
          <div className="absolute top-0 left-0 w-[30px] h-[30px] md:w-[68px] md:h-[68px] lg:w-[102px] lg:h-[102px] bg-white rounded-full border lg:border-[3px] border-black z-10">
            {/* gambar moderator */}
            {/* <img
                        src="/images/maskot.png"
                        // width={207}
                        // height={248}
                        alt="sign"
                        className="rounded-full w-fit h-fit object-cover overflow-hidden"
                      /> */}
            <div className="bg-[url('/images/jadwal/examplePhotoPengisiAcara.svg')] bg-cover bg-center w-full h-full rounded-full overflow-hidden"></div>
          </div>

          {/* moderrator name container */}
          <div className="relative w-[83%] h-[20px] md:h-[45px] lg:h-[69px] bg-white border lg:border-[3px] border-black rounded-[100px] flex flex-col items-start justify-center pl-4 md:pl-9 lg:pl-[40px]">
            {/* moderator name */}
            <h1 className="text-[#F4AA3D] font-bold text-[4px] md:text-[10px] lg:text-sm italic">
              Andri Pratama, M.Phil.
            </h1>
            <hr className="absolute top-1/2 left-0 w-4/6 border lg:border-[2px] border-black" />
            {/* ini hr dummy (ignore aja) */}
            <hr className="py-0.5 lg:py-1" />
            <p className="text-[#15575B] font-bold text-[4px] md:text-[10px] lg:text-xs italic">
              As Moderator
            </p>
          </div>
        </div>
        {/* end of moderator container */}

        {/* start of box info event */}
        <div className="w-[178px] md:w-[388px] lg:w-[893px] h-[37px] md:h-[81px] lg:h-[187px] bg-[#FBFBFB] flex flex-col border lg:border-[3px] border-black rounded-[50px] items-center justify-center mt-5 md:mt-8 lg:mt-10 py-1 md:py-2 lg:py-5">
          <div className="relative flex flex-col text-center">
            <p className="text-[#FFC359] font-semibold text-[4px] md:text-[8px] lg:text-base italic">
              Ramadan Berdaya:
            </p>
            <p className="text-[#15575B] font-semibold text-[4px] md:text-[8px] lg:text-base italic">
              Upaya Kolaboratif Mewujudkan <br />
              Pembangunan Inklusif dan Berkelanjutan
            </p>
            <p className="absolute -top-1 lg:-top-6 -left-2 lg:-left-10 text-sm lg:text-[55px] font-extrabold text-[#FFC359] font-serif">
              "
            </p>
            <p className="absolute -bottom-1 lg:-bottom-6 -right-3 lg:-right-10 text-sm lg:text-[55px] font-extrabold text-[#FFC359] font-serif rotate-180">
              "
            </p>
          </div>
          <hr className="border-b-[0.5px] lg:border-b-2 border-black w-9/12 my-auto" />
          {/* tempat dan waktu */}
          <div className="w-fit flex flex-row justify-center items-center ml-auto md:mr-auto lg:mr-0 lg:ml-0">
            <div className="flex flex-row gap-x-1 md:gap-x-3 lg:gap-x-7 justify-start items-center">
              {/* icon location */}
              <img
                src="images/jadwal/vector_location.svg"
                alt=""
                className="w-[5px] md:w-[11px] lg:w-[26px] h-[6px] md:h-[13px] lg:h-[31px]"
              />
              {/* lokasi */}
              <p className="font-medium text-[2px] md:text-[6px] lg:text-sm text-[#15575B] italic">
                Mardliyyah <br /> Islamic Center UGM
              </p>
            </div>
            {/* <div className="ml-6 mr-6 text-[#15575B] text-3xl my-auto">|</div> */}
            <div className="text-transparent bg-[#15575B] w-[7px] md:w-[17px] lg:w-[40px] h-[1px] rotate-90">
              .
            </div>
            <div className="flex flex-row gap-x-1 lg:gap-x-8 justify-start items-center">
              {/* icon calendar */}
              <img
                src="images/jadwal/vektor_kalender.svg"
                alt=""
                className="w-[6px] md:w-[14px] lg:w-[32px] h-[6px] md:h-[13px] lg:h-[30px]"
              />
              {/* waktu */}
              <p className="w-20 font-medium text-[2px] md:text-[6px] lg:text-sm text-[#15575B] italic flex flex-row">
                08:00 WIB
              </p>
            </div>
          </div>
        </div>
        {/* end of box info event */}
      </div>
    </>
  );
}
