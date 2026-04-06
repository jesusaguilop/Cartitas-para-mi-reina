import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cartas")({
  component: CartasPage,
});

function CartasPage() {
  return (
    <main className="min-h-screen bg-photo-collage flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-vintage text-4xl md:text-6xl font-bold text-foreground mb-4">
          Mis Cartas de Amor
        </h1>
        <div className="divider-ornament gold-accent text-xl mb-12">💌</div>

        <p className="text-body-elegant text-xl text-muted-foreground mb-12">
          Próximamente llegarán las cartas más bonitas para ti...
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-rose-deep transition-colors text-lg font-display"
        >
          ← Volver
        </Link>
      </div>
    </main>
  );
}
