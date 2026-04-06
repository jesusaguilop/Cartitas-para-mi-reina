import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import novia1 from "@/assets/novia-1.png";
import novia2 from "@/assets/novia-2.png";
import novia3 from "@/assets/novia-3.png";
import novia4 from "@/assets/novia-4.png";
import novia5 from "@/assets/novia-5.png";
import novia6 from "@/assets/novia-6.png";
import novia7 from "@/assets/novia-7.png";
import novia8 from "@/assets/novia-8.png";

export const Route = createFileRoute("/cartas")({
  component: CartasPage,
});

const fotos = [novia1, novia2, novia3, novia4, novia5, novia6, novia7, novia8];

const cartas = [
  {
    emoji: "💖",
    title: "Primera Carta",
    content:
      "Mi amor, desde el primer momento en que te vi, supe que eras especial. Tu sonrisa iluminó mi mundo de una forma que nunca imaginé posible. Cada día a tu lado es un regalo que atesoro con todo mi corazón. Gracias por existir en mi vida.",
  },
  {
    emoji: "🌹",
    title: "Segunda Carta",
    content:
      "Eres la razón por la que creo en el amor verdadero. Antes de ti, pensaba que esas cosas solo pasaban en las películas, pero tú me demostraste que el amor real es aún más bonito. Te amo con cada fibra de mi ser.",
  },
  {
    emoji: "💝",
    title: "Tercera Carta",
    content:
      "Prometo cuidarte, protegerte y amarte en cada momento. En los días buenos y en los difíciles, siempre estaré ahí para ti. Eres mi persona favorita, mi compañera de vida, mi todo.",
  },
  {
    emoji: "🌟",
    title: "Cuarta Carta",
    content:
      "Me encanta cómo me haces reír, cómo me abrazas cuando más lo necesito, cómo me miras con esos ojos llenos de amor. Cada pequeño detalle tuyo me enamora más y más cada día.",
  },
  {
    emoji: "💕",
    title: "Quinta Carta",
    content:
      "Contigo aprendí que el amor no es perfecto, pero es real. Es despertarse y pensar en ti, es extrañarte cuando no estás, es sentirme completo solo con tu presencia. Tú eres mi paz.",
  },
  {
    emoji: "💐",
    title: "Sexta Carta",
    content:
      "Gracias por elegirme, por quererme con mis defectos y mis locuras. Gracias por cada abrazo, cada beso, cada 'te quiero'. Eres lo más bonito que me ha pasado en la vida.",
  },
  {
    emoji: "✨",
    title: "Séptima Carta",
    content:
      "Si pudiera pedir un deseo, pediría vivir mil vidas solo para encontrarte en cada una de ellas. No existe un universo donde yo no te ame. Eres mi destino, mi persona, mi hogar.",
  },
  {
    emoji: "🦋",
    title: "Octava Carta",
    content:
      "Cada momento contigo se convierte en mi recuerdo favorito. Las risas, las aventuras, incluso los silencios juntos... todo es perfecto cuando estoy a tu lado. Te amo infinitamente.",
  },
  {
    emoji: "💗",
    title: "Novena Carta",
    content:
      "Eres mi primer pensamiento al despertar y el último antes de dormir. Mi corazón late por ti y para ti. No hay palabras suficientes para describir lo que siento, pero intentaré demostrártelo cada día.",
  },
  {
    emoji: "👑",
    title: "Décima Carta",
    content:
      "Mi reina, mi vida, mi amor eterno. Este es solo el comienzo de nuestra historia. Nos esperan mil aventuras más, mil atardeceres juntos, mil razones para seguir amándonos. Estaremos juntos hoy y por la eternidad. Te amo. ♥",
  },
];

function CartasPage() {
  const [openCarta, setOpenCarta] = useState<number | null>(null);
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (i: number) => {
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <main className="min-h-screen bg-photo-collage px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-5xl mx-auto text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-rose-deep transition-colors text-lg font-display mb-8"
        >
          ← Volver
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-vintage text-4xl md:text-6xl font-bold text-foreground mb-4"
        >
          Mis Cartas de Amor
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="divider-ornament gold-accent text-xl mb-12"
        >
          💌
        </motion.div>

        {/* Grid de sobres / cartas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-14">
          {cartas.map((carta, i) => {
            const isOpen = openCarta === i;
            const foto = fotos[i % fotos.length];

            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.08, rotate: i % 2 === 0 ? 2 : -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpenCarta(isOpen ? null : i)}
                className="group relative cursor-pointer"
              >
                {/* Envelope card */}
                <div
                  className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
                    isOpen
                      ? "border-rose-deep shadow-[0_0_30px_oklch(0.65_0.18_350/0.3)]"
                      : "border-border hover:border-primary shadow-lg hover:shadow-xl"
                  }`}
                  style={{
                    background: isOpen
                      ? "linear-gradient(145deg, oklch(0.92 0.08 350), oklch(0.85 0.12 350))"
                      : "linear-gradient(145deg, oklch(0.98 0.02 350), oklch(0.94 0.04 350))",
                  }}
                >
                  {/* Mini photo */}
                  <div className="aspect-square overflow-hidden rounded-t-xl">
                    <img
                      src={foto}
                      alt=""
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                      style={{ filter: "saturate(0.8) brightness(1.05)" }}
                    />
                    {/* Overlay gradient */}
                    <div
                      className="absolute inset-0 rounded-t-xl"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 40%, oklch(0.95 0.04 350 / 0.9))",
                      }}
                    />
                  </div>

                  {/* Label */}
                  <div className="relative px-2 py-3 text-center">
                    <span className="text-2xl block mb-1">{carta.emoji}</span>
                    <span className="text-vintage text-xs md:text-sm text-foreground font-semibold leading-tight block">
                      {carta.title}
                    </span>
                    {isOpen && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        className="h-0.5 mx-auto mt-2 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, oklch(0.55 0.2 350), transparent)",
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Seal dot */}
                <div
                  className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full border-2 border-white shadow-md transition-colors duration-300 ${
                    isOpen ? "bg-rose-deep" : "bg-gold"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Carta abierta con flip */}
        <AnimatePresence mode="wait">
          {openCarta !== null && (
            <motion.div
              key={openCarta}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: 10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl mx-auto mb-14"
              style={{ perspective: "1200px" }}
            >
              <div
                className="relative w-full cursor-pointer"
                onClick={() => toggleFlip(openCarta)}
                style={{
                  transformStyle: "preserve-3d",
                  minHeight: "380px",
                }}
              >
                <motion.div
                  animate={{ rotateY: flipped[openCarta] ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full"
                >
                  {/* Front: Carta */}
                  <div
                    className="w-full rounded-3xl p-8 md:p-12"
                    style={{
                      backfaceVisibility: "hidden",
                      background:
                        "linear-gradient(160deg, oklch(0.99 0.01 350 / 0.9), oklch(0.95 0.04 350 / 0.85))",
                      backdropFilter: "blur(16px)",
                      border: "1px solid oklch(0.85 0.06 350 / 0.5)",
                      boxShadow:
                        "0 20px 60px oklch(0.65 0.18 350 / 0.15), inset 0 1px 0 oklch(1 0 0 / 0.5)",
                    }}
                  >
                    {/* Decorative corners */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold opacity-40 rounded-tl-lg" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold opacity-40 rounded-tr-lg" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold opacity-40 rounded-bl-lg" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold opacity-40 rounded-br-lg" />

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2,
                      }}
                      className="text-5xl mb-4"
                    >
                      {cartas[openCarta].emoji}
                    </motion.div>

                    <h2 className="text-vintage text-2xl md:text-3xl text-foreground mb-2">
                      {cartas[openCarta].title}
                    </h2>

                    <div className="divider-ornament gold-accent text-sm mb-6">
                      ❦
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-body-elegant text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                      {cartas[openCarta].content}
                    </motion.p>

                    <p className="text-vintage text-sm text-muted-foreground mt-8 opacity-60">
                      Toca para ver tu foto ✨
                    </p>
                  </div>

                  {/* Back: Foto */}
                  <div
                    className="absolute inset-0 w-full rounded-3xl overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src={fotos[openCarta % fotos.length]}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{ minHeight: "380px" }}
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, oklch(0.25 0.05 350 / 0.7), transparent 60%)",
                      }}
                    />
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                      <p className="text-vintage text-xl text-white drop-shadow-lg">
                        Te amo ♥
                      </p>
                      <p className="text-body-elegant text-sm text-white/70 mt-1">
                        Toca para volver a la carta
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-vintage text-xl text-foreground mt-8"
        >
          "Estaremos juntos hoy y por la eternidad..."
        </motion.p>
        <p className="text-body-elegant text-muted-foreground mt-2">
          Con amor infinito, tu novio ♥
        </p>
      </div>
    </main>
  );
}
