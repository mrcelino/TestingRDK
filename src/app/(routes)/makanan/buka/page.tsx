import Image from "next/image";
import Food from "./menu"


export default function Buka() {
  return (
    <div
      className="bg-gradient-to-b from-[#40C8D000] via-[#21666A] to-[#21666A] min-h-screen flex flex-col overflow-x-auto "
    >
      
      <section className="mt-20 w-full px-2 sm:px-4 xl:px-60  2xl:px-72 ">
        <div className="bg-[#15575B] text-center py-12 px-4 rounded-t-[45px] sm:rounded-t-[70px] md:rounded-t-[120px] border-[6px] sm:border-8 border-black">
            <Image
            src="/images/makanan/specialfood.svg"
            alt="Special Food"
            width={200}
            height={200}
            className="mx-auto" // Atur ukuran sesuai kebutuhan
          />
          <h1 className="md:text-8xl text-5xl sm:text-7xl font-bold font-body text-[#F4AA3D]">MENU</h1>
          <p className="text-xs mt-4 text-white font-body italic max-w-3xl mx-auto sm:text-base leading-loose">
            “Makan dan minumlah, tetapi jangan berlebihan. Sungguh Allah tidak
            menyukai orang yang berlebih-lebihan.” (QS. Al-A'raf, Ayat: 31)
          </p>
        </div>

        <div className="bg-white rounded-b-3xl border-4 sm:border-8 border-black md:rounded-b-[120px] -mt-8">
          <div className="flex items-center justify-evenly gap-10 xl:space-x-10 mt-8">
            <Image
              alt="Fork and knife icon"
              width={50}
              height={50}
              className="size-10 sm:size-16 md:size-20 lg:size-24"
              src="/images/makanan/fork_knife.svg"
            />
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold -mt-6">
              <span className="text-yellow-500 font-body select-none">
                SPECIAL
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-teal-800 font-body -mt-6">
            RAMADAN IFTAR
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
              <h2 className="font-medium text-xs sm:text-lg lg:text-xl  italic font-body">Masjid Kampus</h2>
              <h2 className="font-medium text-xs sm:text-lg lg:text-xl  italic font-body">Universitas Gadjah Mada</h2>
            </div>
          </div>
          <Food/>
        </div>
      </section>

      <section className="flex bg-white rounded-full mt-10 mx-4 xl:mx-96 md:max-w-3xl lg:max-w-full md:mx-20">
          <div className="relative bg-[#F4AA3D] w-1/4 h-full lg:min-h-20 flex items-center justify-center min-h-10 rounded-l-full">
            <div className="absolute -right-[5px] lg:-right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] xl:border-y-[15px] border-y-transparent border-l-[8px] xl:border-l-[15px] border-l-[#F4AA3D]"></div>
            <Image
              alt="Kupon"
              width={50}
              height={50}
              className="size-8 sm:size-10 md:size-12 lg:size-14 p-2"
              src="/images/makanan/bell.svg"
            />
          </div>
          <div className="px-4 py-2 w-3/4 flex items-center justify-center ">
              <span className="text-[#15575B] text-xs md:text-xl lg:text-2xl font-semibold font-body">Tutorial Penukaran Kupon</span>
          </div>
      </section>
      
      <section className="flex justify-center items-center p-1 xl:p-2 bg-white border-2 border-black rounded-3xl mt-10 mx-4 sm:mx-auto lg:w-[550px]">
        <iframe
        width="560"
        height="200"
        src="https://www.youtube.com/embed/Tq8fxbbNCMU?si=Z3cSZ3Q0HoVOOzuL"
        className="min-w-24 rounded-2xl sm:h-64 lg:h-80"
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen 
        ></iframe>
      </section>

      <section className="relative sm:min-h-[250px] flex flex-col sm:flex-row bg-[#15575B] xl:mt-16 border-y-4 border-black mt-80 ">
        <div className="flex items-center justify-center sm:w-[45%]">
          <h2 className='font-title p-2 text-xs sm:text-2xl text-white max-w-48 sm:max-w-[350px] italic leading-relaxed'>"Ramadhan Penuh <span className='font-bold'>Berkah</span>, Mari Raih <span className='font-bold'>Pahala Jariyah</span>  Mulai dari <span className='font-bold'>Satu Rupiah</span>"</h2>
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
    </div>
  );
}

