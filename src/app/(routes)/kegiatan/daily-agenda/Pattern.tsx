export default function Pattern() {
	return (
		<>
			{/* pattern */}
			<div
				// Kurang rapih, punya emil rapih
				className="absolute inset-0"
				style={{
					backgroundImage: "url(/svg/pattern.svg)",
					backgroundRepeat: "repeat",
					opacity: 0.7,
					backgroundSize: "40rem 40rem",
				}}
			/>

			{/* background gradient */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(to top, #21666A 70%, rgba(64, 200, 208, 0))",
				}}
			/>

			{/* pattern */}
			<div
				className="absolute inset-0 inset-y-1/4 h-full"
				style={{
					backgroundImage: "url(/svg/pattern.svg)",
					backgroundRepeat: "repeat",
					opacity: 0.1,
					backgroundSize: "40rem 40rem",
				}}
			>
				<div className="flex w-full justify-between mt-10">
					<div className="bg-white h-96 w-96 rounded-full blur-3xl mt-[8rem]"></div>
					<div className="bg-white h-96 w-96 rounded-full blur-3xl"></div>
				</div>

				<div className="flex w-full justify-between mt-[18rem]">
					<div className="bg-white h-96 w-96 rounded-full blur-3xl"></div>
					<div className="bg-white h-96 w-96 rounded-full blur-3xl mt-[8rem]"></div>
				</div>
				<div className="flex w-full justify-between mt-10">
					<div className="bg-white h-96 w-96 rounded-full blur-3xl mt-[8rem]"></div>
					<div className="bg-white h-96 w-96 rounded-full blur-3xl"></div>
				</div>

				<div className="flex w-full justify-between mt-[18rem]">
					<div className="bg-white h-96 w-96 rounded-full blur-3xl"></div>
					<div className="bg-white h-96 w-96 rounded-full blur-3xl mt-[8rem]"></div>
				</div>
			</div>
		</>
	);
}
