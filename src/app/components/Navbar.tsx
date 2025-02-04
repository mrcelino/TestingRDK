"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Gunakan ikon lucide-react

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gradient-to-r from-[#155458] from-30% to-[#51B2B8] text-white sticky lg:top-10 lg:mt-[-4rem] z-50 shadow-md lg:w-11/12 lg:mx-auto lg:rounded-full">
            {/* Navbar Container */}
            <div className="flex items-center lg:justify-between px-4 py-2">
                {/* Hamburger Icon */}
                <button
                    className="lg:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Logo */}
                <Image
                    src="/svg/logo-rdk.svg"
                    alt="Logo"
                    width={30}
                    height={50}
                    className="mx-auto lg:mx-0 w-10 h-10"
                />


                {/* Menu Items (Hidden on Mobile) */}
                <ul className="hidden lg:flex space-x-6 mx-auto w-10/11">
                    {menuItems(pathname)}
                </ul>
            </div>

            {/* Mobile Menu (Visible only when open) */}
            {isOpen && (
                <div className="lg:hidden bg-white">
                    <ul className="flex flex-col space-y-4 py-4 ml-3">
                        {menuItems(pathname)}
                    </ul>
                </div>
            )}
        </nav>
    );
}

function menuItems(pathname: string) {
    const links = [
        { href: "/", label: "Beranda" },
        { href: "/jadwal", label: "Jadwal" },
        { href: "/artikel", label: "Artikel" },
        { href: "/makanan", label: "Menu Hidangan" },
        { href: "/kegiatan", label: "Kegiatan" },
        { href: "/donasi", label: "Donasi" },
        { href: "/faq", label: "FAQ" },
    ];

    return links.map(({ href, label }) => (
        <Link key={href} href={href}>
            <li
                className={` px-4 py-2  italic lg:not-italic ${
                    pathname === href ? "text-orange-400" : "text-[#15575B] lg:text-white"
                } hover:text-orange-400`}
            >
                {label}
            </li>
        </Link>
    ));
}