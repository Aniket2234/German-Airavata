import { useLanguage } from "@/lib/language-context";
import { Rocket, Target, Heart, Zap } from "lucide-react";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Rocket,
      titleKey: "feature1_title",
      descriptionKey: "feature1_description",
    },
    {
      icon: Target,
      titleKey: "feature2_title",
      descriptionKey: "feature2_description",
    },
    {
      icon: Heart,
      titleKey: "feature3_title",
      descriptionKey: "feature3_description",
    },
    {
      icon: Zap,
      titleKey: "feature4_title",
      descriptionKey: "feature4_description",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-3 sm:mb-4">
            {t("features_title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            {t("features_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-card-border rounded-lg p-6 sm:p-8 hover-elevate transition-all duration-300 text-center hover:scale-105"
              >
                <div className="mb-4 inline-flex p-4 rounded-full bg-[hsl(var(--cyber-green))]/10 border border-[hsl(var(--cyber-green))]/20 group-hover:bg-[hsl(var(--cyber-green))]/20 transition-all duration-300">
                  <Icon className="h-8 w-8 text-[hsl(var(--cyber-green))] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-white mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-300">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
