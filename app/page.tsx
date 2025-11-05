"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/pagination";

export default function Page() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
      const data = await res.json();
      setCharacters(data.results);
      setInfo(data.info);
      setPage(pageNumber);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <Header title="Rick and Morty Characters" />
      {loading ? (
        <p className="text-center text-gray-400 mt-6">Loading...</p>
      ) : (
        <>
          <CharacterList characters={characters} />
          <Pagination info={info} page={page} onPageChange={fetchCharacters} />
        </>
      )}
    </div>
  );
}
