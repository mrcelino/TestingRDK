import Image from "next/image";

export default function Footer() {
	return (
		<>
			<div className="right-0 bottom-100 left-0 absolute">
				<div className="flex grid grid-cols-2 items-center text-white w-full bg-greenCS border-black md:border-4 border-2 relative">
					{/* Ramadhan penuh berkah */}
					<div className="italic text-center lg:p-10 lg:text-3xl md:text-2xl font-light text-xs">
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

					<Image
						src="/images/footer/speaker.svg"
						alt="Logo"
						width={225}
						height={225}
						className="absolute hidden top md:block lg:left-[40%] lg:bottom-[-5rem] left-[37%] bottom-[-2rem] h-[160px] lg:h-full"
					/>

					<Image
						src="/images/footer/speaker.svg"
						alt="Logo"
						width={80}
						height={10}
						className="left-[170px] top-[20px] absolute z-20 h-[80px] md:hidden"
					/>

					{/* Titipkan Kebaikan */}
					<div className="text-white bg-orangeCS border-black rounded-s-full md:border-l-4 border-l-2 md:p-10 p-3 pl-10 font-bold md:flex md:justify-center">
						<div>
							<p className="lg:text-3xl md:text-2xl text-greenCS text-xs">
								Titipkan Kebaikan,
							</p>
							<p className="lg:text-5xl md:text-3xl text-sm">Tebarkan</p>
							<p className="lg:text-5xl text-sm md:text-3xl">Keberkahan</p>
						</div>

						<div />
					</div>
				</div>

				{/* Section 2 */}
				<div className="md:flex lg:mt-5 items-center justify-center w-fit lg:w-full ">
					{/* Kiri */}
					<div className="md:w-1/2 w-11/12 mx-auto italic text-xs mt-10 lg:mt-0 md:p-2 lg:p-0">
						<div className="flex justify-center items-center">
							<Image
								src="/logo_with_name.png"
								alt="Logo"
								width={200}
								height={95}
								className="my-2 hidden md:block  "
							/>
							<Image
								src="/logo_with_name.png"
								alt="Logo"
								width={100}
								height={95}
								className="my-2 md:hidden"
							/>
						</div>

						<div className="lg:w-2/3 mx-auto text-center text-greenCS font-semibold mt-4">
							<p >Donasi Langsung melalui COD Sekitar Kampus UGM /</p>

							<p>Sekretariat Jama’ah Shalahuddin (Sayap Selatan Masjid</p>

							<p>Kampus UGM)</p>
						</div>

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

						<div className="flex justify-evenly items-center text-greenCS mt-5 text-xs gap-2">
							<p className="bg-greenCS text-white lg:py-2 lg:px-10 rounded-xl w-[45%] px-2 text-center py-2">
								Narahubung Donasi Kegiatan
							</p>
							<p className="bg-greenCS text-white py-2 lg:px-4 rounded-xl w-[45%] px-2 text-center">
								Narahubung Donasi Iftar dan Sahur
							</p>
						</div>

						<div className="flex justify-evenly items-center text-greenCS font-bold mt-6 text-sm gap-2 text-center ">
							<p className="rounded-2xl roundedCS py-2 px-4 md:px-0 lg:px-4 md:text-sm lg:text-base">
								0895332785320 (Salma Arsepti)
							</p>
							<p className="rounded-2xl roundedCS py-2 px-4 md:px-0 lg:px-4 md:text-sm lg:text-base ">
								081377660189 (Rofi’ Khoirullah)
							</p>
						</div>

						<div className="flex justify-center items-center roundedCS mt-6 w-fit content-center mx-auto rounded-xl">
							<p className="text-xs bg-greenCS text-white py-1 px-10  py-2 px-4 mr-4">
								Konfirmasi Donasi
							</p>
							<p className="text-greenCS font-semibold px-4">
								bit.ly/DonasiOperasionalRDK46H
							</p>
						</div>
					</div>

					{/* Kanan */}
					<div className="md:w-1/2 mx-auto border-black lg:border-4 border-2 my-5 h-fit w-fit  mt-10 lg:mt-5 bg-black ">
						{/* Title */}
						<div className="flex justify-evenly items-center bg-orangeCS font-bold lg:text-xl">
							<div className="text-center py-2">
								<p>Donasi</p>
								<p>Iftar dan Sahur</p>
							</div>

							<p>Donasi Kegiatan</p>
						</div>

						{/* Qris Masjid Kampus */}
						<div className="flex justify-evenly items-center bg-greenCS p-4 lg:border-y-4 border-y-2 border-black">
							<div>
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
								/>

								<p className="italic text-white text-center text-xs mt-2">
									a.n. Masjid Kampus UGM
								</p>
							</div>

							{/* Qris Jama'ah Shalahuddin */}
							<div>
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
								/>

								<p className="italic text-white text-center text-xs mt-2">
									a.n. Jam'ah Shalahuddin
								</p>
							</div>
						</div>

						{/* Donasi Melalui bank*/}
						<div className="flex items-center  justify-center bg-white p-3">
							{/* Kiri */}
							<div className="lg:w-1/2 w-full mx-10 lg:mx-0'">
								{/* BSI */}
								<div className="flex ">
									<Image
										src="/images/footer/bank_bsi.png"
										alt="Logo"
										width={90}
										className="object-contain h-10 w-20 mr-10"
										height={4}
									/>

									<div className="">
										<p className="text-greenCS font-semibold text-sm">
											7191219494
										</p>
										<p className="italic text-white text-greenCS text-xs">
											a.n Masjid Kampus UGM
										</p>
									</div>
								</div>

								{/* Muamalat */}
								<div className="flex">
									<Image
										src="/images/footer/bank_muamalat.png"
										alt="Logo"
										width={100}
										height={28}
										className="object-contain h-10 w-20 mr-10"
									/>

									<div className="ml-17">
										<p className="text-greenCS font-semibold text-sm">
											5350007800
										</p>
										<p className="italic text-white text-greenCS text-xs">
											a.n Masjid Kampus UGM
										</p>
									</div>
								</div>

								{/* BPD */}
								{/* Hidden Desktop Shape */}
								<div className="flex lg:hidden">
									<Image
										src="/images/footer/bank_bpd.png"
										alt="Logo"
										width={100}
										height={28}
										className="object-contain h-10 w-20 mr-10"
									/>

									<div className="ml-17">
										<p className="text-greenCS font-semibold text-sm">
											801241004070
										</p>
										<p className="italic text-white text-greenCS text-xs">
											a.n Jama'ah Shalahuddin
										</p>
									</div>
								</div>
							</div>

							{/* Kanan */}
							{/* Hidde when mobile */}
							<div className="ml-4 hidden lg:block">
								{/* BPD */}
								<div className="flex w-auto">
									<Image
										src="/images/footer/bank_bpd.png"
										alt="Logo"
										width={90}
										height={10}
										className="object-contain h-10 w-20"
									/>

									<div className="w-44 ml-10">
										<p className="text-greenCS font-semibold text-sm w-fit">
											801241004070
										</p>
										<p className="italic text-white text-greenCS text-xs w-fit">
											a.n Jama'ah Shalahuddin
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Quotes RDK */}
				<div className="relative">
					<div className="bg-greenCS mt-10 flex justify-center items-center z-10 border-2 lg:border-4 border-black p-4 px-10 lg:p-10">
						<div className="bg-white border-black lg:border-4 p-4 border-2 rounded-3xl text-center italic text-greenCS font-medium text-xs lg:text-base lg:py-8 lg:w-1/2">
							<p>
								"Kamu sekali-kali tidak akan memperoleh kebajikan (yang
								sempurna) sebelum kamu menginfakkan sebagian harta yang kamu
								cintai. Apa pun{" "}
								<span className="font-bold">(QS. Ali Imran : 92)</span>
							</p>
						</div>
					</div>

					<Image
						src="/images/maskot.png"
						alt="Logo"
						width={294}
						height={294}
						className="absolute top-[-3rem] left-[8rem]  hidden lg:block"
					/>

					{/* Maskot */}
					<Image
						src="/images/maskot.png"
						alt="Logo"
						width={120}
						height={120}
						className="absolute top-[-2px] left-[-15px] lg:hidden"
					/>
				</div>

				{/* Footer Bawah */}
				<div className="bg-greenCS mt-10 text-white text-xs lg:text-base relative ">
					<div className="lg:py-7 lg:px-14 p-4 lg:flex ">
						{/* Kiri */}
						<div className="lg:w-1/2">
							<p className="font-titania lg:text-3xl text-base font-bold">
								Ramadhan Di Kampus
							</p>
							<p className="font-titania lg:text-xl text-base font-bold">
								Universitas Gadjah Mada
							</p>

							<p className="font-semibold mt-7 font-titania">
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
						<div className="lg:w-1/2 lg:h-[356px] flex-items-end mt-6 lg:mt-0">
							<div className="flex justify-around">
								<p>Explorasi</p>
								<p>Kegiatan</p>
								<p>Petunjuk</p>
							</div>

							<div className="lg:mt-[280px] my-5 lg:my-0">
								<div className="flex justify-center">
									<Image
										src="/images/footer/mediaRDK.svg"
										alt="logo"
										width={112}
										height={24}
										className="object-cover mr-2"
									/>

									<p>Ramadhan Di Kampus UGM</p>
								</div>

								<div className="flex mt-3 justify-center ml-3">
									<Image
										src="/images/footer/mediaMK.svg"
										alt="logo"
										width={172}
										height={24}
										className="object-cover mr-2"
									/>

									<p>Masjid Kampus UGM</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center items-center p-6  bg-gradient-to-r from-[#22979E] from-[-100%] to-[#155458] ">
						<p className="italic text-lg">RDK UGM 1446H. All Rights Reserved</p>
					</div>

					{/* Blur Effect */}
					{/* Tanya aja deh wkw */}
					<div className="absolute top-10 left-[-5rem] w-[25rem] h-[25rem] bg-[#76D0D5] rounded-full blur-[10rem] opacity-70">

					</div>
					
				</div>
			</div>
		</>
	);
}
