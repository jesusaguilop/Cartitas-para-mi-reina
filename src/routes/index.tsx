import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { LoveCards } from "@/components/LoveCards";
import { QuotesSection } from "@/components/QuotesSection";
import { FooterLove } from "@/components/FooterLove";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhotoGallery />
      <LoveCards />
      <QuotesSection />
      <FooterLove />
    </main>
  );
}
