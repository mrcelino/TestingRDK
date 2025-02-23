import Image from "next/image";

export default function HeroSlider() {
	return (
		<div className="relative ">
			<div>
				<Image
					src="/images/home/hero-slider.jpg"
					alt="Hero Slider"
					height={805}
					width={1507}
					className="h-[350px] md:h-full w-full object-cover object-center"
				/>

				<Image
					src="/images/home/box_shadow.png"
					alt="Box Shadow"
					height={805}
					width={1507}
					className="absolute top-0 right-0 left-0 h-full w-full"
				/>
			</div>

			<div className="">
				{/* Hidden mobile */}
				<Image
					src="/svg/logoordk.svg"
					alt="Hero Slider"
					height={42}
					width={160}
					className="absolute lg:top-52 top-[12rem] md:left-10 md:block hidden lg:w-[20%] 2xl:h-[200px] 2xl:w-[30rem] 2xl:top-40 2xl:left-[0rem] max-w-7xl"
				/>

				{/* Hidden desktop */}
				<Image
					src="/svg/logoordk.svg"
					alt="Hero Slider"
					height={42}
					width={64}
					className="z-20 absolute top-28 left-5 w-[20%] md:hidden max-w-7xl"
				/>

				<div className="md:top-[18rem] lg:top-[20rem] xl:top-[22rem] z-20 absolute md:left-10 font-semibold text-white italic left-5 top-40 max-w-7xl 5xl:top-[25rem]">
					<p className=" xl:text-[6rem] lg:text-[4rem] md:text-5xl text-3xl ">
						Ramadhan Di
					</p>
					<p className="xl:text-[6rem] lg:text-[4rem] md:text-5xl text-3xl">
						Kampus
					</p>
					<p className="xl:text-[3rem] lg:text-[2rem]  text-orangeCS md:text-2xl text-xl lg:mt-4">
						Universitas Gadjah Mada
					</p>
				</div>
			</div>
		</div>
	);
}
