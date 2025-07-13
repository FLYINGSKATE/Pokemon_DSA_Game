"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type TeamContextType = {
  team: string[];
  addToTeam: (name: string) => void;
  removeFromTeam: (name: string) => void;
};

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({ children }: { children: ReactNode }) {
  const [team, setTeam] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pokemon-team");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("pokemon-team", JSON.stringify(team));
  }, [team]);

  const addToTeam = (name: string) => {
    setTeam((prev) => (prev.includes(name) ? prev : [...prev, name]));
  };

  const removeFromTeam = (name: string) => {
    setTeam((prev) => prev.filter((n) => n !== name));
  };

  return (
    <TeamContext.Provider value={{ team, addToTeam, removeFromTeam }}>
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const context = useContext(TeamContext);
  if (!context) throw new Error("useTeam must be used within a TeamProvider");
  return context;
}
