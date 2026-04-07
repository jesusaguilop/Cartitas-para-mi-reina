import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import song1 from "../music/Morat - No Se Va.mp3"
import song2 from "../music/Phillip Phillips - Gone, Gone, Gone.mp3"
import song3 from "../music/A Thousand Years.mp3"
// 🎵 Agrega aquí tus dos canciones
const SONGS = [song1,song2,song3];

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);

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

  return (
    <motion.button
      onClick={toggle}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center text-2xl border-2 border-border"
      aria-label={playing ? "Pausar música" : "Reproducir música"}
      title={playing ? "Pica para cambiar de música" : "Pica para reproducir o cambiar de música"}
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
  );
}