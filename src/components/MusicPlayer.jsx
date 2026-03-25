import { useEffect, useRef, useState, useContext } from "react"; // ✅ Added useContext
import { DarkModeContext } from "../context/DarkModeContext";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set 50% volume
      audioRef.current
        .play()
        .then(() => setIsPlaying(false))
        .catch(() => {
          // Autoplay might be blocked by browser
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`flex h-2.5 items-center gap-3 rounded-full p-0 backdrop-blur-sm  ${
        isDarkMode ? "bg-white/30" : "bg-black/20"
      }`}
    >
      <button
        onClick={togglePlay}
        className={`flex items-center justify-center w-15 h-1 rounded-full transition ${
          isPlaying ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-50"
        }`}
      >
        <img
          src="/icons/wave.png"
          alt="music icon"
          className="w-10 h-4 object-cover"
        />
      </button>

      <audio ref={audioRef}  src="/audio/music01.mp3" loop />
    </div>
  );
}

export default MusicPlayer;