'use client'
import dynamic from "next/dynamic";

export default function RdkQuest() {

	const PhaserGame = dynamic(() => import("@/app/components/[game]/GameComponent"), { ssr: false });

	

	return (
		<div className="mx-auto max-w-5xl" id="rdk-quest">
			<h1 data-aos="fade-up" data-aos-duration="1000" className="lg:text-5xl text-2xl text-greenCS lg:w-[50%] md:w-[55%] w-3/4 bg-orangeCS border-black lg:border-4 border-2 rounded-tr-[50px] rounded-bl-[50px] lg:rounded-tr-[30px] lg:rounded-bl-[30px]  lg:py-3 lg:px-10 text-center mx-auto font-heading md:mt-20 mt-10 py-2 text-shadow-md">
				RDK Quest
			</h1>

			<div data-aos="fade-up" data-aos-duration="1000" className="text-greenCS text-center lg:text-xl  mx-auto mt-10 lg:mt-10 md:mt-4 font-body ">
				<p className="font-bold">
					RDK Quest: Petualangan Ramadan di Masjid Kampus UGM!
				</p>
				<p className="mt-6 font-medium">
					RDK Quest adalah game interaktif yang dihadirkan untuk memeriahkan
					program Ramadan di Kampus (RDK) UGM 1446 H. Game ini mengajak peserta
					menjelajahi berbagai aktivitas seru di Masjid Kampus, menciptakan
					pengalaman Ramadan yang lebih berkesan melalui tantangan, eksplorasi,
					dan interaksi.
				</p>

				<p className="mt-6 font-medium">
					Selamat menjelajahi RDK Quest dan nikmati serunya Ramadan di Masjid
					Kampus UGM! 🌙
				</p>
			</div>

			{/* Game */}

			<div data-aos="zoom-in" data-aos-duration="1000" className="md:border-[3px] lg:border-4 border-2 border-black lg:w-[75%] md:h-[22rem] lg:h-[500px] mx-auto md:p-4 p-3 rounded-3xl mt-10 h-[14rem] flex justify-center items-center overflow-hidden">
				<PhaserGame/>

			</div>

			<button
				data-aos="fade-up" data-aos-duration="1000"
				onClick={() => {
					document.getElementById('game-container')?.classList.add('block');
					const gameContainer = document.getElementById('game-container');
					if (gameContainer) {
						const requestFullscreen = gameContainer.requestFullscreen;
						if (requestFullscreen) {
							requestFullscreen.call(gameContainer).then(() => {
								if ("orientation" in screen && "lock" in (screen.orientation as ScreenOrientation & { lock: (orientation: string) => Promise<void> })) {
									(screen.orientation as ScreenOrientation & { lock: (orientation: string) => Promise<void> }).lock('landscape').catch((err: Error) => {
										console.error('Error attempting to lock screen orientation:', err);
									});
								}
							}).catch((err) => {
								console.error('Error attempting to enter fullscreen mode:', err);
							});
						}
					}
				}}
				type="button"
				className="bg-orangeCS text-greenCS py-1 px-6 rounded-full border-2 md:border-[3px] lg:border-4 border-black lg:text-5xl md:text-3xl text-xl mx-auto w-fit font-heading grid grid-cols-1 mt-10"
			>
				PLAY
			</button>
		</div>
	);
}
