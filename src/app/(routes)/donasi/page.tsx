import Image from 'next/image';

function Header(){
  return(
    <>
      <section className="relative bg-[#15575B]  h-24 lg:h-32 mt-40 border-y-4 border-black flex justify-center">
        <div className="bg-[#F4AA3D] border-4 rounded-[50px] lg:rounded-[70px] border-black h-28 p-2 lg:h-40 -top-3 lg:-top-4 w-[85%] lg:w-[65%] absolute flex flex-col items-center justify-center max-w-xl md:max-w-2xl lg:max-w-full">
          <h2 className="font-heading text-sm md:text-2xl lg:text-4xl text-white font-medium z-20 lg:mb-4">Hadirkan senyuman,</h2>
          <h2 className="font-heading text-sm md:text-2xl lg:text-4xl text-white font-medium z-20 md:max-w-2xl text-center lg:max-w-full">wujudkan cinta di bulan suci Ramadan</h2>
        </div>
        {/* <Image
            src="/maskot.webp"
            alt="Maskot"
            width={300}
            height={300}
            className="size-28 -top-4 md:size-44 -mr-10 lg:mr-0 lg:size-72 lg:-top-16 absolute right-6 z-0 overflow-hidden"
          /> */}
      </section>
    </>
  )
}

function Banner(){
  return(
    <>
      <section className="relative flex min-h-[220px] bg-[#15575B] mt-24 border-y-4 border-black ">
        <div className="flex items-center justify-center w-[45%]">
          <h2 className='font-title text-xl text-white max-w-[300px] italic leading-relaxed'>"Ramadhan Penuh <span className='font-bold'>Berkah</span>, Mari Raih <span className='font-bold'>Pahala Jariyah</span>  Mulai dari <span className='font-bold'>Satu Rupiah</span>"</h2>
        </div>
        <div className="relative w-[55%]">
          <div className="flex flex-col justify-center p-12 absolute inset-0 bg-[#F4AA3D] border-[7px] border-y-0 border-black rounded-l-[100px]">
            <h2 className='font-body text-3xl text-[#15575B] font-semibold mb-2'>Titipkan Kebaikan,</h2>
            <h2 className='font-heading text-4xl text-white font-medium'>Tebarkan <br/>Keberkahan</h2>
          </div>
        </div>
        <Image
            src="/speaker.png"
            alt="Maskot"
            width={300}
            height={300}
            className="size-44 -mr-10 lg:left-[500px] lg:mr-0 top-28 lg:size-56 lg:top-20 absolute z-0 overflow-hidden"
          />
      </section>
    </>
  )
}

function Information(){
  return(
    <>
      <section className='flex font-body md:mx-auto text-xs p-4 items-center lg:min-h-32 border-black border-2 xl:border-4 mt-36 mx-3 xl:mx-72 rounded-2xl xl:rounded-[70px] lg:p-10 md:text-lg lg:text-xl lg:leading-loose lg:tracking-widest italic md:max-w-2xl lg:max-w-full'>
        <h2>"Kamu sekali-kali tidak akan memperoleh kebajikan (yang sempurna) sebelum kamu menginfakkan sebagian harta yang kamu cintai. Apa pun yang kamu infakkan, sesungguhnya Allah Maha Mengetahui tentangnya." (QS. Ali Imran : 92)</h2>
      </section>

      <section className='flex flex-col justify-center items-center xl:flex-row xl:mx-52 gap-x-4 p-4 mt-4 md:mx-4'>
          <div className='font-body text-xs md:text-lg xl:w-[82%] p-2 md:p-4 xl:p-10 text-white xl:text-xl xl:tracking-wider italic leading-normal lg:leading-loose font-medium xl:min-h-36 bg-[#F4AA3D] rounded-2xl xl:rounded-[35px] border-2 xl:border-4 border-black md:max-w-2xl lg:max-w-full'>
            <h2>Donasi Langsung melalui COD Sekitar Kampus UGM / Sekretariat Jama’ah Shalahuddin (Sayap Selatan Masjid Kampus UGM)</h2>
          </div>
          <div className='hidden lg:block relative w-1/2 min-h-20 xl:w-[18%] xl:min-h-36 bg-[#15575B] rounded-2xl xl:rounded-[35px] border-2 xl:border-4 border-black'>
            <Image
              src="/images/donasi/koin.png"
              alt="Maskot"
              width={300}
              height={300}
              className='size-10 xl:size-36 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              />
          </div>
      </section>
    </>
  )
}

function JenisDonasi(){
  return(
    <>
      <section className='flex relative mx-2 lg:mx-10 mt-4'>
        <div className='hidden lg:block w-full relative'>
          <Image
                src="/maskot.webp"
                alt="Maskot"
                width={500}
                height={500}
                className="size-44 scale-x-[-1] -mr-10 lg:mr-0 lg:size-[400px] lg:-bottom-10 absolute left-0 z-0 overflow-hidden"
          />
        </div>
        <section className='flex flex-col w-full lg:min-h-[500px] lg:mt-20'>
            <section className='flex mb-14 mx-4 md:mx-20 md:mb-20 xl:mx-28 md:flex md:justify-center'>
                <div className='flex items-center justify-center min-h-14 bg-[#F4AA3D] rounded-tl-[30px] w-1/4 border-2 xl:border-4 border-r-0 border-black'>
                  <Image
                    src="/paperclip.png"
                    alt="Maskot"
                    width={60}
                    height={60}
                    className='size-10 md:size-12 lg:size-20 p-2 lg:p-4'
                  />
                </div>
                <div className="flex items-center justify-center min-h-14 bg-[#15575B] rounded-br-[30px] w-3/4 border-2 xl:border-4 xl:border-l-0 border-black border-l-0">
                  <h1 className='font-heading text-lg md:text-2xl xl:text-5xl text-white p-2'>Jenis Donasi</h1>
                </div>
            </section>
            <section className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center  gap-10 md:gap-x-16 xl:gap-28 mx-4'>
              <div className="relative w-full md:w-2/6 order-2 md:order-1  max-w-[270px]">
                <div className="absolute -top-4 -left-4 w-full h-16 md:h-24 bg-[#CCB087]  border-2 lg:border-4 border-black"></div>
                <div className="relative bg-[#9F4230] text-white px-4 flex items-center justify-between border-2 lg:border-4 border-black w-60 h-16 md:h-24">
                  <span className="font-heading text-xl md:text-2xl xl:text-3xl">Uang</span>
                  <Image
                    src="/images/donasi/moneybag.png"
                    alt="Money Bag"
                    width={300}
                    height={300}
                    className="size-8 md:size-12"
                  />
                </div>
              </div>

              <div className="relative w-full md:w-2/6 order-2 md:order-3 max-w-[240px]">
                <div className="absolute -top-4 -right-4 w-full h-16 md:h-24 bg-[#CCB087] border-2 lg:border-4 border-black"></div>
                <div className="relative bg-[#F4AA3D] text-white px-4  flex items-center justify-between border-2 lg:border-4 border-black w-60 h-16 md:h-24">
                <span className="font-heading text-xl md:text-2xl xl:text-3xl">Logistik</span>
                  <Image
                    src="/images/donasi/logistik.png"
                    alt="Logistik"
                    width={300}
                    height={300}
                    className="size-8 md:size-12"
                  />
                </div>
              </div>

              <div className="relative w-full md:w-2/6 max-w-[240px]">
                <div className="absolute -top-4 -right-4 w-full h-16 md:h-24 bg-[#76D0D5] border-2 lg:border-4 border-black"></div>
                <div className="relative bg-[#42A0A6] text-white px-4  flex items-center justify-between border-2 lg:border-4 border-black w-60 h-16 md:h-24">
                  <span className="font-heading text-xl md:text-2xl xl:text-3xl">Makanan</span>
                      <Image
                        src="/images/donasi/makanan.png"
                        alt="Logistik"
                        width={300}
                        height={300}
                        className="size-8 md:size-10"
                      />
                </div>
              </div>
            </section>
            <section className='flex flex-col md:flex-row mt-20 gap-16 items-center justify-center mx-10 md:mx-0'>
              <div className='relative min-h-14 w-full bg-[#15575B] border-[3px] border-black md:ml-10'>
                <div className='absolute flex items-center justify-center bg-white min-h-10 rounded-b-full w-20 -top-4 left-4 border-2 border-black'>
                  <Image
                    src="/images/donasi/ic_cp.svg"
                    alt="CP Logo"
                    width={32}
                    height={32}
                    className="size-5 md:size-7"
                  />
                </div>
                <div className='flex flex-col text-right'>
                  <h2 className='font-body text-xs md:text-base italic px-4 py-2 font-semibold text-white '>Contact Person</h2>
                  <hr className='border-black border-[1.5px] w-[80%] ml-auto'/>
                  <h2 className='font-body text-xs md:text-base italic px-4 py-2 font-semibold text-white'> 081377660189 (Rofi’ Khoirullah)</h2>
                </div>
              </div>
              <div className='relative min-h-14 w-full bg-[#CCB087] border-[3px] border-black md:mr-10'>
                <div className='absolute flex items-center justify-center bg-white min-h-10 rounded-b-full w-20 -top-4 right-4 border-2 border-black'>
                  <Image
                    src="/images/donasi/ic_cp2.svg"
                    alt="CP Logo"
                    width={32}
                    height={32}
                    className="size-4 md:size-6"
                  />
                </div>
                <h2 className='font-body text-xs md:text-base italic px-4 py-2 font-semibold '>Contact Person</h2>
                <hr className='border-black border-[1.5px] w-[80%]'/>
                <h2 className='font-body text-xs md:text-base italic px-4 py-2 font-semibold'> 081377660189 (Rofi’ Khoirullah)</h2>
              </div>
            </section>
        </section>
      </section>
    </>
  )
}

function DonasiIftarSahur(){
  return(
    <>
      <section className='flex items-center justify-center mx-4 xl:mx-96 md:mt-20'>
          <div className='flex items-center justify-center bg-[#F4AA3D] p-4 md:p-8 xl:p-12 w-full mt-20 rounded-full border-2 lg:border-4 border-black md:max-w-2xl lg:max-w-full'>
            <p className='text-xl md:text-2xl xl:text-5xl italic font-body '>Donasi Iftar dan Sahur</p>
          </div>
      </section>

      <section className='flex flex-col items-center justify-center md:min-h-32 border-2 lg:border-4 rounded-2xl md:rounded-[40px]  border-black  mx-6 md:mx-auto xl:mx-[400px] mt-10 md:max-w-2xl xl:max-w-full'>
        <h2 className='text-center text-xs md:text-xl font-body text-[#15575B] italic p-2 md:p-4 max-w-4xl leading-normal'>
          Seluruh donasi digunakan untuk 42.000 porsi buka bersama dan 10.000 porsi sahur selama acara 
          Ramadhan Di Kampus UGM 1446 H
        </h2>
      </section>


      <section className="relative flex min-h-12 md:min-h-16 xl:min-h-24 mb-10  bg-white border-black border-2 lg:border-4 rounded-full mt-10 md:mt-20 xl:mx-96 mx-4 md:max-w-2xl xl:max-w-full md:mx-auto">
        <div className="flex items-center bg-[#15575B] border-r-2 xl:border-r-4 border-black rounded-full justify-center p-2 w-1/2">
          <h2 className='font-medium font-body text-xs md:text-lg xl:text-2xl text-white italic '>Update Donasi</h2>
        </div>
        <div className="relative w-1/2">
          <div className="flex justify-center items-center xl:p-8 absolute inset-0 bg-white border-y-0 rounded-r-full border-black">
            <h2 className='font-semibold font-body text-xs md:text-lg xl:text-2xl text-[#15575B] italic'>
              Rp 1.000.000.000.000,-
            </h2>
          </div>
        </div>
      </section>

      <section className='flex flex-col h-96 mx-6 xl:mx-[470px] xl:h-[600px] border-black border-2 xl:border-4 md:max-w-sm xl:max-w-full md:mx-auto'>
          <div className='flex flex-col items-center justify-center h-3/4 bg-[#15575B]'>
              <Image
                src="/images/donasi/qrislogo.png"
                alt="QRIS Logo"
                width={250}
                height={250}
                className='w-40 xl:w-auto'
              />
              <Image
                src="/qrismaskam.png"
                alt="QRIS Maskam"
                width={250}
                height={250}
                className='w-40 xl:w-auto'
              />
              <h2 className='text-sm md:text-lg xl:text-xl font-body italic text-white mt-4'>a.n Masjid Kampus UGM</h2>
          </div>
          <div className='flex bg-[#F4AA3D] h-1/4 items-center justify-evenly'>
              <div className='flex flex-col'>
              <Image
                src="/ic_bsi.png"
                alt="BSI Logo"
                width={150}
                height={150}
                className='w-28 xl:w-40'
              />
              <Image
                src="/ic_muamalat.png"
                alt="Bank Muamalat Logo"
                width={150}
                height={150}
                className='w-28 xl:w-40'
              />
              </div>
              <div className='flex flex-col'>
                  <div className='font-body text-xs xl:text-lg text-white mt-2 md:mt-4'>
                    <h2 className='-mb-1'>7191219494</h2>
                    <h2 className='text-xs xl:text-sm'>a.n Masjid Kampus UGM</h2>
                  </div>
                  <div className='font-body text-xs xl:text-lg text-white mt-2 md:mt-0'>
                    <h2 className='-mb-1'>5350007800</h2>
                    <h2 className='text-xs xl:text-sm'>a.n Masjid Kampus UGM</h2>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

function DonasiKegiatan(){
  return(
    <>
      <section className='flex items-center justify-center mx-4 xl:mx-96 mt-4 md:mt-20'>
          <div className='flex items-center justify-center bg-[#15575B] p-4 md:p-8 xl:p-12 w-full mt-20 rounded-full border-2 xl:border-4 border-black md:max-w-2xl lg:max-w-full'>
            <p className='text-lg md:text-2xl xl:text-5xl italic font-body text-white '>Donasi Kegiatan dan Kajian</p>
          </div>
      </section>

      <section className='flex flex-col items-center justify-center md:min-h-32 border-2 xl:border-4 rounded-2xl md:rounded-[40px]  border-black  mx-6 xl:mx-[400px] mt-10 md:max-w-xl xl:max-w-full md:mx-auto'>
        <h2 className='text-center text-xs md:text-xl font-body text-[#15575B] italic p-2 md:p-10 max-w-xl leading-normal'>
        Seluruh donasi digunakan untuk  rangkaian acara Ramadhan Di Kampus UGM 1446 H
        </h2>
      </section>

      <section className="relative flex min-h-12 md:min-h-16 xl:min-h-24 mb-10  bg-white border-black border-2 lg:border-4 rounded-full mt-10 md:mt-20 xl:mx-96 mx-4 md:max-w-2xl xl:max-w-full md:mx-auto">
        <div className="flex items-center bg-[#F4AA3D] border-r-2 xl:border-r-4 border-black rounded-full justify-center p-2 w-1/2">
          <h2 className='font-medium font-body text-xs md:text-lg xl:text-2xl text-white italic '>Update Donasi</h2>
        </div>
        <div className="relative w-1/2">
          <div className="flex justify-center items-center xl:p-8 absolute inset-0 bg-white border-y-0 rounded-r-full border-black">
            <h2 className='font-semibold font-body text-xs md:text-lg xl:text-2xl text-[#15575B] italic'>
              Rp 1.000.000.000.000,-
            </h2>
          </div>
        </div>
      </section>

      <section className='flex flex-col h-96 mx-6 xl:mx-[470px] xl:h-[600px] border-black border-2 xl:border-4 md:max-w-sm xl:max-w-full md:mx-auto'>
          <div className='flex flex-col items-center justify-center h-3/4 bg-[#15575B]'>
            <Image
                src="/images/donasi/qrislogo.png"
                alt="QRIS Logo"
                width={250}
                height={250}
                className='w-40 xl:w-auto'
              />
              <Image
                src="/qrismaskam.png"
                alt="QRIS Maskam"
                width={250}
                height={250}
                className='w-40 xl:w-auto'
              />
              <h2 className='text-sm md:text-lg xl:text-xl font-body italic text-white mt-4'>a.n Masjid Kampus UGM</h2>
          </div>
          <div className='flex bg-[#F4AA3D] h-1/4 items-center justify-evenly'>
              <Image
                src="/images/donasi/ic_bsi.png"
                alt="BSI Logo"
                width={150}
                height={150}
                className='w-28 xl:w-40'
              />
              <div className='font-body text-xs md:text-sm xl:text-base text-white'>
                  <h2 className='-mb-1'>5350007800</h2>
                  <h2>a.n Masjid Kampus UGM</h2>
              </div>
          </div>
      </section>
    </>
  )
}

export default function Donasi(){
  return(
    <div className="bg-slate-50 bg-[url('/pattern.png')] bg-repeat bg-contain">
      <Header/>
      {/* <Banner/> */}
      <Information/>
      <JenisDonasi/>
      <DonasiIftarSahur/>
      <DonasiKegiatan/>
    </div>
  )
}

  