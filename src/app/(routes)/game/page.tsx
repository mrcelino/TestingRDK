'use client'
import dynamic from "next/dynamic";

export default function GamePage() {
    const PhaserGame = dynamic(() => import("@/app/components/[game]/GameComponent"), { ssr: false });
    
    return (
        <div className="">
            <PhaserGame />
        </div>
    );
}   