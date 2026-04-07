import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useIsMobile } from "@/hooks/use-mobile";

import novia1 from "@/assets/novia-1.png";
import novia2 from "@/assets/novia-2.png";
import novia3 from "@/assets/novia-3.png";
import novia4 from "@/assets/novia-4.png";
import novia5 from "@/assets/novia-5.png";
import novia6 from "@/assets/novia-6.png";
import novia7 from "@/assets/novia-7.png";
import novia8 from "@/assets/novia-8.png";
import juntos from "@/assets/juntos.jpeg";
import linda from "@/assets/linda.jpeg";

export const Route = createFileRoute("/cartas")({
  component: CartasPage,
});

const fotos = [novia1, novia2, novia3, novia4, novia5, novia6, novia7, novia8];

const cartas = [

  { numeral: "I", title: "El Encuentro", content: "Eres de esas cosas bonitas que llegan sin avisar para quedarse, que le da un toque diferente y sereno a la vida. Aún recuerdo cuando empezamos a ser diarios y acercarnos más al otro, creando ese sentimiento especial y tranquilo. No sé en qué momento pasaste de ser alguien que acababa de conocer, a alguien con quien quiero compartir momentos, aprender cosas nuevas y sentirme en paz. Pero me alegra que haya pasado. Gracias por aparecer en mi vida, porque desde entonces, mi vida no es la misma :)" },
  { numeral: "II", title: "Amor Verdadero", content: "Eres la razón por la que creo en el amor verdadero. Contigo he aprendido que el amor no se trata de solo momentos felices, sino de elegir quedarse, de querer entender y confiar, de cuidar incluso en los dias más complicados y dificiles. Eso es lo que siento por ti. No es pasajero, no es temporal... es pensar en ti sin darme cuenta, es querer verte bien incluso antes que a mi, es sentir tranquilidad a tu lado y extrañarte cuando estas lejos. Eres la persona con la que quiero seguir aprendiendo, construyendo, equivocándome y creciendo... Porque lo que tengo claro ahora mismo es que te amo de verdad. No te amo a medias, ni un poquito, te amo totalmente, con todo mi ser." },
  { numeral: "III", title: "Mi Promesa", content: "Prometo cuidarte, protegerte y amarte en cada momento. En los días buenos y en los difíciles, siempre estaré ahí para ti. No dudes que estaré, no te soltaré, no te dejaré, estaré para ti cuando sea, donde sea, cuando quieras, porque cuando la vida sea cruel contigo, yo estaré en tu puerta por si necesitas ayuda. Apagaré todo, mentiré, rogaré, engañaré para que estes bien. Eres mi persona favorita, mi compañera de vida. Lo eres todo, absolutamente todo para mi. Yo haré todo por ti." },
  { numeral: "IV", title: "Tus Detalles", content: "Me encanta cómo me haces reír, cómo me abrazas con la ternura que lo haces, cómo me miras con esos hermosos ojitos llenos de amor. Cada pequeño detalle tuyo me enamora más y más cada día. Amo tu risa, tu sonrisa, haria lo que fuese para que sigas sonriendo, para que sigas siendo feliz. Cada momento contigo es un regalo que aprecio con toda mi alma." },
  { numeral: "V", title: "Mi Paz", content: "Entre tantos dias pesados, dias apresurados y momentos dificiles, tú te convertiste en mi refugio, en ese espacio donde todo se detiene, donde puedo respirar, pensar mejor y sin fingir nada. Eres ese abrazo que calma, esa voz que me consuela y que ordena mis pensamientos, esa presencia que hace que todo pese menos. El mundo puede ser un total caos, mi cabeza puede ser un total desorden pero sabes que estas tú...hace que todo tenga un equilibrio. Tú no eres solo alguien importante para mi...eres mi paz en medio de todo. Y eso, no lo cambio por nada. Te amo" },
  { numeral: "VI", title: "Gratitud", content: "Gracias por elegirme, por quererme con mis defectos y mis locuras. Gracias por cada abrazo, cada beso, cada 'te quiero'. Gracias por aguantarme en mis momentos de debilidad y no dejarme solo, no tengo palabras para expresar lo agradecido que estoy de que estes aqui. Gracias por ser tú. Te amo" },
  { numeral: "VII", title: "Mil Vidas", content: "Si pudiera pedir un deseo, pediría vivir mil vidas solo para encontrarte en cada una de ellas. Si existieran mil libros, mil historias, mil comienzos, mil mundos... en cada uno  de ellos te volveria a elegir, sin dudarlo. Porque hay personas que no son casualidad, que se sientes como destino y eso es lo que tu eres para mi. Te amo 3 millones" },
  { numeral: "VIII", title: "Recuerdos", content: "Cada momento contigo se convierte en mi recuerdo favorito. Las risas, las aventuras, incluso los silencios juntos... todo es perfecto cuando estoy a tu lado. A veces me pongo a pensar en todo lo que hemos vivido y me doy cuenta que no son solo momentos, es historia. Me gusta volvera a esos recuerdos, porque en cada uno estás tú y en cada uno encuentro una razón para quererte mucho más. Y saber que aún nos quedan muchos más por crear me hace sentir realmente feliz. Más momentos, más historias, más recuerdos que algun dia miraré atrás y volveran a hacerme sonreir. Porque algo que si tengo claro, es que mis recuerdos favoritos... siempre te incluyen a tí. Te amo en todos los universos." },
  { numeral: "IX", title: "Latidos", content: "Eres mi primer pensamiento al despertar y el último antes de dormir. Ese ritmo constante que me recuerda que estoy vivo. Cuando estoy contigo, todo se calma, pero al mismo tiempo mi corazón late distinto, más fuerte, más sincero. Como si supiera que está donde quiere estar. Y cuando no estás, hay algo que te extraña en silencio, algo que te busca incluso sin palabras, como si cada latido intentara acercarme a tí. No hay palabras suficientes para describir lo que siento, pero mientras mi corazón siga latiendo intentaré demostrártelo cada día y voy a seguir eligiendote. Tú eres mi camino, y siempre vas a ser mi camino. Puede que hayan mil razones para no estar juntos, pero estoy harto de ellas. Hay que hacer una elección, y yo te elijo a ti, porque te voy a seguir, te seguiré a todas partes... te seguiré el resto de mi vida" },
  { numeral: "X", title: "Eternidad", content: "Tenemos una promesa, una la cual nos une. La eternidad. Te amo en esta tierra, en cada dia que compartimos, en cada momento que vivimos. Pero mi amor no se queda ahí y cuando seamos raptados y todo lo terrenal quede atrás, mi amor seguirá intacto. Porque mi amor no depende del tiempo, ni el lugar, sino de lo que eres tú para mi. Te seguiré amando más allá de lo que conocemos porque de lo que si tengo claro, es que Dios nos unió y tú serás mi compañia eterna y yo la tuya. No es solo una promesa...es una certeza.  Estaremos juntos hoy y por la eternidad. Te amo. ♥" },
];

function CartasPage() {
  const [openCarta, setOpenCarta] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);
  const isMobile = useIsMobile();
  const cartaRef = useRef<HTMLDivElement>(null);

  const handleOpenCarta = useCallback((i: number) => {
    const isOpen = openCarta === i;
    setFlipped(false);
    setOpenCarta(isOpen ? null : i);

    if (!isOpen) {
      setTimeout(() => {
        cartaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [openCarta]);

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
          Mis Cartas de Amor
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="divider-ornament gold-accent text-xl mb-8 md:mb-12"
        >
          ❦
        </motion.div>

        {/* Grid de cartas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5 mb-10 md:mb-14">
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
                onClick={() => handleOpenCarta(i)}
                className="group relative cursor-pointer"
              >
                <div
                  className={`relative rounded-xl border transition-all duration-300 px-3 py-4 sm:py-5 md:px-4 md:py-6 ${
                    isOpen
                      ? "border-rose-deep bg-rose-deep/5 shadow-[0_0_24px_oklch(0.65_0.18_350/0.2)]"
                      : "border-border hover:border-gold bg-card shadow-sm hover:shadow-lg"
                  }`}
                >
                  <span
                    className="text-vintage text-xl sm:text-2xl md:text-3xl font-bold block mb-1 sm:mb-2 transition-colors duration-300"
                    style={{ color: isOpen ? "var(--rose-deep)" : "var(--gold)" }}
                  >
                    {carta.numeral}
                  </span>
                  <div
                    className="w-6 sm:w-8 h-px mx-auto mb-1 sm:mb-2 transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "var(--rose-deep)"
                        : "linear-gradient(90deg, transparent, var(--gold), transparent)",
                    }}
                  />
                  <span className="text-vintage text-[11px] sm:text-xs md:text-sm text-foreground leading-tight block">
                    {carta.title}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Carta abierta — tap/hover para voltear */}
        <AnimatePresence mode="wait">
          {openCarta !== null && (
            <motion.div
              key={openCarta}
              ref={cartaRef}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl mx-auto mb-10 md:mb-14"
              style={{ perspective: "1200px" }}
            >
              <div
                className="relative w-full cursor-pointer"
                onMouseEnter={!isMobile ? () => setFlipped(true) : undefined}
                onMouseLeave={!isMobile ? () => setFlipped(false) : undefined}
                onClick={isMobile ? () => setFlipped((f) => !f) : undefined}
                style={{ minHeight: "320px" }}
              >
                <motion.div
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="relative w-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front: Carta */}
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
                      className="text-vintage text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
                      style={{ color: "var(--gold)" }}
                    >
                      {cartas[openCarta].numeral}
                    </motion.div>

                    <h2 className="text-vintage text-xl sm:text-2xl md:text-3xl text-foreground mb-2">
                      {cartas[openCarta].title}
                    </h2>

                    <div className="divider-ornament gold-accent text-sm mb-4 sm:mb-6">❦</div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-body-elegant text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                      {cartas[openCarta].content}
                    </motion.p>

                    <p className="text-vintage text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8 opacity-50">
                      {isMobile ? "Toca para ver tu foto 💗" : "Pasa el cursor para ver tu foto 💗"}
                    </p>
                  </div>

                  {/* Back: Foto */}
                  <div
                    className="absolute inset-0 w-full rounded-2xl sm:rounded-3xl overflow-hidden"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${
                          openCarta === 9
                            ? juntos
                            : openCarta === 4 || openCarta === 5
                            ? linda
                            : fotos[openCarta % fotos.length]
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, oklch(0.25 0.05 350 / 0.7), transparent 60%)" }}
                    />
                    <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center">
                      <p className="text-vintage text-lg sm:text-xl text-white drop-shadow-lg">
                        Te amo 💙
                      </p>
                      <p className="text-body-elegant text-xs sm:text-sm text-white/70 mt-1">
                        {isMobile ? "Toca para volver a la carta" : "Retira el cursor para volver"}
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
          "Estaremos juntos hoy y por la eternidad..."
        </motion.p>
        <p className="text-body-elegant text-sm sm:text-base text-muted-foreground mt-2 mb-20">
          Con amor infinito, tu novio ♥
        </p>
      </div>
    </main>
  );
}
