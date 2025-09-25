export default function AudioPlayer({ audioRef, isPlaying, togglePlay, progress, volume, setVolume }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * audio.duration;
    audio.currentTime = newTime;
  };

  const currentTime = audioRef.current?.currentTime || 0;
  const duration = audioRef.current?.duration || 0;

  return (
    <div className="flex items-center gap-4 mb-4">
      <button
        onClick={togglePlay}
        className="px-6 py-3 rounded-full bg-white text-black font-bold shadow-lg hover:bg-gray-100 transition-colors"
      >
        {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
      </button>

      <div className="w-full">
        <div
          className="h-3 bg-white/20 rounded-full cursor-pointer hover:bg-white/30 transition-colors"
          onClick={handleProgressClick}
        >
          <div
            className="h-3 bg-indigo-400 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-white/70">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className="flex items-center gap-3">
            <span className="text-sm text-white/70">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}