import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Link, useLocation } from "wouter";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2 transition-all duration-300 group">
              <div className="text-2xl font-bold font-mono tracking-tight">
                <span className="bg-gradient-to-r from-[hsl(var(--cyber-green))] via-[hsl(var(--electric-blue))] to-[hsl(var(--cyber-green))] bg-clip-text text-transparent animate-gradient-shift">AIRAVATA</span>{" "}
                <span className="text-foreground dark:text-white">TECH</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/">
              <a>
                <Button
                  variant="ghost"
                  className={`text-base hover:text-[hsl(var(--cyber-green))] transition-all duration-300 ${
                    location === "/" ? "text-[hsl(var(--cyber-green))]" : "text-foreground dark:text-white"
                  }`}
                >
                  {t("nav_home")}
                </Button>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <Button
                  variant="ghost"
                  className={`text-base hover:text-[hsl(var(--cyber-green))] transition-all duration-300 ${
                    location === "/about" ? "text-[hsl(var(--cyber-green))]" : "text-foreground dark:text-white"
                  }`}
                >
                  {t("nav_about")}
                </Button>
              </a>
            </Link>
            <Link href="/services">
              <a>
                <Button
                  variant="ghost"
                  className={`text-base hover:text-[hsl(var(--cyber-green))] transition-all duration-300 ${
                    location === "/services" ? "text-[hsl(var(--cyber-green))]" : "text-foreground dark:text-white"
                  }`}
                >
                  {t("nav_services")}
                </Button>
              </a>
            </Link>
            <Link href="/portfolio">
              <a>
                <Button
                  variant="ghost"
                  className={`text-base hover:text-[hsl(var(--cyber-green))] transition-all duration-300 ${
                    location === "/portfolio" ? "text-[hsl(var(--cyber-green))]" : "text-foreground dark:text-white"
                  }`}
                >
                  {t("nav_portfolio")}
                </Button>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Button
                  variant="ghost"
                  className={`text-base hover:text-[hsl(var(--cyber-green))] transition-all duration-300 ${
                    location === "/contact" ? "text-[hsl(var(--cyber-green))]" : "text-foreground dark:text-white"
                  }`}
                >
                  {t("nav_contact")}
                </Button>
              </a>
            </Link>
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
            <Link href="/">
              <a onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="justify-start text-base w-full">
                  {t("nav_home")}
                </Button>
              </a>
            </Link>
            <Link href="/about">
              <a onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="justify-start text-base w-full">
                  {t("nav_about")}
                </Button>
              </a>
            </Link>
            <Link href="/services">
              <a onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="justify-start text-base w-full">
                  {t("nav_services")}
                </Button>
              </a>
            </Link>
            <Link href="/portfolio">
              <a onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="justify-start text-base w-full">
                  {t("nav_portfolio")}
                </Button>
              </a>
            </Link>
            <Link href="/contact">
              <a onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="justify-start text-base w-full">
                  {t("nav_contact")}
                </Button>
              </a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}