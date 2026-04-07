import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMOJIS = ["💙", "💗", "💕", "🩵", "🩷", "💌", "🤍", "♥", "💘", "🦋", "✨", "🫶"];

interface Particle {
  id: number;
  emoji: string;
  x: number;
  size: number;
  duration: number;
  delay: number;
  swayAmount: number;
}

let idCounter = 0;

export function FloatingHearts() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (): Particle => ({
      id: idCounter++,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      x: Math.random() * 100,
      size: 14 + Math.random() * 18,
      duration: 6 + Math.random() * 8,
      delay: 0,
      swayAmount: 30 + Math.random() * 60,
    });

    // Initial batch
    const initial: Particle[] = [];
    for (let i = 0; i < 8; i++) {
      initial.push({ ...createParticle(), delay: Math.random() * 4 });
    }
    setParticles(initial);

    const interval = setInterval(() => {
      setParticles((prev: Particle[]) => {
        const next = [...prev.slice(-20), createParticle()];
        return next;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {particles.map((p: Particle) => (
          <motion.div
            key={p.id}
            initial={{ y: "110vh", x: `${p.x}vw`, opacity: 0, rotate: 0 }}
            animate={{
              y: "-10vh",
              x: [
                `${p.x}vw`,
                `${p.x + p.swayAmount / 5}vw`,
                `${p.x - p.swayAmount / 5}vw`,
                `${p.x}vw`,
              ],
              opacity: [0, 0.8, 0.8, 0.6, 0],
              rotate: [0, 15, -15, 10, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "linear",
              x: { duration: p.duration, ease: "easeInOut" },
            }}
            onAnimationComplete={() => {
              setParticles((prev: Particle[]) => prev.filter((pp: Particle) => pp.id !== p.id));
            }}
            style={{ fontSize: p.size, position: "absolute" }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
