import Image from "next/image";

export default function AboutRdk() {
	return (
		<div className=" md:flex justify-between lg:justify-start max-w-7xl mx-auto">
			<div className="md:w-4/5 lg:w-3/4">
				<h1  data-aos="fade-right"  data-aos-duration="1000" className="lg:text-5xl text-2xl text-greenCS lg:w-[60%] md:w-2/3 bg-orangeCS border-black lg:border-4 border-2 rounded-tr-[50px] rounded-bl-[50px] lg:rounded-tr-[30px] lg:rounded-bl-[30px] lg:py-3 text-center  mx-auto md:ml-auto md:mr-4 lg:mr-24 font-heading py-2 w-4/5 text-shadow-md">
					Tentang RDK
				</h1>

				<p data-aos="fade-up" data-aos-duration="1000" className="lg:text-2xl indent-10 text-justify text-greenCS mt-10 md:mt-4 lg:mt-10 lg:w-[75%] lg:ml-auto lg:mr-20 font-body font-medium">
					Ramadhan di Kampus (RDK) merupakan kegiatan yang diadakan setiap tahun
					di Universitas Gadjah Mada sejak tahun 1976. Kegiatan RDK
					diselenggarakan di lingkungan kampus Universitas Gadjah Mada. Berbagai
					tokoh nasional dari kalangan dai, akademis, budayawan, pejabat publik,
					dan lain sebagainya hadir di kegiatan RDK sebagai pembicara. Tema yang
					diangkat pada kegiatan RDK selalu berubah ubah setiap tahunnya
					menyesuaikan dengan perkembangan zaman.{" "}
				</p>
			</div>

			<div  data-aos="fade-up" data-aos-duration="1000" className="lg:w-1/3 md:flex md:items-center  md:justify-center ">
				<Image
					src="/svg/logo-rdk.svg"
					alt="Kutip Atas"
					height={142}
					width={100}
					className="md:block hidden lg:w-[180px]"
				/>
			</div>
		</div>
	);
}
