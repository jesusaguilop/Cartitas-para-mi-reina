import { createFileRoute, Link } from "@tanstack/react-router";
import novia1 from "@/assets/novia-1.png";
import novia2 from "@/assets/novia-2.png";
import novia3 from "@/assets/novia-3.png";
import novia4 from "@/assets/novia-4.png";
import novia5 from "@/assets/novia-5.png";
import novia6 from "@/assets/novia-6.png";
import novia7 from "@/assets/novia-7.png";
import novia8 from "@/assets/novia-8.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const photos = [
  { src: novia1, top: "5%", left: "2%", rotate: "-12deg", size: "180px" },
  { src: novia2, top: "15%", right: "3%", rotate: "8deg", size: "160px" },
  { src: novia3, bottom: "10%", left: "5%", rotate: "6deg", size: "170px" },
  { src: novia4, bottom: "5%", right: "2%", rotate: "-8deg", size: "190px" },
  { src: novia5, top: "40%", left: "-2%", rotate: "10deg", size: "150px" },
  { src: novia6, top: "35%", right: "-1%", rotate: "-6deg", size: "165px" },
  { src: novia7, top: "60%", left: "8%", rotate: "-4deg", size: "155px" },
  { src: novia8, top: "55%", right: "6%", rotate: "12deg", size: "175px" },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-photo-collage flex items-center justify-center">
      {/* Photo collage background */}
      {photos.map((photo, i) => (
        <div
          key={i}
          className="absolute rounded-2xl overflow-hidden shadow-lg opacity-60 blur-[2px] hover:opacity-80 hover:blur-0 transition-all duration-700"
          style={{
            top: photo.top,
            left: photo.left,
            right: photo.right,
            bottom: photo.bottom,
            transform: `rotate(${photo.rotate})`,
            width: photo.size,
            height: photo.size,
          }}
        >
          <img
            src={photo.src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-photo-collage opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-vintage text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-4 drop-shadow-lg">
          Para Mi Novia
        </h1>
        <p className="text-body-elegant text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-8">
          Con todo mi amor ♥
        </p>

        <div className="divider-ornament gold-accent text-2xl mb-10">♥</div>

        <p className="text-vintage text-2xl md:text-3xl text-foreground mb-12 leading-relaxed drop-shadow-sm">
          "Estaremos juntos hoy y por la eternidad..."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/cartas"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-rose-deep text-primary-foreground px-8 py-4 rounded-full text-lg font-display shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            💌 Mis Cartas de Amor
          </Link>

          <Link
            to="/poemas"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-amber-400 text-foreground px-8 py-4 rounded-full text-lg font-display shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-gold/20"
          >
            📖 Poemas de Amor
          </Link>
        </div>

        <p className="text-body-elegant text-sm text-muted-foreground mt-16">
          Hecho con amor 💕
        </p>
      </div>
    </main>
  );
}
