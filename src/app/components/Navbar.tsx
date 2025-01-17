"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return(
        <>

        <nav className="bg-gray-800 bg-greenCS text-white flex items-center justify-between sticky top-10 left-10 right-10 mx-auto w-11/12 z-50 rounded-full mb-[-100px] shadow-xl">

            <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={50}
            className="ml-5 my-2"
        
            />

            <ul className="flex">
              
                <Link href="/">
                    <li className={`mr-10 ${pathname === "/" ? "text-orange-400" : "text-white"} hover:text-orange-400`}>Home</li></Link>

                <Link href="/jadwal">
                    <li className={`mr-10 ${pathname === "/jadwal" ? "text-orange-400" : "text-white"} hover:text-orange-400`}>Jadwal</li></Link>

                <Link href="/artikel">
                    <li className={`mr-10 ${pathname === "/artikel" ? "text-orange-400" : "text-white"} hover:text-orange-400`}>Artikel</li> </Link>

                <Link href="/makanan">
                    <li className={`mr-10 ${pathname === "/makanan" ? "text-orange-400" : "text-white"} hover:text-orange-400`}>Menu Hidangan</li></Link>

                <Link href="/kegiatan">
                    <li className={`mr-10 ${pathname === "/kegiatan" ? "text-orange-400" : "text-white"} hover:text-orange-400`}>Kegiatan</li></Link>

                <Link href="/donasi">
                    <li className={`mr-10 ${pathname === "/donasi" ? "text-orange-400" : "text-white"} hover:text-orange-400`}>Donasi</li> </Link>

                <Link href="/faq">
                    <li className={`mr-10 ${pathname === "/faq" ? "text-orange-400" : "text-white"} hover:text-orange-400`}>FAQ</li></Link>

            </ul>
            
            <div>
                
            </div>

    
        </nav>
        
        </>
    )

}