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

export default function BigAgenda(){
  return(
    <>
      {/* <Header/> */}
      <section className="lg:mx-24 lg:h-[400px] flex lg:space-x-24">
        <Image
          src="/maskot.webp"
          width={300}
          height={300}
          className="hidden md:block size-[450px] scale-x-[-1]"
          alt="sign"
        />
        <div className="flex flex-col lg:justify-around w-full p-4 lg:p-0">
          <div className="flex flex-row justify-center lg:justify-start gap-4 items-center mt-10 mb-10">
              <Image
              src="/images/kegiatan/logo.png"
              width={100}
              height={100}
              className="w-12 h-16 lg:w-24 lg:h-32"
              alt="sign"
              />
              <Image
              src="/images/kegiatan/title_rdk.png"
              width={500}
              height={500}
              className="w-20 lg:w-40"
              alt="sign"
              />
          </div>
          <div className="ml-4 relative flex items-center min-h-12 lg:w-3/4 lg:h-20 rounded-[50px] bg-[#F4AA3D] pr-4 shadow-xl">
            <Image
              src="/images/kegiatan/circle.png"
              width={500}
              height={500}
              className="w-16 lg:w-28 absolute lg:-top-2 -left-1"
              alt="sign"
              />
              <h2 className="font-heading text-white text-lg lg:text-4xl pl-20 mx-auto">Grand Opening</h2>
              <Image
              src="/images/kegiatan/mic.svg"
              width={500}
              height={500}
              className="size-6 lg:size-14 justify-end"
              alt="sign"
              />
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center p-4 lg:p-0 lg:mx-32 lg:gap-20 lg:mt-10">
        <Image
          src="/images/kegiatan/laptop.svg"
          width={300}
          height={300}
          className="w-72 lg:w-1/2 h-60 lg:mb-10 mx-auto lg:order-2"
          alt="laptop"
          />
          <div className="bg-[#15575B] min-h-20 lg:h-56 rounded-2xl lg:rounded-3xl p-2 lg:p-4">
            <div className="flex flex-row gap-1 mb-2 lg:mb-4">
                <div className="bg-[#D64758] border-2 border-black rounded-full size-3 lg:size-5"/>
                <div className="bg-[#F4B653] border-2 border-black rounded-full size-3 lg:size-5"/>
                <div className="bg-[#7DB037] border-2 border-black rounded-full size-3 lg:size-5"/>
            </div>
            <div className="bg-white lg:h-40 rounded-xl lg:rounded-2xl">
                <h2 className="text-xs lg:text-xl italic font-body leading-5 lg:leading-relaxed p-3 lg:p-8">Grand Opening merupakan pembukaan rangkaian kegiatan Ramadhan Di Kampus UGM, yang bertujuan untuk menyambut bulan Ramadan dan pengenalan tema besar RDK 1446 H.</h2>
            </div>
          </div>
      </section>


      <section className="p-4 lg:p-0 lg:mx-32 lg:gap-20 lg:mt-10">
          <div className="ml-4 relative flex items-center min-h-12 lg:w-1/2 lg:h-20 rounded-[50px] bg-[#15575B] pr-4 shadow-xl">
            <Image
              src="/images/kegiatan/circle2.png"
              width={500}
              height={500}
              className="w-16 lg:w-28 absolute lg:-top-2 -left-1"
              alt="sign"
              />
              <h2 className="font-heading text-white text-sm lg:text-4xl pl-14 lg:pl-20 mx-auto">Muslimah Inspiring Talk</h2>
              <Image
              src="/images/kegiatan/mic2.svg"
              width={500}
              height={500}
              className="size-6 lg:size-14 justify-end"
              alt="sign"
              />
          </div>
      </section>

      <section></section>

      <section className="p-4 lg:p-0 lg:mx-32 lg:gap-20 lg:mt-10 lg:flex lg:justify-end">
          <div className="ml-4 relative flex items-center min-h-12 lg:w-1/2 lg:h-20 rounded-[50px] bg-[#F4AA3D] pr-4 shadow-xl">
            <Image
              src="/images/kegiatan/circle.png"
              width={500}
              height={500}
              className="w-16 lg:w-28 absolute lg:-top-2 -left-1"
              alt="sign"
              />
              <h2 className="font-heading text-white text-base lg:text-4xl pl-14 lg:pl-20 mx-auto">RDK Festival</h2>
              <Image
              src="/images/kegiatan/mic.svg"
              width={500}
              height={500}
              className="size-6 lg:size-14 justify-end"
              alt="sign"
              />
          </div>
      </section>

      <section className="p-4 lg:p-0 lg:mx-32 lg:gap-20 lg:mt-10 mb-20">
          <div className="ml-4 relative flex items-center min-h-12 lg:w-1/2 lg:h-20 rounded-[50px] bg-[#15575B] pr-4 shadow-xl">
            <Image
              src="/images/kegiatan/circle2.png"
              width={500}
              height={500}
              className="w-16 lg:w-28 absolute lg:-top-2 -left-1"
              alt="sign"
              />
              <h2 className="font-heading text-white text-base lg:text-4xl pl-14 lg:pl-20 mx-auto">Gebyar Sore</h2>
              <Image
              src="/images/kegiatan/mic2.svg"
              width={500}
              height={500}
              className="size-6 lg:size-14 justify-end"
              alt="sign"
              />
          </div>
      </section>

    </>
  )
}