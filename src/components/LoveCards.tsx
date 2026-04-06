const cards = [
  {
    title: "Lo que más amo de ti",
    text: "Tu sonrisa ilumina mis días más oscuros. Tu risa es mi melodía favorita. Tu abrazo es mi lugar seguro en el mundo.",
  },
  {
    title: "Mi promesa",
    text: "Prometo amarte en cada amanecer y en cada atardecer. Ser tu refugio cuando el mundo sea mucho, y tu compañero en cada aventura.",
  },
  {
    title: "Gracias por existir",
    text: "Gracias por elegirme, por quererme con mis locuras y por hacer de cada momento ordinario algo extraordinario.",
  },
];

export function LoveCards() {
  return (
    <section className="py-20 px-6 bg-rose-gradient">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-vintage text-4xl md:text-5xl text-center text-foreground mb-4">
          Carticas de Amor
        </h2>
        <div className="divider-ornament gold-accent text-xl mb-16">♥</div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="card-love p-8 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="gold-accent text-3xl text-center mb-4">❦</div>
              <h3 className="text-vintage text-xl text-center text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-body-elegant text-center text-muted-foreground text-lg leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
