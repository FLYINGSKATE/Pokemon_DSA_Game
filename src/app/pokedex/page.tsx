"use client";
import Image from "next/image";
import { useState } from "react";
import { useTeam } from "../TeamContext";
import { pokedex as pokedexData, PokeAlgo } from "@/data/pokedex";

export default function Pokedex() {
  const [modalOpen, setModalOpen] = useState(false);
  const [victoryMsg, setVictoryMsg] = useState("");
  const { team, addToTeam, removeFromTeam } = useTeam();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 p-6 flex flex-col items-center">
      <div className="mb-8 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-2 text-blue-700">Your Team</h2>
        <div className="flex flex-wrap gap-2">
          {team.length === 0 ? (
            <span className="italic text-gray-500">No Pokémon in your team yet. Add some from below!</span>
          ) : (
            team.map(name => (
              <span key={name} className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                {name}
                <button className="ml-1 text-xs text-red-600 hover:text-red-800 font-bold" onClick={() => removeFromTeam(name)} title="Remove">×</button>
              </span>
            ))
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {pokedexData.map((poke: PokeAlgo) => (
          <div key={poke.name} className="bg-white/90 rounded-xl shadow-lg p-6 max-w-md w-full border-4 border-yellow-300 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image src="/pokeball.png" alt="Pokeball" width={40} height={40} />
              <h2 className="text-2xl font-bold text-yellow-700">{poke.name}</h2>
              <span className="ml-auto text-xs bg-gray-200 rounded px-2 py-1">{poke.type}</span>
            </div>
            <div className="bg-gray-100 rounded p-3 text-sm font-mono">
              <div>Rarity: {"★".repeat(poke.rarity)}{"☆".repeat(5 - poke.rarity)}</div>
              <div>Time: <span className="font-bold">{poke.timeComplexity}</span> | Space: <span className="font-bold">{poke.spaceComplexity}</span></div>
              <div>Special Move: <span className="italic">{poke.specialMove}</span></div>
              <div>Effective Against: <span className="italic">{poke.effectiveAgainst}</span></div>
            </div>
            <div className="text-gray-700 italic">{poke.pokedexEntry}</div>
            <div className="text-sm text-gray-600">Evolution: <span className="font-bold">{poke.evolution}</span></div>
            <div className="bg-blue-50 rounded p-3">
              <div className="font-semibold text-blue-700 mb-1">C++ Example:</div>
              <pre className="bg-gray-900 text-green-200 rounded p-2 overflow-x-auto text-xs"><code>{poke.cxx}</code></pre>
            </div>
            <details className="mt-2">
              <summary className="cursor-pointer font-semibold text-purple-700">Wild LeetCode Problems Appeared!</summary>
              <ul className="mt-2 flex flex-col gap-2">
                {poke.leetcode.map((prob) => (
                  <li key={prob.title} className="bg-white border-l-4 border-purple-400 rounded p-2 flex flex-col gap-1">
                    <a href={prob.url} target="_blank" rel="noopener noreferrer" className="font-bold text-purple-700 hover:underline">{prob.title}</a>
                    <div className="text-xs text-gray-700">{prob.sample}</div>
                    <button
                      className="mt-1 w-fit bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-full transition"
                      onClick={() => {
                        setVictoryMsg(`🎉 You defeated '${prob.title}' with ${poke.name}! It's super effective!`);
                        setModalOpen(true);
                      }}
                    >
                      Defeat with {poke.name}!
                    </button>
                  </li>
                ))}
              </ul>
            </details>
            {!team.includes(poke.name) && (
              <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full" onClick={() => addToTeam(poke.name)}>Add to Team</button>
            )}
            {team.includes(poke.name) && (
              <span className="mt-2 inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold">In Your Team</span>
            )}
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full flex flex-col items-center gap-4 relative" onClick={e => e.stopPropagation()}>
            <span className="text-3xl">🏅</span>
            <div className="text-xl font-bold text-green-700 text-center">{victoryMsg}</div>
            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full" onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
