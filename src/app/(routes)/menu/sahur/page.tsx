import Image from "next/image";
import Food from "./menu";

function Menu(){
  return(
    <>
      <section className="pt-20 lg:pt-40 w-full px-2 sm:px-4 mx-auto md:max-w-5xl">
        <div className="flex flex-col justify-center items-center bg-[#15575B]  text-center py-12 px-4 rounded-t-[45px] sm:rounded-t-[70px] md:rounded-t-[80px] xl:rounded-t-[120px] border-[6px] sm:border-8 border-black min-h-80">
          <h1 className="md:text-8xl text-5xl sm:text-7xl font-bold font-body text-[#F4AA3D] drop-shadow-[0_5px_0_rgba(0,0,0,0.4)]">
            MENU
          </h1>
          <p className="text-xs mt-4 text-white font-body italic max-w-3xl mx-auto sm:text-base leading-loose">
            &ldquo;Makan dan minumlah, tetapi jangan berlebihan. Sungguh Allah tidak
            menyukai orang yang berlebih-lebihan.&rdquo; (QS. Al-A&apos;raf, Ayat: 31)
          </p>
        </div>

        <div className="bg-white rounded-b-3xl border-4 sm:border-8 border-black md:rounded-b-[80px] xl:rounded-b-[120px] -mt-8">
          <div className="flex items-center justify-evenly gap-10 xl:space-x-10 mt-8">
            <Image
              alt="Fork and knife icon"
              width={50}
              height={50}
              className="size-10 sm:size-16 md:size-20 lg:size-24"
              src="/images/makanan/fork_knife.svg"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold -mt-6 mb-2">
              <span className="text-[#F4AA3D] font-body select-none drop-shadow-[0_2px_0_rgba(0,0,0,0.4)] xl:drop-shadow-[0_4px_0_rgba(0,0,0,0.4)]">
                SAHUR
              </span>
            </h1>
            <Image
              alt="Fork and knife icon"
              width={50}
              height={50}
              className="size-10 sm:size-16 md:size-20 lg:size-24"
              src="/images/makanan/fork_knife.svg"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-[#15575B] font-body -mt-6 drop-shadow-[0_2px_0_rgba(0,0,0,0.4)] xl:drop-shadow-[0_4px_0_rgba(0,0,0,0.4)]">
            RAMADAN
          </h1>
          <div className="flex items-center justify-center mt-4">
            <Image
              src="/images/makanan/location.png"
              alt="Location"
              width={60}
              height={60}
              className="size-10 sm:size-16 lg:size-20"
            />
            <div className="p-4">
              <h2 className="font-medium text-xs sm:text-lg lg:text-xl  italic font-body">
                Masjid Kampus
              </h2>
              <h2 className="font-medium text-xs sm:text-lg lg:text-xl  italic font-body">
                Universitas Gadjah Mada
              </h2>
            </div>
          </div>
          <Food />
        </div>
      </section>
    </>
  )
}

function Kupon(){
  return(
    <div className="pb-20">
      {/* Title */}
      <section className="mx-4">
        <section className="flex bg-white rounded-full mt-10 mx-auto sm:mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-3xl w-full max-w-lg">
          <div className="relative bg-[#F4AA3D] w-[20%] h-full lg:min-h-20 flex items-center justify-center min-h-12 md:min-h-16 rounded-l-full">
            <div className="absolute -right-[5px] lg:-right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] xl:border-y-[15px] border-y-transparent border-l-[8px] xl:border-l-[15px] border-l-[#F4AA3D]"></div>
            <Image
              alt="Kupon"
              width={50}
              height={50}
              className="size-10 sm:size-12 md:size-14 lg:size-16 p-2"
              src="/images/makanan/bell.svg"
            />
          </div>
          <div className="px-4 py-2 w-[80%] flex items-center justify-center ">
            <span className="text-[#15575B] text-sm md:text-xl lg:text-2xl font-semibold font-body">
              Tutorial Penukaran Kupon
            </span>
          </div>
        </section>
      </section>
      {/* Video */}
      <section className="flex justify-center items-center p-1 xl:p-2 bg-white max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl border-2 border-black rounded-3xl mt-10 mx-auto lg:w-[550px] xl:w-[700px]">
        <iframe
          src="https://www.youtube.com/embed/afAQwnkxOcU?si=RhCMLl3j3b1kZOov" 
          className="w-96 max-w-2xl rounded-2xl sm:w-[650px] sm:h-52 md:h-64 lg:h-80 xl:w-[750px]"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  )
}
export default function Buka() {
  return (
    <div className="relative bg-gradient-to-b from-[#ffffff] from-1% to-[#21666A] to-40% xl:max-w-8xl ">
      {/* Pattern pertama untuk area putih (opacity rendah, brightness 50) */}
      <div className="absolute inset-0 h-full bg-[url('/images/pattern-bg-mobile3.svg')] lg:bg-[url('/images/pattern-for-bg.svg')] bg-repeat opacity-20 mix-blend-difference brightness-50"></div>
      {/* Pattern kedua untuk area hijau (opacity lebih tinggi, brightness lebih terang) */}
      <div className="absolute inset-0 h-full bg-[url('/images/pattern-bg-mobile3.svg')] lg:bg-[url('/images/pattern-for-bg.svg')] bg-repeat opacity-15 mix-blend-screen brightness-100"></div>
      <div className="relative z-10">
        <Menu />
        <Kupon />
      </div>
    </div>
  );
}
