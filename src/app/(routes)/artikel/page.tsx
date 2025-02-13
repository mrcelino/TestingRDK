"use client";

import "swiper/css";
import "swiper/css/navigation";
import HeroSlider from "./HeroSlider";
import BigAgendaRamadan from "./BigAgendaRamadan";
import Samudra from "./Samudra";
import MimbarSubuh from "./MimbarSubuh";
import Rpl from "./Rpl";


export default function Artikel() {

	return (
		<section>
			<HeroSlider />
	
			<article className="p-4 w-11/12 mx-auto">
				<ul>
					<BigAgendaRamadan />
					<Samudra />
					<Rpl />
					<MimbarSubuh />
					
				</ul>
			</article>
		</section>
	);
}
