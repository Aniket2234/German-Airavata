import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2 transition-all duration-300"
            data-testid="link-home"
          >
            <div className="text-2xl font-bold font-mono tracking-tight">
              <span className="text-primary">AIRAVATA</span>{" "}
              <span className="text-foreground">TECH</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className="text-base"
              data-testid="button-nav-home"
            >
              {t("nav_home")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-base"
              data-testid="button-nav-about"
            >
              {t("nav_about")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-base"
              data-testid="button-nav-contact"
            >
              {t("nav_contact")}
            </Button>
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 font-medium transition-all duration-300 hover:scale-105"
              data-testid="button-language-toggle"
            >
              <span className="text-lg">{language === "de" ? "🇩🇪" : "🇬🇧"}</span>
              <span>{language.toUpperCase()}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-1"
              data-testid="button-language-toggle-mobile"
            >
              <span className="text-base">{language === "de" ? "🇩🇪" : "🇬🇧"}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <nav className="flex flex-col p-6 gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className="justify-start text-base"
              data-testid="button-mobile-nav-home"
            >
              {t("nav_home")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="justify-start text-base"
              data-testid="button-mobile-nav-about"
            >
              {t("nav_about")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="justify-start text-base"
              data-testid="button-mobile-nav-contact"
            >
              {t("nav_contact")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}