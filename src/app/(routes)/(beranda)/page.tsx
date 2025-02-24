
import HeroSlider from "./HeroSlider";
import Head from "./Head";
import AboutRdk from "./AboutRdk";
import TemaRdk from "./TemaRdk";
import RdkQuest from "./RdkQuest";


export default function Home() {
	return (
		<main className="overflow-hidden">

			<HeroSlider />			
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
