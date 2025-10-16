# AIRAVATA TECHNOLOGIES Landing Page - Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based (Tech Industry Leaders)
Drawing inspiration from: Stripe (professional polish), Linear (modern minimalism), Vercel (technical sophistication), and IBM (enterprise trust)

**Design Principles:**
- Technical Excellence: Convey expertise through precise, polished design
- Trust & Credibility: Establish confidence for B2B German market
- Modern Innovation: Balance cutting-edge aesthetics with professional stability
- Clarity First: Clean information hierarchy for service presentation

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Tech Blue: 220 85% 20% (dark mode) / 220 90% 12% (headers, accents)
- Professional Navy: 220 70% 25% (secondary dark elements)
- Crisp White: 0 0% 100% (backgrounds, text on dark)
- Soft Gray: 220 15% 96% (section backgrounds light mode)

**Dark Mode:**
- Background: 220 25% 8%
- Surface: 220 20% 12%
- Text Primary: 0 0% 98%
- Text Secondary: 220 10% 70%

**Accent Colors:**
- Cyber Green: 150 70% 45% (security services, CTAs)
- Electric Blue: 200 95% 55% (interactive elements, highlights)

### B. Typography
**Font Families:**
- Primary: 'Inter' (Google Fonts) - headings, UI elements
- Secondary: 'JetBrains Mono' (Google Fonts) - technical emphasis, code snippets

**Type Scale:**
- Hero Headline: 3.5rem (56px) desktop / 2.25rem (36px) mobile, font-weight 700
- Section Headers: 2.5rem (40px) desktop / 1.875rem (30px) mobile, font-weight 600
- Service Cards: 1.5rem (24px), font-weight 600
- Body: 1.125rem (18px), font-weight 400, line-height 1.7
- Small Text: 0.875rem (14px), font-weight 400

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Container max-width: max-w-7xl
- Grid gaps: gap-6 to gap-8

### D. Component Library

**1. Navigation Header**
- Sticky header with backdrop blur: bg-background/80 backdrop-blur-md
- Logo left, navigation center, language toggle + CTA right
- Height: h-16 to h-20
- Language toggle: Flag icons + DE/EN labels with smooth transition

**2. Hero Section**
- Full viewport height with dramatic tech background image
- Two-column layout (60/40): Headline + CTA left, supporting visual right
- Gradient overlay on hero image for text readability
- Primary CTA: Cyber Green with hover lift effect
- Secondary CTA: Outline button with blurred background

**3. About Us Section**
- Clean two-column layout on desktop
- Company mission statement with bold statistics callouts
- Subtle grid pattern background
- Icons from Heroicons for visual interest

**4. Services Showcase**
- 2x3 grid on desktop (2 columns on tablet, 1 on mobile)
- Service cards with:
  - Icon top (Heroicons - technical set)
  - Service name in German/English
  - Brief description
  - Hover effect: Subtle elevation + border glow (cyber green)
- Services: Custom Software, Android Apps, Websites, Cybersecurity, Automation

**5. Footer**
- Three-column layout: Company info, Quick links, Contact details
- Editable contact information placeholders
- Social media icons (LinkedIn, GitHub, Email)
- Copyright notice with language-aware year
- Background: Darker surface with subtle top border

### E. Animations & Interactions
**Minimal, Purpose-Driven:**
- Hero elements: Fade in on load (stagger: 100ms intervals)
- Service cards: Subtle hover scale (1.02) with transition duration-300
- Language toggle: Smooth fade transition between content (duration-200)
- Scroll reveal: Services fade up on viewport entry (once only)
- NO continuous animations or distracting motion

## Images

**Hero Section:**
- Large, high-impact background image showing abstract technology/digital innovation
- Suggested style: Dark blue/purple gradient overlay with geometric tech patterns, circuit boards, or abstract data visualization
- Dimensions: Full viewport width, 80vh minimum height
- Image treatment: 40% opacity overlay for text readability

**About Us Section:**
- Optional team/office image (if available) or technology workspace
- Placement: Right column, rounded corners, subtle shadow
- Can be replaced with icon grid if no suitable image

**Services Section:**
- Icon-based (no images needed - use Heroicons)
- Consistent icon style: Outline variant, Cyber Green accent color

## Bilingual Implementation
- Language state management via simple toggle (DE/EN)
- All text content in both German and English
- Smooth content swap with fade transition
- Persist language preference in localStorage
- German as default language for initial impression
- Language toggle: Prominent in header, flag icons for visual clarity

## Mobile Responsiveness
- Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- Navigation: Hamburger menu on mobile with slide-in drawer
- Hero: Stack layout on mobile, reduce text size proportionally
- Services: Single column on mobile, 2 columns on tablet, 3 columns on desktop
- Footer: Stack columns vertically on mobile

**Quality Standards:**
- Pixel-perfect German translations with proper umlauts (ä, ö, ü, ß)
- Professional B2B tone in all copy
- Fast load times with optimized assets
- WCAG AA contrast compliance
- Smooth 60fps transitions