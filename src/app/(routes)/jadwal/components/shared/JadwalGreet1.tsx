import Image from "next/image";

export default function JadwalGreet1({className} : any) {
  return (
    <div className={`relative flex w-[779px] h-[204px] bg-[#fbfbfb] rounded-[200px] border-[3px] border-black justify-center items-center shadow-md ${className}`}>
      <Image
              src="/images/maskot.png"
              width={405}
              height={405}
              alt="sign"
              className="absolute -left-40 -top-1/2"
              />
      <p className="text-[#15575B] font-bold text-2xl w-[422px] font-sans italic">
        Hello, today is special day fo you! Join us in a big agenda of Ramadan!
      </p>
    </div>
  );
}
