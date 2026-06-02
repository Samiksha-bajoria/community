# Speaker and Sponsor Setup Guide

## Summary of Changes Made

### 1. **Updated Data Structure** (`src/lib/voices.ts`)
- Added 18 speakers with their roles and image paths
- Updated sponsor list from 14 to 22 sponsors with logo paths
- All image references are configured to point to dedicated directories

### 2. **Updated Components**

#### SpeakersShowcase Component
- Modified `SpeakerDetailCard` to accept and display speaker images
- Images display as full photos instead of gradient backgrounds with initials
- Fallback to gradient + initials if image is missing
- Component handles hover effects and flip animation

#### SponsorsCarousel Component  
- Modified `SponsorCard` to accept and display sponsor logos
- Logos display with proper sizing and object-fit
- Fallback to gradient + first letter if logo is missing

### 3. **Directory Structure Created**
```
src/assets/
├── speakers/
│   ├── speaker-1.jpg (Founder - FOSSASIA)
│   ├── speaker-2.jpg (Community Manager - Outreachy)
│   ├── speaker-3.jpg (3X Founder - FE TV HUB)
│   ├── speaker-4.jpg (Ex-Google - Investor)
│   ├── speaker-5.jpg (Co-founder, CEO - zeroone)
│   ├── speaker-6.jpg (Principal Ambassador - Polkadot)
│   ├── speaker-7.jpg (Founder - GirlScript Foundation)
│   ├── speaker-8.jpg (Talent Head - BeInCrypto)
│   ├── speaker-9.jpg (Developer Advocate - @DigitalOcean)
│   ├── speaker-10.jpg (Head of Events - SCRIB3)
│   ├── speaker-11.jpg (Software Developer - Zomato)
│   ├── speaker-12.jpg (Founder - SI1ICON)
│   ├── speaker-13.jpg (Software Engineer II - @Red Hat)
│   ├── speaker-14.jpg (Buidling cabal - Arbitrum Fndn)
│   ├── speaker-15.jpg (CMO - Soonami Venture)
│   ├── speaker-16.jpg (Software Engineer II - Intuit)
│   ├── speaker-17.jpg (Ex-Ecosystem - Brain Strom)
│   └── speaker-18.jpg (Head of Product marketing - Telegram)
└── sponsors/
    ├── sponsor-1.png (Devfolio)
    ├── sponsor-2.png (GitHub)
    ├── sponsor-3.png (Logos)
    ├── sponsor-4.png (OpenSea)
    ├── sponsor-5.png (Filecoin)
    ├── sponsor-6.png (Soonami.io)
    ├── sponsor-7.png (Aave)
    ├── sponsor-8.png (Polygon)
    ├── sponsor-9.png (Dmail Network)
    ├── sponsor-10.png (Cyber)
    ├── sponsor-11.png (Ucommunity)
    ├── sponsor-12.png (Aptos)
    ├── sponsor-13.png (Hive)
    ├── sponsor-14.png (Core DAO)
    ├── sponsor-15.png (Socrates)
    ├── sponsor-16.png (Mentro)
    ├── sponsor-17.png (Starlay Finance)
    ├── sponsor-18.png (Floxus)
    ├── sponsor-19.png (Replit)
    ├── sponsor-20.png (QuickBlox)
    ├── sponsor-21.png (Reskill)
    └── sponsor-22.png (MongoDB)
```

## Next Steps

### Option 1: Manual Image Setup
1. Save the 18 speaker images you provided to `src/assets/speakers/` with names `speaker-1.jpg` through `speaker-18.jpg`
2. Save the 22 sponsor logos to `src/assets/sponsors/` with names `sponsor-1.png` through `sponsor-22.png`
3. The components will automatically detect and display them

### Option 2: Programmatic Setup (If images are hosted)
If you have image URLs instead, update `src/lib/voices.ts`:
```typescript
// Example: using CDN URLs
{ n: "Founder", r: "FOSSASIA", img: "https://your-cdn.com/speaker-1.jpg" },
```

## Data Mapping Reference

### Speakers (in order):
1. Founder - FOSSASIA
2. Community Manager - Outreachy
3. 3X Founder - FE TV HUB
4. Ex-Google - Investor
5. Co-founder, CEO - zeroone
6. Principal Ambassador - Polkadot
7. Founder - GirlScript Foundation
8. Talent Head - BeInCrypto
9. Developer Advocate - @DigitalOcean
10. Head of Events - SCRIB3
11. Software Developer - Zomato
12. Founder - SI1ICON
13. Software Engineer II - @Red Hat
14. Buidling cabal - Arbitrum Fndn
15. CMO - Soonami Venture
16. Software Engineer II - Intuit
17. Ex-Ecosystem - Brain Strom
18. Head of Product marketing - Telegram

### Sponsors (in order):
1. Devfolio
2. GitHub
3. Logos
4. OpenSea
5. Filecoin
6. Soonami.io
7. Aave
8. Polygon
9. Dmail Network
10. Cyber
11. Ucommunity
12. Aptos
13. Hive
14. Core DAO
15. Socrates
16. Mentro
17. Starlay Finance
18. Floxus
19. Replit
20. QuickBlox
21. Reskill
22. MongoDB

## Component Features

### SpeakerDetailCard
- Displays high-quality speaker images
- Flip animation to reveal bio (click to flip)
- Gradient fallback for missing images
- Responsive design
- Hover effects with upward translation

### SponsorCard
- Displays sponsor logos with proper aspect ratio
- 3D tilt effect on hover
- Responsive grid layout (2-4 columns depending on screen)
- Logo fallback to gradient background
- Category labels below sponsor names

## Testing
After adding the images, the following should work:
- Speaker cards display images instead of initials
- Sponsor cards show logos instead of placeholder letters
- Click speaker cards to flip and read their bios
- All responsive breakpoints work correctly
- Fallback gradients appear if images are missing
