import Image from "next/image";
import Food from "./menu"


export default function Buka() {
  return (
    <div
      className="bg-gradient-to-b from-[#40C8D000] via-[#21666A] to-[#21666A] min-h-screen flex flex-col overflow-x-auto "
    >
      
      <section className="mt-20 w-full px-4 xl:px-72 ">
        <div className="bg-[#15575B] text-center py-12 px-4 rounded-t-[70px] md:rounded-t-[120px] border-8 border-black">
            <Image
            src="/specialfood.svg"
            alt="Special Food"
            width={200}
            height={200}
            className="mx-auto" // Atur ukuran sesuai kebutuhan
          />
          <h1 className="md:text-8xl text-7xl font-bold font-body text-[#F4AA3D]">MENU</h1>
          <p className="mt-4 text-white font-body italic max-w-3xl mx-auto text-base leading-loose">
            “Makan dan minumlah, tetapi jangan berlebihan. Sungguh Allah tidak
            menyukai orang yang berlebih-lebihan.” (QS. Al-A'raf, Ayat: 31)
          </p>
        </div>

        <div className="bg-white min-h-screen rounded-b-3xl border-8 border-black md:rounded-b-[120px] -mt-8">
          <div className="flex items-center justify-center space-x-10 md:space-x-40 mt-8">
            <Image
              alt="Fork and knife icon"
              width={50}
              height={50}
              className="size-16 lg:size-24"
              src="/Food.svg"
            />
            <h1 className="text-4xl md:text-6xl font-bold -mt-6">
              <span className="text-yellow-500 font-body select-none">
                SPECIAL
              </span>
            </h1>
            <Image
              alt="Fork and knife icon"

              width={50}
              height={50}
              className="size-16 lg:size-24"             
              src="/Food.svg"

            />
          </div>
          <h1 className="text-4xl md:text-6xl text-center font-bold text-teal-800 font-body -mt-6">
            RAMADAN IFTAR
          </h1> 
          <div className="flex items-center justify-center mt-4">
            <Image
                src="/location.png"
                alt="Location"
                width={60}
                height={60}
            />
            <div className="p-4">
              <h2 className="font-medium text-2xl italic font-body">Masjid Kampus</h2>
              <h2 className="font-medium text-2xl italic font-body">Universitas Gadjah Mada</h2>
            </div>
          </div>
          <Food/>
        </div>
      </section>

      <section className="relative flex min-h-[250px] bg-[#15575B] mt-16 border-y-4 border-black ">
        <div className="flex items-center justify-center w-[45%]">
          <h2 className='font-title text-2xl text-white max-w-[350px] italic leading-relaxed'>"Ramadhan Penuh <span className='font-bold'>Berkah</span>, Mari Raih <span className='font-bold'>Pahala Jariyah</span>  Mulai dari <span className='font-bold'>Satu Rupiah</span>"</h2>
        </div>
        <div className="relative w-[55%]">
          <div className="flex flex-col justify-center p-12 absolute inset-0 bg-[#F4AA3D] border-[7px] border-y-0 border-black rounded-l-[100px]">
            <h2 className='font-body text-3xl text-[#15575B] font-semibold mb-2'>Titipkan Kebaikan,</h2>
            <h2 className='font-heading text-lg xl:text-5xl text-white font-bold'>Tebarkan <br/>Keberkahan</h2>
          </div>
        </div>
        <Image
            src="/speaker.png"
            alt="Maskot"
            width={300}
            height={300}
            className="size-44 -mr-10 lg:left-[550px] lg:mr-0 top-28 lg:size-72 lg:top-28 absolute z-0 overflow-hidden"
          />
      </section>
    </div>
  );
}

