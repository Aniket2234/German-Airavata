import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Services } from "@/components/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Header />

      <main className="pt-20">
        <Services />
      </main>

      <Footer />
    </div>
  );
}
