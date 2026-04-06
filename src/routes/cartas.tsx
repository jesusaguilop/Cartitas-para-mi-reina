import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/cartas")({
  component: CartasPage,
});

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

  return (
    <main className="min-h-screen bg-photo-collage px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-rose-deep transition-colors text-lg font-display mb-8"
        >
          ← Volver
        </Link>

        <h1 className="text-vintage text-4xl md:text-6xl font-bold text-foreground mb-4">
          Mis Cartas de Amor
        </h1>
        <div className="divider-ornament gold-accent text-xl mb-12">💌</div>

        {/* Botones estilo referencia */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cartas.map((carta, i) => (
            <button
              key={i}
              onClick={() => setOpenCarta(openCarta === i ? null : i)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-lg font-display shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                openCarta === i
                  ? "bg-rose-deep text-primary-foreground scale-105"
                  : "bg-gradient-to-r from-primary to-rose-deep text-primary-foreground"
              }`}
            >
              {carta.emoji} {carta.title}
            </button>
          ))}
        </div>

        {/* Carta abierta */}
        {openCarta !== null && (
          <div className="card-love p-8 md:p-12 mb-12 animate-in fade-in duration-500">
            <div className="text-4xl mb-4">{cartas[openCarta].emoji}</div>
            <h2 className="text-vintage text-2xl md:text-3xl text-foreground mb-6">
              {cartas[openCarta].title}
            </h2>
            <p className="text-body-elegant text-lg md:text-xl text-muted-foreground leading-relaxed">
              {cartas[openCarta].content}
            </p>
          </div>
        )}

        <p className="text-vintage text-xl text-foreground mt-8">
          "Estaremos juntos hoy y por la eternidad..."
        </p>
        <p className="text-body-elegant text-muted-foreground mt-2">
          Con amor infinito, tu novio ♥
        </p>
      </div>
    </main>
  );
}
