export default function Navbar({ active, setActive }) {
  return (
    <nav className="w-full max-w-5xl mx-auto flex items-center justify-between py-6 px-4">
      <div className="text-2xl font-bold">Podcast Redes</div>
      <div className="flex gap-3">
        <button
          onClick={() => setActive("home")}
          className={`px-4 py-2 rounded-full transition-colors ${
            active === "home" ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          HOME
        </button>
        <button
          onClick={() => setActive("cuestionario")}
          className={`px-4 py-2 rounded-full transition-colors ${
            active === "cuestionario"
              ? "bg-white text-black"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          CUESTIONARIO
        </button>
      </div>
    </nav>
  );
}