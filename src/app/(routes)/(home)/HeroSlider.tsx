import Image from "next/image";

export default function HeroSlider() {
	return (
		<div className="relative ">
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

			{/* Hidden mobile */}
			<Image
				src="/svg/logoordk.svg"
				alt="Hero Slider"
				height={42}
				width={160}
				className="absolute lg:top-52 top-16 md:left-10 md:block hidden lg:w-[20%]"
			/>

			{/* Hidden desktop */}
			<Image
				src="/svg/logoordk.svg"
				alt="Hero Slider"
				height={42}
				width={64}
				className="z-20 absolute top-12 left-5 w-[20%] md:hidden "
			/>

			<div className="md:top-40 lg:top-[23rem] z-20 absolute md:left-10 font-semibold text-white italic left-5 top-24">
				<p className="lg:text-[6rem] md:text-5xl text-3xl ">Ramadhan Di</p>
				<p className="lg:text-[6rem] md:text-5xl text-3xl">Kampus</p>
				<p className="lg:text-[3rem]  text-orangeCS md:text-2xl text-xl">
					Universitas Gadjah Mada
				</p>
			</div>
		</div>
	);
}
