import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const MUSIC_URL = "https://cdn.pixabay.com/audio/2024/11/28/audio_3a4e213462.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center text-2xl border-2 border-border"
      aria-label={playing ? "Pausar música" : "Reproducir música"}
      title={playing ? "Pausar música" : "Reproducir música"}
    >
      {playing ? (
        <motion.span
          key="pause"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
        >
          ♫
        </motion.span>
      ) : (
        <motion.span
          key="play"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
        >
          ♪
        </motion.span>
      )}
    </motion.button>
  );
}
