import Image from "next/image";

export default function RPL() {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-12">
                {/* Title */}
                <div className="text-white flex items-center justify-center gap-3 md:justify-evenly bg-orangeCS border-2 lg:border-[3px] lg:border-b-0 border-b-0 border-black lg:p-4 w-[63%] md:w-[50%] md:ml-10 ml-14 lg:w-[40%] rounded-t-[3rem] py-1 md:py-2 animate-fadeIn">
                    <h1 className="font-bold text-center font-titania font-bold lg:text-4xl text-xl text-shadow-lg animate-fadeInScale">
                        RPL
                    </h1>

                    <div className="lg:w-[2px] w-[1px] h-6 lg:h-10 bg-white"></div>

                    <div className="font-trirong font-semibold text-shadow-md text-xs lg:text-base animate-fadeInScale">
                        <p>Ramadan </p>
                        <p>Public Lecture</p>
                    </div>
                </div>

                {/* Date & Information */}
                <div className="flex md:justify-center mx-auto justify-end w-full relative ">
                    {/* Date */}
                    <Image
                        src="/svg/rpltime.svg"
                        alt="date"
                        height={176}
                        width={176}
                        className="lg:h-[176px] w-[115px] h-[115px] lg:w-[176px] transform lg:translate-x-[10%] lg:-translate-y-[12%] absolute lg:static -left-2 -top-2 md:left-16 md:top-[-0.7rem] animate-slideInLeft"
                    />

                    {/* Information */}
                    <div className="bg-greenCS border-[3px] border-black rounded-tr-[3rem] lg:rounded-tr-[6rem] lg:p-8 lg:pl-10 lg:py-12 md:py-6 text-white italic lg:w-[60%] md:w-[65%] w-[80%] h-[50%] font-medium text-xs lg:text-base p-2 px-8 pl-10 text-justify md:ml-16 lg:ml-0">
                        Samudra atau Safari Ilmu di Bulan Ramadan merupakan kajian dan
                        diskusi panel yang diisi oleh pembicara yang dilaksanakan menjelang
                        waktu berbuka puasa.
                    </div>
                </div>

                {/* Dokumentasi Samudra */}
                <Image
                    src="/svg/kajian-samudra.svg"
                    alt="kajian samudra"
                    height={423}
                    width={859}
                    className="mt-4 animate-zoomIn"
                />
            </div>
        </>
    );
}
