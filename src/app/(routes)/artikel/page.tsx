"use client";

import "swiper/css";
import "swiper/css/navigation";
import HeroSlider from "../../components/artikel/HeroSlider";
import BigAgendaRamadan from "../../components/artikel/BigAgendaRamadan";
import Samudra from "../../components/artikel/Samudra";
import MimbarSubuh from "../../components/artikel/MimbarSubuh";
import RamadanPublicLecture from "../../components/artikel/Rpl";

export default function Artikel() {

	return (
		<section>
			<HeroSlider />

			<article className="p-4 w-11/12 mx-auto">
				<ul>
					<BigAgendaRamadan />
					<Samudra />
					<RamadanPublicLecture />
					<MimbarSubuh />
				</ul>
			</article>
		</section>
	);
}
