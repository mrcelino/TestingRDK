"use client";

import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import HeroSlider from "./HeroSlider";
import BigAgendaRamadan from "./BigAgendaRamadan";
import Samudra from "./Samudra";
import MimbarSubuh from "./MimbarSubuh";
import Rpl from "./Rpl";
import RamadanPublicLecture from "./Rpl";
import Loading from "./loading";

export default function Artikel() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			// Simulasi delay (bisa diganti dengan fetch API asli)
			await new Promise((resolve) => setTimeout(resolve, 4000));
			setIsLoading(false);
		};

		fetchData();
	}, []);

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
