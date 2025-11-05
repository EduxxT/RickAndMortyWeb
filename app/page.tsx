"use client";

import { SetStateAction, useEffect, useState } from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/pagination";

export default function Page() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async (pageNumber = 1, query = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${query}`
      );
      if (!res.ok) throw new Error("No characters found");
      const data = await res.json();
      setCharacters(data.results);
      setInfo(data.info);
      setPage(pageNumber);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setCharacters([]);
      setInfo(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(1, search);
  }, [search]);

  const handleSearchChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Header title="Rick and Morty Characters" />

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mt-6 mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by name..."
          className="px-4 py-2 w-72 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-400 mt-6">Loading...</p>
      ) : characters.length > 0 ? (
        <>
          <CharacterList characters={characters} />
          <Pagination
            info={info}
            page={page}
            onPageChange={(newPage: number | undefined) => fetchCharacters(newPage, search)}
          />
        </>
      ) : (
        <p className="text-center text-gray-400 mt-6">
          No characters found.
        </p>
      )}
    </div>
  );
}
