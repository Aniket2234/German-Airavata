import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Header />

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
}