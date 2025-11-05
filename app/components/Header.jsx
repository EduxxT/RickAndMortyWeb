import Image from 'next/image'

export default function Header({ title }) {
  return (
    <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 shadow-lg p-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 border-b border-green-400">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
      src="/rickland.jpg"
      alt="Landscape picture"
      width={220}
      height={80}
    />
        </div>

      {/* Title */}
      <h1 className="text-3xl font-extrabold tracking-wide text-white text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
        {title}
      </h1>

      {/* Optional decorative element */}
      <div className="hidden sm:block w-12 h-12 rounded-full bg-green-400 blur-md opacity-70 animate-pulse"></div>
    </header>
  );
}
