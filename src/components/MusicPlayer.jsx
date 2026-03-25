import { useEffect, useRef, useState, useContext } from "react"; // ✅ Added useContext
import { DarkModeContext } from "../context/DarkModeContext";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set 50% volume
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay might be blocked by browser
          setIsPlaying(true);
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
      className={`flex items-center gap-3 rounded-full shadow-lg p-2 backdrop-blur-sm bg-black/30 ${
        isDarkMode ? "bg-white/10" : "bg-black/30"
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
          className="w-10 h-10 object-cover"
        />
      </button>

      <audio ref={audioRef} autoPlay src="/audio/music01.mp3" loop />
    </div>
  );
}

export default MusicPlayer;