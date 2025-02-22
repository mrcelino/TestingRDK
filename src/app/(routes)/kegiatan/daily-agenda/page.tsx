
import Pattern from "./Pattern";
import Samudra from "./Samudra";
import MimbarSubuh from "./MimbarSubuh";
import RPL from "./Rpl";
import Header from "./Header";

export default function DailyAgenda() {
	return (
		<section className="p-1 relative ">
			<Pattern />

			{/* Content */}
			<div className="lg:my-36 my-10 z-10 relative">
				{/* // Head */}
				<Header />

				{/* // Main */}
				<main className="w-11/12 mx-auto">
					<MimbarSubuh />
					<Samudra />
					<RPL />
				</main>
			</div>
		</section>
	);
}
