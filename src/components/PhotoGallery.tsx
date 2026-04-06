import novia2 from "@/assets/novia-2.png";
import novia3 from "@/assets/novia-3.png";
import novia4 from "@/assets/novia-4.png";
import novia5 from "@/assets/novia-5.png";

const photos = [
  { src: novia2, alt: "Mi amor", rotate: "-3deg" },
  { src: novia3, alt: "Mi vida", rotate: "2deg" },
  { src: novia4, alt: "Mi cielo", rotate: "-1deg" },
  { src: novia5, alt: "Mi todo", rotate: "3deg" },
];

export function PhotoGallery() {
  return (
    <section className="py-20 px-6 bg-rose-gradient-deep relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-vintage text-4xl md:text-5xl text-center text-foreground mb-4">
          Momentos Contigo
        </h2>
        <div className="divider-ornament gold-accent text-xl mb-16">✦</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative"
              style={{ transform: `rotate(${photo.rotate})` }}
            >
              <div className="card-love p-3 transition-transform duration-500 hover:scale-105 hover:rotate-0">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="text-vintage text-center text-muted-foreground text-sm mt-3">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
