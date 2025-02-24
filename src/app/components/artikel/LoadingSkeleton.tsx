const getSkeletonCount = () => {
	if (typeof window !== "undefined") {
		if (window.innerWidth < 640) return 1;
		if (window.innerWidth < 1024) return 2;
	}
	return 3; // Default untuk SSR (Desktop)
};

const LoadingSkeleton = () => {
	const count = getSkeletonCount();

	return (
		<div className="flex space-x-4 mt-6">
			{[...Array(count)].map((_, index) => (
				<div
					key={index}
					className="bg-gray-200 animate-pulse w-[90%] lg:w-[25rem] h-[15rem] rounded-3xl"
				></div>
			))}
		</div>
	);
};

export default LoadingSkeleton;
