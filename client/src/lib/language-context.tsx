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
    nav_services: "Leistungen",
    nav_portfolio: "Portfolio",
    nav_contact: "Kontakt",
    nav_cta: "Projekt starten",
    
    hero_title: "Website Entwicklung & Tech Digitale Produkte",
    hero_subtitle: "Ihr neues Tech-Startup in Deutschland",
    hero_description: "Wir sind Airavata Technologies - ein neues Tech-Startup mit Sitz in Deutschland. Wir sind auf der Suche nach unserem ersten Kunden und bieten innovative Website-Entwicklung und digitale Tech-Produkte zu attraktiven Konditionen.",
    hero_cta_primary: "Unser erster Kunde werden",
    hero_cta_secondary: "Mehr über uns erfahren",
    
    about_title: "Über Uns",
    about_subtitle: "Ein neues Tech-Startup bereit durchzustarten",
    about_description: "Airavata Technologies ist ein frisch gegründetes Tech-Startup mit Sitz in Deutschland. Wir spezialisieren uns auf Website-Entwicklung und digitale Tech-Produkte. Als neues Unternehmen suchen wir unseren ersten Kunden und bieten dabei höchste Qualität zu fairen Preisen.",
    about_stat1_number: "Neu",
    about_stat1_label: "Gegründet 2025",
    about_stat2_number: "1.",
    about_stat2_label: "Suchen ersten Kunden",
    about_stat3_number: "24/7",
    about_stat3_label: "Support verfügbar",
    
    services_title: "Unsere Dienstleistungen",
    services_subtitle: "Fokussiert auf Website-Entwicklung & Tech Digitale Produkte",
    
    service1_title: "Website-Entwicklung",
    service1_description: "Moderne, responsive und performante Websites, die Ihre Marke perfekt präsentieren. Von Landing Pages bis hin zu komplexen Web-Anwendungen.",
    
    service2_title: "E-Commerce Lösungen",
    service2_description: "Professionelle Online-Shops mit modernen Payment-Systemen, Bestandsverwaltung und optimierter Benutzererfahrung.",
    
    service3_title: "Web-Anwendungen",
    service3_description: "Maßgeschneiderte Web-Apps für Ihre Geschäftsprozesse. React, Node.js und moderne Technologien für optimale Performance.",
    
    service4_title: "Tech Digitale Produkte",
    service4_description: "Innovative digitale Lösungen und SaaS-Produkte für moderne Geschäftsanforderungen.",
    
    service5_title: "UI/UX Design",
    service5_description: "Ansprechendes und benutzerfreundliches Design, das Ihre Kunden begeistert und Ihre Conversion-Rate steigert.",
    
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
    
    about_feature1: "Aniket Rane - Co-founder mit technischer Expertise",
    about_feature2: "Rohit Mahajan - Project Handler für professionelles Projektmanagement",
    about_feature3: "Moderne Technologien und Best Practices",
    about_feature4: "Attraktive Preise für unseren ersten Kunden",
    
    about_stat4_number: "DE",
    about_stat4_label: "Made in Germany",
    
    team_title: "Unser Team",
    team_cofounder: "Aniket Rane",
    team_cofounder_role: "Co-founder",
    team_project_handler: "Rohit Mahajan",
    team_project_handler_role: "Project Handler",
    
    portfolio_title: "Unsere Referenzen",
    portfolio_subtitle: "Sehen Sie sich unsere bisherigen Projekte an",
    portfolio_description: "Besuchen Sie AiravataTechnologies.com und sehen Sie sich den Portfolio-Bereich für Website-Referenzen an.",
    portfolio_cta: "Portfolio ansehen",
    
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
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    nav_cta: "Start Project",
    
    hero_title: "Website Development & Tech Digital Products",
    hero_subtitle: "Your New Tech Startup in Germany",
    hero_description: "We are Airavata Technologies - a new tech startup based in Germany. We are looking for our first client and offer innovative website development and digital tech products at attractive rates.",
    hero_cta_primary: "Become Our First Client",
    hero_cta_secondary: "Learn More About Us",
    
    about_title: "About Us",
    about_subtitle: "A New Tech Startup Ready to Launch",
    about_description: "Airavata Technologies is a newly founded tech startup based in Germany. We specialize in website development and digital tech products. As a new company, we are looking for our first client and offer the highest quality at fair prices.",
    about_stat1_number: "New",
    about_stat1_label: "Founded 2025",
    about_stat2_number: "1st",
    about_stat2_label: "Looking for First Client",
    about_stat3_number: "24/7",
    about_stat3_label: "Support Available",
    
    services_title: "Our Services",
    services_subtitle: "Focused on Website Development & Tech Digital Products",
    
    service1_title: "Website Development",
    service1_description: "Modern, responsive and high-performance websites that perfectly present your brand. From landing pages to complex web applications.",
    
    service2_title: "E-Commerce Solutions",
    service2_description: "Professional online stores with modern payment systems, inventory management and optimized user experience.",
    
    service3_title: "Web Applications",
    service3_description: "Custom web apps for your business processes. React, Node.js and modern technologies for optimal performance.",
    
    service4_title: "Tech Digital Products",
    service4_description: "Innovative digital solutions and SaaS products for modern business requirements.",
    
    service5_title: "UI/UX Design",
    service5_description: "Appealing and user-friendly design that delights your customers and increases your conversion rate.",
    
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
    
    about_feature1: "Aniket Rane - Co-founder with technical expertise",
    about_feature2: "Rohit Mahajan - Project Handler for professional project management",
    about_feature3: "Modern technologies and best practices",
    about_feature4: "Attractive prices for our first client",
    
    about_stat4_number: "DE",
    about_stat4_label: "Made in Germany",
    
    team_title: "Our Team",
    team_cofounder: "Aniket Rane",
    team_cofounder_role: "Co-founder",
    team_project_handler: "Rohit Mahajan",
    team_project_handler_role: "Project Handler",
    
    portfolio_title: "Our References",
    portfolio_subtitle: "Check out our previous projects",
    portfolio_description: "Visit AiravataTechnologies.com and check the portfolio section for website references.",
    portfolio_cta: "View Portfolio",
    
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