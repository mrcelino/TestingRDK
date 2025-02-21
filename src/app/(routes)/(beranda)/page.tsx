import Image from "next/image";
import HeroSlider from "./HeroSlider";
import Head from "./Head";
import AboutRdk from "./AboutRdk";
import TemaRdk from "./TemaRdk";
import RdkQuest from "./RdkQuest";
import PhaserGame from "@/app/components/[game]/GameComponent";

export default function Home() {
	return (
		<main>
			{/* Hero Slider */}
			<HeroSlider />

			{/* Welcome to RDK */}
			<Head />

			{/* TTG RDK, Tema, RDK Quest */}
			<div className="lg:w-full h-full lg:p-16 w-11/12 mx-auto p-6 ">
				<AboutRdk />
				<TemaRdk />
				<RdkQuest />

			</div>
		</main>
	);
}
