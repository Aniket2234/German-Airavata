import { useLanguage } from "@/lib/language-context";
import { Code2, Smartphone, Globe, Shield, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Services() {
  const { t } = useLanguage();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-service-card]");
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newSet = new Set(prev);
                  newSet.add(index);
                  return newSet;
                });
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code2,
      titleKey: "service1_title",
      descriptionKey: "service1_description",
      gradient: "from-[hsl(var(--cyber-green))] to-[hsl(var(--electric-blue))]",
    },
    {
      icon: Smartphone,
      titleKey: "service2_title",
      descriptionKey: "service2_description",
      gradient: "from-[hsl(var(--electric-blue))] to-primary",
    },
    {
      icon: Globe,
      titleKey: "service3_title",
      descriptionKey: "service3_description",
      gradient: "from-primary to-[hsl(var(--cyber-green))]",
    },
    {
      icon: Shield,
      titleKey: "service4_title",
      descriptionKey: "service4_description",
      gradient: "from-[hsl(var(--cyber-green))] to-primary",
    },
    {
      icon: Zap,
      titleKey: "service5_title",
      descriptionKey: "service5_description",
      gradient: "from-[hsl(var(--electric-blue))] to-[hsl(var(--cyber-green))]",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-3 sm:mb-4 bg-gradient-to-r from-[hsl(var(--cyber-green))] via-foreground to-[hsl(var(--electric-blue))] bg-clip-text text-transparent animate-gradient-shift px-4">
            {t("services_title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto px-4">
            {t("services_subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                data-service-card
                data-testid={`service-card-${index}`}
                className={`group relative bg-card border border-card-border rounded-lg p-6 sm:p-8 hover-elevate transition-all duration-500 touch-manipulation ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Icon with Background */}
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-lg bg-[hsl(var(--cyber-green))]/10 border border-[hsl(var(--cyber-green))]/20">
                    <Icon className="h-8 w-8 text-[hsl(var(--cyber-green))] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-white mb-3 sm:mb-4 group-hover:text-[hsl(var(--cyber-green))] transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  {t(service.descriptionKey)}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--cyber-green))] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>{t("service_learn_more")}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-px bg-[hsl(var(--cyber-green))]/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}

          {/* CTA Card - positioned in the 6th spot */}
          <div
            className={`group relative bg-card/50 border-2 border-dashed border-[hsl(var(--cyber-green))]/30 rounded-lg p-8 flex flex-col items-center justify-center text-center hover-elevate transition-all duration-500 ${
              visibleCards.size >= 5
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-testid="service-card-cta"
          >
            <div className="space-y-4">
              <div className="text-4xl animate-pulse">💡</div>
              <h3 className="text-xl font-semibold text-foreground dark:text-white">
                {t("service_cta_title")}
              </h3>
              <p className="text-sm text-muted-foreground dark:text-gray-300">
                {t("service_cta_description")}
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--cyber-green))] hover:gap-3 transition-all duration-300"
                data-testid="button-service-cta"
              >
                <span>{t("service_cta_button")}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}