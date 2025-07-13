import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-blue-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center gap-6 max-w-xl w-full">
        <Image src="/game_logo.png" alt="Pokémon DSA Adventure" width={320} height={100} className="mb-2" />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-700 drop-shadow-lg">🏆 Become the Algorithm Champion!</h1>
        <p className="text-lg sm:text-xl text-center text-blue-900 font-semibold">Welcome, Code Trainer!&lt;br/&gt;Catch algorithms, evolve your coding skills, and challenge Gym Leaders on your quest to become the ultimate Algorithm Champion!</p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link href="/pokedex" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow transition">Explore Pokédex</Link>
          <a href="#regions" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow transition">Choose Region</a>
        </div>
        <div id="regions" className="mt-10 w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center text-indigo-700">🌍 Regions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <Link href="/region/kanto" className="bg-white/80 rounded-lg p-4 shadow border-l-4 border-yellow-400 hover:bg-yellow-100 transition block">
    <h3 className="font-bold text-lg text-yellow-700">Kanto Region</h3>
    <p className="text-sm text-gray-700">SALT HUGS FB — Basic Data Structures</p>
  </Link>
  <Link href="/region/johto" className="bg-white/80 rounded-lg p-4 shadow border-l-4 border-blue-400 hover:bg-blue-100 transition block">
    <h3 className="font-bold text-lg text-blue-700">Johto Region</h3>
    <p className="text-sm text-gray-700">OF DUBS BGMT — Algorithm Patterns</p>
  </Link>
  <Link href="/region/hoenn" className="bg-white/80 rounded-lg p-4 shadow border-l-4 border-green-400 hover:bg-green-100 transition block">
    <h3 className="font-bold text-lg text-green-700">Hoenn Region</h3>
    <p className="text-sm text-gray-700">QMBRIS — Sorting Mastery</p>
  </Link>
  <Link href="/region/sinnoh" className="bg-white/80 rounded-lg p-4 shadow border-l-4 border-pink-400 hover:bg-pink-100 transition block">
    <h3 className="font-bold text-lg text-pink-700">Sinnoh Region</h3>
    <p className="text-sm text-gray-700">String/Math — Special Type Algorithms</p>
  </Link>
</div>
        </div>
        <div className="mt-10 text-center text-gray-600 text-sm italic">&quot;Gotta catch &#39;em all!&quot; — Start your adventure and master every algorithm!</div>
      </div>
    </div>
  );
}
