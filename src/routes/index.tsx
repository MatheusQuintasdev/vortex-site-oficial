import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect } from "react";
import { Navbar } from "@/components/vortex/Navbar";
import { Hero } from "@/components/vortex/Hero";
import { ErrorBoundary } from "@/components/ui/error-boundary";

// Lazy-load everything below the fold to keep FCP/LCP fast
const LampDemo = lazy(() =>
  import("@/components/ui/lamp").then((m) => ({ default: m.LampDemo }))
);
const Interactive3D = lazy(() =>
  import("@/components/vortex/Interactive3D").then((m) => ({ default: m.Interactive3D }))
);
const Showcase = lazy(() =>
  import("@/components/vortex/Showcase").then((m) => ({ default: m.Showcase }))
);
const Features = lazy(() =>
  import("@/components/vortex/Features").then((m) => ({ default: m.Features }))
);
const Process = lazy(() =>
  import("@/components/vortex/Process").then((m) => ({ default: m.Process }))
);
const Testimonials = lazy(() =>
  import("@/components/vortex/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const Pricing = lazy(() =>
  import("@/components/vortex/Pricing").then((m) => ({ default: m.Pricing }))
);
const FinalCTA = lazy(() =>
  import("@/components/vortex/FinalCTA").then((m) => ({ default: m.FinalCTA }))
);
const Footer = lazy(() =>
  import("@/components/vortex/Footer").then((m) => ({ default: m.Footer }))
);
const FloatingWhatsApp = lazy(() =>
  import("@/components/vortex/FloatingWhatsApp").then((m) => ({ default: m.FloatingWhatsApp }))
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vortex Digital Innovations — sites premium que vendem por você" },
      {
        name: "description",
        content:
          "Agência de web design focada em alta conversão. Sites premium, design brutalista e performance extrema. Fale agora no WhatsApp.",
      },
      { property: "og:title", content: "Vortex Digital Innovations — sites premium que vendem" },
      { property: "og:description", content: "Estruturas digitais focadas em performance e lucro." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <ErrorBoundary fallback={null}>
          <LampDemo />
        </ErrorBoundary>
        <ErrorBoundary fallback={null}>
          <Interactive3D />
        </ErrorBoundary>
        <Showcase />
        <Features />
        <Process />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </main>
  );
}
