import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Tech_innovation_hero_background_62bbdf8e.png";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--cyber-green)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--cyber-green)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm animate-pulse-glow">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[hsl(var(--cyber-green))] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-foreground dark:text-white">
              {t("hero_subtitle")}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-foreground dark:text-white">{t("hero_title")}</span>
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--cyber-green))] via-[hsl(var(--electric-blue))] to-[hsl(var(--cyber-green))] bg-clip-text text-transparent animate-gradient-shift">
              {t("hero_subtitle")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t("hero_description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[hsl(var(--cyber-green))] hover:bg-[hsl(var(--cyber-green))] text-white font-semibold text-sm sm:text-base border border-[hsl(var(--cyber-green))] shadow-lg shadow-[hsl(var(--cyber-green))]/20 transition-all duration-300 hover:scale-105 min-h-[44px]"
              >
                {t("hero_cta_primary")}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base font-semibold backdrop-blur-sm bg-background/50 hover:bg-background/80 border-2 min-h-[44px]"
              >
                {t("hero_cta_secondary")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-border/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[hsl(var(--cyber-green))] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}