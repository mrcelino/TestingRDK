// LayoutIdulFitri.tsx

"use client";

import Image from "next/image";

export default function LayoutIdulFitri() {
  return (
    <>
      <div className="w-[608px] h-[90px] bg-[#F4AA3D] border-[3px] border-black flex justify-center items-center rounded-[30px] mt-20">
        <h1 className="text-[#fbfbfb] font-normal text-[32px]">
          Eid Mubarak 1446 H
        </h1>
      </div>

      <div className="flex relative w-[942px] h-[247px] bg-white border-[3px] border-black rounded-[100px] justify-center items-center translate-y-36">
        <div className="flex flex-col justify-center items-end font-bold text-[32px] text-[#15575B] -translate-x-20">
          <h2>تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ</h2>
          <h2>كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ</h2>
        </div>

        <img
          src="/images/maskot.png"
          width={328}
          height={328}
          alt="sign"
          className="absolute right-10 -bottom-24 scale-x-[-1]"
        />
      </div>

      <div className="w-full h-fit bg-white flex flex-col items-center justify-center py-10">
        {/* start of special eid mubarak header */}
        <div
          className="w-[641px] h-[90px] bg-[#F4AA3D] border-[3px] border-black rounded-tl-[100px] rounded-br-[100px] flex justify-center items-center mt-56 mb-10"
          style={{
            boxShadow: "-8px 8px 0px rgba(21, 87, 91, 1)", // arah ke kanan bawah
          }}
        >
          <h1 className="text-[#fbfbfb] font-normal text-2xl">
            Special Eid al-Fitr Prayer
          </h1>
        </div>
        {/* end of special eid mubarak header */}

        {/* start of eid mubarak content information */}
        {/* starrt of foto pengisi acarra container */}
              <div className="grid grid-cols-2 w-[672px] h-[389px] mt-10">
                {/* left side */}
                <div>
                  {/* guest1 container */}
                  <div
                    className="relative w-[220.44px] h-[324.61px] flex flex-col bg-white rounded-[30px] border-[3px] border-black p-1 rotate-[-7deg]"
                    style={{
                      boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
                    }}
                  >
                    {/* top part icon container */}
                    <div className="w-full h-fit flex flex-row justify-between pl-2 pr-5 align-text-top">
                      {/* yellow circle thing */}
                      <div className="w-4 h-4 bg-[#F4AA3D] border-[2px] border-black rounded-full"></div>
                      <p className="h-3 mb-auto font-black text-lg">...</p>
                    </div>
        
                    {/* photo container */}
                    <div className="w-[207px] h-[249px] bg-[#EFC828] border border-black mt-4">
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
                    <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-1 pt-1 gap-x-2">
                      <Image
                        src="/images/jadwal/icon_heart.svg"
                        width={15}
                        height={13}
                        alt="sign"
                        className=""
                      />
                      <Image
                        src="/images/jadwal/icon_comment.svg"
                        width={14}
                        height={14}
                        alt="sign"
                        className=""
                      />
                      <Image
                        src="/images/jadwal/icon_share.svg"
                        width={14}
                        height={13}
                        alt="sign"
                        className=""
                      />
                    </div>
        
                    <img src="/images/jadwal/shadow.svg" alt="" className="absolute -bottom-24 rotate-[7deg]"/>
                  </div>
                </div>
                {/* end of guest1 container */}
        
                {/* right side */}
                <div className="flex w-full">
                  {/* guest2 container */}
                  <div
                    className="w-[220.44px] h-[324.61px] flex flex-col bg-white rounded-[30px] border-[3px] border-black p-1 ml-auto rotate-[8deg] relative"
                    style={{
                      boxShadow: "8px 1px 0px rgba(0, 0, 0, 2)", // arah ke kanan bawah
                    }}
                  >
                    {/* top part icon container */}
                    <div className="w-full h-fit flex flex-row justify-between pl-2 pr-5 align-text-top">
                      {/* yellow circle thing */}
                      <div className="w-4 h-4 bg-[#F4AA3D] border-[2px] border-black rounded-full"></div>
                      <p className="h-3 mb-auto font-black text-lg">...</p>
                    </div>
        
                    {/* photo container */}
                    <div className="w-[207px] h-[249px] bg-[#15575B] border border-black mt-4">
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
                    <div className="w-full h-fit my-auto flex flex-row justify-start align-middle pl-1 pt-1 gap-x-2">
                      <Image
                        src="/images/jadwal/icon_heart.svg"
                        width={15}
                        height={13}
                        alt="sign"
                        className=""
                      />
                      <Image
                        src="/images/jadwal/icon_comment.svg"
                        width={14}
                        height={14}
                        alt="sign"
                        className=""
                      />
                      <Image
                        src="/images/jadwal/icon_share.svg"
                        width={14}
                        height={13}
                        alt="sign"
                        className=""
                      />
                    </div>
                    <img src="/images/jadwal/shadow.svg" alt="" className="absolute -bottom-24 -left-1 rotate-[-8deg]"/>
                  </div>
                </div>
                {/* end of right side */}
              </div>
              {/* end of foto pengisi acarra container */}
        {/* end of foto pengisi acarra container */}

        {/* starrt of nama pengisi acara container (yang ada dua dibelah) */}
        <div className="relative w-[778px] h-[90px] rounded-[100px] bg-white flex flex-row mt-14">
          {/* left name container */}
          <div className="w-1/2 h-full border-[3px] border-black rounded-l-[100px] flex justify-center items-center">
            <p className="w-[289px] text-[#F4AA3D] font-bold italic text-[14px] text-left">
              Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
            </p>
          </div>
          {/* right name container */}
          <div className="w-1/2 h-full bg-[#F4AA3D] border-[3px] border-black rounded-r-[100px] flex justify-center items-center">
            <p className="w-[289px] text-[#15575B] font-bold italic text-[14px] text-left">
              Al-Ustadz Prof.Dr. Hamid Fahmy Zarkasyi, M.Phil., M.A.Ed.
            </p>
          </div>

          {/* khatib and imam label (on top of pengisi acara container) */}
          <div className="flex flex-row justify-around absolute left-[58px] -top-[26px] w-[650px] h-[26px] pt-1 rounded-t-[30px] bg-[#15575B] text-white font-bold italic text-sm">
            <p>Imam</p>
            <p>Khatib</p>
          </div>
        </div>
        {/* end of nama pengisi acara container (yang ada dua dibelah) */}

        {/* start of moderator container */}
        <div className="w-[367px] h-[102px] mt-10 relative flex items-center justify-end">
          {/* photo container */}
          <div className="absolute top-0 left-0 w-[102px] h-[102px] bg-white rounded-full border-[3px] border-black z-10">
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
          <div className="relative w-[83%] h-[69px] bg-white border-[3px] border-black rounded-[100px] flex flex-col items-start justify-center pl-[40px]">
            {/* moderator name */}
            <h1 className="text-[#F4AA3D] font-bold text-sm italic">
              Andri Pratama, M.Phil.
            </h1>
            <hr className="absolute top-1/2 left-0 w-4/6 border-[2px] border-black" />
            {/* ini hr dummy (ignore aja) */}
            <hr className="py-1" />
            <p className="text-[#15575B] font-bold text-xs italic">
              As Moderator
            </p>
          </div>
        </div>
        {/* end of moderator container */}

        {/* start of box info event */}
        <div className="w-[893px] h-[187px] bg-[#FBFBFB] flex flex-col rounded-[50px] items-center justify-center border-[3px] border-black mt-10 py-5">
          <div className="relative flex flex-col text-center">
            <p className="text-[#FFC359] font-semibold text-base italic">
              Ramadan Berdaya:
            </p>
            <p className="text-[#15575B] font-semibold text-base italic">
              Upaya Kolaboratif Mewujudkan <br />
              Pembangunan Inklusif dan Berkelanjutan
            </p>
            <p className="absolute -top-6 -left-10 text-[55px] font-extrabold text-[#FFC359] font-serif">
              "
            </p>
            <p className="absolute -bottom-6 -right-10 text-[55px] font-extrabold text-[#FFC359] font-serif rotate-180">
              "
            </p>
          </div>
          <hr className="border-b-2 border-black w-9/12 my-auto" />
          {/* tempat dan waktu */}
          <div className="w-fit flex flex-row justify-center items-center">
            <div className="flex flex-row gap-x-7 justify-start items-center">
              {/* icon location */}
              <img src="images/jadwal/vector_location.svg" alt="" />
              {/* lokasi */}
              <p className="font-medium text-sm text-[#15575B] italic">
                GRHA <br />
                Sabha Pramana UGM
              </p>
            </div>
            {/* <div className="ml-6 mr-6 text-[#15575B] text-3xl my-auto">|</div> */}
            <div className="text-transparent bg-[#15575B] w-[40px] h-[1px] rotate-90">
              .
            </div>
            <div className="flex flex-row gap-x-8 justify-start items-center">
              {/* icon calendar */}
              <img src="images/jadwal/vektor_kalender.svg" alt="" />
              {/* waktu */}
              <p className="w-20 font-medium text-sm text-[#15575B] italic flex flex-row">
                08:00 WIB
              </p>
            </div>
          </div>
        </div>
        {/* end of eid mubarak content information */}
      </div>
    </>
  );
}
