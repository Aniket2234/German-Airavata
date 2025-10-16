import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/lib/language-context";
import { ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Header />

      <main className="pt-20">
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--cyber-green))]/10 border border-[hsl(var(--cyber-green))]/20 rounded-full px-4 py-2 mb-6">
              <Folder className="h-4 w-4 text-[hsl(var(--cyber-green))]" />
              <span className="text-sm font-medium text-[hsl(var(--cyber-green))]">
                Portfolio
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
              {t("portfolio_title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t("portfolio_subtitle")}
            </p>

            <div className="bg-card border border-card-border rounded-lg p-8 sm:p-12 mb-8 hover-elevate transition-all duration-300">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--cyber-green))] to-[hsl(var(--electric-blue))] flex items-center justify-center">
                  <Folder className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">
                  {t("portfolio_description")}
                </h2>
              </div>

              <Button
                size="lg"
                onClick={() => window.open("https://AiravataTechnologies.com", "_blank")}
                className="bg-[hsl(var(--cyber-green))] hover:bg-[hsl(var(--cyber-green))]/90 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                {t("portfolio_cta")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Visit our main website to explore our portfolio section and see examples of our website development work.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
