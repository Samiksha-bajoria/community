# GWY Fellowship 2.0 - New Features Guide

## 🎯 What's New

### 1. Interactive Speakers & Mentors Section
Located after the "Hack Demo Day" section, this enhanced module showcases your 8 featured speakers with:

**Features:**
- **3D Flip Card Animation**: Click any speaker card to flip and reveal their bio
- **Gradient Backgrounds**: Beautiful color-coded initials matching the design system
- **Staggered Animations**: Each card fades in with a progressive delay for smooth entrance
- **Hover Effects**: Cards scale and change text color on hover
- **Links to Full Directory**: "See all 22 voices" button links to the dedicated speakers page
- **Accessibility**: Proper semantic HTML and ARIA labels

**Animation Details:**
- Front side shows: Speaker initials, name, role, number
- Back side shows: Full bio with speaker name and affiliation
- Smooth 3D flip transition on click

---

### 2. Past Sponsors Section (Creative Mouse Parallax)
Positioned between FAQ and Partners sections, this interactive showcase features:

**Features:**
- **Mouse Movement Parallax**: As you hover over sponsor cards, the gradient backgrounds and logos follow your mouse movement
- **3D Perspective Effect**: Cards rotate subtly based on mouse position
- **Glowing Aura**: Gradient backgrounds glow and move with your cursor
- **Staggered Slide-Up Animation**: Cards enter from bottom-up with spring-like easing
- **14 Sponsors**: Includes AI companies, communities, investors, and infrastructure providers
- **Category Labels**: Each sponsor is tagged with their category (AI/ML, Cloud, Community, etc.)

**Interactive Effects:**
- Hover to trigger 3D rotation and parallax movement
- Logo backgrounds scale up and shift
- Bottom accent line follows mouse movement
- Smooth transition back to default state on mouse leave

**Data Included:**
- DoraDAO, Anthropic, OpenLab, NovaAgents, ToolForge
- ShipWeekly, Beach Capital, Yappers.ai, Agentic Labs, PalmStack
- Girlscript, BelleCrypto, FOSSASIA, DigitalOcean

---

### 3. Scroll-to-Top Button
A floating, always-accessible button that appears in the bottom-right corner:

**Features:**
- **Smart Visibility**: Only appears after scrolling down 300px
- **Smooth Scroll**: Clicking smoothly animates scroll to top of page
- **Floating Position**: Fixed bottom-right (z-40) so it never obstructs content
- **Animated Arrow**: Icon bounces when you hover over the button
- **Coral Styling**: Matches the design system with gradient background
- **Fade Animations**: Gracefully appears/disappears as needed

---

## 🎨 Design System Integration

All new components use the existing design tokens:

**Colors:**
- Coral gradient: `from-[oklch(0.78_0.2_40)] to-[oklch(0.65_0.22_15)]`
- White glass backgrounds with backdrop blur
- Consistent white/65 and white/15 opacity overlays

**Typography:**
- Display font for headers and initials
- Mono font for labels and categories
- Consistent text sizing with existing components

**Spacing & Sizing:**
- Rounded corners: `rounded-2xl` (sponsors), `rounded-xl` (speaker avatars)
- Padding: 4-6 (p-4 to p-6) for cards
- Gap patterns: 3-4 units between items

---

## ✨ Animation Classes Added

```css
.animate-slide-up          /* Cards enter from bottom with scale */
.animate-slide-in-left     /* Content enters from left */
.animate-slide-in-right    /* Content enters from right */
.animate-carousel-slide    /* 3D carousel entrance */
.animate-scale-in          /* Zoom entrance effect */
.animate-rotate            /* Continuous 360° rotation */
```

---

## 🔧 Component Structure

### ScrollToTop.tsx
- Simple hook-based component
- Uses scroll event listener
- Renders button with conditional display

### SponsorsCarousel.tsx
- `SponsorCard`: Individual sponsor with parallax logic
- `SponsorsSection`: Grid renderer with staggered animations
- Mouse movement calculations in handleMouseMove()

### SpeakersShowcase.tsx
- `SpeakerDetailCard`: Individual speaker with flip animation
- `SpeakersShowcase`: Grid layout with speaker bios
- CSS backfaceVisibility for 3D flip effect

---

## 📱 Responsive Behavior

- **Mobile**: 2-column grid for sponsors, adjusted padding
- **Tablet**: 3-4 column layout
- **Desktop**: Full 4-column sponsors grid, proper spacing

---

## 🚀 Performance Optimizations

- Staggered animations prevent layout thrashing
- Transform/opacity animations for GPU acceleration
- Conditional rendering of ScrollToTop button
- No heavy computations in animation loops

---

## 🎯 How to Customize

### Add More Sponsors
Edit `/src/lib/voices.ts`:
```typescript
export const pastSponsors = [
  { n: "Your Company", cat: "Your Category" },
  // ...
];
```

### Adjust Animation Timing
Edit `/src/styles.css`:
- Change animation duration values (e.g., `0.6s`, `0.5s`)
- Modify cubic-bezier values for different easing
- Update `animationDelay` multipliers in components

### Modify Parallax Intensity
Edit `/src/components/SponsorsCarousel.tsx` line ~19:
```typescript
// Adjust multiplier for stronger/weaker effect
setOffset({
  x: x * 20,  // Change this number
  y: y * 20,  // Change this number
});
```

---

## ✅ Testing Checklist

- [ ] Scroll to speakers section and see staggered animations
- [ ] Click on speaker cards to flip and see bio
- [ ] Hover over sponsors and see parallax effect
- [ ] Scroll down page and see ScrollToTop appear after 300px
- [ ] Click ScrollToTop and verify smooth scroll to top
- [ ] Test on mobile/tablet/desktop breakpoints
- [ ] Verify hover effects work on all interactive elements
