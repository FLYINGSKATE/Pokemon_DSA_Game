"use client";
import Link from "next/link";
import Image from "next/image";
import { useTeam } from "./TeamContext";

export default function TopNav() {
  const { team } = useTeam();
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur flex items-center justify-between px-6 py-2 shadow-md border-b border-yellow-200">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image src="/pokeball.png" alt="Pokeball" width={32} height={32} className="inline-block" />
        </Link>
        <span className="font-bold text-yellow-700 text-lg">Pokémon DSA</span>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/pokedex" className="font-semibold text-blue-700 hover:underline">Pokédex</Link>
        <div className="relative flex items-center">
          <Image src="/pokeball.png" alt="Team" width={24} height={24} />
          <span className="ml-1 text-xs font-bold text-orange-600">{team.length}</span>
        </div>
      </div>
    </nav>
  );
}
