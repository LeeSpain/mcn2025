
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'nl';

type Translations = {
  [key: string]: {
    en: string;
    nl: string;
  };
};

export const translations: Translations = {
  // Navigation
  'nav.features': {
    en: 'Features',
    nl: 'Functies',
  },
  'nav.clients': {
    en: 'For Clients',
    nl: 'Voor Cliënten',
  },
  'nav.staff': {
    en: 'For Staff',
    nl: 'Voor Personeel',
  },
  'nav.enterprise': {
    en: 'Enterprise',
    nl: 'Zakelijk',
  },
  'nav.contact': {
    en: 'Contact',
    nl: 'Contact',
  },
  'nav.login': {
    en: 'Login',
    nl: 'Inloggen',
  },
  'nav.signup': {
    en: 'Sign Up',
    nl: 'Aanmelden',
  },
  
  // Client section
  'clients.header.chip': {
    en: 'For Clients',
    nl: 'Voor Cliënten',
  },
  'clients.header.title': {
    en: 'Independent Living Made Simple',
    nl: 'Zelfstandig Wonen Eenvoudig Gemaakt',
  },
  'clients.header.description': {
    en: 'MCN provides easy-to-use tools that support independent living while maintaining connections with loved ones and caregivers.',
    nl: 'MCN biedt gebruiksvriendelijke tools die zelfstandig wonen ondersteunen en tegelijkertijd verbindingen met dierbaren en zorgverleners behouden.',
  },
  
  // Pricing section
  'pricing.title': {
    en: 'Pricing',
    nl: 'Prijzen',
  },
  'pricing.description': {
    en: 'One simple price with all services included. Choose what you need for your package.',
    nl: 'Eén eenvoudige prijs met alle diensten inbegrepen. Kies wat u nodig heeft voor uw pakket.',
  },
  'pricing.main.title': {
    en: 'Full Membership',
    nl: 'Volledig Lidmaatschap',
  },
  'pricing.main.price': {
    en: '€100.00',
    nl: '€100,00',
  },
  'pricing.main.description': {
    en: 'All services included',
    nl: 'Alle diensten inbegrepen',
  },
  'pricing.family.title': {
    en: 'Family Access',
    nl: 'Familie Toegang',
  },
  'pricing.family.price': {
    en: '€10',
    nl: '€10',
  },
  'pricing.family.description': {
    en: 'Per family member per month',
    nl: 'Per familielid per maand',
  },
  'pricing.products.title': {
    en: 'Products',
    nl: 'Producten',
  },
  'pricing.services.title': {
    en: 'Services',
    nl: 'Diensten',
  },
  'pricing.limit.text': {
    en: 'Choose up to 5 items for your package',
    nl: 'Kies tot 5 items voor uw pakket',
  },
  'pricing.popular': {
    en: 'Most Popular',
    nl: 'Meest Populair',
  },
  'pricing.choose': {
    en: 'Choose',
    nl: 'Kies',
  },
  
  // Call to action
  'cta.title': {
    en: 'Ready to get started?',
    nl: 'Klaar om te beginnen?',
  },
  'cta.signup': {
    en: 'Sign Up Today',
    nl: 'Meld u vandaag aan',
  },
  'cta.contact': {
    en: 'Contact Us',
    nl: 'Neem contact met ons op',
  },

  // Enterprise section
  'enterprise.chip': {
    en: 'For Enterprise',
    nl: 'Voor Bedrijven',
  },
  'enterprise.title': {
    en: 'Complete Solutions for Healthcare Organizations',
    nl: 'Complete Oplossingen voor Zorgorganisaties',
  },
  'enterprise.description': {
    en: 'MCN offers comprehensive platforms for healthcare providers, commercial organizations, and enterprises that want to improve their care systems.',
    nl: 'MCN biedt uitgebreide platforms voor zorgaanbieders, commerciële organisaties en bedrijven die hun zorgsystemen willen verbeteren.',
  },
  'enterprise.benefit1.title': {
    en: 'Centralized Management',
    nl: 'Gecentraliseerd Beheer',
  },
  'enterprise.benefit1.description': {
    en: "Manage all clients, staff, and resources from a single, secure dashboard tailored to your organization's needs.",
    nl: 'Beheer alle cliënten, personeel en middelen vanaf een enkel, veilig dashboard op maat van de behoeften van uw organisatie.',
  },
  'enterprise.benefit2.title': {
    en: 'Custom Integration',
    nl: 'Aangepaste Integratie',
  },
  'enterprise.benefit2.description': {
    en: 'Seamlessly integrate with your existing systems, including EHR/EMR platforms, billing systems, and scheduling tools.',
    nl: 'Naadloze integratie met uw bestaande systemen, waaronder EHR/EMR-platforms, factureringssystemen en planningstools.',
  },
  'enterprise.benefit3.title': {
    en: 'Data Analytics & Reporting',
    nl: 'Gegevensanalyse & Rapportage',
  },
  'enterprise.benefit3.description': {
    en: 'Gain valuable insights with comprehensive analytics and customizable reports to improve care quality and operational efficiency.',
    nl: 'Verkrijg waardevolle inzichten met uitgebreide analyses en aanpasbare rapporten om de zorgkwaliteit en operationele efficiëntie te verbeteren.',
  },
  'enterprise.benefit4.title': {
    en: 'Dedicated Support',
    nl: 'Toegewijde Ondersteuning',
  },
  'enterprise.benefit4.description': {
    en: 'Access to our dedicated enterprise support team, implementation specialists, and regular training sessions.',
    nl: 'Toegang tot ons toegewijde enterprise-ondersteuningsteam, implementatiespecialisten en regelmatige trainingssessies.',
  },
  'enterprise.pricing.title': {
    en: 'Enterprise Pricing',
    nl: 'Zakelijke Prijzen',
  },
  'enterprise.pricing.custom': {
    en: 'Custom Solutions',
    nl: 'Aangepaste Oplossingen',
  },
  'enterprise.pricing.description': {
    en: 'We offer tailored packages based on organization size and specific requirements.',
    nl: 'We bieden op maat gemaakte pakketten op basis van organisatiegrootte en specifieke vereisten.',
  },
  'enterprise.contact.button': {
    en: 'Contact Sales Team',
    nl: 'Neem contact op met verkoop',
  },
  'enterprise.demo.button': {
    en: 'Request Demo',
    nl: 'Demo aanvragen',
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    console.warn(`Translation key not found: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
