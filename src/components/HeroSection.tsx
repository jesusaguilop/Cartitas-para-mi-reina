import novia1 from "@/assets/novia-1.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={novia1}
          alt=""
          className="w-full h-full object-cover photo-blur-overlay scale-110 opacity-40"
        />
        <div className="absolute inset-0 bg-rose-gradient opacity-80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl animate-in fade-in duration-1000">
        <p className="text-body-elegant text-muted-foreground text-lg tracking-widest uppercase mb-4">
          Para ti, mi amor
        </p>
        <h1 className="text-vintage text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6">
          Te Amo
        </h1>
        <div className="divider-ornament gold-accent text-2xl mb-6">♥</div>
        <p className="text-body-elegant text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Cada día a tu lado es un regalo que guardo en el corazón.
          <br />
          Eres lo más bonito que me ha pasado.
        </p>
      </div>
    </section>
  );
}
