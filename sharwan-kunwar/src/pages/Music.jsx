import React, { useState, useRef, useEffect, useContext } from "react";
import { motion, useAnimation } from "motion/react";
import { DarkModeContext } from '../context/DarkModeContext';

const musicList = [
  { name: "Focus : Study Track Music 1", file: "/music/music1.mp3", video:"/musicVideo/v1.mp4"},
  { name: "Focus : Study Track Music 2", file: "/music/music2.mp3", video:"/musicVideo/v2.mp4"},
  { name: "Focus : Study Track Music 3", file: "/music/music3.mp3", video:"/musicVideo/v3.mp4"},
  { name: "Focus : Study Track Music 4", file: "/music/music4.mp3", video:"/musicVideo/v4.mp4"},
  { name: "Focus : Study Track Music 5", file: "/music/music5.mp3", video:"/musicVideo/v5.mp4"},
  { name: "Focus : Study Track Music 6", file: "/music/music6.mp3", video:"/musicVideo/v6.mp4"},
  { name: "Focus : Study Track Music 7", file: "/music/music7.mp3", video:"/musicVideo/gg.mp4"},
  { name: "Focus : Study Track Music 8", file: "/music/music8.mp3", video:"/musicVideo/v8.mp4"},
  { name: "Focus : Study Track Music 9", file: "/music/music9.mp3", video:"/musicVideo/v8.mp4"},
  { name: "Focus : Study Track Music 10", file: "/music/music10.mp3", video:"/musicVideo/v10.mp4"},
  { name: "Focus : Study Track Music 11", file: "/music/music11.mp3", video:"/musicVideo/v11.mp4"},
  { name: "Focus : Study Track Music 12", file: "/music/music12.mp3", video:"/musicVideo/v12.mp4"},
  { name: "Focus : Study Track Music 13", file: "/music/music13.mp3", video:"/musicVideo/v13.mp4"},
  { name: "Focus : Study Track Music 14", file: "/music/music14.mp3", video:"/musicVideo/v4.mp4"},
  { name: "Focus : Study Track Music 15", file: "/music/music15.mp3", video:"/musicVideo/v15.mp4"},
  { name: "Focus : Study Track Music 16", file: "/music/music16.mp3", video:"/musicVideo/v16.mp4"},
  { name: "Focus : Study Track Music 17", file: "/music/music17.mp3", video:"/musicVideo/v17.mp4"},
  { name: "Focus : Study Track Music 18", file: "/music/music18.mp3", video:"/musicVideo/v18.mp4"},
  { name: "Focus : Study Track Music 19", file: "/music/music19.mp3", video:"/musicVideo/vv.mp4" },
];

function MusicPlayer({ onRefReady }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isDarkMode } = useContext(DarkModeContext);

  const audioRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (onRefReady) onRefReady(audioRef);
  }, [onRefReady]);

  // Update progress smoothly
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setProgress(audio.currentTime);
    audio.addEventListener("timeupdate", updateProgress);

    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, [currentTrack]);

  // Handle rotating animation (optional)
  useEffect(() => {
    if (isPlaying) {
      controls.start({
        rotate: 360,
        transition: { repeat: Infinity, duration: 4, ease: "linear" },
      });
    } else controls.stop();
  }, [isPlaying]);

  const playTrack = (index) => {
    setCurrentTrack(index);
    setLoading(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.oncanplay = () => {
          setLoading(false);
          audioRef.current.play().catch((err) => console.log(err));
          setIsPlaying(true);
        };
      }
    }, 100);
  };

  const nextTrack = () => {
    if (currentTrack === null) return;
    playTrack((currentTrack + 1) % musicList.length);
  };

  const prevTrack = () => {
    if (currentTrack === null) return;
    playTrack((currentTrack - 1 + musicList.length) % musicList.length);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="w-full h-full rounded-sm mastShadow lg:flex flex-col gap-3 lg:pt-20 pt-20 p-2">
      {/* Left Box */}
      <div className="lg:w-full  lg:py-10 flex flex-col items-center justify-center lg:p-3 rounded-lg relative">
        {/* Album Art */}
        <div className="w-full h-[70vh] backdrop-blur-2xl rounded-lg flex border border-white/5 items-center justify-center mastShadow relative overflow-hidden">
          {musicList[currentTrack]?.video?.endsWith(".mp4") ? (
            <video
              src={process.env.PUBLIC_URL + musicList[currentTrack]?.video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg object-center"
            />

          ) : (
            <img
              src={musicList[currentTrack]?.video}
              alt={musicList[currentTrack]?.name}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>


        <div className={`bg-black/30 text-white backdrop-blur-sm lg:w-[80%] w-full h-[30%] flex flex-col justify-center items-center absolute -bottom-5 rounded-md shadow-lg p-3 ${isDarkMode && "bg-white/30"}`}>
          {/* Track Name */}
        <h2 className="mt-5 lg:text-2xl font-bold text-white text-center">
          {currentTrack !== null ? musicList[currentTrack].name : "Select a track"}
        </h2>

        {/* Progress Bar / Loading */}
            {loading ? (
              <div className="flex items-center gap-2 text-sm text-gray-700 mt-6">
                <span className="animate-spin border-2 border-gray-400 border-t-gray-700 rounded-full w-4 h-4"></span>
                Loading track...
              </div>
            ) : (
              <div className="lg:w-6/8 w-full  mt-4 flex items-center gap-3 justify-center">
                <span className="lg:text-lg lg:font-bold">{formatTime(progress)}</span>
                <div className="w-full h-[30px] bg-indigo-400/30 backdrop-blur-2xl mastShadow rounded-sm flex justify-center items-center">
                  <input
                    type="range"
                    min="0"
                    max={audioRef.current?.duration || 0}
                    value={progress}
                    onChange={(e) => {
                      audioRef.current.currentTime = e.target.value;
                      setProgress(e.target.value);
                    }}
                    className="w-full bg-gray-300 h-[13px] appearance-none"
                  />
                </div>
                <span className="text-lg font-bold">
                  {audioRef.current ? formatTime(audioRef.current.duration) : "0:00"}
                </span>
              </div>
            )}

        {/* Audio Player */}
        {currentTrack !== null && (
          <>
            <audio ref={audioRef} src={musicList[currentTrack].file} loop />

            {/* Controls */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={prevTrack}
                className="px-4 py-2 bg-white text-black font-medium rounded-sm mastShadow hover:text-white hover:bg-indigo-700 transition"
              >
                Prev
              </button>
              <button
                onClick={() => {
                  if (!audioRef.current) return;
                  if (audioRef.current.paused) audioRef.current.play();
                  else audioRef.current.pause();
                  setIsPlaying(!audioRef.current.paused);
                }}
                className="px-4 py-2 bg-white text-black rounded-sm mastShadow hover:bg-indigo-700 transition hover:text-white font-medium"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                onClick={nextTrack}
                className="px-4 py-2 bg-white text-black rounded-sm mastShadow font-medium hover:text-white hover:bg-indigo-700 transition"
              >
                Next
              </button>
            </div>

            
          </>
        )}
        </div>

        
      </div>

      {/* Right Box: Playlist */}
      <div
        className="lg:w-full lg:h-[590px] h-[250px] p-5 mt-10 overflow-y-auto scroll-smooth transition-transform rounded-md"
        style={{ maxHeight: "100%", scrollBehavior: "smooth" }}
      >
        <h3 className="text-xl font-semibold mb-4">Playlist</h3>
        {musicList.map((track, index) => (
          <div
            key={index}
            onClick={() => playTrack(index)}
            className={`flex items-center justify-between p-3 mb-2 rounded-lg cursor-pointer transition-all duration-200 mastShadow
              ${currentTrack === index ? "bg-indigo-600 text-white shadow-md" : "bg-white hover:bg-gray-100"}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold mastShadow">
                🎵
              </div>
              <span className="font-medium text-black">{track.name}</span>
            </div>
            {currentTrack === index && <span className="mastShadow">▶️</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicPlayer;
