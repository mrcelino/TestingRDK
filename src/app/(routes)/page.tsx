import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (

    <main className="-translate-y-[10%]">
      
            {/* Hero Slider */}
            <div className="relative">
              <Image
                src="/images/home/hero_slider.png"
                alt="Hero Slider"
                height={805}
                width={1507}
                className="h-full w-full"
              />

              <Image
                src="/images/home/box_shadow.png"
                alt="Box Shadow"
                height={805}
                width={1507}
                className="absolute top-0 right-0 left-0 h-full w-full"
              />

              <Image
                src="/logo_with_name1.svg"
                alt="Hero Slider"
                height={42}
                width={160}
                className="z-20 absolute top-60 left-10 "/>


              <p className="z-20 absolute top-80 left-10 text-white text-6xl italic font-bold">Ramadhan Di</p>
              <p className="z-20 absolute top-80 left-10 text-white text-6xl italic font-bold mt-14">Kampus</p>
              <p className="z-20 absolute top-80 left-11 text-white text-2xl mt-32 italic font-bold text-orangeCS">Universitas Gadjah Mada</p>
      
            </div>
      
            {/* Welcome to RDK */}
            <div className="bg-greenCS w-full h-full mx-auto">
            
              <p>Welcome</p>

            </div>
      
            {/* TTG RDK, Tema, RDK Quest */}
            <div></div>



    </main>




 

  )
}