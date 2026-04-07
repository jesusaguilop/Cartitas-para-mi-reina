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
    numeral: "I",
    title: "El Encuentro",
    content:
      "Mi amor, desde el primer momento en que te vi, supe que eras especial. Tu sonrisa iluminó mi mundo de una forma que nunca imaginé posible. Cada día a tu lado es un regalo que atesoro con todo mi corazón. Gracias por existir en mi vida.",
  },
  {
    numeral: "II",
    title: "Amor Verdadero",
    content:
      "Eres la razón por la que creo en el amor verdadero. Antes de ti, pensaba que esas cosas solo pasaban en las películas, pero tú me demostraste que el amor real es aún más bonito. Te amo con cada fibra de mi ser.",
  },
  {
    numeral: "III",
    title: "Mi Promesa",
    content:
      "Prometo cuidarte, protegerte y amarte en cada momento. En los días buenos y en los difíciles, siempre estaré ahí para ti. Eres mi persona favorita, mi compañera de vida, mi todo.",
  },
  {
    numeral: "IV",
    title: "Tus Detalles",
    content:
      "Me encanta cómo me haces reír, cómo me abrazas cuando más lo necesito, cómo me miras con esos ojos llenos de amor. Cada pequeño detalle tuyo me enamora más y más cada día.",
  },
  {
    numeral: "V",
    title: "Mi Paz",
    content:
      "Contigo aprendí que el amor no es perfecto, pero es real. Es despertarse y pensar en ti, es extrañarte cuando no estás, es sentirme completo solo con tu presencia. Tú eres mi paz.",
  },
  {
    numeral: "VI",
    title: "Gratitud",
    content:
      "Gracias por elegirme, por quererme con mis defectos y mis locuras. Gracias por cada abrazo, cada beso, cada 'te quiero'. Eres lo más bonito que me ha pasado en la vida.",
  },
  {
    numeral: "VII",
    title: "Mil Vidas",
    content:
      "Si pudiera pedir un deseo, pediría vivir mil vidas solo para encontrarte en cada una de ellas. No existe un universo donde yo no te ame. Eres mi destino, mi persona, mi hogar.",
  },
  {
    numeral: "VIII",
    title: "Recuerdos",
    content:
      "Cada momento contigo se convierte en mi recuerdo favorito. Las risas, las aventuras, incluso los silencios juntos... todo es perfecto cuando estoy a tu lado. Te amo infinitamente.",
  },
  {
    numeral: "IX",
    title: "Latidos",
    content:
      "Eres mi primer pensamiento al despertar y el último antes de dormir. Mi corazón late por ti y para ti. No hay palabras suficientes para describir lo que siento, pero intentaré demostrártelo cada día.",
  },
  {
    numeral: "X",
    title: "Eternidad",
    content:
      "Mi reina, mi vida, mi amor eterno. Este es solo el comienzo de nuestra historia. Nos esperan mil aventuras más, mil atardeceres juntos, mil razones para seguir amándonos. Estaremos juntos hoy y por la eternidad. Te amo. ♥",
  },
];

function CartasPage() {
  const [openCarta, setOpenCarta] = useState<number | null>(null);

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
          ❦
        </motion.div>

        {/* Grid de cartas — minimalista vintage */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5 mb-14">
          {cartas.map((carta, i) => {
            const isOpen = openCarta === i;

            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setOpenCarta(isOpen ? null : i)}
                className="group relative cursor-pointer"
              >
                <div
                  className={`relative rounded-xl border transition-all duration-400 px-3 py-5 md:px-4 md:py-6 ${
                    isOpen
                      ? "border-rose-deep bg-rose-deep/5 shadow-[0_0_24px_oklch(0.65_0.18_350/0.2)]"
                      : "border-border hover:border-gold bg-card shadow-sm hover:shadow-lg"
                  }`}
                >
                  {/* Numeral romano */}
                  <span
                    className="text-vintage text-2xl md:text-3xl font-bold block mb-2 transition-colors duration-300"
                    style={{ color: isOpen ? "var(--rose-deep)" : "var(--gold)" }}
                  >
                    {carta.numeral}
                  </span>

                  {/* Línea decorativa */}
                  <div
                    className="w-8 h-px mx-auto mb-2 transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "var(--rose-deep)"
                        : "linear-gradient(90deg, transparent, var(--gold), transparent)",
                    }}
                  />

                  {/* Título */}
                  <span className="text-vintage text-xs md:text-sm text-foreground leading-tight block">
                    {carta.title}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Carta abierta — hover para voltear y ver foto */}
        <AnimatePresence mode="wait">
          {openCarta !== null && (
            <motion.div
              key={openCarta}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl mx-auto mb-14"
              style={{ perspective: "1200px" }}
            >
              <div
                className="group/card relative w-full cursor-pointer"
                style={{ minHeight: "380px" }}
              >
                <div
                  className="relative w-full transition-transform duration-700 ease-in-out group-hover/card:[transform:rotateY(180deg)]"
                  style={{ transformStyle: "preserve-3d" }}
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
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="text-vintage text-4xl md:text-5xl font-bold mb-3"
                      style={{ color: "var(--gold)" }}
                    >
                      {cartas[openCarta].numeral}
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

                    <p className="text-vintage text-sm text-muted-foreground mt-8 opacity-50">
                      Pasa el cursor para ver tu foto ♥
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
                        Retira el cursor para volver
                      </p>
                    </div>
                  </div>
                </div>
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
