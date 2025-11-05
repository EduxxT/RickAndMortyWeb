export default function CharacterCard({ character }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-lg mb-2"
      />
      <h2 className="text-lg font-semibold">{character.name}</h2>
      <p className="text-sm text-gray-400">
        {character.status} - {character.species}
      </p>
      <p className="text-sm mt-1">
        <span className="font-semibold">Origin:</span> {character.origin.name}
      </p>
    </div>
  );
}
