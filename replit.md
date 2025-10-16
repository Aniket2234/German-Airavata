# AIRAVATA TECHNOLOGIES - Landing Page

## Project Overview
A professional, bilingual (German/English) landing page for AIRAVATA TECHNOLOGIES, showcasing their expertise in custom software development, Android applications, websites, cybersecurity, and automation solutions.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Express.js (minimal, serving static frontend)

## Features
✅ Bilingual support (German/English) with instant language switching
✅ Dark/Light theme toggle with localStorage persistence
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Animated service cards with scroll-reveal effects
✅ Professional hero section with tech background
✅ Statistics and company information
✅ Editable footer with contact details
✅ SEO optimized with proper meta tags

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with language toggle
│   │   ├── Hero.tsx            # Hero banner with CTA
│   │   ├── About.tsx           # Company information & stats
│   │   ├── Services.tsx        # Service showcase grid
│   │   ├── Footer.tsx          # Contact & links
│   │   └── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── lib/
│   │   ├── language-context.tsx # Language state management
│   │   └── theme-provider.tsx   # Theme state management
│   ├── pages/
│   │   └── home.tsx            # Main landing page
│   ├── index.css               # Global styles & design tokens
│   └── App.tsx                 # App root with providers
└── index.html                  # HTML entry point with SEO meta tags

server/
└── routes.ts                   # Minimal API routes (static serving)

shared/
└── schema.ts                   # Type definitions
```

## Design System
### Colors
- **Primary**: Deep Tech Blue (220 85% 20%)
- **Cyber Green**: 150 70% 45% (CTAs, accents)
- **Electric Blue**: 200 95% 55% (highlights)

### Typography
- **Headings**: Inter (700-900 weight)
- **Body**: Inter (400-500 weight)
- **Code/Technical**: JetBrains Mono

### Spacing
- Component padding: 6-8 (24-32px)
- Section spacing: 16-24 (64-96px)
- Grid gaps: 6-8 (24-32px)

## Language System
The language context provides:
- `language`: Current language ("de" | "en")
- `setLanguage()`: Change language
- `t()`: Translation function

All text is stored in `client/src/lib/language-context.tsx` with keys like:
- `nav_home`, `nav_about`, `nav_contact`
- `hero_title`, `hero_description`
- `service1_title`, `service1_description`
- etc.

## Editing Footer Information
To update contact details, edit the translations in `client/src/lib/language-context.tsx`:
- `footer_contact_email`: Email address
- `footer_contact_phone`: Phone number
- `footer_contact_address`: Physical address

## Running the Project
```bash
npm run dev
```
This starts both the Express server and Vite dev server on the same port.

## Deployment
The site is ready for deployment with:
- Optimized production builds
- SEO meta tags
- Responsive images
- Fast load times

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive from 320px to 4K displays

## Accessibility
- Semantic HTML structure
- WCAG AA color contrast
- Keyboard navigation support
- ARIA labels on interactive elements
- Test IDs for automated testing

## Recent Changes (October 2025)
- ✅ Initial implementation with bilingual support
- ✅ Dark/light theme system
- ✅ Responsive design across all breakpoints
- ✅ Smooth animations and transitions
- ✅ SEO optimization
