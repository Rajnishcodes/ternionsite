import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Solutions, Technology, ROSystems, Impact } from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Technology />
        <ROSystems />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
