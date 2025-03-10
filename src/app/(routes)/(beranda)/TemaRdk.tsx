import Image from "next/image";

export default function TemaRdk() {
	return (
		<div className="lg:justify-between mt-20 md:flex max-w-7xl mx-auto ">
			{/* Maskot */}
			<Image
				data-aos="zoom-in" data-aos-duration="3000"
				src="/svg/maskot-main.svg"
				alt=""
				height={1000}
				width={1000}
				className="hidden md:block w-1/3 "
			/>

			<div className="lg:w-[60%] md:w-3/4 md:ml-auto md:mr-0">
				<h1 data-aos="fade-left" data-aos-duration="1000" className="lg:text-5xl text-2xl text-greenCS lg:w-[70%] bg-orangeCS border-black lg:border-4 border-2 rounded-tr-[50px] rounded-bl-[50px] lg:rounded-tr-[30px] lg:rounded-bl-[30px] lg:py-3 lg:px-10 text-center  mx-auto font-heading py-2 w-4/5 text-shadow-md">
					Tema RDK
				</h1>

				<Image
					src="/images/home/kutip_atas.svg"
					alt=""
					height={36}
					width={36}
					className="mt-10 ml-4"
				/>

				<div data-aos="fade-up" data-aos-duration="1000" className="mx-auto text-center font-title">
					<h3 className="text-3xl font-black text-orangeCS">Ramadan Berdaya:</h3>
					<h3 className="text-2xl font-black text-greenCS">
						Upaya Kolaboratif Mewujudkan
					</h3>
					<h3 className="text-2xl font-black text-greenCS">
						Pembangunan Inklusif dan Berkelanjutan
					</h3>
				</div>

				<Image
					src="/images/home/kutip_bawah.svg"
					alt=""
					height={36}
					width={36}
					className="ml-auto mr-4"
				/>

				<div className="text-justify mt-10 md:mt-4 text-greenCS lg:text-2xl mx-4 indent-10 font-body font-medium">
					<p data-aos="fade-up" data-aos-duration="1000">
						Bulan Ramadan 1446 Hijriah hadir pada masa pascaperalihan
						kepemimpinan nasional 2024. Tema ini diangkat sebagai bentuk
						kontribusi mahasiswa dalam menyongsong pembangunan nasional. dalam momen Ramadan ini, kami ingin membangun kesadaran
						dan aksi nyata untuk mendorong pembangunan yang melibatkan seluruh
						lapisan masyarakat serta menjaga keseimbangan antara pertumbuhan
						ekonomi dan kelestarian lingkungan.
					</p>

					<p data-aos="fade-up" data-aos-duration="1000" className="mt-5">
						Sebagai kegiatan tahunan keislaman terbesar di Universitas Gadjah
						Mada, RDK berkomitmen menjadi wadah kolaborasi lintas sektor,
						termasuk antara akademisi, pemerintah, dan pihak swasta. Melalui
						tema ini, kami ingin menginspirasi peran aktif mahasiswa dalam
						merumuskan solusi kreatif dan inovatif bagi pembangunan yang lebih
						inklusif dan berkelanjutan. Kegiatan RDK akan mencakup berbagai
						aktivitas seperti kajian, aksis sosial, bazar, dan program edukasi
						yang didesain untuk memberikan dampak positif bagi masyarakat
						sekitar.
					</p>
				</div>
			</div>


			{/* Maskot */}
			<Image
				src="/svg/maskot-main.svg"
				alt=""
				height={1000}
				width={1000}
				className="md:hidden w-[200px] mx-auto"
			/>
		</div>
	);
}
