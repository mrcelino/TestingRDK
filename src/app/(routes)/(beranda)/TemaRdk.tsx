import Image from "next/image";

export default function TemaRdk() {
	return (
		<div className="lg:justify-between mt-20 md:flex">
			{/* Maskot */}

			<Image
				src="/svg/maskot-main.svg"
				alt=""
				height={1000}
				width={1000}
				className="hidden md:block w-1/3"
			/>

			<div className="lg:w-[60%] md:w-3/4 md:ml-auto md:mr-0">
				<h1 className="lg:text-5xl text-2xl text-greenCS lg:w-[70%] bg-orangeCS border-black lg:border-4 border-2 rounded-tr-[50px] rounded-bl-[50px] font-bold lg:py-3 lg:px-10 text-center  mx-auto font-titania py-2 w-4/5">
					Tema RDK
				</h1>

				<Image
					src="/images/home/kutip_atas.svg"
					alt=""
					height={36}
					width={36}
					className="mt-10 ml-4"
				/>

				<div className="mx-auto text-center">
					<h3 className="text-3xl font-bold text-orangeCS">Ramadan Berdaya:</h3>
					<h3 className="text-2xl font-bold text-greenCS">
						Upaya Kolaboratif Mewujudkan
					</h3>
					<h3 className="text-2xl font-bold text-greenCS">
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

				<div className="text-justify italic mt-10 md:mt-4 text-greenCS lg:text-2xl mx-4 indent-10">
					<p>
						Bulan Ramadan 1446 Hijriah hadir pada masa pascaperalihan
						kepemimpinan nasional 2024. Tema ini diangkat sebagai bentuk
						tanggung jawab mahasiswa dalam menyongsong kabinet baru Indonesia
						2024-2029. dalam momen Ramadan ini, kami ingin membangun kesadaran
						dan aksi nyata untuk mendorong pembangunan yang melibatkan seluruh
						lapisan masyarakat serta menjaga keseimbangan antara pertumbuhan
						ekonomi dan kelestarian lingkungan.
					</p>

					<p className="mt-5">
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
		</div>
	);
}
