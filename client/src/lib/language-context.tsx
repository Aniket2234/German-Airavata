import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    nav_home: "Home",
    nav_about: "Über Uns",
    nav_contact: "Kontakt",
    nav_cta: "Projekt starten",
    
    hero_title: "Innovative Softwarelösungen",
    hero_subtitle: "für Ihr Unternehmen",
    hero_description: "AIRAVATA TECHNOLOGIES entwickelt maßgeschneiderte Software, Android-Anwendungen, Websites, Cybersecurity-Lösungen und Automatisierungssoftware für anspruchsvolle Unternehmen.",
    hero_cta_primary: "Beratung anfragen",
    hero_cta_secondary: "Mehr erfahren",
    
    about_title: "Über Uns",
    about_subtitle: "Technische Exzellenz trifft Innovation",
    about_description: "AIRAVATA TECHNOLOGIES ist Ihr vertrauenswürdiger Partner für digitale Transformation. Wir verbinden technisches Fachwissen mit innovativen Lösungen, um Ihre Geschäftsziele zu erreichen. Unser erfahrenes Team entwickelt maßgeschneiderte Softwarelösungen, die perfekt auf Ihre Anforderungen zugeschnitten sind.",
    about_stat1_number: "100+",
    about_stat1_label: "Projekte abgeschlossen",
    about_stat2_number: "50+",
    about_stat2_label: "Zufriedene Kunden",
    about_stat3_number: "24/7",
    about_stat3_label: "Support verfügbar",
    
    services_title: "Unsere Dienstleistungen",
    services_subtitle: "Umfassende IT-Lösungen aus einer Hand",
    
    service1_title: "Maßgeschneiderte Software",
    service1_description: "Entwicklung individueller Softwarelösungen, die perfekt auf Ihre Geschäftsprozesse abgestimmt sind und maximale Effizienz gewährleisten.",
    
    service2_title: "Android-Anwendungen",
    service2_description: "Native und plattformübergreifende mobile Anwendungen mit intuitivem Design und herausragender Performance für Ihre Nutzer.",
    
    service3_title: "Websites",
    service3_description: "Moderne, responsive Webseiten und Web-Anwendungen, die Ihre Marke stärken und Ihre Zielgruppe begeistern.",
    
    service4_title: "Cybersecurity",
    service4_description: "Umfassende Sicherheitslösungen zum Schutz Ihrer digitalen Assets, Daten und IT-Infrastruktur vor modernen Bedrohungen.",
    
    service5_title: "Automatisierung",
    service5_description: "Intelligente Automatisierungssoftware zur Optimierung Ihrer Geschäftsprozesse und Steigerung der Produktivität.",
    
    footer_company: "Unternehmen",
    footer_company_about: "Über Uns",
    footer_company_services: "Dienstleistungen",
    footer_company_products: "Produkte",
    
    footer_contact: "Kontakt",
    footer_contact_email: "info@airavata-tech.com",
    footer_contact_phone: "+49 123 456 7890",
    footer_contact_address: "Musterstraße 123, 10115 Berlin",
    
    footer_social: "Folgen Sie uns",
    footer_copyright: "© 2025 AIRAVATA TECHNOLOGIES. Alle Rechte vorbehalten.",
    footer_tagline: "Innovative Softwarelösungen für anspruchsvolle Unternehmen.",
    
    about_feature1: "Maßgeschneiderte Lösungen für individuelle Anforderungen",
    about_feature2: "Erfahrenes Team aus Softwareentwicklern",
    about_feature3: "Höchste Qualitätsstandards und Best Practices",
    about_feature4: "Pünktliche Lieferung und zuverlässiger Support",
    
    about_stat4_number: "5+",
    about_stat4_label: "Jahre Erfahrung",
    
    service_learn_more: "Mehr erfahren",
    service_cta_title: "Ihr Projekt",
    service_cta_description: "Haben Sie eine individuelle Anforderung? Kontaktieren Sie uns für eine maßgeschneiderte Lösung.",
    service_cta_button: "Kontakt aufnehmen",
    
    products_badge: "Unsere Produkte",
    products_title: "Erstklassige Softwareprodukte",
    products_subtitle: "Professionelle, sofort einsatzbereite Lösungen für Ihr Unternehmen",
    
    product1_title: "CRM Pro Suite",
    product1_description: "Vollständiges Customer Relationship Management System mit KI-gestützten Insights und Automatisierung.",
    product1_price: "Ab €299/Monat",
    
    product2_title: "Analytics Dashboard",
    product2_description: "Umfassende Datenanalyse-Plattform mit Echtzeit-Berichten und prädiktiven Modellen.",
    product2_price: "Ab €199/Monat",
    
    product3_title: "Enterprise Security",
    product3_description: "Komplette Cybersecurity-Lösung mit Bedrohungserkennung und 24/7 Überwachung.",
    product3_price: "Ab €499/Monat",
    
    product_cta: "Anfragen",
    
    footer_privacy: "Datenschutz",
    footer_terms: "AGB",
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_cta: "Start Project",
    
    hero_title: "Innovative Software Solutions",
    hero_subtitle: "for Your Business",
    hero_description: "AIRAVATA TECHNOLOGIES develops custom software, Android applications, websites, cybersecurity solutions, and automation software for demanding enterprises.",
    hero_cta_primary: "Request Consultation",
    hero_cta_secondary: "Learn More",
    
    about_title: "About Us",
    about_subtitle: "Technical Excellence Meets Innovation",
    about_description: "AIRAVATA TECHNOLOGIES is your trusted partner for digital transformation. We combine technical expertise with innovative solutions to achieve your business goals. Our experienced team develops tailored software solutions perfectly aligned with your requirements.",
    about_stat1_number: "100+",
    about_stat1_label: "Projects Completed",
    about_stat2_number: "50+",
    about_stat2_label: "Satisfied Clients",
    about_stat3_number: "24/7",
    about_stat3_label: "Support Available",
    
    services_title: "Our Services",
    services_subtitle: "Comprehensive IT Solutions from One Source",
    
    service1_title: "Custom Software",
    service1_description: "Development of individual software solutions perfectly tailored to your business processes, ensuring maximum efficiency.",
    
    service2_title: "Android Applications",
    service2_description: "Native and cross-platform mobile applications with intuitive design and outstanding performance for your users.",
    
    service3_title: "Websites",
    service3_description: "Modern, responsive websites and web applications that strengthen your brand and captivate your target audience.",
    
    service4_title: "Cybersecurity",
    service4_description: "Comprehensive security solutions to protect your digital assets, data, and IT infrastructure from modern threats.",
    
    service5_title: "Automation",
    service5_description: "Intelligent automation software to optimize your business processes and increase productivity.",
    
    footer_company: "Company",
    footer_company_about: "About Us",
    footer_company_services: "Services",
    footer_company_products: "Products",
    
    footer_contact: "Contact",
    footer_contact_email: "info@airavata-tech.com",
    footer_contact_phone: "+49 123 456 7890",
    footer_contact_address: "Sample Street 123, 10115 Berlin",
    
    footer_social: "Follow Us",
    footer_copyright: "© 2025 AIRAVATA TECHNOLOGIES. All rights reserved.",
    footer_tagline: "Innovative software solutions for demanding enterprises.",
    
    about_feature1: "Tailored solutions for individual requirements",
    about_feature2: "Experienced team of software developers",
    about_feature3: "Highest quality standards and best practices",
    about_feature4: "On-time delivery and reliable support",
    
    about_stat4_number: "5+",
    about_stat4_label: "Years Experience",
    
    service_learn_more: "Learn more",
    service_cta_title: "Your Project",
    service_cta_description: "Have a custom requirement? Contact us for a tailored solution.",
    service_cta_button: "Get in touch",
    
    products_badge: "Our Products",
    products_title: "Premium Software Products",
    products_subtitle: "Professional, ready-to-use solutions for your business",
    
    product1_title: "CRM Pro Suite",
    product1_description: "Complete Customer Relationship Management system with AI-powered insights and automation.",
    product1_price: "From €299/month",
    
    product2_title: "Analytics Dashboard",
    product2_description: "Comprehensive data analysis platform with real-time reports and predictive models.",
    product2_price: "From €199/month",
    
    product3_title: "Enterprise Security",
    product3_description: "Complete cybersecurity solution with threat detection and 24/7 monitoring.",
    product3_price: "From €499/month",
    
    product_cta: "Inquire",
    
    footer_privacy: "Privacy",
    footer_terms: "Terms",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("airavata-language");
    return (stored === "en" || stored === "de" ? stored : "de") as Language;
  });

  useEffect(() => {
    localStorage.setItem("airavata-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}