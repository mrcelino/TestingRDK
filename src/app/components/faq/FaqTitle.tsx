import Image from "next/image";



export default function FaqTitle() {
    return (
        <div data-aos="fade-down" data-aos-duration="500">
            <div className="bg-greenCS lg:h-32 justify-center items-center flex lg:my-20 lg:py-6 md:py-1 md:my-12 md:-mt-4 -mt-6 my-8">
                <Image
                        src="svg\maskot-wave.svg"
                        alt="Logo"
                        width={230}
                        height={230}
                        className="absolute lg:mr-20 -scale-x-100 lg:-mt-12 md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px] md:-mt-8 right-0 sm:w-[130px] sm:h-[130px] -mt-4 w-[100px] h-[100px] -mt-4"
                    />
                <div>
                    <h1 className="font-bold text-white lg:p-4 md:p-4 p-2 text-center lg:text-4xl font-titania md:text-3xl sm:text-lg ">Hello Sobat RDK!
                    <br/> Is there anything we can help with?</h1>
                </div >

            </div>
        </div>
    );
}