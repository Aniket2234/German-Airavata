import { useLanguage } from "@/lib/language-context";
import { Package, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Products() {
  const { t } = useLanguage();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-product-card]");
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newSet = new Set(prev);
                  newSet.add(index);
                  return newSet;
                });
              }, index * 150);
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

  const products = [
    {
      titleKey: "product1_title",
      descriptionKey: "product1_description",
      priceKey: "product1_price",
      gradient: "from-[hsl(var(--cyber-green))] to-[hsl(var(--electric-blue))]",
      imageEmoji: "🎯",
    },
    {
      titleKey: "product2_title",
      descriptionKey: "product2_description",
      priceKey: "product2_price",
      gradient: "from-[hsl(var(--electric-blue))] to-primary",
      imageEmoji: "🚀",
    },
    {
      titleKey: "product3_title",
      descriptionKey: "product3_description",
      priceKey: "product3_price",
      gradient: "from-primary to-[hsl(var(--cyber-green))]",
      imageEmoji: "💼",
    },
  ];

  return (
    <section id="products" ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--cyber-green))]/10 border border-[hsl(var(--cyber-green))]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <Package className="h-3 w-3 sm:h-4 sm:w-4 text-[hsl(var(--cyber-green))]" />
            <span className="text-xs sm:text-sm font-medium text-[hsl(var(--cyber-green))]">
              {t("products_badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-3 sm:mb-4 bg-gradient-to-r from-[hsl(var(--electric-blue))] via-foreground to-[hsl(var(--cyber-green))] bg-clip-text text-transparent animate-gradient-shift px-4">
            {t("products_title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto px-4">
            {t("products_subtitle")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => {
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                data-product-card
                data-testid={`product-card-${index}`}
                className={`group relative bg-card border border-card-border rounded-xl overflow-hidden hover-elevate transition-all duration-500 touch-manipulation ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Product Image/Icon */}
                <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="text-6xl sm:text-8xl group-hover:scale-110 transition-transform duration-500">
                    {product.imageEmoji}
                  </div>
                  {/* Animated sparkle */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="h-6 w-6 text-white/80 animate-pulse" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-white group-hover:text-[hsl(var(--cyber-green))] transition-colors duration-300">
                    {t(product.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-300 leading-relaxed">
                    {t(product.descriptionKey)}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 sm:justify-between pt-3 sm:pt-4 border-t border-border">
                    <div className="text-xl sm:text-2xl font-bold text-[hsl(var(--cyber-green))]">
                      {t(product.priceKey)}
                    </div>
                    <button
                      onClick={() => {
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="w-full sm:w-auto px-4 py-2 bg-[hsl(var(--cyber-green))] text-white rounded-lg font-medium hover:bg-[hsl(var(--cyber-green))]/90 hover:scale-105 transition-all duration-300 min-h-[44px] touch-manipulation"
                      data-testid={`button-product-${index}`}
                    >
                      {t("product_cta")}
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-px bg-gradient-to-br ${product.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
