import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/lib/language-context";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Header />

      <main className="pt-20">
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-4">
                {t("nav_contact")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
                Get in touch with us to discuss your project
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-card border border-card-border rounded-lg p-6 sm:p-8">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                          Name
                        </label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                          Email
                        </label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                        Subject
                      </label>
                      <Input placeholder="Project inquiry" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        rows={6}
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-[hsl(var(--cyber-green))] hover:bg-[hsl(var(--cyber-green))]/90 text-white font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--cyber-green))]/10 border border-[hsl(var(--cyber-green))]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[hsl(var(--cyber-green))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-white mb-2">Email</h3>
                      <a
                        href="mailto:info@airavata-tech.com"
                        className="text-muted-foreground hover:text-[hsl(var(--cyber-green))] transition-colors"
                      >
                        {t("footer_contact_email")}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--electric-blue))]/10 border border-[hsl(var(--electric-blue))]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[hsl(var(--electric-blue))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-white mb-2">Phone</h3>
                      <a
                        href="tel:+491234567890"
                        className="text-muted-foreground hover:text-[hsl(var(--electric-blue))] transition-colors"
                      >
                        {t("footer_contact_phone")}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-white mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        {t("footer_contact_address")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
