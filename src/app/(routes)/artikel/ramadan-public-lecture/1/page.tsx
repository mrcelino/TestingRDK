import Image from "next/image";
import Link from "next/link";

export default function KajianRamadanPublicLecture() {
	return (
		<section className="p-6">
			<main className="p-2 lg:w-11/12 lg:mx-auto">
				{/* Title Dinamis */}
				<h1 className="lg:text-3xl text-xl font-bold italic lg:w-11/12 lg:mx-auto">
					Ratusan Mahasiswa UGM ramaikan acara Ramadan Festival UGM. Presiden
					RI, Prabowo Subianto beri apresiasi penuh!
				</h1>

				<div className="flex items-center gap-5 lg:text-2xl mt-6 lg:w-5/6 mx-auto">
					<p className="text-orangeCS italic font-semibold">
						RDK <span className="text-greenCS">News</span>
					</p>
					<Image
						src="/logo.png"
						alt="Logo RDK"
						width={30}
						height={30}
						className="z-30"
					/>
					<div className="w-[3px] h-8 bg-greenCS"></div>
					<p className="font-light italic text-greenCS ">March, 12 2025</p>
				</div>

				<div className="p-2 rounded mt-4 lg:w-3/4 lg:mx-auto">
					<Image
						src={"/images/artikel/kajian.png"}
						alt="Kajian Samudra"
						width={500}
						height={10}
						className="h-[35vh] lg:w-full lg:h-[70vh] object-cover mx-auto"
					/>

					<p className="italic mt-5 text-center text-sm">
						Ratusan mahasiswa Universitas Gadjah Mada (UGM) memenuhi Grha Sabha
						Pramana dalam acara Ramadan Festival UGM 2025. Acara ini dimeriahkan
						dengan berbagai kegiatan Islami seperti seminar, bazar, dan
						pertunjukan seni. Presiden RI, Prabowo Subianto, turut memberikan
						apresiasi atas semangat kebersamaan dan keberagaman yang ditunjukkan
						dalam festival ini.
					</p>
				</div>

				<article className="mt-10 text-justify font-medium  ">
					<p>
						Yogyakarta, 4 Januari 2025 — Ramadan Festival UGM 2025 berlangsung
						meriah dengan kehadiran ratusan mahasiswa Universitas Gadjah Mada
						(UGM) dan masyarakat sekitar. Acara yang digelar di Grha Sabha
						Pramana ini menghadirkan berbagai kegiatan Islami, mulai dari bazar,
						seminar keagamaan, hingga penampilan seni Islami.
					</p>

					<p className="mt-6">
						Kemeriahan semakin bertambah dengan apresiasi langsung dari Presiden
						Republik Indonesia, Prabowo Subianto. Dalam sambutannya yang
						disampaikan secara daring, Presiden Prabowo menyampaikan rasa
						bangganya kepada UGM yang terus menjaga tradisi positif dalam
						menghidupkan nilai-nilai keislaman, khususnya di bulan Ramadan.
						"Ramadan Festival UGM adalah bukti bahwa generasi muda Indonesia
						mampu menjaga nilai-nilai luhur agama sekaligus mempromosikan
						keberagaman. Saya mengapresiasi semangat para mahasiswa UGM yang
						menjadikan acara ini sebagai ruang untuk berkreasi, berbagi, dan
						mempererat persaudaraan," ujar Prabowo.
					</p>

					<p className="mt-6">
						Acara yang berlangsung dari pagi hingga malam hari ini menghadirkan
						berbagai kegiatan menarik. Salah satunya adalah sesi diskusi bersama
						tokoh-tokoh agama dan akademisi UGM, membahas tema "Islam sebagai
						Inspirasi Kemajuan Bangsa." Selain itu, bazar Ramadan yang diikuti
						lebih dari 50 stan UMKM juga menjadi daya tarik tersendiri bagi
						pengunjung. "Kami sangat antusias melihat respon dari mahasiswa dan
						masyarakat. Ramadan Festival ini tidak hanya menjadi momen religius,
						tetapi juga wadah untuk saling berbagi dan mempererat ukhuwah," ujar
						Ketua Panitia, Eka Setiawan.
					</p>

					<p className="mt-6">
						Puncak acara dimeriahkan dengan pertunjukan seni Islami seperti
						hadrah, puisi religi, dan penampilan spesial dari grup nasyid
						ternama. Acara diakhiri dengan doa bersama untuk keberkahan umat
						Muslim di Indonesia.
					</p>
				</article>

				{/* Previous */}
				<Link href="/artikel/ramadan-public-lecture">
					<button className="py-2 px-4 border-4 border-black bg-orangeCS rounded-full flex font-medium items-center italic mt-10 active:bg-orange-500 hover:bg-orange-500">
						<svg
							width="26"
							height="26"
							viewBox="0 0 26 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M24 12.5H4M2 14.5L13 3.5M2 12.5L13 21.5"
								stroke="black"
								strokeWidth="3"
							/>
						</svg>

						<p className="ml-2">Previous</p>
					</button>
				</Link>
			</main>
		</section>
	);
}
