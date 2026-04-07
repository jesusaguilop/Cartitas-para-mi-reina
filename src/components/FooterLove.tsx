import novia6 from "@/assets/novia-6.png";
import novia7 from "@/assets/novia-7.png";

export function FooterLove() {
  return (
    <footer className="py-20 px-6 bg-rose-gradient-deep">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-vintage text-4xl md:text-5xl text-foreground mb-4">
          Nosotros
        </h2>
        <div className="divider-ornament gold-accent text-xl mb-12">♥</div>

        <div className="flex justify-center gap-6 mb-12">
          <div className="card-love p-3 w-48 md:w-64" style={{ transform: "rotate(-3deg)" }}>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={novia6} alt="Juntos" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="card-love p-3 w-48 md:w-64" style={{ transform: "rotate(3deg)" }}>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={novia7} alt="Juntos" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <p className="text-vintage text-2xl md:text-3xl text-foreground mb-6">
          "Te quiero, te amo, y te amaré siempre."
        </p>
        <p className="text-body-elegant text-lg text-muted-foreground">
          Con todo mi amor, por la eternidad ♥
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-body-elegant text-sm text-muted-foreground">
            Hecho con amor 💕
          </p>
        </div>
      </div>
    </footer>
  );
}
