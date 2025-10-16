import { useLanguage } from "@/lib/language-context";
import { CheckCircle2, Users, Award, Clock } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
      {/* Subtle Grid Pattern */}
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
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-3 sm:mb-4 px-4">
            {t("about_title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto px-4">
            {t("about_subtitle")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-foreground dark:text-gray-200">
              {t("about_description")}
            </p>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: CheckCircle2, key: "about_feature1" },
                { icon: Users, key: "about_feature2" },
                { icon: Award, key: "about_feature3" },
                { icon: Clock, key: "about_feature4" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group hover-elevate rounded-md p-3 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(var(--cyber-green))]/10 border border-[hsl(var(--cyber-green))]/20 flex items-center justify-center group-hover:bg-[hsl(var(--cyber-green))]/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-[hsl(var(--cyber-green))]" />
                    </div>
                    <p className="text-base text-foreground dark:text-gray-200 pt-2">
                      {t(item.key)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                number: t("about_stat1_number"),
                label: t("about_stat1_label"),
                color: "cyber-green",
              },
              {
                number: t("about_stat2_number"),
                label: t("about_stat2_label"),
                color: "electric-blue",
              },
              {
                number: t("about_stat3_number"),
                label: t("about_stat3_label"),
                color: "primary",
              },
              {
                number: t("about_stat4_number"),
                label: t("about_stat4_label"),
                color: "cyber-green",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative bg-card border border-card-border rounded-lg p-4 sm:p-6 md:p-8 hover-elevate transition-all duration-300 group hover:scale-105 touch-manipulation"
                data-testid={`stat-card-${index}`}
              >
                <div className="space-y-1 sm:space-y-2">
                  <div
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-[hsl(var(--${stat.color}))] to-[hsl(var(--${stat.color}))]/60 bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-foreground dark:text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
                
                {/* Subtle Glow Effect */}
                <div className={`absolute -inset-px bg-gradient-to-br from-[hsl(var(--${stat.color}))]/10 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}