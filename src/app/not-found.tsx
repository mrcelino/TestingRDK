import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-full h-screen flex flex-col  bg-[#21666A] items-center relative overflow-hidden">
      <div className="absolute w-full h-fit top-1/3 max-w-[1920px]">
        <div className="flex w-full justify-between opacity-75">
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
        </div>

        <div className="flex w-full justify-between mt-[18rem]">
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09] mt-[8rem]"></div>
        </div>
        <div className="flex w-full justify-between mt-10">
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09] mt-[8rem]"></div>
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
        </div>

        <div className="flex w-full justify-between mt-[18rem]">
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09]"></div>
          <div className="bg-white h-96 w-96 rounded-full blur-[100px] opacity-[0.09] mt-[8rem]"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/images/jadwal/pattern-bg-mobile3.svg')] lg:bg-[url('/images/jadwal/pattern-for-bg.svg')] bg-repeat opacity-10 lg:opacity-[0.08] mix-blend-difference"></div>
      <div className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/jadwal/maskot_entah.svg"
              width={405}
              height={405}
              alt="sign"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[405px] lg:h-[405px] mx-auto lg:ml-2 z-10"
            />
            <Image
              src="/images/jadwal/shadow.svg"
              alt="shadow"
              width={221}
              height={60}
              className="absolute -bottom-5 md:-bottom-4 lg:-bottom-3 scale-[40%] md:scale-50 lg:scale-100 md:left-[15%] lg:left-[20%]"
            />
          </div>
          <div
            className="flex flex-col justify-center items-center md:items-start mt-5 md:mt-0"
          >
            <h1 className="font-heading text-[#EFC828] font-medium text-3xl md:text-4xl lg:text-8xl">
              404
            </h1>
            <h2 className="font-heading text-[#EFC828] font-medium md:text-2xl lg:text-4xl">
              Halaman Tidak ditemukan...
            </h2>
          </div>
        </div>
        <Link
          href={"/"}
        >
          <div className="rounded-xl bg-[#EFC828] px-2 py-1 font-heading text-[#15575B] border border-black md:text-lg lg:text-2xl">
            Kembali ke Beranda
          </div>
        </Link>
      </div>
    </div>
  );
}
