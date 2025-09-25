import AudioPlayer from "./AudioPlayer";

export default function Home({ audioRef, isPlaying, togglePlay, progress, setVolume, volume }) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 rounded-3xl shadow-2xl">
        <div className="text-white">
          <h1 className="text-4xl font-extrabold mb-4">🎙️ Podcast: Redes & Tecnología</h1>
          <p className="mb-6 text-white/80">
            Escuchá episodios donde se responden preguntas clave sobre redes, protocolos y
            arquitectura. Ideal para estudiantes y profesionales.
          </p>

          <AudioPlayer
            audioRef={audioRef}
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            progress={progress}
            volume={volume}
            setVolume={setVolume}
          />

          <p className="text-xs text-white/70">
            Episodios pensados para cubrir las preguntas del cuestionario. Podés pausar y
            avanzar donde quieras.
          </p>
        </div>

        <div className="flex justify-end">
          <img
            src="./cover_podcast_redes.jpg"
            alt="Podcast Artwork"
            className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}