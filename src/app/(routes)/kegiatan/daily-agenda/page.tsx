
import Samudra from "./Samudra";
import MimbarSubuh from "./MimbarSubuh";
import RPL from "./Rpl";
import Header from "./Header";

export default function DailyAgenda() {
	return (
		<section className="relative">
			<div className="bg-gradient-to-b from-white from-1% to-[#21666A] to-40% xl:max-w-8xl relative">
				{/* Pattern pertama untuk area putih */}
				<div className="absolute inset-0 h-full bg-[url('/images/pattern-bg-mobile3.svg')] lg:bg-[url('/images/pattern-for-bg.svg')] bg-repeat opacity-20 mix-blend-difference brightness-50"></div>
				
				{/* Pattern kedua untuk area hijau */}
				<div className="absolute inset-0 h-full bg-[url('/images/pattern-bg-mobile3.svg')] lg:bg-[url('/images/pattern-for-bg.svg')] bg-repeat opacity-15 mix-blend-screen"></div>

				{/* Content */}
				<div className="lg:py-32 py-10 z-20 relative">
					{/* Header */}
					<Header />

					{/* Main Content */}
					<main className="w-11/12 mx-auto">
						<MimbarSubuh />
						<Samudra />
						<RPL />
					</main>
				</div>
			</div>
		</section>
	);
}
