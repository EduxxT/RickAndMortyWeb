import Header from "./components/Header";
import CharacterList from "./components/CharacterList";

async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) throw new Error("Failed to fetch characters");
  return res.json();
}

export default async function Page() {
  const data = await getCharacters();
  const characters = data.results;

  return (
    <div>
      <Header title="Rick and Morty Characters" />
      <CharacterList characters={characters} />
    </div>
  );
}
