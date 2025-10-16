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
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8 animate-fade-in">
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
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-300 leading-relaxed max-w-2xl">
              {t("hero_description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link href="/contact">
                <a>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[hsl(var(--cyber-green))] hover:bg-[hsl(var(--cyber-green))] text-white font-semibold text-sm sm:text-base border border-[hsl(var(--cyber-green))] shadow-lg shadow-[hsl(var(--cyber-green))]/20 transition-all duration-300 hover:scale-105 min-h-[44px]"
                  >
                    {t("hero_cta_primary")}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-sm sm:text-base font-semibold backdrop-blur-sm bg-background/50 hover:bg-background/80 border-2 min-h-[44px]"
                  >
                    {t("hero_cta_secondary")}
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative">
              {/* Floating Tech Card */}
              <div className="relative bg-card/40 backdrop-blur-md border border-border/50 rounded-lg p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float">
                <div className="space-y-6">
                  {/* Animated Code Lines */}
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-2 opacity-80">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--cyber-green))] animate-pulse" />
                      <span className="text-foreground dark:text-gray-200">const innovation = () =&gt; {`{`}</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6 opacity-80">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--electric-blue))] animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <span className="text-foreground dark:text-gray-200">return excellence;</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-80">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
                      <span className="text-foreground dark:text-gray-200">{`}`}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/30">
                    <div>
                      <div className="text-2xl font-bold text-[hsl(var(--cyber-green))]">100+</div>
                      <div className="text-xs text-foreground dark:text-gray-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[hsl(var(--electric-blue))]">24/7</div>
                      <div className="text-xs text-foreground dark:text-gray-400">Support</div>
                    </div>
                  </div>
                </div>

                {/* Glowing Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-[hsl(var(--cyber-green))]/20 via-[hsl(var(--electric-blue))]/20 to-[hsl(var(--cyber-green))]/20 rounded-lg blur-lg -z-10 animate-gradient-shift" />
              </div>
            </div>
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