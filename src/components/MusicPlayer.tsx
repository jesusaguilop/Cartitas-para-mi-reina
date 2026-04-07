import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import song1 from "../music/Morat - No Se Va.mp3"
import song2 from "../music/Phillip Phillips - Gone, Gone, Gone.mp3"
import song3 from "../music/A Thousand Years.mp3"
import song4 from "../music/Mi vida entera.mp3"
// 🎵 Agrega aquí tus dos canciones
const SONGS = [song2,song1,song3,song4];

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const audio = new Audio(SONGS[0]);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Intentar reproducir automáticamente al cargar
    audio.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      // Si falla el auto-play (debido a políticas del navegador), queda en pausa
      setPlaying(false);
    });

    return () => {
      audio.pause();
      audio.src = "";
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      // ⏸ Pausa y prepara la SIGUIENTE canción
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      const nextIndex = (songIndex + 1) % SONGS.length;
      audioRef.current.src = SONGS[nextIndex];
      audioRef.current.load();
      setSongIndex(nextIndex);
    } else {
      // ▶ Reproduce la canción que ya está cargada
      audioRef.current.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  const handleMouseEnter = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(true);
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 3000); // 3 segundos
  };

  const handleMouseLeave = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={toggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center text-2xl border-2 border-border relative"
        aria-label={playing ? "Pausar música" : "Reproducir música"}
      >
        {playing ? (
          <motion.span key="pause" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>
            ♫
          </motion.span>
        ) : (
          <motion.span key="play" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>
            ♪
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg border max-w-xs text-center"
          >
            Pica aquí si quieres pausar y cambiar de canción
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}