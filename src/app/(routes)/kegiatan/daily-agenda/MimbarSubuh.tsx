import Image from "next/image";

export default function MimbarSubuh() {
	return (
		<>
			<div className="flex flex-col justify-center items-center mt-12" id="mimbar-subuh">
				{/* Title */}
				<div data-aos="fade-up" data-aos-duration="1000" className="text-white flex items-center justify-center gap-3 md:justify-evenly bg-orangeCS border-2 lg:border-[3px] lg:border-b-0 border-b-0 border-black lg:p-4 w-[70%] md:w-[50%] md:ml-10 ml-8 lg:w-[40%] rounded-t-[3rem] py-1 md:py-2">
					<h1 className="text-center font-titania  lg:text-4xl text-xl text-shadow-lg">
						Mimbar Subuh
					</h1>
				</div>

				{/* Date & Information */}
				<div data-aos="fade-right" data-aos-duration="1000" className="flex md:justify-center mx-auto justify-end w-full relative ">
					{/* Date */}
					<Image
						src="/svg/misu-time.svg"
						alt="date"
						height={176}
						width={176}
						className="lg:h-[176px] w-[115px] h-[115px] lg:w-[176px] transform lg:translate-x-[10%] lg:-translate-y-[12%] absolute lg:static -left-2 -top-2 md:left-16 md:top-[-0.7rem]"
					/>

					{/* Information */}
					<div className="bg-greenCS border-2 md:border-[3px] lg:border-4 border-black rounded-tr-[3rem] lg:rounded-tr-[6rem] lg:p-8 lg:pl-10 lg:py-9 md:py-6 text-white italic lg:w-[60%] md:w-[65%] w-[80%] h-[50%] font-medium text-[10px] lg:text-base p-2 px-8 pl-10 text-justify md:ml-16 lg:ml-0">
						Kajian keilmuan bakda  subuh bertujuan untuk
						memanfaatkan waktu di bulan Ramadan dengan maksimal, serta
						diharapkan mampu memberikan ilmu yang bermanfaat bagi peserta.
					</div>
				</div>

				{/* Dokumentasi Samudra */}
				<Image
					data-aos="fade-up" data-aos-duration="1000"
					src="/images/kegiatan/daily-agenda/misu.png"
					alt="kajian samudra"
					height={423}
					width={859}
					className="mt-4"
				/>
			</div>
		</>
	);
}
