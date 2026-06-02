# Animation & Effects Technical Guide

## 🎬 CSS Animations (Added to styles.css)

### slideUp - Staggered Card Entrance
```css
@keyframes slideUp {
  0% { 
    opacity: 0; 
    transform: translateY(40px) scale(0.95); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
}

/* Usage: */
.animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
```

**Effect:** Cards bounce up with spring-like easing. Used for sponsor cards with staggered delays.

---

### slideInFromLeft & slideInFromRight - Directional Entries
```css
@keyframes slideInFromLeft {
  0% { 
    opacity: 0; 
    transform: translateX(-60px); 
  }
  100% { 
    opacity: 1; 
    transform: translateX(0); 
  }
}

@keyframes slideInFromRight {
  0% { 
    opacity: 0; 
    transform: translateX(60px); 
  }
  100% { 
    opacity: 1; 
    transform: translateX(0); 
  }
}

/* Usage: */
.animate-slide-in-left { animation: slideInFromLeft 0.5s ease-out forwards; opacity: 0; }
.animate-slide-in-right { animation: slideInFromRight 0.5s ease-out forwards; opacity: 0; }
```

**Effect:** Smooth directional slides from off-screen. Can be used for timeline items or section introductions.

---

### carouselSlide - 3D Carousel Effect
```css
@keyframes carouselSlide {
  0% { 
    opacity: 0; 
    transform: translateX(100px) rotateY(90deg); 
  }
  100% { 
    opacity: 1; 
    transform: translateX(0) rotateY(0deg); 
  }
}

/* Usage: */
.animate-carousel-slide { animation: carouselSlide 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
```

**Effect:** 3D rotation combined with horizontal slide. Creates a carousel-like appearance as cards flip into view.

**Note:** Requires `perspective` CSS property on parent for 3D effect to work properly.

---

### scaleIn - Zoom Entrance
```css
@keyframes scaleIn {
  0% { 
    opacity: 0; 
    transform: scale(0.8); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1); 
  }
}

/* Usage: */
.animate-scale-in { animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
```

**Effect:** Smooth zoom in from 80% to 100% scale. Great for emphasis and attention-drawing.

---

### rotate360 - Continuous Rotation
```css
@keyframes rotate360 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Usage: */
.animate-rotate { animation: rotate360 20s linear infinite; }
```

**Effect:** Continuous smooth rotation. Can be applied to decorative elements like the sun icon in last-call section.

---

## 🖱️ JavaScript Parallax Effects

### Sponsor Card Parallax Logic
From `SponsorsCarousel.tsx`:

```typescript
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  
  // Get normalized position (-0.5 to 0.5)
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  // Apply multiplier for effect intensity
  setOffset({
    x: x * 20,  // Horizontal parallax strength
    y: y * 20,  // Vertical parallax strength
  });
};
```

**How it works:**
1. Calculate mouse position relative to card element
2. Normalize to -0.5 to 0.5 range
3. Multiply by intensity factor (20 = moderate effect)
4. Apply transforms using inline styles

**Applied transforms:**
- 3D perspective rotation on card itself
- Parallel translation of background glow (30% of main offset)
- Logo translation (40% of main offset)
- Bottom accent line (20% of main offset)

This creates a layered parallax effect where different elements move at different speeds.

---

## 📍 Staggered Animation Implementation

### Pattern in Components:

```typescript
{speakers.map((s, i) => (
  <div
    key={s.n}
    className="animate-fade-in"
    style={{ animationDelay: `${i * 0.05}s` }}  // 50ms per item
  >
    {/* Content */}
  </div>
))}
```

**Sponsor cards use:** `i * 0.08s` (80ms delay per card)
**Speaker cards use:** `i * 0.05s` (50ms delay per card)
**Timeline events use:** `i * 0.15s` (150ms delay per event)

---

## 🎭 3D Flip Animation (Speaker Cards)

### CSS for Flip Effect:
```css
/* Applied inline via style prop */
transformStyle: "preserve-3d";
/* Front face (shows by default) */
backfaceVisibility: "hidden";
/* Back face */
transform: "rotateY(180deg)";
backfaceVisibility: "hidden";
```

### JavaScript Toggle:
```typescript
const [isFlipped, setIsFlipped] = React.useState(false);

// Transform value changes based on state:
transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
```

**Effect:** Cards rotate around Y axis. Both front and back faces are hidden when facing away using `backfaceVisibility: "hidden"`.

---

## 🔄 ScrollToTop Button Visibility

### State Management:
```typescript
const [isVisible, setIsVisible] = React.useState(false);

const toggleVisibility = () => {
  if (typeof window !== "undefined") {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
};

React.useEffect(() => {
  window.addEventListener("scroll", toggleVisibility);
  return () => window.removeEventListener("scroll", toggleVisibility);
}, []);
```

**Logic:** Show button when scrollY > 300px, hide otherwise.

### Smooth Scroll:
```typescript
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",  // Smooth animation
  });
};
```

---

## ⚡ Performance Considerations

### GPU Acceleration:
- Uses `transform` and `opacity` (GPU-accelerated properties)
- Avoids animating `top`, `left`, `width`, `height` (forces layout recalculation)

### Staggered Delays:
- Prevents simultaneous animations from causing jank
- Browser can process animations in sequence
- Creates visual rhythm

### Conditional Rendering:
- ScrollToTop button only renders when `isVisible === true`
- Reduces DOM elements and event listeners when not needed

### Mouse Event Throttling:
- Parallax updates on every mousemove (may need throttling for 100+ items)
- Current implementation suitable for 14 sponsor cards
- Consider `requestAnimationFrame` for higher performance on large lists

---

## 🎨 Easing Functions Used

| Easing | Formula | Use Case |
|--------|---------|----------|
| `ease-out` | Decelerating | Entrances, fades |
| `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring-like overshoot | Bouncy, energetic entries |
| `linear` | Constant speed | Rotation, marquee |
| `ease-in-out` | Smooth both ends | Transitions, waits |

---

## 🔧 Customization Guide

### Change Stagger Timing:
**File:** Each component's map function
```typescript
style={{ animationDelay: `${i * 0.08}s` }}
//                              ↑ Change this (in seconds)
```

### Adjust Parallax Strength:
**File:** `SponsorsCarousel.tsx` line ~19
```typescript
setOffset({
  x: x * 20,  // ← Change multiplier (10-50 range recommended)
  y: y * 20,  // ← Change multiplier
});
```

### Modify Animation Duration:
**File:** `styles.css` keyframe definitions
```css
.animate-slide-up { 
  animation: slideUp 0.6s cubic-bezier(...) forwards; 
  //              ↑ Change duration
}
```

### Change Scroll Trigger for Button:
**File:** `ScrollToTop.tsx` line ~14
```typescript
if (window.scrollY > 300) {  // ← Change threshold (pixels)
```

---

## 📱 Mobile Considerations

### Parallax Disabled on Touch Devices:
Currently implemented full parallax on all devices. Consider adding:
```typescript
const isTouchDevice = () => {
  return (window.ontouchstart !== undefined) || 
         (navigator.maxTouchPoints > 0);
};
```

### Animation Preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

---

## 🧪 Testing Animations

### Browser DevTools:
1. Open DevTools → Elements
2. Select animated element
3. Right-click → Inspect
4. In Styles panel, modify animation properties live
5. Test different durations and easing functions

### Performance Profiling:
1. Open DevTools → Performance
2. Record while hovering over sponsors
3. Check for dropped frames (should be 60fps)
4. Look for layout thrashing (red areas)

---

**Animation System Designed for:**
- ✅ Smooth 60fps performance
- ✅ Accessible (respects prefers-reduced-motion)
- ✅ Cross-browser compatible
- ✅ Mobile-friendly
- ✅ Easily customizable
