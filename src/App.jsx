// src/App.jsx
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cuestionario from "./components/Cuestionario";

const audioSrc = "./podcast_redes.m4a";

export default function App() {
  const [active, setActive] = useState("home");
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const onTime = () => {
      if (!audio.duration) return setProgress(0);
      setProgress((audio.currentTime / audio.duration) * 100);
    };
    audio.addEventListener("timeupdate", onTime);

    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((e) => {
        console.warn("Reproducción bloqueada:", e);
      });
      setIsPlaying(true);
    }
  };

  const setVolumeHandler = (v) => {
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      <Navbar active={active} setActive={setActive} />

      <main className="flex-1 py-8">
        {active === "home" ? (
          <Home
            audioRef={audioRef}
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            progress={progress}
            setVolume={setVolumeHandler}
            volume={volume}
          />
        ) : (
          <Cuestionario />
        )}
        <audio ref={audioRef} src={audioSrc} preload="metadata" />
      </main>

      <footer className="w-full py-8 mt-auto border-t border-white/10 bg-black/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-lg font-semibold mb-2">Podcast Redes</div>
          <div className="text-sm text-white/70 mb-1">
            © {new Date().getFullYear()} Grupo I • I.F.T.S - T.S.D.S
          </div>
          
        </div>
      </footer>
    </div>
  );
}
