import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/poemas")({
  component: PoemasPage,
});

const poemas = [
  {
    title: "Te Quiero",
    author: "ineditamente tuyo",
    content: `Te quiero como para escuchar tu risa toda la noche y dormir en tu pecho, sin sombras ni fantasmas. Te quiero como para no soltarte jamás; porque sí te quiero es porque sos mi amor, mi cómplice y todo, y en la calle, codo a codo, somos mucho más que dos.`
  },
  {
    title: "No Te Vayas",
    author: "Mario Benedetti",
    content: `No te vayas, yo te amo.
No te vayas, yo te quiero.
No te vayas, yo te necesito.
No te vayas, yo te espero.
No te vayas, yo te llamo.
No te vayas, yo te busco.
No te vayas, yo te encuentro.
No te vayas, yo te abrazo.
No te vayas, yo te beso.
No te vayas, yo te miro.
No te vayas, yo te siento.
No te vayas, yo te vivo.
No te vayas, yo te sueño.
No te vayas, yo te invento.
No te vayas, yo te canto.
No te vayas, yo te bailo.
No te vayas, yo te río.
No te vayas, yo te lloro.
No te vayas, yo te duermo.
No te vayas, yo te despierto.
No te vayas, yo te como.
No te vayas, yo te bebo.
No te vayas, yo te respiro.
No te vayas, yo te toco.
No te vayas, yo te escucho.
No te vayas, yo te huelo.
No te vayas, yo te veo.
No te vayas, yo te pienso.
No te vayas, yo te amo.`
  },
  {
    title: "El Amor",
    author: "Pablo Neruda",
    content: `¿Qué es el amor? ¿Cómo se explica?
¿Dónde está el amor? ¿Cómo se siente?
El amor es un misterio,
un enigma sin solución.
El amor es una locura,
una pasión sin control.
El amor es una alegría,
una felicidad sin fin.
El amor es una tristeza,
una melancolía profunda.
El amor es una esperanza,
una ilusión infinita.
El amor es una realidad,
una verdad absoluta.
El amor es todo y nada,
es el principio y el fin.`
  },
  {
    title: "Te Miro y Te Quiero",
    author: "Rubén Darío",
    content: `Te miro y te quiero,
te quiero y te miro.
En tus ojos veo
mi amor infinito.

Tus labios son rosas
que besan mi alma,
tu voz es música
que me enamora.

Eres mi princesa,
mi reina, mi diosa,
eres todo lo bello
que hay en la vida.

Te amo con locura,
con pasión ardiente,
eres mi tesoro,
mi amor más valiente.`
  },
  {
    title: "Eres Tú",
    author: "Gustavo Adolfo Bécquer",
    content: `Eres tú, mi amor, la estrella
que alumbra mi camino,
eres tú la primavera
que alegra mi destino.

Tus ojos son luceros
que iluminan mi noche,
tus labios son corales
que endulzan mi reproche.

Eres tú la armonía
de mi vida entera,
eres tú la poesía
que mi alma venera.

Sin ti no hay alegría,
sin ti no hay esperanza,
eres tú mi fortuna,
mi amor, mi bonanza.`
  },
  {
    title: "Amor Eterno",
    author: "Sor Juana Inés de la Cruz",
    content: `Este amor que me consumes,
este fuego que me abrasa,
es eterno como el tiempo,
infinito como el espacio.

Tus ojos son estrellas
que guían mi camino,
tus manos son caricias
que calman mi destino.

Eres tú la melodía
que alegra mi existencia,
eres tú la fantasía
que llena mi conciencia.

Te amo con devoción,
con pasión infinita,
eres mi inspiración,
mi musa bendita.`
  },
  {
    title: "Cómo Te Quiero",
    author: "Mario Benedetti",
    content: `Cómo te quiero
no sé explicarlo
pero te quiero
como si fueras
el último verso
de mi último poema
como si fueras
la última gota
de mi último llanto
como si fueras
el último rayo
de mi último sol
como si fueras
el último beso
de mi último amor
como si fueras
la última página
de mi último libro
como si fueras
la última nota
de mi última canción
como si fueras
la última estrella
de mi último cielo
como si fueras
el último sueño
de mi último dormir
como si fueras
la última esperanza
de mi último deseo
como si fueras
todo lo último
de mi vida entera`
  },
  {
    title: "Mi Amor por Ti",
    author: "Antonio Machado",
    content: `Mi amor por ti es como el río
que corre mansamente,
como el sol que ilumina
los campos florecientes.

Es como la brisa suave
que acaricia las flores,
como el canto del pájaro
en las mañanas de colores.

Tus ojos son luceros
que alumbran mi sendero,
tus labios son promesas
de amor verdadero.

Eres tú mi alegría,
mi paz, mi esperanza,
eres tú la razón
de mi dulce confianza.`
  },
  {
    title: "Soneto XVII",
    author: "Pablo Neruda",
    content: `No te amo como si fueras rosa de sal, topacio
o flecha de claveles que propagan el fuego:
te amo como se aman ciertas cosas oscuras,
secretamente, entre la sombra y el alma.

Te amo como la planta que no florece y lleva
dentro de sí, escondida, la luz de aquellas flores,
y gracias a tu amor vive oscuro en mi cuerpo
el apretado aroma que ascendió de la tierra.

Te amo sin saber cómo, ni cuándo, ni dónde,
te amo simplemente, sin problemas ni orgullo:
te amo así porque no sé amar de otra manera,

sino así de este modo en que no soy ni eres,
tan cerca que tu mano sobre mi pecho es mía,
tan cerca que tus ojos se cierran con mi sueño.`
  },
  {
    title: "Dedicación Eterna",
    author: "Pedro Infante",
    content: `Maldito yo mil veces, si no dedico toda mi vida, toda mi alma y todas mis fuerzas para hacerte feliz`
  }
];

function PoemasPage() {
  const [openPoema, setOpenPoema] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);
  const isMobile = useIsMobile();
  const poemaRef = useRef<HTMLDivElement>(null);

  const handleOpenPoema = useCallback((i: number) => {
    const isOpen = openPoema === i;
    setFlipped(false);
    setOpenPoema(isOpen ? null : i);

    if (!isOpen) {
      setTimeout(() => {
        poemaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [openPoema]);

  return (
    <main className="relative min-h-screen bg-photo-collage px-4 py-12 md:px-6 md:py-16 overflow-hidden">
      <FloatingHearts />
      <MusicPlayer />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-rose-deep transition-colors text-base md:text-lg font-display mb-6 md:mb-8"
        >
          ← Volver
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-vintage text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4"
        >
          Poemas para ti
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="divider-ornament gold-accent text-xl mb-8 md:mb-12"
        >
          ❦
        </motion.div>

        {/* Grid de poemas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 md:mb-14">
          {poemas.map((poema, i) => {
            const isOpen = openPoema === i;
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleOpenPoema(i)}
                className="group relative cursor-pointer"
              >
                <div
                  className={`relative rounded-xl border transition-all duration-300 p-4 sm:p-5 md:p-6 ${
                    isOpen
                      ? "border-rose-deep bg-rose-deep/5 shadow-[0_0_24px_oklch(0.65_0.18_350/0.2)]"
                      : "border-border hover:border-gold bg-card shadow-sm hover:shadow-lg"
                  }`}
                >
                  <span
                    className="text-vintage text-lg sm:text-xl md:text-2xl font-bold block mb-2 transition-colors duration-300"
                    style={{ color: isOpen ? "var(--rose-deep)" : "var(--gold)" }}
                  >
                    {poema.title}
                  </span>
                  <div
                    className="w-8 sm:w-10 h-px mx-auto mb-2 sm:mb-3 transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "var(--rose-deep)"
                        : "linear-gradient(90deg, transparent, var(--gold), transparent)",
                    }}
                  />
                  <span className="text-body-elegant text-xs sm:text-sm text-muted-foreground leading-tight block">
                    {poema.author}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Poema abierto */}
        <AnimatePresence mode="wait">
          {openPoema !== null && (
            <motion.div
              key={openPoema}
              ref={poemaRef}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl mx-auto mb-10 md:mb-14"
              style={{ perspective: "1200px" }}
            >
              <div
                className="relative w-full cursor-pointer"
                onMouseEnter={!isMobile ? () => setFlipped(true) : undefined}
                onMouseLeave={!isMobile ? () => setFlipped(false) : undefined}
                onClick={isMobile ? () => setFlipped((f) => !f) : undefined}
                style={{ minHeight: "400px" }}
              >
                <motion.div
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="relative w-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front: Poema */}
                  <div
                    className="w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
                    style={{
                      backfaceVisibility: "hidden",
                      background: "linear-gradient(160deg, oklch(0.99 0.01 350 / 0.9), oklch(0.95 0.04 350 / 0.85))",
                      backdropFilter: "blur(16px)",
                      border: "1px solid oklch(0.85 0.06 350 / 0.5)",
                      boxShadow: "0 20px 60px oklch(0.65 0.18 350 / 0.15), inset 0 1px 0 oklch(1 0 0 / 0.5)",
                    }}
                  >
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-gold opacity-40 rounded-tl-lg" />
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-gold opacity-40 rounded-tr-lg" />
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-gold opacity-40 rounded-bl-lg" />
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-gold opacity-40 rounded-br-lg" />

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="text-vintage text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
                      style={{ color: "var(--gold)" }}
                    >
                      {poemas[openPoema].title}
                    </motion.div>

                    <h3 className="text-body-elegant text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 italic">
                      por {poemas[openPoema].author}
                    </h3>

                    <div className="divider-ornament gold-accent text-sm mb-4 sm:mb-6">❦</div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-body-elegant text-base sm:text-lg md:text-xl text-foreground leading-relaxed whitespace-pre-line text-left max-w-none"
                    >
                      {poemas[openPoema].content}
                    </motion.div>

                    <p className="text-vintage text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8 opacity-50">
                      {isMobile ? "Toca para ver más 💗" : "Pasa el cursor para ver más 💗"}
                    </p>
                  </div>

                  {/* Back: Información del autor */}
                  <div
                    className="absolute inset-0 w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: "linear-gradient(160deg, oklch(0.25 0.05 350 / 0.8), oklch(0.35 0.08 350 / 0.7))",
                      backdropFilter: "blur(16px)",
                      border: "1px solid oklch(0.65 0.18 350 / 0.5)",
                      boxShadow: "0 20px 60px oklch(0.65 0.18 350 / 0.15)",
                    }}
                  >
                    <div className="text-center h-full flex flex-col justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="text-vintage text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: "var(--gold)" }}
                      >
                        {poemas[openPoema].author}
                      </motion.div>

                      <p className="text-body-elegant text-lg sm:text-xl text-white/90 mb-6">
                        "{poemas[openPoema].title}"
                      </p>

                      <div className="text-vintage text-sm sm:text-base text-white/70 leading-relaxed">
                        <p className="mb-4">
                          Entre todas las personas que existen, te elegí a ti… y no por casualidad, sino porque en ti encontré todo lo que mi corazón buscaba sin saberlo.

Eres la única persona que amo de esta manera, la única con la que quiero compartir mi vida, mis días, mis sueños y todo lo que soy. No hay nadie más en mi mente ni en mi corazón… solo tú.

Quiero estar contigo no solo en los momentos buenos, sino en los difíciles, ayudarte cuando lo necesites, entenderte incluso cuando no tengas palabras, y ser ese apoyo que nunca te falle.

No quiero ser alguien pasajero en tu vida… quiero ser tu compañía, tu confianza, tu paz, tu lugar seguro. Quiero construir algo contigo que dure, que crezca, que resista todo.

Porque no se trata solo de amarte… se trata de elegirte todos los días, para toda la vida.


                        </p>
                        <p>
                          Y eso es exactamente lo que quiero contigo.💕
                        </p>
                      </div>

                      <p className="text-body-elegant text-xs sm:text-sm text-white/50 mt-8">
                        {isMobile ? "Toca para volver al poema" : "Retira el cursor para volver"}
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
          className="text-vintage text-lg sm:text-xl text-foreground mt-6 sm:mt-8"
        >
          "El amor es el poeta de la vida..."
        </motion.p>
        <p className="text-body-elegant text-sm sm:text-base text-muted-foreground mt-2 mb-20">
          Poemas que celebran el amor eterno ♥
        </p>
      </div>
    </main>
  );
}