export default function Head() {
	return (
		<div className="bg-greenCS w-full h-full mx-auto text-center text-white content-center p-6 font-heading ">
			<p className="lg:text-6xl md:text-4xl text-2xl text-shadow-lg">
				Welcome To
			</p>
			<p className="lg:text-6xl md:text-4xl text-2xl text-shadow-lg">
				Ramadhan Di Kampus
			</p>

			<p className="lg:text-5xl  md:text-3xl  text-lg lg:mt-6">
				Universitas Gadjah Mada
			</p>

			<p className="lg:text-3xl md:text-2xl text-sm border-black border-2 lg:border-4 md:border-[3px] rounded-full bg-white text-greenCS lg:w-1/2 w-[55%] py-1 lg:px-10 mx-auto lg:mt-10 md:mt-6 mt-3 max-w-2xl">
				1446 H / 2025 M
			</p>

			{/* Teaser / Profil RDK */}
			<div className="bg-white lg:border-4 md:border-[3px] border-2 border-black rounded-3xl lg:rounded-[30px] lg:w-[45rem] md:w-[35rem] w-[90%] mx-auto lg:my-16 my-10 lg:h-[25rem] md:h-[20rem] h-[14rem] md:p-4 p-3 text-black max-w-2xl">
				<iframe
					className="w-full h-full object-cover rounded-3xl"
					src="https://www.youtube.com/embed/z1MU8NsMziI?si=axEs-eDJtGI2r70t"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}
