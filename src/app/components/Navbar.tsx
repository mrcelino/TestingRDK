"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MenuItem {
  href: string;
  label: string;
  submenu?: MenuItem[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-gradient-to-r from-[#155458] from-30% to-[#51B2B8] text-white sticky lg:top-10 lg:mt-[-4rem] z-50 shadow-md lg:w-11/12 lg:mx-auto lg:rounded-full">
      <div className="flex items-center lg:justify-between px-4 py-2">
        {/* Hamburger Icon */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setOpenDropdown(openDropdown === "menu" ? null : "menu")}
        >
          {openDropdown === "menu" ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Image
          src="/svg/logo-rdk.svg"
          alt="Logo"
          width={30}
          height={50}
          className="mx-auto lg:mx-0 w-10 h-10"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 mx-auto w-10/11">
          {menuItems(pathname, openDropdown, setOpenDropdown, false)} {/* False untuk menonaktifkan click pada desktop */}
        </ul>
      </div>

      {/* Mobile Menu */}
      {openDropdown === "menu" && (
        <div className="lg:hidden bg-white">
          <ul className="flex flex-col space-y-4 py-4 ml-3">
            {menuItems(pathname, openDropdown, setOpenDropdown, true)} {/* True untuk enable click pada mobile */}
          </ul>
        </div>
      )}
    </nav>
  );
}

function menuItems(
  pathname: string,
  openDropdown: string | null,
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>,
  isMobile: boolean // Menambahkan flag untuk menandakan apakah sedang mobile
) {
  const links: MenuItem[] = [
    { href: "/", label: "Beranda" },
    { href: "/jadwal", label: "Jadwal" },
    {
      href: "#", label: "Artikel", // Menonaktifkan link artikel
      submenu: [
        { href: "/artikel", label: "Beranda" },
        { href: "/artikel/big-agenda-ramadan", label: "Big Agenda" },
        { href: "/artikel/samudra", label: "Samudra" },
        { href: "/artikel/ramadan-public-lecture", label: "RPL" },
        { href: "/artikel/mimbar-subuh", label: "Mimbar Subuh" }
      ]
    },
    {
      href: "#", label: "Menu Hidangan", // Menonaktifkan link menu hidangan
      submenu: [
        { href: "/makanan/buka", label: "Buka" },
        { href: "/makanan/sahur", label: "Sahur" }
      ]
    },
    {
      href: "#", label: "Kegiatan", // Menonaktifkan link kegiatan
      submenu: [
        { href: "/kegiatan/bigagenda", label: "Big Events" },
        { href: "/kegiatan/daily-agenda", label: "Daily Agenda" }
      ]
    },
    { href: "/donasi", label: "Donasi" },
    { href: "/faq", label: "FAQ" },
  ];

  return links.map(({ href, label, submenu }) => {
    const isActive = pathname === href || (submenu && pathname.startsWith(href));

    if (isMobile) {
      return (
        <div
          key={href}
          className="relative group"
          onClick={() => submenu && setOpenDropdown(openDropdown === href ? null : href)} // Toggle submenu visibility di mobile
        >
          <Link href={submenu ? "#" : href}> {/* Menghindari navigasi untuk menu yang memiliki submenu */}
            <li
              className={`px-4 py-2 italic cursor-pointer transition ${isActive ? "text-orange-400" : "text-[#15575B]"}`}
            >
              {label}
            </li>
          </Link>

          {/* Dropdown Submenu */}
          {submenu && (
            <ul
              className="bg-white shadow-lg rounded-lg z-50 py-2"
            >
              {submenu.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <li
                    className={`px-4 py-2 text-[#15575B] hover:text-orange-400 cursor-pointer italic text-center font-medium ${pathname === href ? "text-orange-400" : ""}`}
                  >
                    {label} 
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      );
    } else {
      return (
        <div
          key={href}
          className="relative group"
        >
          <Link href={href}>
            <li
              className={`px-4 py-2 italic not-italic cursor-pointer transition ${isActive ? "text-orange-400" : "text-white"} hover:text-orange-400`}
            >
              {label}
            </li>
          </Link>

          {/* Submenu */}
          {submenu && (
            <ul
              className="hidden group-hover:block absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg z-50 py-2"
            >
              {submenu.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <li
                    className={`px-4 py-2 text-[#15575B] hover:text-orange-400 cursor-pointer italic text-center font-medium ${pathname === href ? "text-orange-400" : ""}`}
                  >
                    {label}
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
