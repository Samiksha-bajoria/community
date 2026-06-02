# GWY Fellowship 2.0 - Page Layout Reference

## 📍 Section Order (Top to Bottom)

```
┌─────────────────────────────────────────────┐
│  HERO SECTION (Beach Image)                 │
│  - Title: "Girls Who Yap Fellowship 2.0"    │
│  - CTA Buttons                              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  PARTNERS MARQUEE (Scrolling)               │
│  DoraDAO, Anthropic, OpenLab, etc.          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CHAPTER 1: THE INVITE                      │
│  - Role pills (Creators, Builders, PMs...)  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CHAPTER 2: THE FELLOWSHIP                  │
│  - What it is (left column)                 │
│  - Week by week breakdown (right)           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CHAPTER 3: THE BONFIRE (DORAHACK)          │
│  - Hackathon image                          │
│  - Event details and prizes                 │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CHAPTER 4: NUMBERS & STATS (Dark section)  │
│  - 3M+, 40K+, 10K+, 30+                     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  INTERLUDE: MOMENTS                         │
│  - Horizontal marquee with moment cards     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  ⭐ CHAPTER 5: THE VOICES (Dark)            │
│  ⭐ NEW: Enhanced Speakers Section          │
│  ⭐ - 8 Featured speakers with flip cards   │
│  ⭐ - "See all 22 voices" link              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CHAPTER 6: WHAT TO EXPECT                  │
│  - 6 expectation cards (Creator sessions,   │
│    AI workshops, Challenges, UGC, Products, │
│    Public launch)                           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CHAPTER 7: TIMELINE                        │
│  - 7 timeline events with dates             │
│  - Animated vertical timeline curve         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CHAPTER 8: FAQ                             │
│  - "Got questions?" section                 │
│  - 5 collapsible Q&A items                  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  ⭐ CHAPTER 9: CHAMPIONS (NEW)              │
│  ⭐ Past Sponsors with Mouse Parallax       │
│  ⭐ - 14 sponsor organizations              │
│  ⭐ - Interactive hover effects             │
│  ⭐ - Parallax gradient backgrounds         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CHAPTER 10: THE CREW                       │
│  - Partners section with 10 companies       │
│  - Company/Community/Investor badges        │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  LAST CALL                                  │
│  - Final CTA section                        │
│  - Countdown timer                          │
│  - Apply/Events buttons                     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  FOOTER                                     │
│  - Copyright, Social links                  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  ⭐ SCROLL-TO-TOP BUTTON (Fixed)            │
│  ⭐ - Bottom-right corner                   │
│  ⭐ - Always accessible                     │
└─────────────────────────────────────────────┘
```

## 🎨 Color Scheme

### Hero/Accent Areas
- **Coral Gradient**: Primary action buttons, highlights
- **White Glass**: Semi-transparent backgrounds with blur
- **Beach Sunset**: Warm cream to coral progression

### Dark Sections (Speakers, Stats, DoraHack)
- **Dark Navy/Purple**: Background (oklch 0.18-0.22 range)
- **White Text**: High contrast on dark
- **Coral Accents**: For buttons and highlights

### Speaker Cards
- **8 Gradient Colors**: Each speaker has unique gradient
- **White/10 Glass**: Background with border
- **Gold/Coral Hover**: Interactive states

### Sponsor Cards  
- **Multi-color Gradients**: Matching speaker palette
- **White/65 Background**: Primary state
- **White/85 Hover**: Elevated state
- **Coral Accents**: Bottom highlight bar

## 🎬 Animation Timeline

### On Page Load:
1. Sky decorations fade in
2. Hero section appears
3. Speakers fade in with staggered delays (0.3s-0.6s)
4. Each speaker card delays by 50ms
5. Timeline items stagger every 150ms

### On Scroll:
1. ScrollToTop button appears at 300px
2. Parallax elements shift (sky decorations)
3. Sponsors parallax on hover based on mouse position

### On User Interaction:
- Speaker cards: Click to flip (3D animation)
- Sponsor cards: Hover for parallax effect
- Buttons: Scale, color, and shadow transitions
- ScrollToTop: Bounce arrow on hover

## 📊 Component Statistics

**Speakers Section:**
- 8 featured speakers displayed
- 22 total voices available
- 8 unique gradient color schemes

**Sponsors Section:**
- 14 organizations showcased
- 4 category types
- Custom parallax on each card

**Animations:**
- 6 new keyframe animations added
- 14+ animation utility classes
- Staggered delays: 50ms-150ms intervals

## 🔗 Links & Navigation

- Navbar: Links to #story, #hack, #speakers, #partners
- Speakers: Link to `/voices` page for full directory
- ScrollToTop: Link to #top (hero section)
- External: Discord, X/Twitter, Instagram, LinkedIn, Luma

---

**Last Updated:** June 2026
**Components Added:** 3 new React components
**Files Modified:** 5 core files
**Lines of Code Added:** ~800+ lines (components + styles + integration)
