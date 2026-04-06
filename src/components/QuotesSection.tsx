import novia8 from "@/assets/novia-8.png";

const quotes = [
  "Eres la razón de mis sonrisas más sinceras.",
  "Contigo aprendí que el amor no se busca, se encuentra.",
  "Mi corazón tiene tu nombre escrito en cada latido.",
  "Eres mi persona favorita en este mundo y en todos los que existan.",
];

const words = [
  "Hermosa", "Única", "Increíble", "Mi vida",
  "Mi cielo", "Preciosa", "Mi todo", "Perfecta",
];

export function QuotesSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={novia8}
          alt=""
          className="w-full h-full object-cover photo-blur-overlay opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-rose-gradient opacity-90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-vintage text-4xl md:text-5xl text-center text-foreground mb-4">
          Frases para Ti
        </h2>
        <div className="divider-ornament gold-accent text-xl mb-16">✦</div>

        <div className="space-y-8 mb-20">
          {quotes.map((quote, i) => (
            <blockquote
              key={i}
              className="text-vintage text-center text-2xl md:text-3xl text-foreground leading-relaxed opacity-90"
            >
              "{quote}"
            </blockquote>
          ))}
        </div>

        <h2 className="text-vintage text-4xl md:text-5xl text-center text-foreground mb-4">
          Palabras que te Describen
        </h2>
        <div className="divider-ornament gold-accent text-xl mb-12">♥</div>

        <div className="flex flex-wrap justify-center gap-4">
          {words.map((word, i) => (
            <span
              key={i}
              className="card-love px-6 py-3 text-vintage text-lg text-foreground transition-all duration-300 hover:scale-110"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
