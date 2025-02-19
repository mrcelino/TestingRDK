"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function Footer() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="right-0 bottom-100 left-0 absolute">
			<div className="flex grid grid-cols-2 items-center text-white w-full bg-greenCS border-black md:border-y-[3px] lg:border-y-4 border-y-2 relative">
				{/* Ramadhan penuh berkah */}
				<div className="italic text-center lg:p-10 lg:text-3xl md:text-xl font-light text-xs ">
					<p>
						“Ramadan Penuh <span className="font-bold">Berkah,</span>
					</p>
					<p>
						Mari Raih <span className="font-bold">Pahala Jariyah</span>
					</p>
					<p>
						Mulai dari <span className="font-bold">Satu Rupiah”</span>
					</p>
				</div>

				{/* Tablet ++ */}
				<Image
					src="/images/footer/speaker.svg"
					alt="Logo"
					width={225}
					height={225}
					className="absolute hidden top md:block lg:left-[40%] xl:left-[45%] 2xl:left-[48%] lg:bottom-[-5rem] left-[37%] bottom-[-2rem] h-[160px] lg:h-full"
				/>

				{/* Mobile */}
				<Image
					src="/images/footer/speaker.svg"
					alt="Logo"
					width={80}
					height={10}
					className="left-[42%] top-[20px] absolute z-20 h-[80px] md:hidden"
				/>

				{/* Titipkan Kebaikan */}
				<div className="text-white bg-orangeCS border-black rounded-s-full md:border-l-[3px]  border-l-2 md:p-10 p-3 pl-10 font-bold md:flex md:justify-center">
					<div>
						<p className="lg:text-3xl md:text-xl text-greenCS text-xs">
							Titipkan Kebaikan,
						</p>
						<p className="lg:text-5xl md:text-2xl text-sm">Tebarkan</p>
						<p className="lg:text-5xl text-sm md:text-2xl">Keberkahan</p>
					</div>

					<div />
				</div>
			</div>

			{/* Section 2 */}
			<div className="md:flex lg:mt-5 justify-center xl:justify-start w-fit lg:w-full mx-auto xl:max-w-7xl ">
				{/* Kiri */}
				<div className="w-11/12 md:w-[44%]  lg:w-[47%] mx-auto italic text-xs mt-10 md:mt-0 md:p-1 lg:p-0 xl:max-w-xl">
					<div className="flex justify-center items-center">
						<Image
							src="/logo_with_name.png"
							alt="Logo"
							width={200}
							height={95}
							className="my-2 hidden md:block h-[70px] w-[150px] md:h-[65px] md:w-[140px] lg:h-[95px] lg:w-[200px]"
						/>
						<Image
							src="/logo_with_name.png"
							alt="Logo"
							width={100}
							height={95}
							className="my-2 md:hidden"
						/>
					</div>

					<div className="lg:w-2/3 mx-auto text-center text-greenCS font-semibold mt-4 ">
						<p>Donasi Langsung melalui COD Sekitar Kampus UGM /</p>

						<p>Sekretariat Jama’ah Shalahuddin (Sayap Selatan Masjid</p>

						<p>Kampus UGM)</p>
					</div>

					{/* Jenis Donasi */}
					<div>
						<p className="bg-greenCS text-white mt-4 py-1 px-20 rounded-full w-fit mx-auto">
							Jenis Donasi
						</p>

						<div className="flex justify-around items-center mt-6 text-greenCS lg:text-xl text-sm font-semibold">
							<div className="flex items-center">
								<p className="mr-3">Uang</p>
								<Image
									src="/images/footer/uang.png"
									alt="Logo"
									width={30}
									height={30}
								/>
							</div>

							<div className="flex items-center">
								<p className="mr-3">Logistik</p>
								<Image
									src="/images/footer/logistik.png"
									alt="Logo"
									width={30}
									height={30}
								/>
							</div>

							<div className="flex items-center">
								<p className="mr-3">Makanan</p>
								<Image
									src="/images/footer/makanan.png"
									alt="Logo"
									width={30}
									height={30}
								/>
							</div>
						</div>
					</div>

					{/* Narahubung Donasi */}
					<div>
						<div className="flex justify-evenly items-center text-greenCS mt-5 text-xs gap-2">
							<p className="bg-greenCS text-white  rounded-xl  text-center p-2 w-[180px] xl:w-full">
								Narahubung Donasi Kegiatan
							</p>
							<p className="bg-greenCS text-white rounded-xl p-2 w-[180px] xl:w-full text-center">
								Narahubung Donasi Iftar dan Sahur
							</p>
						</div>

						<div className="flex justify-evenly items-center text-greenCS font-bold mt-6 text-sm gap-2 text-center ">
							{/* Narahubung Donasi Kegiatan */}
							<p className="rounded-2xl border-2 md:border-[3px] lg:border-4 border-[#15575B] py-2 px-4 md:px-0 lg:px-3 md:text-xs lg:text-sm">
								0895332785320 (Salma Arsepti)
							</p>

							{/* Narahubung Donasi Buka & Sahur */}
							<p className="rounded-2xl border-2 md:border-[3px] lg:border-4 border-[#15575B] py-2 px-4 md:px-0 lg:px-3 md:text-xs  lg:text-sm ">
								081377660189 (Rofi’ Khoirullah)
							</p>
						</div>
					</div>

					{/* Konfirmasi Donasi */}
					<div className="flex justify-between ">
						{/* Konfirmasi Donasi Operasional */}
						<div className="mt-6 w-fit mx-auto rounded-lg border-2 lg:border-4 border-[#15575B] transform -translate-x-2 md:translate-x-0 ">
							<div className="text-xs bg-greenCS text-white p-1 text-center md:py-1 lg:p-1 ">
								<p className="w-[120px] lg:w-full mx-auto">Konfirmasi Donasi Kegiatan</p>
							</div>
							<Link
								href="https://bit.ly/DonasiOperasionalRDK46H"
								target="_blank"
							>
								<p className="text-greenCS font-semibold p-2 lg:text-base xl:hidden text-center">
									bit.ly/DonasiOperasional RDK46H
								</p>

								<p className="text-greenCS font-semibold p-2 lg:text-base hidden xl:block">
									bit.ly/DonasiOperasionalRDK46H
								</p>
							</Link>
						</div>

						{/* Konfirmasi Donasi sahur Buka */}
						<div className="mt-6 w-fit mx-auto rounded-lg border-2 lg:border-4 border-[#15575B] ml-2 md:ml-4">
						<div className="text-xs bg-greenCS text-white p-1 text-center md:py-1 lg:p-1 ">
								<p className="w-[120px] lg:w-full mx-auto">Konfirmasi Donasi Sahur & Buka</p>
							</div>
							<Link href="https://bit.ly/DonasiSahurBukaRDK46H" target="_blank">
								<p className="text-greenCS font-semibold p-2 lg:text-base xl:hidden text-center">
									bit.ly/DonasiSahurBuka RDK46H
								</p>

								<p className="text-greenCS hidden font-semibold p-2 lg:text-base md:hidden xl:block">
									bit.ly/DonasiSahurBukaRDK46H
								</p>
							</Link>
						</div>
					</div>
				</div>

				{/* Right */}
				<div className="grid grid-cols-1 md:grid-cols-2  border-black md:w-1/2 lg:w-[47%] mx-auto md:border-[3px] lg:border-4 my-5 mt-10 lg:mt-5 w-11/12 xl:max-w-xl h-fit">
					{/* Donasi Iftar dan Sahur */}
					<div className="border-2 md:border-0 border-black lg:mb-0 bg-green-400">
						{/* Title */}
						<div className="text-center bg-orangeCS font-bold lg:text-xl py-2 lg:border-b-4 border-b-2 border-black ">
							<p>Donasi</p>
							<p>Iftar dan Sahur</p>
						</div>

						{/* Qris  Masjid Kampus UGM*/}
						<div className="p-6 bg-greenCS mx-auto block w-full lg:border-b-4 border-b-2 md:border-b-[3px] border-black flex flex-col items-center justify-center">
							<Image
								src="/images/footer/text_qris.png"
								alt="Logo"
								width={150}
								height={150}
							/>

							<Image
								src="/images/footer/qrisMK.png"
								alt="Logo"
								width={150}
								height={150}
								className="w-[150px] h-[150px]"
							/>

							<p className="italic text-white text-center text-xs mt-2 md:w-[130px] lg:w-full">
								a.n. Masjid Kampus UGM
							</p>
						</div>

						{/* Bank Masjid Kampus UGM */}
						<div className="bg-orangeCS p-2 md:py-4 lg:py-2 flex flex-col items-center justify-center">
							{/* BSI */}
							<div className="flex lg:flex-row md:flex-col ">
								<Image
									src="/svg/logo-bsi.svg"
									alt="Logo"
									width={100}
									height={100}
									className="lg:mr-2 lg:ml-0 lg:w-[100px] md:w-[80px] md:-translate-x-1 lg:translate-x-0"
								/>

								<div className="text-white md:mt-1 lg:m-0">
									<p className="font-semibold text-sm md:text-xs lg:text-sm">
										7191219494
									</p>
									<p className="italic text-xs lg:w-11/12 xl:w-full">
										a.n Masjid Kampus UGM
									</p>
								</div>
							</div>

							{/* Muamalat */}
							<div className="flex lg:flex-row md:flex-col md:items-start mt-4">
								<Image
									src="/svg/logo-muamalat.svg"
									alt="Logo"
									width={100}
									height={100}
									className="lg:w-[100px] md:w-[80px] md:-translate-x-1 lg:translate-x-0 "
								/>

								<div className="text-white md:mt-1 lg:m-0 ">
									<p className=" font-semibold text-sm">5350007800</p>
									<p className="italic text-xs lg:w-11/12 xl:w-full">
										a.n Masjid Kampus UGM
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Donasi Kegiatan */}
					<div className="border-2 border-black lg:mb-0 md:border-l-[3px] lg:border-l-4 md:border-0 bg-green-400 mt-10 md:mt-0">
						{/* Title */}
						<div className="text-center bg-orangeCS font-bold lg:text-xl py-[1.37rem] md:py-[1.235rem] lg:py-[1.37rem] md:h-fit border-black  lg:border-b-4 border-b-2  md:border-b-[3px] lg:border-0">
							<p>Donasi Kegiatan</p>
						</div>

						{/* Qris  JS UGM*/}
						<div className="p-6  bg-greenCS w-full border-black lg:border-b-4 border-b-2 flex flex-col items-center justify-center md:border-0 md:border-b-[3px]">
							<Image
								src="/images/footer/text_qris.png"
								alt="Logo"
								width={150}
								height={150}
							/>

							<Image
								src="/images/footer/qrisMK.png"
								alt="Logo"
								width={150}
								height={150}
								className="w-[150px] h-[150px]"
							/>

							<p className="italic text-white text-center text-xs mt-2 md:w-[130px] lg:w-full">
								a.n. Jama'ah Shalahuddin
							</p>
						</div>

						{/* Bank JS UGM */}
						<div className="flex justify-center items-center bg-orangeCS  border-black  h-fit w-full md:flex-col md:items-start lg:flex-row md:border-0  p-4 md:p-2 md:py-[3.55rem] lg:py-[2.65rem] xl:py-[2.2rem]">
							{/* BPD */}
							<Image
								src="/svg/logo-bpd.svg"
								alt="Logo"
								width={100}
								height={100}
								className="mr-10 md:mr-0 lg:mr-2 md:ml-4 lg:ml-0"
							/>

							<div className="text-white md:mt-2 lg:mt-0 md:ml-4 lg:ml-0">
								<p className="font-semibold text-sm md:text-xs lg:text-sm">
									801241004070
								</p>
								<p className="italic text-xs lg:text-[xs] lg:w-[100px] xl:w-full">
									a.n Jama'ah Shalahuddin
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Quotes RDK */}
			<div className="relative">
				<div className="bg-greenCS mt-10 flex justify-center items-center z-10 border-y-2 md:border-y-[3px] lg:border-y-4 border-black p-4 px-10 lg:p-10">
					<div className="bg-white border-black lg:border-4 p-4 border-2 rounded-3xl text-center italic text-greenCS font-medium text-xs lg:text-base lg:py-8 md:w-2/3 lg:w-[75%] lg:max-w-3xl">
						<p>
							"Kamu sekali-kali tidak akan memperoleh kebajikan (yang sempurna)
							sebelum kamu menginfakkan sebagian harta yang kamu cintai. Apa pun{" "}
							<span className="font-bold">(QS. Ali Imran : 92)</span>
						</p>
					</div>
				</div>

				{/* Maskot Tablet ++ */}
				<Image
					src="/svg/maskot-wave.svg"
					alt="Logo"
					width={200}
					height={200}
					className="absolute top-[-0.5rem] left-[10%] lg:top-[-2rem] lg:left-[-1%] xl:left-[8%] hidden md:block lg:w-[200px] md:w-[100px] "
				/>

				{/* Maskot Mobile*/}
				<Image
					src="/svg/maskot-wave.svg"
					alt="Logo"
					width={80}
					height={80}
					className="absolute top-[10px] md:hidden"
				/>
			</div>

			{/* Footer Bawah */}
			<div className="bg-greenCS mt-10 text-white text-xs lg:text-base relative">
				<div className="lg:py-7 lg:px-14 p-4 lg:flex ">
					{/* Kiri */}
					<div className="">
						<p className="font-heading lg:text-3xl text-base ">
							Ramadhan Di Kampus
						</p>
						<p className="font-heading lg:text-xl text-base">
							Universitas Gadjah Mada
						</p>

						<p className="mt-7 font-heading">
							Unit Kegiatan Mahasiswa Kerohanian Islam Jama'ah Shalahuddin
						</p>
						<p className="font-semibold">Universitas Gadjah Mada</p>

						<div className="flex mt-7">
							<Image
								src="/images/footer/location.png"
								alt="logo"
								width={24}
								height={24}
								className="object-contain"
							/>

							<div className="ml-2">
								<p>
									Sekretariat Jama’ah Shalahuddin, Sayap Selatan Masjid Kampus
									UGM
								</p>
								<p>Jl. Tevesia No. 1 Bulaksumur, UGM, Yogyakarta 55281</p>
							</div>
						</div>

						<div className="flex mt-4">
							<Image
								src="/images/footer/mail.png"
								alt="logo"
								width={24}
								height={24}
								className="object-contain"
							/>

							<p className="ml-2">rdk@ugm.ac.id</p>
						</div>

						<p className="mt-7">#PembangunanInklusif</p>
						<p>#UpayaKolaboratif</p>
						<p>#Ramadan Berdaya</p>
					</div>

					{/* Kanan */}
					<div className="lg:h-[356px] mx-auto mt-6 lg:mt-0 lg:w-1/2 lg:pl-10">
						{/* Logo-logo */}
						<div className="flex justify-center gap-4 mb-8">
							{/* Logo UGM */}
							<Image
								alt="logo-ugm"
								src="/svg/logo-ugm-footer.svg"
								width={75}
								height={75}
								className="w-[50px] h-[50px] md:w-[60px] h-[60px] lg:w-[75px] lg:h-[75px]"
							/>

							{/* Logo maskam */}
							<Image
								alt="logo-maskam"
								src="/svg/logo-maskam-footer.svg"
								width={75}
								height={75}
								className="w-[50px] h-[50px] md:w-[60px] h-[60px]  lg:w-[75px] lg:h-[75px]"
							/>

							{/* Logo js */}
							<Image
								alt="logo-js"
								src="/svg/logo-js-footer.svg"
								width={75}
								height={75}
								className="w-[50px] h-[50px] md:w-[60px] h-[60px]  lg:w-[75px] lg:h-[75px]"
							/>

							{/* Logo rdk */}
							<Image
								alt="logo-rdk"
								src="/svg/logo-daunrdk-footer.svg"
								width={75}
								height={75}
								className="w-[50px] h-[50px] md:w-[60px] h-[60px]  lg:w-[75px] lg:h-[75px]"
							/>
						</div>

						{/* Eksplorasi, Kegiatan, Petunjuk */}
						<div className="flex justify-around items-start">
							{/* Eksplorasi */}
							<ul className="w-1/3">
								<h3 className="font-heading">Explorasi</h3>

								<ul className="leading-7">
									<li className="hover:text-[#F4AA3D] mt-3">
										<Link className="" href="/">
											Beranda
										</Link>
									</li>
									<li className="hover:text-[#F4AA3D]">
										<Link className="" href="/jadwal">
											Jadwal
										</Link>
									</li>
									<li className="hover:text-[#F4AA3D]">
										<Link className="" href="/artikel">
											Artikel
										</Link>
									</li>
									<li className="hover:text-[#F4AA3D]">
										<Link className="" href="/makanan/buka">
											Menu
										</Link>
									</li>
									<li className="hover:text-[#F4AA3D]">
										<Link className="" href="/faq">
											FAQ
										</Link>
									</li>
								</ul>
							</ul>

							{/* Kegiatan */}
							{/* Konfirmasi ke Azky, ini penamaanya soalnya beda */}
							<ul className="w-1/3">
								<h3 className="font-heading">Kegiatan</h3>
								<ul className="leading-7">
									<li className="hover:text-[#F4AA3D] mt-3">
										<Link href="/kegiatan/daily-agenda">
											Kajian Buka Bersama
										</Link>
									</li>
									<li className="hover:text-[#F4AA3D]">
										<Link href="/kegiatan/daily-agenda">Mimbar Subuh</Link>
									</li>
									<li className="hover:text-[#F4AA3D]">
										<Link href="/kegiatan/daily-agenda">
											Ramadan Public Lecture
										</Link>
									</li>
									<li className="hover:text-[#F4AA3D]">
										<Link href="/kegiatan/bigagenda">Big Events</Link>
									</li>
								</ul>
							</ul>

							{/* Petunjuk */}
							<ul>
								<h3 className="font-heading">Petunjuk</h3>
								<ul className="leading-7">
									<li className="hover:text-[#F4AA3D] mt-3">
										<Link href="/donasi">Donasi</Link>
									</li>
									<li className="hover:text-[#F4AA3D]">
										<Link href="/">Game RDK-Quest</Link>
									</li>
								</ul>
							</ul>
						</div>

						{/* Media Sosial */}
						<div className=" my-5 lg:my-0 lg:mt-6">
							{/* Ramadan di kampus */}
							<div className="flex justify-center">
								<Link href="https://www.instagram.com/rdkugm/" target="_blank">
									<Image
										src="/svg/instagram.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>

								<Link href="https://x.com/rdkugm/" target="_blank">
									<Image
										src="/svg/x.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>

								<Link href="https://www.tiktok.com/@rdkugm_" target="_blank">
									<Image
										src="/svg/tiktok.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>
								<Link href="https://www.youtube.com/@rdkugm" target="_blank">
									<Image
										src="/svg/youtube.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>

								<p>Ramadhan Di Kampus UGM</p>
							</div>

							{/* Masjid Kampus UGM */}
							<div className="flex mt-3 justify-center ml-5  lg:ml-2">
								<Link
									href="https://www.instagram.com/masjidkampusugm/"
									target="_blank"
								>
									<Image
										src="/svg/instagram.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>

								<Link href="https://x.com/masjidkampusugm/" target="_blank">
									<Image
										src="/svg/x.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>

								<Link
									href="https://www.tiktok.com/@masjidkampusugm"
									target="_blank"
								>
									<Image
										src="/svg/tiktok.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>

								<Link
									href="https://www.youtube.com/@masjidkampusugm"
									target="_blank"
								>
									<Image
										src="/svg/youtube.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>
								<Link
									href="https://www.facebook.com/maskamugm/"
									target="_blank"
								>
									<Image
										src="/svg/facebook.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>
								<Link
									href="https://open.spotify.com/show/4HBxMmTZXQ3GQjBgw33yjw"
									target="_blank"
								>
									<Image
										src="/svg/spotify.svg"
										alt="logo"
										width={24}
										height={24}
										className={`object-cover mr-2 transition-transform duration-1000 hover:scale-125 hover:rotate-180 `}
									/>
								</Link>

								<p>Masjid Kampus UGM</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center items-center p-6  bg-gradient-to-r from-[#22979E] from-[-100%] to-[#155458] ">
					<p className="italic text-lg">RDK UGM 1446H. All Rights Reserved</p>
				</div>

				<div className="absolute top-10 left-[-5rem] w-[25rem] h-[25rem] bg-[#76D0D5] rounded-full blur-[10rem] opacity-70"></div>
			</div>
		</div>
	);
}
