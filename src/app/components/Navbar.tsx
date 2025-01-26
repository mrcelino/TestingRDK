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
        <nav className="bg-greenCS text-white sticky top-0 z-50 shadow-md">
            {/* Navbar Container */}
            <div className="flex items-center justify-between px-4 py-2">
                {/* Logo */}
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={36}
                    height={50}
                    className="my-2"
                />

                {/* Hamburger Icon */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Menu Items (Hidden on Mobile) */}
                <ul className="hidden md:flex space-x-6">
                    {menuItems(pathname)}
                </ul>
            </div>

            {/* Mobile Menu (Visible only when open) */}
            {isOpen && (
                <div className="md:hidden bg-greenCS">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {menuItems(pathname)}
                    </ul>
                </div>
            )}
        </nav>
    );
}

function menuItems(pathname: string) {
    const links = [
        { href: "/", label: "Home" },
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
                className={`${
                    pathname === href ? "text-orange-400" : "text-white"
                } hover:text-orange-400`}
            >
                {label}
            </li>
        </Link>
    ));
}
