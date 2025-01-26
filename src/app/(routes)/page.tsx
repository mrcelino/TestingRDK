import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (

    <main>
      
            {/* Hero Slider */}
            <div className="relative font-titania">
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
            <div className="bg-greenCS w-full h-full mx-auto text-center text-white content-center p-6">

              <p className="text-6xl font-bold">Welcome To</p>
              <p className="text-6xl font-bold">Ramadhan DI Kampus</p>


              <p className="text-5xl font-bold mt-28">Universitas Gadjah Mada</p>
          
              <p className="text-3xl border-black border-4 rounded-full font-bold bg-white text-greenCS w-1/2 py-1 px-10 mx-auto mt-10">1446 H - 2025 M</p>


              <div className="bg-white border-4 border-black rounded-3xl w-[60%] mx-auto mt-16 h-[25rem] mb-16">


              </div>

            </div>
      
            {/* TTG RDK, Tema, RDK Quest */}
            <div className="w-full h-full p-16">

              {/* Tentang RDK */}
              <h1 className="text-6xl text-greenCS w-[60%] bg-orangeCS border-black border-4 rounded-tr-[50px] rounded-bl-[50px] font-bold py-3 px-10 text-center mx-auto font-titania">Tentang RDK</h1>
              <p className="w-1/2 text-2xl text-justify text-greenCS italic mt-10">Ramadhan di Kampus (RDK) merupakan kegiatan yang diadakan setiap tahun di Universitas Gadjah Mada sejak tahun 1976. Kegiatan RDK diselenggarakan di lingkungan kampus Universitas Gadjah Mada. Berbagai tokoh nasional dari kalangan dai, akademis, budayawan, pejabat publik, dan lain sebagainya hadir di kegiatan RDK sebagai pembicara. Tema yang diangkat pada kegiatan RDK selalu berubah ubah setiap tahunnya menyesuaikan dengan perkembangan zaman. </p>

              {/* Tema Besar RDK */}

              <div className="flex justify-between ">
                {/* Maskot */}
                <div>

                </div>

                <div className="w-[60%]">
                  <h1 className="text-6xl text-greenCS w-[100%] bg-orangeCS border-black border-4 rounded-tr-3xl rounded-bl-3xl font-bold py-3 px-10 text-center font-titania mt-20 mx-auto" >Tema Besar RDK</h1>

                  <Image
                    src="/images/home/kutip_atas.svg"
                    alt=""
                    height={36}
                    width={36}
                    className="mt-10 ml-4"
                  
                  />


                  <div className="mx-auto text-center">

                    <h3 className="text-3xl font-bold text-orangeCS">Ramadan Berdaya:</h3>
                    <h3 className="text-2xl font-bold text-greenCS">Upaya Kolaboratif Mewujudkan</h3>
                    <h3 className="text-2xl font-bold text-greenCS">Pembangunan Inklusif dan Berkelanjutan</h3>
                  </div>


                  
                  <Image
                    src="/images/home/kutip_bawah.svg"
                    alt=""
                    height={36}
                    width={36}
                    className="ml-auto mr-4"
                  
                  />

                  <div className="text-justify italic mt-10 text-greenCS text-2xl mx-4">
                    <p>Bulan Ramadan 1446 Hijriah hadir pada masa pascaperalihan kepemimpinan nasional 2024. Tema ini diangkat sebagai bentuk tanggung jawab mahasiswa dalam menyongsong kabinet baru Indonesia 2024-2029. dalam momen Ramadan ini, kami ingin membangun kesadaran dan aksi nyata untuk mendorong pembangunan yang melibatkan seluruh lapisan masyarakat serta menjaga keseimbangan antara pertumbuhan ekonomi dan kelestarian lingkungan.</p>

                    <p className="mt-5">Sebagai kegiatan tahunan keislaman terbesar di Universitas Gadjah Mada, RDK berkomitmen menjadi wadah kolaborasi lintas sektor, termasuk antara akademisi, pemerintah, dan pihak swasta. Melalui tema ini, kami ingin menginspirasi peran aktif mahasiswa dalam merumuskan solusi kreatif dan inovatif bagi pembangunan yang lebih inklusif dan berkelanjutan. Kegiatan RDK akan mencakup berbagai aktivitas seperti kajian, aksis sosial, bazar, dan program edukasi yang didesain untuk memberikan dampak positif bagi masyarakat sekitar.</p>
                  </div>
                </div>

              
              </div>

              {/* Ada Maskot */}



              {/* RDK Quest */}
              <h1 className="text-6xl text-greenCS w-[60%] bg-orangeCS border-black border-4 rounded-tr-[50px] rounded-bl-[50px] font-bold py-3 px-10 text-center mx-auto font-titania mt-20">RDK Quest</h1>
              <p className="text-greenCS italic text-center text-2xl w-[75%] mx-auto mt-10">GAMATOPIA adalah inovasi game-based learning yang disajikan PIONIR Gadjah Mada 2024 untuk mengenalkan fasilitas penunjang Mahasiswa Baru dalam menempuh dunia perkuliahan. GAMATOPIA hadir untuk mengulas beasiswa, MBKM, penelitian, dan UKM yang ada di Universitas Gadjah Mada. Mari berkembang bersama dengan menjelajahi GAMATOPIA!</p>


              {/* Game */}
              <div className="mt-20 w-full h-screen p-6">
                <div className="bg-orangeCS border-4 border-black w-[75%] h-[75%] mx-auto"></div>
        

              </div>


              <button type="button" className="bg-orangeCS text-greenCS font-bold py-1 px-6 rounded-full border-4 border-black text-5xl mx-auto w-fit font-titania grid grid-cols-1 ">PLAY</button>


            </div>



    </main>



  )
}