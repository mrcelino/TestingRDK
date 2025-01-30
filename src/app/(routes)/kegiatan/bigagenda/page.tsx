import Image from "next/image"

function Header(){
  return(
    <>
      <div className="relative flex w-[635px] h-[185px] bg-[#15575B] rounded-[50px] border-[3px] border-black mx-auto mt-32 justify-center items-center ">
        <Image
          src="/images/kegiatan/ic_header.svg"
          width={182}
          height={182}
          alt="sign"
          className="absolute -left-20 top-0"
          />
        <Image
          src="/images/kegiatan/ic_header.svg"
          width={182}
          height={182}
          alt="sign"
          className="absolute -right-20 top-0 scale-x-[-1]"
          />
        <div className="flex flex-col text-center">
          <h1 className="text-white text-4xl font-normal font-heading">Big Events</h1>
          <h1 className="text-[#EFC828] text-3xl font-normal font-heading">Ramadhan Di Kampus</h1>
          <h1 className="text-white italic text-xl font-medium font-body">Universitas Gadjah Mada</h1>
        </div>
      </div>
    </>
  )
}

function Banner(){
  return(
    <>
      <section className="relative sm:min-h-[250px] flex flex-col sm:flex-row bg-[#15575B] mt-16 border-y-4 border-black ">
        <div className="flex items-center justify-center sm:w-[45%]">
          <h2 className='font-title font-normal p-2 text-xs sm:text-3xl text-white max-w-48 sm:max-w-[450px] italic leading-loose'>"Ramadhan Penuh <span className='font-bold'>Berkah</span>,  Mari Raih <span className='font-bold'>Pahala Jariyah,</span> Mulai dari <span className='font-bold'>Satu Rupiah</span>"</h2>
        </div>
        <div className="relative sm:w-[55%] mt-2 sm:mt-0">
          <div className="flex flex-col justify-center p-12 absolute inset-0 bg-[#F4AA3D] border-2 sm:border-[7px] sm:border-y-0 border-black sm:rounded-l-[100px]">
            <h2 className='font-body text-base sm:text-3xl text-[#15575B] font-semibold text-center sm:text-left sm:mb-2'>Titipkan Kebaikan,</h2>
            <h2 className='font-heading text-base sm:text-lg xl:text-5xl text-white text-center sm:text-left'>Tebarkan <br/>Keberkahan</h2>
          </div>
        </div>
        <Image
            src="/images/makanan/speaker.png"
            alt="Maskot"
            width={300}
            height={300}
            className="size-20 sm:size-44 -mr-10 lg:left-[500px] lg:mr-0 top-28 lg:size-72 lg:top-20 absolute z-0 overflow-hidden"
          />
      </section>
    </>
  )
}

export default function BigAgenda(){
  return(
    <>
      {/* <Header/> */}
      <section className="xl:mx-24 xl:h-[400px] flex lg:space-x-24">
        <Image
          src="/maskot.webp"
          width={300}
          height={300}
          className="hidden md:block md:size-80 xl:size-[450px] scale-x-[-1]"
          alt="sign"
        />
        <div className="flex flex-col xl:justify-around w-full p-4 xl:p-0">
          <div className="flex flex-row justify-center xl:justify-start gap-4 items-center mt-10 mb-10">
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
          <div className="ml-4 relative flex items-center min-h-12 md:h-14 lg:w-3/4 xl:h-20 rounded-[50px] bg-[#F4AA3D] pr-4 shadow-xl">
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

      <section className="flex flex-col md:flex-row items-center md:justify-evenly p-4 xl:p-0 xl:mx-32 xl:gap-20 xl:mt-10">
        <Image
          src="/images/kegiatan/laptop.svg"
          width={300}
          height={300}
          className="w-96 xl:w-1/2 h-60 xl:mb-10 md:order-2"
          alt="laptop"
          />
          <div className="bg-[#15575B] min-h-20 md:h-36 lg:h-32 xl:h-56 rounded-2xl xl:rounded-3xl p-2 xl:p-4 max-w-sm lg:max-w-md xl:max-w-full">
            <div className="flex flex-row gap-1 mb-2 xl:mb-4">
                <div className="bg-[#D64758] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#F4B653] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#7DB037] border-2 border-black rounded-full size-3 xl:size-5"/>
            </div>
            <div className="bg-white xl:h-40 rounded-xl lg:rounded-2xl">
                <h2 className="text-xs xl:text-xl italic font-body leading-5 xl:leading-relaxed p-3 xl:p-8">Grand Opening merupakan pembukaan rangkaian kegiatan Ramadhan Di Kampus UGM, yang bertujuan untuk menyambut bulan Ramadan dan pengenalan tema besar RDK 1446 H.</h2>
            </div>
          </div>
      </section>


      <section className="p-4 xl:p-0 xl:mx-36 xl:gap-20 xl:mt-10">
          <div className="ml-4 relative flex items-center min-h-12 md:h-14 md:w-1/2 xl:h-20 rounded-[50px] bg-[#15575B] pr-4 shadow-xl">
            <Image
              src="/images/kegiatan/circle2.png"
              width={500}
              height={500}
              className="w-16 md:w-20 xl:w-28 absolute xl:-top-2 -left-1"
              alt="sign"
              />
              <h2 className="font-heading text-white text-sm sm:text-lg md:text-xl xl:text-4xl pl-16 sm:pl-20 mx-auto">Muslimah Inspiring Talk</h2>
              <Image
              src="/images/kegiatan/mic2.svg"
              width={500}
              height={500}
              className="size-6 md:size-10 xl:size-14 justify-end"
              alt="sign"
              />
          </div>
      </section>

      <section className="flex flex-col justify-center items-center md:flex-row p-4 xl:p-0 xl:mx-32 md:justify-evenly xl:space-x-48 xl:mt-10">
        <Image
          src="/images/kegiatan/tablet.svg"
          width={500}
          height={500}
          className="w-72 md:w-80 xl:w-1/2 xl:mb-10"
          alt="laptop"
          />
          <Image
          src="/images/maskot.png"
          width={500}
          height={500}
          className="hidden md:block w-72 xl:w-1/2 scale-x-[-1] xl:mb-10"
          alt="laptop"
          />
      </section>

      <section className="flex flex-col items-center md:flex-row md:justify-evenly p-4 xl:p-0 xl:mx-32 xl:gap-20 xl:mt-10">
        <Image
          src="/images/kegiatan/star.svg"
          width={300}
          height={300}
          className="hidden md:block w-28 h-40 xl:w-72 md:w-1/2 xl:h-60 xl:mb-10 md:order-2"
          alt="laptop"
          />
          <div className="bg-[#15575B] min-h-20 md:h-36 lg:h-32 xl:h-56 rounded-2xl xl:rounded-3xl p-2 xl:p-4 max-w-sm lg:max-w-md xl:max-w-full">
            <div className="flex flex-row gap-1 mb-2 xl:mb-4">
                <div className="bg-[#D64758] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#F4B653] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#7DB037] border-2 border-black rounded-full size-3 xl:size-5"/>
            </div>
            <div className="bg-white xl:h-40 rounded-xl xl:rounded-2xl">
                <h2 className="text-xs xl:text-xl italic font-body leading-5 xl:leading-relaxed p-3 xl:p-8">Muslimah Inspiring Talk adalah kegiatan Ramadhan Di Kampus UGM yang bertujuan untuk memberdayakan perempuan melalui berbagi pengalaman, wawasan, dan cerita sukses dari para pembicara.</h2>
            </div>
          </div>
      </section>

      

      <section className="p-4 xl:p-0 xl:mx-32 xl:gap-20 xl:mt-10 md:flex md:justify-end">
          <div className="ml-4 relative flex items-center min-h-12 md:h-14 md:w-1/2 xl:h-20 rounded-[50px] bg-[#F4AA3D] pr-4 shadow-xl">
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
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center -mt-10 xl:items-center p-4 xl:p-0 xl:mx-32 xl:gap-20 xl:-mt-20">
        <Image
          src="/images/kegiatan/hp.svg"
          width={300}
          height={300}
          className="w-72 xl:w-1/2 xl:mb-10 mx-auto"
          alt="laptop"
          />
          <div className="bg-[#15575B] min-h-20 md:h-32 xl:h-56 rounded-2xl xl:rounded-3xl p-2 xl:p-4 max-w-sm xl:max-w-full">
            <div className="flex flex-row gap-1 mb-2 xl:mb-4">
                <div className="bg-[#D64758] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#F4B653] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#7DB037] border-2 border-black rounded-full size-3 xl:size-5"/>
            </div>
            <div className="bg-white xl:h-40 rounded-xl xl:rounded-2xl">
                <h2 className="text-xs xl:text-xl italic font-body leading-5 xl:leading-relaxed p-3 xl:p-8">Rangkaian Kegiatan di RDK Festival terdiri dari talkshow dan penampilan UKM yang dilaksanakan secara daring maupun luring.</h2>
            </div>
          </div>
      </section>

      <section className="p-4 xl:p-0 xl:mx-32 xl:gap-20 xl:-mt-32 md:flex md:justify-end">
          <div className="ml-4 relative flex items-center min-h-12 md:h-14 md:w-1/2 xl:h-20 rounded-[50px] bg-[#15575B] pr-4 shadow-xl">
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

      <section className="flex flex-col items-center md:flex-row md:justify-evenly p-4 xl:p-0 xl:mx-32 xl:gap-20 xl:mt-10">
        <Image
          src="/images/kegiatan/monitor.svg"
          width={300}
          height={300}
          className="w-72 xl:w-1/2 mb-4 xl:mb-10 md:order-2"
          alt="laptop"
          />
          <div className="bg-[#15575B] min-h-20 md:h-40 lg:h-36 xl:h-60 rounded-2xl xl:rounded-3xl p-2 xl:p-4 max-w-sm lg:max-w-md xl:max-w-full">
            <div className="flex flex-row gap-1 mb-2 xl:mb-4">
                <div className="bg-[#D64758] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#F4B653] border-2 border-black rounded-full size-3 xl:size-5"/>
                <div className="bg-[#7DB037] border-2 border-black rounded-full size-3 xl:size-5"/>
            </div>
            <div className="bg-white xl:min-h-40 rounded-xl xl:rounded-2xl">
                <h2 className="text-xs xl:text-lg italic font-body leading-5 lg:leading-relaxed p-3 lg:p-4">Gebyar Sore merupakan upaya dalam memberikan dampak nyata untuk menjawab isu permasalahan sosial. Rangkaian kegiatannya meliputi RDK berbagi barang layak pakai, buka bersama panti, dan pengembangan skill anak-anak.</h2>
            </div>
          </div>
      </section>
      {/* <Banner/> */}

    </>
  )
}