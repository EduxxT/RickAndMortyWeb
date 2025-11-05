import CharacterCard from "./CharacterCard";

export default function CharacterList({ characters }) {
  return (
    <section className="p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {characters.length > 0 ? (
        characters.map((char) => <CharacterCard key={char.id} character={char} />)
      ) : (
        <p className="col-span-full text-center text-gray-400">Loading...</p>
      )}
    </section>
  );
}
