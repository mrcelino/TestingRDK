'use client'
import Image from 'next/image';
import Link from 'next/link';
interface KonfirmasiDonasiProps {
  nama: string;
  linkKonfirmasi: string;
}

import { useEffect, useState } from 'react';

function UpdateDonasiIftar() {
  const [donasiIftar, setDonasiIftar] = useState(0);

  useEffect(() => {
    // Fungsi untuk fetch data dari Strapi
    const fetchDonasiData = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${base}donasis`, {
          cache: "no-store",
        });
        const data = await response.json();
        console.log(data);

        // Mengambil nominal donasi iftar sahur
        const donasi = data?.data?.[0]?.donasi_iftar_sahur || 0;

        // Mengupdate state
        setDonasiIftar(donasi);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDonasiData();
  }, []);

  // Format angka menjadi format rupiah
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number).replace(/\s/g, '');
  };
  

  return (
    <div data-aos="fade-up" data-aos-duration="500">
      <section className="relative flex min-h-12 md:min-h-16 xl:min-h-24 mb-10 bg-white border-black border-2 lg:border-4 rounded-full mt-10 md:mt-20 xl:mx-auto mx-4 max-w-xl md:max-w-2xl xl:max-w-4xl sm:mx-auto">
        <div className="flex items-center bg-[#15575B] border-r-2 xl:border-r-4 border-black rounded-full justify-center p-2 w-1/2">
          <h2 className='font-medium font-body text-xs md:text-lg xl:text-2xl text-white italic '>Update Donasi</h2>
        </div>
        <div className="relative w-1/2">
          <div className="flex justify-center items-center xl:p-8 absolute inset-0 bg-white border-y-0 rounded-r-full border-black">
            <h2 className='font-semibold font-body text-xs md:text-lg xl:text-2xl text-[#15575B] italic'>
              {formatRupiah(donasiIftar)}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

function UpdateDonasiKegiatan(){
  const [donasiKegiatan, setDonasiKegiatan] = useState(0);

  useEffect(() => {
    // Fungsi untuk fetch data dari Strapi
    const fetchDonasiData = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${base}/api/donasis`, {
          cache: "no-store",
        });
        const data = await response.json();
        console.log(data);

        // Mengambil nominal donasi iftar sahur
        const donasi = data?.data?.[0]?.donasi_kegiatan || 0;

        // Mengupdate state
        setDonasiKegiatan(donasi);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDonasiData();
  }, []);

  // Format angka menjadi format rupiah
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number).replace(/\s/g, '');
  };
  
  return(
    <div data-aos="fade-up" data-aos-duration="500">
      <section className="relative flex min-h-12 md:min-h-16 xl:min-h-24 mb-10  bg-white border-black border-2 lg:border-4 rounded-full mt-10 md:mt-20 xl:mx-auto mx-4 max-w-xl md:max-w-2xl xl:max-w-4xl sm:mx-auto">
        <div className="flex items-center bg-[#F4AA3D] border-r-2 xl:border-r-4 border-black rounded-full justify-center p-2 w-1/2">
          <h2 className='font-medium font-body text-xs md:text-lg xl:text-2xl text-white italic '>Update Donasi</h2>
        </div>
        <div className="relative w-1/2">
          <div className="flex justify-center items-center xl:p-8 absolute inset-0 bg-white border-y-0 rounded-r-full border-black">
            <h2 className='font-semibold font-body text-xs md:text-lg xl:text-2xl text-[#15575B] italic'>
              {formatRupiah(donasiKegiatan)}
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

function Header(){
  return(
    <div data-aos="fade-down" data-aos-duration="1000">
      <section className="relative bg-[#15575B]  h-24 lg:h-32 border-y-4 border-black flex justify-center">
        <div className="bg-[#F4AA3D] border-4 rounded-[50px] lg:rounded-[70px] border-black h-28 p-2 lg:h-40 -top-3 lg:-top-4 w-[85%] lg:w-[65%] absolute flex flex-col items-center justify-center max-w-xl md:max-w-2xl lg:max-w-7xl">
          <h2 className="font-heading text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium z-20 xl:mb-4">Hadirkan senyuman,</h2>
          <h2 className="font-heading text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium z-20 md:max-w-2xl text-center lg:max-w-full">wujudkan cinta di bulan suci Ramadan</h2>
        </div>
        <Image
            src="/images/donasi/rdkmaskot.svg"
            alt="Maskot"
            width={300}
            height={300}
            className="size-24 sm:size-32 -top-2 md:-top-14 md:size-44 -mr-10 lg:mr-0 lg:size-72 lg:-top-24 absolute right-6 z-0 overflow-hidden scale-x-[-1]"
          />
      </section>
    </div>
  )
}

function Banner(){
  return(
    <>
      
    </>
  )
}

function Information(){
  return(
    <>
      <section data-aos="fade-up" data-aos-duration="1000" className='flex bg-white font-body mx-3 sm:mx-auto md:mx-auto text-xs p-4 items-center xl:min-h-32 border-black border-2 xl:border-4 mt-36 xl:mx-auto rounded-2xl xl:rounded-[70px] xl:p-10 md:text-lg lg:text-xl lg:leading-loose lg:tracking-widest text-[#15575B] italic max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
        <h2>"Kamu sekali-kali tidak akan memperoleh kebajikan (yang sempurna) sebelum kamu menginfakkan sebagian harta yang kamu cintai. Apa pun yang kamu infakkan, sesungguhnya Allah Maha Mengetahui tentangnya." <span className='font-bold text-[#15575B]'>(QS. Ali Imran : 92)</span></h2>
      </section>

      <section data-aos="fade-up" data-aos-duration="500" className='flex flex-col lg:flex-row justify-center items-center xl:flex-row lg:mx-24 xl:mx-auto gap-x-4 p-4 mt-4 md:mx-4'>
          <div className='flex items-center justify-center font-body text-xs md:text-lg xl:w-[82%] p-2 md:p-4 xl:p-10 text-white lg:text-xl xl:tracking-wider italic leading-normal lg:leading-loose font-medium sm:min-h-16 xl:min-h-36 bg-[#F4AA3D] rounded-2xl xl:rounded-[35px] border-2 xl:border-4 border-black max-w-lg md:max-w-2xl xl:max-w-4xl'>
            <h2>Donasi Langsung melalui COD Sekitar Kampus UGM / Sekretariat Jama’ah Shalahuddin (Sayap Selatan Masjid Kampus UGM)</h2>
          </div>
          <div className='hidden lg:block relative w-1/2 max-w-28 xl:max-w-40 lg:min-h-28 xl:min-h-40 bg-[#15575B] rounded-2xl xl:rounded-[35px] border-2 xl:border-4 border-black'>
            <Image
              src="/images/donasi/koin.png"
              alt="Maskot"
              width={300}
              height={300}
              className='size-10 lg:size-20 xl:size-36 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              />
          </div>
      </section>
    </>
  )
}

function JenisDonasi(){
  return(
    <>
      <section data-aos="fade-up" data-aos-duration="500" className='flex relative mx-2 lg:mx-10 lg:justify-center lg:max-w-8xl 2xl:max-w-7xl 2xl:mx-auto mt-4'>
        <div className='xl:items-center xl:justify-center hidden xl:flex w-full relative'>
          <Image
                src="/images/donasi/rdkmaskot.svg"
                alt="Maskot"
                width={500}
                height={500}
                className="size-40 xl:size-96 overflow-hidden"
          />
        </div>
        <section className='flex flex-col w-full xl:max-w-8xl lg:min-h-[320px] lg:mt-20'>
            <section className='flex mb-14 mx-4 md:mx-20 md:mb-20 xl:mx-28 md:flex md:justify-center sm:mx-20 sm:max-w-xl md:max-w-4xl'>
                <div className='flex items-center justify-center min-h-14 bg-[#F4AA3D] rounded-tl-[30px] w-1/4 border-2 xl:border-4 border-r-0 border-black'>
                  <Image
                    src="/images/donasi/paperclip.png"
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
        </section>
      </section>
    </>
  )
}

function KonfirmasiDonasi({ nama, linkKonfirmasi }: KonfirmasiDonasiProps) {
  // Ambil hanya nomor telepon (angka pertama dalam string)
  const waNumber = nama.split(" ")[0];

  // Ambil nama setelah nomor telepon
  const contactName = nama.replace(waNumber, "").trim();

  return (
    <>
      <section className='flex flex-col lg:flex-row mt-10 gap-10 items-center justify-center mx-4 md:mx-auto lg:p-4'>
        <div data-aos="fade-right" data-aos-duration="1000" className='relative min-h-14 w-full bg-[#15575B] border-[3px] border-black max-w-sm md:max-w-lg'>
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
            <h2 className='font-body text-xs md:text-base italic px-4 py-2 font-semibold text-white '>Konfirmasi Donasi</h2>
            <hr className='border-black border-[1.5px] w-[80%] ml-auto'/>
            <Link href={linkKonfirmasi} className='font-body text-xs md:text-base italic px-4 py-2 font-semibold text-white'>
              {linkKonfirmasi}
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className='relative min-h-14 w-full bg-[#CCB087] border-[3px] border-black max-w-sm md:max-w-lg'>
          <div className='absolute flex items-center justify-center bg-white min-h-10 rounded-b-full w-20 -top-4 right-4 border-2 border-black'>
            <Image
              src="/images/donasi/ic_cp2.svg"
              alt="CP Logo"
              width={32}
              height={32}
              className="size-4 md:size-6"
            />
          </div>
          <div className='flex flex-col text-left'>
            <h2 className='font-body text-xs md:text-base italic px-4 py-2 font-semibold '>Contact Person</h2>
            <hr className='border-black border-[1.5px] w-[80%]'/>
            <Link href={`https://wa.me/${waNumber}`} className="font-body text-xs md:text-base italic px-4 py-2 font-semibold">
              {waNumber} {contactName}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


function DonasiIftarSahur(){
  return(
    <>
      <section data-aos="fade-up" data-aos-duration="500" className='flex items-center justify-center mx-4 xl:mx-auto md:mt-20'>
          <div className='flex items-center justify-center bg-[#F4AA3D] p-4 md:p-8 xl:p-12 w-full mt-20 rounded-full border-2 lg:border-4 border-black max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
            <p className='text-xl md:text-2xl xl:text-5xl italic font-body '>Donasi Iftar dan Sahur</p>
          </div>
      </section>

      <section data-aos="fade-up" data-aos-duration="500" className='flex items-center justify-center md:mt-10 mx-6 md:mx-auto mt-10'>
        <div className='flex flex-col bg-white items-center justify-center md:min-h-32 border-2 lg:border-4 rounded-2xl md:rounded-[40px]  border-black max-w-md md:max-w-2xl xl:max-w-full'>
          <h2 className='text-center text-xs md:text-xl font-body text-[#15575B] italic p-2 md:p-4 max-w-4xl leading-normal'>
            Seluruh donasi digunakan untuk 42.000 porsi buka bersama dan 10.000 porsi sahur selama acara 
            Ramadhan Di Kampus UGM 1446 H
          </h2>
        </div>
      </section>

      <UpdateDonasiIftar/>



      <section data-aos="fade-up" data-aos-duration="500" className='flex flex-col h-96 xl:mx-auto xl:h-[600px] border-black border-2 xl:border-4 max-w-xs md:max-w-sm xl:max-w-xl mx-auto'>
          <div className='flex flex-col items-center justify-center h-3/4 bg-[#15575B]'>
              <Image
                src="/images/donasi/qrislogo.png"
                alt="QRIS Logo"
                width={250}
                height={250}
                className='w-40 xl:w-auto'
              />
              <Image
                src="/images/donasi/qrismaskam.png"
                alt="QRIS Maskam"
                width={250}
                height={250}
                className='w-40 xl:w-72'
              />
              <h2 className='text-sm md:text-lg xl:text-xl font-body italic text-white mt-4'>a.n Masjid Kampus UGM</h2>
          </div>
          <div className='flex bg-[#F4AA3D] h-1/4 items-center justify-evenly'>
              <div className='flex flex-col'>
              <Image
                src="/images/donasi/ic_bsi.png"
                alt="BSI Logo"
                width={150}
                height={150}
                className='w-28 xl:w-40'
              />
              <Image
                src="/images/donasi/ic_muamalat.png"
                alt="Bank Muamalat Logo"
                width={150}
                height={150}
                className='w-28 xl:w-40'
              />
              </div>
              <div className='flex flex-col'>
                  <div className='font-body text-xs xl:text-lg text-white mt-2 md:mt-4'>
                    <h2 className='-mb-1'>7191219494</h2>
                    <h2 className='text-xs xl:text-sm italic'>a.n. Masjid Kampus UGM</h2>
                  </div>
                  <div className='font-body text-xs xl:text-lg text-white mt-2 md:mt-0'>
                    <h2 className='-mb-1'>5350007800</h2>
                    <h2 className='text-xs xl:text-sm italic'>a.n. Masjid Kampus UGM</h2>
                  </div>
              </div>
          </div>
      </section>

      <KonfirmasiDonasi nama="6281377660189 (Rofi’ Khoirullah)" linkKonfirmasi='bit.ly/DonasiSahurBukaRDK46H'/>
    </>
  )
}

function DonasiKegiatan(){
  return(
    <div className='pb-20'>
      <section data-aos="fade-up" data-aos-duration="500" className='flex items-center justify-center mx-4 xl:mx-auto mt-4 md:mt-20'>
          <div className='flex items-center justify-center bg-[#15575B] p-4 md:p-8 xl:p-12 w-full mt-20 rounded-full border-2 xl:border-4 border-black max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
            <p className='text-lg md:text-2xl xl:text-5xl italic font-body text-white '>Donasi Kegiatan dan Kajian</p>
          </div>
      </section>

      <section data-aos="fade-up" data-aos-duration="500" className='flex items-center justify-center md:mt-10 mx-6 md:mx-auto xl:mx-auto mt-10'>
        <div className='flex bg-white flex-col items-center justify-center md:min-h-32 border-2 lg:border-4 rounded-2xl md:rounded-[40px]  border-black max-w-md md:max-w-2xl xl:max-w-4xl'>
          <h2 className='text-center text-xs md:text-xl font-body text-[#15575B] italic p-2 md:p-4 max-w-4xl leading-normal'>
             Seluruh donasi digunakan untuk  rangkaian acara Ramadhan Di Kampus UGM 1446 H

          </h2>
        </div>
      </section>
      
      <UpdateDonasiKegiatan/>

      <section data-aos="fade-up" data-aos-duration="500" className='flex flex-col h-96 mx-auto xl:mx-auto xl:h-[600px] border-black border-2 xl:border-4 max-w-xs md:max-w-sm xl:max-w-xl md:mx-auto'>
          <div className='flex flex-col items-center justify-center h-3/4 bg-[#15575B]'>
            <Image
                src="/images/donasi/qrislogo.png"
                alt="QRIS Logo"
                width={250}
                height={250}
                className='w-40 xl:w-auto'
              />
              <Image
                src="/images/donasi/qrisjss.png"
                alt="QRIS Maskam"
                width={250}
                height={250}
                className='w-40 xl:w-72'
              />
              <h2 className='text-sm md:text-lg xl:text-xl font-body italic text-white mt-4'>a.n. Jamaah Shalahuddin UGM</h2>
          </div>
          <div className='flex bg-[#F4AA3D] h-1/4 items-center justify-evenly'>
              <Image
                src="/images/donasi/ic_bpd.svg"
                alt="BSI Logo"
                width={150}
                height={150}
                className='w-28 xl:w-40'
              />
              <div className='font-body text-center text-xs md:text-sm xl:text-base text-white'>
                  <h2 className='-mb-1 mt-2'>801241004070</h2>
                  <h2 className='italic'>a.n. Jamaah Shalahuddin UGM</h2>
              </div>
          </div>
      </section>
      <KonfirmasiDonasi nama="62895332785320 (Salma Arsepti)" linkKonfirmasi='bit.ly/DonasiOperasionalRDK46H'/>
    </div>
  )
}

export default function Donasi(){
  return(
    <div className="relative bg-white">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg-mobile3.svg')] lg:bg-[url('/images/pattern-for-bg.svg')] bg-repeat opacity-15 mix-blend-multiply brightness-50 z-1"></div>
      <div className='relative z-10 pt-20 lg:pt-52'>
        <Header/>
        {/* <Banner/> */}
        <Information/>
        <JenisDonasi/>
        <DonasiIftarSahur/>
        <DonasiKegiatan/>
      </div>
    </div>
  )
}

  