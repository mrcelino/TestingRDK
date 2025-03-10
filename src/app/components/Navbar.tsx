"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface MenuItem {
	href: string;
	label: string;
	submenu?: MenuItem[];
}

export default function Navbar() {
	const pathname = usePathname();
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
		null
	);

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleDropdown = (label: string) => {
		setOpenDropdown(openDropdown === label ? null : label);
	};

	const toggleMobileDropdown = (label: string) => {
		setOpenMobileDropdown(openMobileDropdown === label ? null : label);
	};

	return (
		<nav
			className={`bg-gradient-to-r from-[#155458] from-30% to-[#51B2B8] text-white fixed left-1/2 transform -translate-x-1/2 z-[100] shadow-md w-full lg:mx-auto transition-all duration-500 ${
				isScrolled
					? "lg:top-10 lg:rounded-full lg:w-[90%] xl:w-[75%]"
					: "lg:top-0 lg:rounded-none lg:w-screen lg:p-2"
			}`}
		>
			<div className="flex items-center lg:justify-between px-4 py-2">
				{/* Hamburger Icon */}
				<button
					className="lg:hidden focus:outline-none"
					onClick={() => toggleDropdown("menu")}
				>
					{openDropdown === "menu" ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>

				{/* Logo */}

				<Link href="/" className="mx-auto lg:mx-0 w-10 h-10">
					<Image
						src="/svg/logo-rdk.svg"
						alt="Logo"
						width={30}
						height={50}
						
					/>
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden lg:flex space-x-0 mx-auto">
					{menuItems(pathname, openDropdown, toggleDropdown, false)}
				</ul>
			</div>

			{/* Mobile Menu */}
			{openDropdown === "menu" && (
				<div className="lg:hidden bg-white">
					<ul className="flex flex-col space-y-4 py-4 ml-3 font-medium">
						{menuItems(
							pathname,
							openMobileDropdown,
							toggleMobileDropdown,
							true
						)}
					</ul>
				</div>
			)}
		</nav>
	);
}

function menuItems(
	pathname: string,
	openDropdown: string | null,
	toggleDropdown: (label: string) => void,
	isMobile: boolean
) {
	const links: MenuItem[] = [
		{ href: "/", label: "Beranda" },
		{ href: "/jadwal", label: "Jadwal" },
		{
			href: "/artikel",
			label: "Artikel",
			submenu: [
				{ href: "/artikel/big-agenda-ramadan", label: "Big Agenda" },
				{ href: "/artikel/samudra", label: "Samudra" },
				{ href: "/artikel/ramadan-public-lecture", label: "RPL" },
				{ href: "/artikel/mimbar-subuh", label: "Mimbar Subuh" },
			],
		},
		{
			href: "/menu/buka",
			label: "Menu Hidangan",
			submenu: [
				{ href: "/menu/buka", label: "Buka" },
				{ href: "/menu/sahur", label: "Sahur" },
			],
		},
		{
			href: "/kegiatan/bigagenda",
			label: "Kegiatan",
			submenu: [
				{ href: "/kegiatan/bigagenda", label: "Big Events" },
				{ href: "/kegiatan/daily-agenda", label: "Daily Agenda" },
			],
		},
		{ href: "/donasi", label: "Donasi" },
		{ href: "/faq", label: "FAQ" },
	];

	return links.map(({ href, label, submenu }) => {
		const isOpen = openDropdown === label;
		const isActive =
			pathname === href ||
			(submenu && pathname.startsWith(href)) ||
			(submenu &&
				href.startsWith("/kegiatan") &&
				["/kegiatan/bigagenda", "/kegiatan/daily-agenda"].some((route) =>
					pathname.startsWith(route)
				)) ||
			// Nanti cukup pakai sub menu yang salah satunya saja
			(submenu &&
				href.startsWith("/menu") &&
				["/menu/sahur", "/menu/buka"].some((route) =>
					pathname.startsWith(route)
				));

		if (isMobile) {
			return (
				<div key={label} className="relative">
					<button
						className={`px-4 italic cursor-pointer flex items-center transition text-greenCS text-lg ${
							pathname === href ? "text-orange-400" : "text-[#15575B]"
						} hover:text-orange-400`}
						onClick={() => submenu && toggleDropdown(label)}
					>
						<Link href={href}>{label}</Link>

						{/* {label} */}
						{submenu && (
							<ChevronDown
								className={`ml-2 transition-transform durationn-500 ${
									isOpen ? "rotate-180" : "rotate-0"
								}`}
							/>
						)}
					</button>

					{submenu && isOpen && (
						<ul className="ml-2 transition-transform">
							{submenu.map(({ href: subHref, label: subLabel }) => (
								<Link key={subHref} href={subHref}>
									<li
										className={`px-4 py-2 text-[#15575B] hover:text-orange-400 cursor-pointer italic text-lg font-medium ${
											pathname === subHref ? "text-orange-400" : ""
										}`}
									>
										{subLabel}
									</li>
								</Link>
							))}
						</ul>
					)}
				</div>
			);
		} else {
			return (
				<div key={href} className="relative group">
					<Link href={href}>
						<li
							className={`px-4 py-2 cursor-pointer flex items-center transition text-lg ${
								isActive ? "text-orange-400" : "text-white"
							} hover:text-orange-400`}
						>
							{label}
							{submenu && (
								<ChevronDown className="ml-2 transition-transform duration-500 group-hover:rotate-180" />
							)}
						</li>
					</Link>

					{/* Dropdown Submenu (Desktop - Hover) */}
					{submenu && (
						<ul className="invisible opacity-0 scale-95 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg z-50 py-2">
							{submenu.map(({ href: subHref, label: subLabel }) => (
								<Link key={subHref} href={subHref}>
									<li
										className={`px-4 py-2 text-[#15575B] hover:text-orange-400 cursor-pointer italic text-center font-medium text-lg ${
											pathname === subHref ? "text-orange-400" : ""
										}`}
									>
										{subLabel}
									</li>
								</Link>
							))}
						</ul>
					)}
				</div>
			);
		}
	});
}
