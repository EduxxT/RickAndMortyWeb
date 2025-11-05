export default function Header({ title }) {
  return (
    <header className="bg-green-600 p-4 shadow-lg text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}
