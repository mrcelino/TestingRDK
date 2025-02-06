import Image from "next/image";



export default function FaqTitle() {
    return (
        <>
            <div className="bg-greenCS lg:h-32 justify-center items-center flex lg:my-20">
                <Image
                        src="/images/maskot.png"
                        alt="Logo"
                        width={294}
                        height={294}
                        className="absolute right-0 lg:mr-20 transform -scale-x-100 lg:-mt-20"
                    />
                <div>
                    <h1 className=" font-bold text-white p-4 text-center text-4xl font-titania ">Hello Sobat RDK!
                    <br/> Is there anything we can help with?</h1>
                </div >

            </div>
        </>
    );
}