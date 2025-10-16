import { useLanguage } from "@/lib/language-context";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold font-mono tracking-tight">
                <span className="text-primary">AIRAVATA</span>
                <br />
                <span className="text-foreground">TECHNOLOGIES</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer_tagline")}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer_company")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-[hsl(var(--cyber-green))] transition-all duration-300 hover:translate-x-1">
                  {t("footer_company_about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-[hsl(var(--cyber-green))] transition-all duration-300 hover:translate-x-1">
                  {t("footer_company_services")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-[hsl(var(--cyber-green))] transition-all duration-300 hover:translate-x-1">
                  {t("nav_portfolio")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer_contact")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@airavata-tech.com"
                  className="text-sm text-muted-foreground hover:text-[hsl(var(--cyber-green))] transition-all duration-300 hover:translate-x-1"
                  data-testid="link-footer-email"
                >
                  {t("footer_contact_email")}
                </a>
              </li>
              <li>
                <a
                  href="tel:+491234567890"
                  className="text-sm text-muted-foreground hover:text-[hsl(var(--cyber-green))] transition-all duration-300 hover:translate-x-1"
                  data-testid="link-footer-phone"
                >
                  {t("footer_contact_phone")}
                </a>
              </li>
              <li>
                <p className="text-sm text-muted-foreground" data-testid="text-footer-address">
                  {t("footer_contact_address")}
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer_social")}
            </h3>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover-elevate transition-all duration-300 hover:border-[hsl(var(--cyber-green))]/50 hover:scale-110 hover:rotate-6"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors duration-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover-elevate transition-all duration-300 hover:border-[hsl(var(--cyber-green))]/50 hover:scale-110 hover:rotate-6"
                data-testid="link-footer-github"
              >
                <Github className="h-5 w-5 text-muted-foreground transition-colors duration-300" />
              </a>
              <a
                href="mailto:info@airavata-tech.com"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover-elevate transition-all duration-300 hover:border-[hsl(var(--cyber-green))]/50 hover:scale-110 hover:rotate-6"
                data-testid="link-footer-email-icon"
              >
                <Mail className="h-5 w-5 text-muted-foreground transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left" data-testid="text-copyright">
              {t("footer_copyright")}
            </p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-sm text-muted-foreground hover:text-[hsl(var(--cyber-green))] transition-all duration-300 hover:scale-105"
                data-testid="link-footer-privacy"
              >
                {t("footer_privacy")}
              </a>
              <a
                href="#terms"
                className="text-sm text-muted-foreground hover:text-[hsl(var(--cyber-green))] transition-all duration-300 hover:scale-105"
                data-testid="link-footer-terms"
              >
                {t("footer_terms")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Glow at Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[hsl(var(--cyber-green))]/20 to-transparent" />
    </footer>
  );
}