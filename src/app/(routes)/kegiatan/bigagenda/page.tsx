import Image from "next/image"
import JadwalHeader from "./JadwalHeader"



function GrandOpening(){
  return(
    <>
    <section data-aos="fade-up" data-aos-duration="1000" className="xl:mx-auto flex justify-center items-center xl:h-[400px] lg:space-x-60 max-w-6xl ">
      <Image
        src="/images/kegiatan/rdkmaskot.svg"
        width={300}
        height={300}
        className="hidden md:block md:size-80 xl:size-[450px]"
        alt="sign"
      />
      <div className="flex flex-col xl:justify-around w-full p-4 xl:p-0">
        <div className="flex flex-row justify-center xl:justify-start 2xl:justify-center gap-4 items-center mt-2 mb-10">
            <Image
            src="/images/kegiatan/logo.png"
            width={100}
            height={100}
            className="w-12 h-16 md:w-16 md:h-20 xl:w-24 xl:h-32"
            alt="sign"
            />
            <Image
            src="/images/kegiatan/title_rdk.png"
            width={500}
            height={500}
            className="w-20 md:w-28 xl:w-40"
            alt="sign"
            />
        </div>
        
        <div className="ml-4 relative flex justify-center items-center  min-h-12 md:h-14 lg:max-w-3xl xl:h-20 rounded-[50px] bg-[#F4AA3D] pr-4 shadow-xl">
          <Image
            src="/images/kegiatan/circle.png"
            width={500}
            height={500}
            className="w-16 md:w-20 xl:w-28 absolute xl:-top-2 -left-1"
            alt="sign"
            />
            <h2 className="font-heading text-white  text-lg md:text-2xl xl:text-4xl pl-20 mx-auto">Grand Opening</h2>
            <Image
            src="/images/kegiatan/mic.svg"
            width={500}
            height={500}
            className="size-6 md:size-10 xl:size-14 justify-end"
            alt="sign"
            />
        </div>
      </div>
    </section>



      <section data-aos="fade-up" data-aos-duration="500" className="flex flex-col md:flex-row items-center md:justify-center p-4 xl:p-0 xl:mx-16 xl:gap-20 xl:mt-10">
        <Image
          src="/images/kegiatan/go.svg"
          width={300}
          height={300}
          className="w-96 xl:w-[500px] mb-5 xl:mb-10 md:order-2"
          alt="laptop"
          />
          <div className="bg-[#15575B] min-h-20 md:h-36 lg:h-[120px] xl:h-64 1xl:min-h-[260px] rounded-2xl xl:rounded-3xl p-2 xl:p-4 max-w-sm lg:max-w-md xl:max-w-2xl">
            <div className="flex flex-row gap-1 mb-2 xl:mb-4">
                <div className="bg-[#D64758] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#F4B653] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#7DB037] border-2 border-black rounded-full size-3 xl:size-5"/>
            </div>
            <div className="bg-white xl:h-48 rounded-xl lg:rounded-2xl">
                <h2 className="text-xs xl:text-xl italic font-body leading-5 xl:leading-relaxed p-3 xl:p-6">Grand Opening merupakan pembukaan rangkaian kegiatan Ramadhan Di Kampus UGM, yang bertujuan untuk menyambut bulan Ramadan dan pengenalan tema besar RDK 1446 H.</h2>
            </div>
          </div>
      </section>
    </>
  )
}

function MIT(){
  return(
    <div data-aos="fade-up" data-aos-duration="500">
      <section className="p-4 xl:p-0 xl:mx-32 xl:gap-20 xl:mt-10 md:flex md:justify-center">
        <div className="ml-4 relative flex items-center min-h-12 md:h-14 md:w-1/2 xl:h-20 rounded-[50px] bg-[#15575B] pr-4 shadow-xl xl:min-w-[650px]">
          <Image
            src="/images/kegiatan/circle2.png"
            width={500}
            height={500}
            className="w-16 md:w-20 xl:w-28 absolute xl:-top-2 -left-1"
            alt="sign"
            />
            <h2 className="font-heading text-white text-sm md:text-xl xl:text-4xl pl-14 md:pl-20 mx-auto">Muslimah Inspiring Talk</h2>
            <Image
            src="/images/kegiatan/mic2.svg"
            width={500}
            height={500}
            className="size-6 md:size-10 xl:size-14 justify-end"
            alt="sign"
            />
        </div>
      </section>

      <section className="flex flex-col items-center md:flex-row md:justify-center p-4 xl:p-0 xl:mx-auto md:gap-10 xl:gap-20 xl:mt-10">
        <Image
          src="/images/kegiatan/mit.svg"
          width={300}
          height={300}
          className="w-72 md:w-80 xl:w-[550px] mb-4 xl:mb-10"
          alt="laptop"
          />
          <div className="bg-[#15575B] min-h-20 md:h-36 lg:h-[120px] xl:h-56 1xl:min-h-[228px] rounded-2xl xl:rounded-3xl p-2 xl:p-4 max-w-sm lg:max-w-md xl:max-w-2xl">
            <div className="flex flex-row gap-1 mb-2 xl:mb-4">
                <div className="bg-[#D64758] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#F4B653] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#7DB037] border-2 border-black rounded-full size-3 xl:size-5"/>
            </div>
            <div className="bg-white xl:h-40 rounded-xl xl:rounded-2xl">
                <h2 className="text-xs xl:text-xl italic font-body leading-5 xl:leading-relaxed p-3 xl:p-4">Muslimah Inspiring Talk adalah kegiatan Ramadhan Di Kampus UGM yang bertujuan untuk memberdayakan perempuan melalui berbagi pengalaman, wawasan, dan cerita sukses dari para pembicara.</h2>
            </div>
          </div>
      </section>
    </div>
  )
}

function RDKFestival(){
  return(
    <div data-aos="fade-up" data-aos-duration="500">
      <section className="relative p-4 xl:p-0 xl:mx-32 xl:gap-20 xl:mt-10 md:flex md:justify-center">
        <div className="ml-4 relative flex items-center min-h-12 md:h-14 md:w-1/2 xl:h-20 rounded-[50px] bg-[#F4AA3D] pr-4 shadow-xl xl:min-w-[650px]">
          <Image
            src="/images/kegiatan/circle.png"
            width={500}
            height={500}
            className="w-16 md:w-20 xl:w-28 absolute xl:-top-2 -left-1"
            alt="sign"
            />
            <h2 className="font-heading text-white text-lg md:text-xl xl:text-4xl pl-20 mx-auto">RDK Festival</h2>
            <Image
            src="/images/kegiatan/mic.svg"
            width={500}
            height={500}
            className="size-6 md:size-10 xl:size-14 justify-end"
            alt="sign"
            />
        </div>
        <div className="hidden md:block absolute rounded-full size-52 lg:size-72 blur-[80px] -top-20 -left-20 bg-[#76D0D5] opacity-50"></div>
      </section>

      <section className="flex flex-col md:flex-row md:justify-center justify-around items-center mt-2 xl:mt-10 xl:items-center p-4 xl:p-0 xl:mx-4 md:gap-10 xl:gap-20 xl:mb-16">
        <Image
          src="/images/kegiatan/tv.svg"
          width={300}
          height={300}
          className="w-80 xl:w-[700px] mb-6 xl:mb-10 md:order-2"
          alt="laptop"
          />
          <div className="bg-[#15575B] min-h-20 md:h-[120px] xl:min-h-[232px] rounded-2xl xl:rounded-3xl p-2 xl:p-4 max-w-sm  xl:max-w-xl">
            <div className="flex flex-row gap-1 mb-2 xl:mb-4">
                <div className="bg-[#D64758] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#F4B653] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#7DB037] border-2 border-black rounded-full size-3 xl:size-5"/>
            </div>
            <div className="bg-white xl:min-h-40 rounded-xl xl:rounded-2xl">
                <h2 className="text-xs xl:text-xl italic font-body leading-5 xl:leading-relaxed p-3 xl:p-5">Rangkaian Kegiatan di RDK Festival terdiri dari talkshow dan penampilan UKM yang dilaksanakan secara daring maupun luring.</h2>
            </div>
          </div>
      </section>
    </div>
  )
}

function GebyarSore(){
  return(
    <div data-aos="fade-up" data-aos-duration="500" className="pb-20">
      <section className="p-4 xl:p-0 xl:mx-32 xl:gap-20 md:flex md:justify-center">
        <div className="ml-4 relative flex items-center min-h-12 md:h-14 md:w-1/2 xl:h-20 rounded-[50px] bg-[#15575B] pr-4 shadow-xl xl:min-w-[650px]">
          <Image
            src="/images/kegiatan/circle2.png"
            width={500}
            height={500}
            className="w-16 md:w-20 xl:w-28 absolute xl:-top-2 -left-1"
            alt="sign"
            />
            <h2 className="font-heading text-white text-lg md:text-2xl xl:text-4xl pl-20 mx-auto">Gebyar Sore</h2>
            <Image
            src="/images/kegiatan/mic2.svg"
            width={500}
            height={500}
            className="size-6 md:size-10 xl:size-14 justify-end"
            alt="sign"
            />
        </div>
      </section>

      <section className="flex flex-col items-center md:flex-row md:justify-center p-4 xl:p-0 xl:mx-16 md:gap-10 xl:gap-20 xl:mt-10">
        <Image
          src="/images/kegiatan/gebsor.svg"
          width={300}
          height={300}
          className="w-72 xl:w-[550px] mb-10 my-5 xl:mb-10"
          alt="laptop"
          />
          <div className="bg-[#15575B] min-h-20 md:h-36 xl:min-h-[238px] 1xl:min-h-[230px] rounded-2xl xl:rounded-3xl p-2 xl:p-4 max-w-sm lg:max-w-md xl:max-w-2xl">
            <div className="flex flex-row gap-1 mb-2 xl:mb-4">
                <div className="bg-[#D64758] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#F4B653] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#7DB037] border-2 border-black rounded-full size-3 xl:size-5"/>
            </div>
            <div className="bg-white xl:min-h-40 rounded-xl xl:rounded-2xl">
                <h2 className="text-xs xl:text-lg italic font-body leading-5 lg:leading-relaxed p-3 lg:p-4">Gebyar Sore adalah upaya memberikan dampak nyata untuk menjawab isu permasalahan sosial. Rangkaian kegiatannya meliputi RDK berbagi barang layak pakai, buka bersama panti, dan pengembangan skill anak-anak.</h2>
            </div>
          </div>
      </section>
    </div>
  )
}

export default function BigAgenda(){
  return(
    <div className="relative bg-white">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg-mobile3.svg')] lg:bg-[url('/images/pattern-for-bg.svg')] bg-repeat opacity-15 mix-blend-multiply brightness-50 z-1"></div>
      <div className="hidden md:block absolute rounded-full size-52 lg:size-80 blur-[80px] top-0 right-0 bg-[#76D0D5] opacity-60"></div>
      <div className="relative z-10 pt-8 lg:pt-36">
        <JadwalHeader/>
        <GrandOpening/>
        <MIT/>
        <RDKFestival/>
        <GebyarSore/>
      </div>
    </div>
  )
}