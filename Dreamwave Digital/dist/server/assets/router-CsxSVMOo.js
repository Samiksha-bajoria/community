import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { Sun, ArrowRight, Flower2, ArrowLeft, ArrowUpRight, Heart, Globe, Zap, Sparkles, Calendar, MapPin, PenTool, Code2, Briefcase, Megaphone, Palette, Wand2, Mic, DollarSign, Trophy, Gift, Star, Rocket, Moon, ChevronDown } from "lucide-react";
const appCss = "/assets/styles-BId2PEHK.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Dreamwave Digital creates visually stunning websites for communities and fellowships." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Dreamwave Digital creates visually stunning websites for communities and fellowships." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Dreamwave Digital creates visually stunning websites for communities and fellowships." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f542fdde-f0e7-4932-8a6b-deb631b5e91a/id-preview-f30336be--1eee2bb1-0709-4c2c-9692-1d40fe254200.lovable.app-1780042713120.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f542fdde-f0e7-4932-8a6b-deb631b5e91a/id-preview-f30336be--1eee2bb1-0709-4c2c-9692-1d40fe254200.lovable.app-1780042713120.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function CursorTrail() {
  const dotsRef = useRef([]);
  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;
    const count = 12;
    const dots = [];
    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      d.className = "cursor-dot";
      d.style.opacity = String(1 - i / count);
      d.style.transform = `scale(${1 - i / (count * 1.5)})`;
      document.body.appendChild(d);
      dots.push(d);
    }
    dotsRef.current = dots;
    const positions = Array.from({ length: count }, () => ({ x: 0, y: 0 }));
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const tick = () => {
      let x = mouse.x;
      let y = mouse.y;
      positions.forEach((p, i) => {
        p.x += (x - p.x) * 0.3;
        p.y += (y - p.y) * 0.3;
        const d = dots[i];
        d.style.transform = `translate(${p.x - 7}px, ${p.y - 7}px) scale(${1 - i / (count * 1.5)})`;
        x = p.x;
        y = p.y;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      dots.forEach((d) => d.remove());
    };
  }, []);
  return null;
}
const speakerGrads = [
  "from-[oklch(0.78_0.2_40)] to-[oklch(0.65_0.22_15)]",
  "from-[oklch(0.7_0.2_320)] to-[oklch(0.55_0.2_290)]",
  "from-[oklch(0.82_0.16_55)] to-[oklch(0.7_0.21_25)]",
  "from-[oklch(0.75_0.18_350)] to-[oklch(0.6_0.2_320)]",
  "from-[oklch(0.7_0.18_15)] to-[oklch(0.5_0.18_350)]",
  "from-[oklch(0.8_0.14_45)] to-[oklch(0.65_0.2_10)]",
  "from-[oklch(0.72_0.18_300)] to-[oklch(0.5_0.16_270)]",
  "from-[oklch(0.85_0.13_60)] to-[oklch(0.7_0.2_30)]"
];
const homeSpeakers = [
  { n: "Anika Rao", r: "Founder, NovaAgents" },
  { n: "Maya Iyer", r: "AI Researcher, OpenLab" },
  { n: "Zara Khan", r: "DevRel, ToolForge" },
  { n: "Priya Menon", r: "Founder, ShipWeekly" },
  { n: "Riya Das", r: "Engineer, Anthropic" },
  { n: "Tara Singh", r: "Investor, Beach Capital" },
  { n: "Lina Park", r: "Founder, Yappers.ai" },
  { n: "Noor Ahmed", r: "PM, Agentic Labs" }
];
const allSpeakers = [
  ...homeSpeakers,
  { n: "Ayesha Gupta", r: "Founder, Girlscript Foundation" },
  { n: "Kavya Sharma", r: "Talent Head, BelleCrypto" },
  { n: "Neha Joshi", r: "Founder, FOSSASIA" },
  { n: "Meera Patel", r: "Head of Events, SCCM3" },
  { n: "Diya Kaur", r: "Developer Advocate, DigitalOcean" },
  { n: "Sara Goswami", r: "Principal Ambassador, Polkadot" },
  { n: "Karishma Das", r: "Founder, ZeroOne" },
  { n: "Aditi Nair", r: "Product Lead, Telegram" },
  { n: "Shruti Menon", r: "Judge & Mentor, MUN Hive" },
  { n: "Sanya Roy", r: "Senior Cloud Architect, Google" },
  { n: "Divya Reddy", r: "CMO, Zoho" },
  { n: "Isha Bhat", r: "Co-founder, NextLoop" },
  { n: "Pooja Lal", r: "Owner & Director, Rebase Media" },
  { n: "Nidhi Mehta", r: "Developer Relations Lead, Meta Labs" },
  { n: "Ruchika Sen", r: "Founder, Codeing Studio" },
  { n: "Ishita Sharma", r: "Founder, Learning Yard" },
  { n: "Neelam Joshi", r: "Founder, Indian Startup School" },
  { n: "Anjali Gupta", r: "Creator, IM Reach" },
  { n: "Sana Verma", r: "Software Engineer, Zephyr" },
  { n: "Tina Kapoor", r: "Community Manager, Outreach" },
  { n: "Rhea Singh", r: "Product Lead, GlowLabs" },
  { n: "Mira Shah", r: "Senior Technical Recruiter, GroupH" }
];
function getInitials(name) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}
const Route$2 = createFileRoute("/voices")({
  head: () => ({
    meta: [
      { title: "Voices — GWY Fellowship 2.0" },
      {
        name: "description",
        content: "All speakers and mentors for the GWY Fellowship 2.0 — founders, builders, creators and industry leaders."
      },
      { property: "og:title", content: "Voices — GWY Fellowship 2.0" },
      {
        property: "og:description",
        content: "Meet the full lineup of speakers and mentors for Girls Who Yap Fellowship 2.0."
      }
    ]
  }),
  component: Voices
});
function SkyDecor$2() {
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-[7vh] -translate-x-1/2 h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.92_0.18_60/0.7),transparent_70%)] blur-2xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-32 top-[40vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.22_15/0.45),transparent_70%)] blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -left-32 top-[70vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_320/0.45),transparent_70%)] blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/3 bottom-[8vh] h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.18_50/0.5),transparent_70%)] blur-3xl" })
  ] });
}
function Voices() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden bg-journey text-foreground", children: [
    /* @__PURE__ */ jsx(CursorTrail, {}),
    /* @__PURE__ */ jsx(SkyDecor$2, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx("header", { className: "sticky top-4 z-50 mx-auto w-[min(94%,1100px)]", children: /* @__PURE__ */ jsxs("nav", { className: "chapter-glass flex items-center justify-between px-4 py-2.5 rounded-full", children: [
        /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2.5 font-display text-base font-bold", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsx(Sun, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            "GWY ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "2.0" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6 text-sm text-foreground/70", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Home" }),
          /* @__PURE__ */ jsx("a", { href: "/voices", className: "text-coral font-semibold", children: "Voices" })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://discord.gg/CRaEtrtZ2v",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition",
            children: [
              "Apply ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "relative mx-auto w-[min(94%,1100px)] mt-8 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "chapter-glass overflow-hidden px-8 md:px-14 py-12 rounded-[2rem]", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-hand text-3xl md:text-5xl text-coral drop-shadow-lg", children: [
            "all the voices ",
            /* @__PURE__ */ jsx(Flower2, { className: "inline h-8 w-8" })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display font-extrabold text-4xl md:text-6xl leading-tight text-foreground drop-shadow-md", children: "Speakers & mentors from the full GWY lineup." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl", children: "A curated showcase of founders, creators, investors and leaders who will bring the programme to life." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/",
              className: "inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/25 transition",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                " Back to home"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://discord.gg/CRaEtrtZ2v",
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow px-5 py-2.5 text-sm font-semibold hover:scale-[1.02] transition",
              children: [
                "Join the community ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: allSpeakers.map((speaker, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group rounded-[2rem] bg-white/10 border border-white/15 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-2 hover:bg-white/20",
            children: [
              /* @__PURE__ */ jsx("div", { className: `aspect-square rounded-3xl bg-gradient-to-br ${speakerGrads[i % speakerGrads.length]} grid place-items-center text-white font-display text-4xl font-bold shadow-glow overflow-hidden`, children: /* @__PURE__ */ jsx("span", { className: "relative drop-shadow-lg", children: getInitials(speaker.n) }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx("div", { className: "text-base font-display font-semibold text-foreground", children: speaker.n }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-foreground/70 leading-snug", children: speaker.r })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-foreground/60 font-mono", children: [
                /* @__PURE__ */ jsx("span", { children: "Voice" }),
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition group-hover:text-coral" })
              ] })
            ]
          },
          speaker.n
        )) })
      ] }) })
    ] })
  ] });
}
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DoraDAO — Building Bridges, Not Just Tools" },
      {
        name: "description",
        content: "DoraDAO is a purpose-driven, non-profit parent community making emerging tech accessible and inclusive across 15+ countries."
      },
      { property: "og:title", content: "About DoraDAO" },
      {
        property: "og:description",
        content: "We build bridges, not just tools. Making emerging tech accessible to everyone."
      }
    ]
  }),
  component: About
});
function SkyDecor$1() {
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-[7vh] -translate-x-1/2 h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.92_0.18_60/0.7),transparent_70%)] blur-2xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-32 top-[40vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.22_15/0.45),transparent_70%)] blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -left-32 top-[70vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_320/0.45),transparent_70%)] blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/3 bottom-[8vh] h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.18_50/0.5),transparent_70%)] blur-3xl" })
  ] });
}
const doraPrograms = [
  {
    icon: Sparkles,
    title: "Girls Who Yap",
    desc: "A women-led fellowship empowering creators to demystify AI, ship in public, and find their people.",
    emoji: "👩‍💻"
  },
  {
    icon: Zap,
    title: "DoraHacks",
    desc: "Global builder hackathons where innovators come together to ship products, not just ideas.",
    emoji: "🔨"
  },
  {
    icon: Globe,
    title: "W3M",
    desc: "Where Web3 meets AI — exploring the intersection of decentralization and intelligent systems.",
    emoji: "🌐"
  }
];
const stats$1 = [
  { num: "15+", label: "Countries" },
  { num: "10K+", label: "Community Members" },
  { num: "100+", label: "Initiatives" },
  { num: "∞", label: "Possibilities" }
];
const illustration = /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 400 300", className: "w-full h-auto", children: [
  /* @__PURE__ */ jsx("rect", { width: "400", height: "300", fill: "url(#skyGradient)" }),
  /* @__PURE__ */ jsx("ellipse", { cx: "80", cy: "50", rx: "40", ry: "25", fill: "white", opacity: "0.8" }),
  /* @__PURE__ */ jsx("ellipse", { cx: "320", cy: "70", rx: "50", ry: "30", fill: "white", opacity: "0.8" }),
  /* @__PURE__ */ jsx("rect", { y: "250", width: "400", height: "50", fill: "#f5deb3" }),
  /* @__PURE__ */ jsx("path", { d: "M 0 240 Q 100 220 200 240 T 400 240", stroke: "#f5deb3", strokeWidth: "3", fill: "none" }),
  /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("circle", { cx: "120", cy: "180", r: "16", fill: "#ffc0a0" }),
    /* @__PURE__ */ jsx("path", { d: "M 104 180 Q 100 160 120 160 Q 140 160 136 180", fill: "#8b4513" }),
    /* @__PURE__ */ jsx("rect", { x: "110", y: "200", width: "20", height: "30", fill: "#ff69b4", rx: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "115", y1: "230", x2: "110", y2: "250", stroke: "#8b6f47", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "125", y1: "230", x2: "130", y2: "250", stroke: "#8b6f47", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "110", y1: "208", x2: "90", y2: "200", stroke: "#ffc0a0", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "130", y1: "208", x2: "140", y2: "220", stroke: "#ffc0a0", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M 116 188 Q 120 192 124 188", stroke: "#000", strokeWidth: "1.5", fill: "none" })
  ] }),
  /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("circle", { cx: "280", cy: "170", r: "16", fill: "#ffc0a0" }),
    /* @__PURE__ */ jsx("path", { d: "M 264 170 Q 260 150 280 150 Q 300 150 296 170", fill: "#d2691e" }),
    /* @__PURE__ */ jsx("rect", { x: "270", y: "190", width: "20", height: "30", fill: "#4169e1", rx: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "275", y1: "220", x2: "270", y2: "245", stroke: "#8b6f47", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "285", y1: "220", x2: "290", y2: "242", stroke: "#8b6f47", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "270", y1: "198", x2: "250", y2: "170", stroke: "#ffc0a0", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "290", y1: "198", x2: "310", y2: "170", stroke: "#ffc0a0", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("circle", { cx: "276", cy: "166", r: "2", fill: "#000" }),
    /* @__PURE__ */ jsx("circle", { cx: "284", cy: "166", r: "2", fill: "#000" }),
    /* @__PURE__ */ jsx("path", { d: "M 278 172 Q 280 175 282 172", stroke: "#000", strokeWidth: "1.5", fill: "none" })
  ] }),
  /* @__PURE__ */ jsx("circle", { cx: "200", cy: "100", r: "8", fill: "#FFD700", opacity: "0.6" }),
  /* @__PURE__ */ jsx("circle", { cx: "150", cy: "120", r: "6", fill: "#FFD700", opacity: "0.6" }),
  /* @__PURE__ */ jsx("circle", { cx: "320", cy: "130", r: "7", fill: "#FFD700", opacity: "0.6" }),
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "skyGradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
    /* @__PURE__ */ jsx("stop", { offset: "0%", style: { stopColor: "#ffc0d9", stopOpacity: 1 } }),
    /* @__PURE__ */ jsx("stop", { offset: "100%", style: { stopColor: "#fff5f7", stopOpacity: 1 } })
  ] }) })
] });
function About() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden bg-journey text-foreground", children: [
    /* @__PURE__ */ jsx(CursorTrail, {}),
    /* @__PURE__ */ jsx(SkyDecor$1, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx("header", { className: "sticky top-4 z-50 mx-auto w-[min(94%,1100px)]", children: /* @__PURE__ */ jsxs("nav", { className: "chapter-glass flex items-center justify-between px-4 py-2.5 rounded-full", children: [
        /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2.5 font-display text-base font-bold", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsx(Sun, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            "GWY ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "2.0" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6 text-sm text-foreground/70", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Home" }),
          /* @__PURE__ */ jsx("a", { href: "/about", className: "text-coral font-semibold", children: "About DoraDAO" })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://discord.gg/CRaEtrtZ2v",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition",
            children: [
              "Join ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "relative mx-auto w-[min(94%,1100px)] mt-8 mb-12", children: /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-3xl shadow-card bg-white/65 border border-white/80 p-12 md:p-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-hand text-3xl md:text-5xl text-coral drop-shadow-lg", children: [
          "Meet DoraDAO ",
          /* @__PURE__ */ jsx(Flower2, { className: "inline h-8 w-8" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 font-display font-extrabold text-4xl md:text-6xl leading-tight text-foreground drop-shadow-md", children: [
          "Building ",
          /* @__PURE__ */ jsx("span", { className: "text-coral", children: "bridges" }),
          ", not just tools."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-foreground/80 leading-relaxed max-w-2xl", children: "A purpose-driven, non-profit parent community dedicated to making emerging tech accessible and inclusive. Rooted in Asia and the Middle East, we've grown into a grassroots movement across 15+ countries." })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "relative mx-auto w-[min(94%,1100px)] mb-12", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-coral font-semibold", children: "Our Mission" }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display font-bold text-3xl md:text-4xl leading-tight text-foreground", children: [
            "To build ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "bridges" }),
            ", not just tools."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/75 text-lg leading-relaxed", children: "We enable users from all walks of life to engage with emerging tech in meaningful, real-world ways. We believe AI should empower communities, not exclude them." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsx(Heart, { className: "h-6 w-6 text-coral shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-coral", children: "Inclusive by Design" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 mt-1", children: "Tech for everyone, not just experts" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6 text-coral shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-coral", children: "Globally Rooted" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 mt-1", children: "Growing across Asia, Middle East & beyond" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsx(Zap, { className: "h-6 w-6 text-coral shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-coral", children: "Community-First" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 mt-1", children: "Communities are lived, not just built" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "bg-white/60 rounded-3xl p-8 border border-white/80 shadow-soft", children: illustration }) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "relative mx-auto w-[min(94%,1100px)] mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-coral font-semibold", children: "Our Playground" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display font-bold text-3xl md:text-4xl leading-tight text-coral", children: "Bold initiatives, bold ideas." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: doraPrograms.map((prog) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group rounded-2xl bg-white/65 border border-white/80 p-8 hover:-translate-y-1 hover:bg-white/85 transition h-full flex flex-col items-center justify-center text-center",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-5xl mb-4", children: prog.emoji }),
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center h-14 w-14 rounded-xl bg-coral text-primary-foreground shadow-glow mb-4", children: /* @__PURE__ */ jsx(prog.icon, { className: "h-7 w-7" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: prog.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 mt-3 leading-relaxed", children: prog.desc })
            ]
          },
          prog.title
        )) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "relative mx-auto w-[min(94%,1100px)] mb-12", children: /* @__PURE__ */ jsxs("div", { className: "bg-white/65 rounded-3xl p-12 border border-white/80", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display font-bold text-3xl text-center mb-12 text-foreground", children: [
          "By the ",
          /* @__PURE__ */ jsx("span", { className: "text-coral", children: "numbers" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: stats$1.map((stat) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-4xl md:text-5xl text-coral", children: stat.num }),
          /* @__PURE__ */ jsx("div", { className: "text-sm uppercase tracking-widest text-foreground/60 font-semibold mt-2", children: stat.label })
        ] }, stat.label)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "relative mx-auto w-[min(94%,1100px)] mb-12", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/65 border border-white/80 p-10 md:p-16", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-coral font-semibold", children: "How We Roll" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display font-bold text-3xl md:text-4xl text-foreground", children: [
          "Communities aren't just ",
          /* @__PURE__ */ jsx("span", { className: "text-coral", children: "built" }),
          ", they're ",
          /* @__PURE__ */ jsx("span", { className: "text-coral", children: "lived" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-foreground/75 leading-relaxed max-w-3xl", children: "From Girls Who Yap (our women-led fellowship) to DoraHacks (global builder hackathons) to W3M (where Web3 meets AI), our flagship events are a playground for bold ideas. We don't just talk about inclusion—we build it, every single day, with every single person in our community." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/",
              className: "inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow hover:scale-105 transition px-6 py-3 text-sm font-semibold",
              children: [
                "Explore GWY Fellowship ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://discord.gg/CRaEtrtZ2v",
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 rounded-full bg-white/60 border border-white/80 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/80 transition",
              children: [
                "Join the Community ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("footer", { className: "relative py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(94%,1100px)] flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-foreground/70", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-coral text-primary-foreground", children: /* @__PURE__ */ jsx(Sun, { className: "h-3 w-3" }) }),
          "DoraDAO — Building Bridges for Emerging Tech ✿"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Home" }),
          /* @__PURE__ */ jsx("a", { href: "https://discord.gg/CRaEtrtZ2v", className: "hover:text-foreground transition", children: "Discord" }),
          /* @__PURE__ */ jsx("a", { href: "https://x.com/connectdoradao", className: "hover:text-foreground transition", children: "Twitter" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Sparkles, { className: "hidden" })
    ] })
  ] });
}
const heroBeach = "/assets/hero-beach-Cxy-gqEb.jpg";
const hackCollage = "/assets/hack-collage-yXp-vScd.jpg";
const beachKit = "/assets/beach-kit-XBPtfzqO.png";
const beachWalkers = "/assets/beach-walkers-Cv98FGJ9.png";
const TARGET = (/* @__PURE__ */ new Date("2026-07-15T23:59:59Z")).getTime();
function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 864e5);
  const h = Math.floor(diff / 36e5 % 24);
  const m = Math.floor(diff / 6e4 % 60);
  const s = Math.floor(diff / 1e3 % 60);
  return { d, h, m, s };
}
function Countdown() {
  const [t, setT] = useState(null);
  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1e3);
    return () => clearInterval(id);
  }, []);
  const units = [
    { k: "days", v: t?.d },
    { k: "hrs", v: t?.h },
    { k: "min", v: t?.m },
    { k: "sec", v: t?.s }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 px-3 py-2.5", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-white/90 font-semibold mr-1", children: "Apps close in" }),
    units.map((u) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center min-w-[42px]", children: [
      /* @__PURE__ */ jsx("span", { className: "font-display font-bold text-white text-xl md:text-2xl leading-none tabular-nums", children: u.v === void 0 ? "--" : String(u.v).padStart(2, "0") }),
      /* @__PURE__ */ jsx("span", { className: "text-[9px] uppercase tracking-wider text-white/75 mt-0.5", children: u.k })
    ] }, u.k))
  ] });
}
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GWY Fellowship 2.0 — Girls Who Yap × AI" },
      {
        name: "description",
        content: "A women-first, creator-led 4-week fellowship demystifying AI. Build, yap, ship & earn. Applications close July 15."
      },
      { property: "og:title", content: "GWY Fellowship 2.0" },
      {
        property: "og:description",
        content: "Soft skies. Bold algorithms. Join the Girls Who Yap Fellowship — creators, builders, PMs, marketers welcome."
      },
      { property: "og:image", content: heroBeach },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBeach }
    ]
  }),
  component: Landing
});
const partners = [
  "DoraDAO",
  "OpenLab",
  "NovaAgents",
  "ToolForge",
  "ShipWeekly",
  "Anthropic",
  "Beach Capital",
  "Yappers.ai",
  "Agentic Labs",
  "PalmStack"
];
const roles = [
  { i: PenTool, t: "Creators" },
  { i: Code2, t: "Builders" },
  { i: Briefcase, t: "PMs" },
  { i: Megaphone, t: "Marketers" },
  { i: Palette, t: "Designers" },
  { i: Wand2, t: "AI-curious" }
];
const weeks = [
  { w: "Week 01", t: "Tune in", d: "Live yap sessions with founders & researchers." },
  { w: "Week 02", t: "Build out loud", d: "Ship demos. Post threads. Bounties drop." },
  { w: "Week 03", t: "DoraHack", d: "A 7-day sprint — ship products, not projects." },
  { w: "Week 04", t: "Launch & land", d: "Product Hunt day, IRL VC nights, Dora Delight." }
];
const stats = [
  { k: "3M+", v: "reach" },
  { k: "40K+", v: "community" },
  { k: "10K+", v: "creators" },
  { k: "30+", v: "events" }
];
const peek = [
  { cap: "Pre-conf kickoff", grad: "from-[oklch(0.82_0.18_45)] to-[oklch(0.72_0.22_15)]", emoji: "🌅" },
  { cap: "Talent night", grad: "from-[oklch(0.75_0.2_350)] to-[oklch(0.55_0.2_320)]", emoji: "✨" },
  { cap: "Bonfire build", grad: "from-[oklch(0.78_0.2_40)] to-[oklch(0.5_0.18_25)]", emoji: "🔥" },
  { cap: "Yap session #4", grad: "from-[oklch(0.7_0.2_320)] to-[oklch(0.35_0.13_290)]", emoji: "🎙️" },
  { cap: "Hack demo day", grad: "from-[oklch(0.8_0.16_60)] to-[oklch(0.65_0.22_35)]", emoji: "🚀" },
  { cap: "Sunset socials", grad: "from-[oklch(0.85_0.14_55)] to-[oklch(0.7_0.21_15)]", emoji: "🌇" },
  { cap: "Dora Delight", grad: "from-[oklch(0.88_0.12_25)] to-[oklch(0.72_0.18_350)]", emoji: "🍦" },
  { cap: "Cohort pic", grad: "from-[oklch(0.75_0.18_350)] to-[oklch(0.6_0.2_320)]", emoji: "💖" }
];
const speakers = homeSpeakers;
const partnersList = [
  { n: "DoraDAO", kind: "Company" },
  { n: "OpenLab", kind: "Community" },
  { n: "NovaAgents", kind: "Company" },
  { n: "ToolForge", kind: "Community" },
  { n: "ShipWeekly", kind: "Company" },
  { n: "Anthropic", kind: "Company" },
  { n: "Beach Capital", kind: "Investor" },
  { n: "Yappers.ai", kind: "Community" },
  { n: "Agentic Labs", kind: "Company" },
  { n: "PalmStack", kind: "Community" }
];
const socials = [
  { label: "Discord", href: "https://discord.gg/CRaEtrtZ2v" },
  { label: "Twitter", href: "https://x.com/connectdoradao" },
  { label: "Instagram", href: "https://www.instagram.com/connectdoradao/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/doradao/" },
  { label: "Luma", href: "https://lu.ma/Doradao" }
];
const whatToExpect = [
  { icon: Mic, title: "Creator & founders-led sessions", desc: "Learn from the best in the creator economy" },
  { icon: Code2, title: "AI + content + product thinking", desc: "Hands-on workshops on AI tools and applications" },
  { icon: Zap, title: "Weekly challenges", desc: "Build momentum with community-driven tasks" },
  { icon: Star, title: "UGC content creation", desc: "Master the art of creating engaging content" },
  { icon: Rocket, title: "Build real products", desc: "Go from idea to shipped product in weeks" },
  { icon: Trophy, title: "Launch publicly", desc: "Ship on Product Hunt, Peerlist & beyond" }
];
const timelineEvents = [
  { date: "3rd June", title: "Applications Open", desc: "GWY Fellowship Application Registration Open" },
  { date: "15th June", title: "Fellowship Kickoff", desc: "Founder-led sessions, creator talks, weekly challenges and hands-on learning begin" },
  { date: "15th July", title: "Application Close", desc: "The final cohort gets selected based on creativity, ideas and builder energy" },
  { date: "5th-8th Aug", title: "72 hours Hackathon", desc: "Build, ship and Launch on Product Hunt, Peerlist etc. User Acquisition Challenges" },
  { date: "25th July", title: "Offline Experience", desc: "Top 50 creators move into the offline experience" },
  { date: "25th Aug", title: "Offline 1 Week Cohort", desc: "Top 50 Creators will work on launching products, Networking & demos" },
  { date: "31st Aug", title: "Graduation", desc: "Showcase your products, celebrate your journey and launch your ideas into the world" }
];
const faqs = [
  { q: "Why now?", a: "Creator economy is $250B+. 75% women feel tech-excluded. 90% creators lack ownership. 2× growth comes via communities. Girls Who Yap fills that gap with community, tools, and vibe." },
  { q: "Why GWY?", a: "This is a creator-first space built for women across diverse walks of life: creators, storytellers, founders, professionals, artists, community builders, and anyone intentionally shaping a personal brand." },
  { q: "Who are we looking for?", a: "Someone who naturally brings people together, believes in the power of community, is building (or wants to build) in public, cares about creating meaningful experiences, and can take ownership and execute independently." },
  { q: "What if I'm not technical?", a: "Perfect! We welcome creators, marketers, PMs, designers, and anyone curious about AI. No coding experience required." },
  { q: "Is there a fee?", a: "Applications open to all. Join the Discord to stay updated on pricing and fellowship details." }
];
function Chapter({
  kicker,
  title,
  children,
  dark = false,
  id,
  wide = false
}) {
  return /* @__PURE__ */ jsx("section", { id, className: `relative mx-auto ${wide ? "w-[min(96%,1200px)]" : "w-[min(94%,1100px)]"} py-8 md:py-12`, children: /* @__PURE__ */ jsxs("div", { className: `${dark ? "chapter-glass-dark" : "chapter-glass"} px-6 md:px-12 py-8 md:py-12`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "horizon-line flex-1" }),
      /* @__PURE__ */ jsxs("span", { className: "chapter-num whitespace-nowrap", children: [
        "✿ ",
        kicker,
        " ✿"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "horizon-line flex-1" })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: `mt-5 font-display font-bold text-3xl md:text-5xl leading-[1.05] max-w-3xl ${dark ? "text-white" : ""}`, children: title }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children })
  ] }) });
}
function SkyDecor() {
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-[7vh] -translate-x-1/2 h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.92_0.18_60/0.7),transparent_70%)] blur-2xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-32 top-[40vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.22_15/0.45),transparent_70%)] blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -left-32 top-[70vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_320/0.45),transparent_70%)] blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/3 bottom-[8vh] h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.18_50/0.5),transparent_70%)] blur-3xl" })
  ] });
}
function HeroBeachDecor() {
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 md:h-40 overflow-hidden", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: beachWalkers,
        alt: "",
        width: 260,
        height: 170,
        loading: "lazy",
        className: "absolute left-4 md:left-10 bottom-2 w-32 md:w-44 opacity-85 animate-float-slow",
        style: { filter: "drop-shadow(0 6px 14px oklch(0.2 0.08 30 / 0.55))" }
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: beachKit,
        alt: "",
        width: 180,
        height: 180,
        loading: "lazy",
        className: "absolute right-2 md:right-6 -bottom-3 w-24 md:w-32 opacity-95 animate-float drop-shadow-[0_10px_24px_oklch(0.2_0.08_30/0.5)]"
      }
    )
  ] });
}
function Stars() {
  const stars = Array.from({ length: 26 }, (_, i) => i);
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", "aria-hidden": true, children: stars.map((i) => {
    const left = i * 137 % 100;
    const top = i * 53 % 100;
    const size = 2 + i % 3;
    const delay = i % 7 * 0.4;
    return /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute rounded-full bg-white animate-twinkle",
        style: {
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          animationDelay: `${delay}s`,
          boxShadow: "0 0 6px oklch(1 0 0 / 0.9)"
        }
      },
      i
    );
  }) });
}
function FAQItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => setOpen(!open),
      className: "w-full text-left rounded-3xl bg-faq-soft border border-white/70 p-6 hover:bg-white/90 hover:-translate-y-0.5 transition group",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-lg text-foreground text-left", children: question }),
          /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 text-coral shrink-0 transition-transform ${open ? "rotate-180" : ""}` })
        ] }),
        open && /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 mt-4 leading-relaxed text-left", children: answer })
      ]
    }
  );
}
function Landing() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden bg-journey text-foreground", children: [
    /* @__PURE__ */ jsx(CursorTrail, {}),
    /* @__PURE__ */ jsx(SkyDecor, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx("header", { className: "sticky top-4 z-50 mx-auto w-[min(94%,1100px)]", children: /* @__PURE__ */ jsxs("nav", { className: "chapter-glass flex items-center justify-between px-4 py-2.5 rounded-full", children: [
        /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2.5 font-display text-base font-bold", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsx(Sun, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            "GWY ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "2.0" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6 text-sm text-foreground/70", children: [
          /* @__PURE__ */ jsx("a", { href: "#story", className: "hover:text-foreground transition", children: "Story" }),
          /* @__PURE__ */ jsx("a", { href: "#hack", className: "hover:text-foreground transition", children: "Hack" }),
          /* @__PURE__ */ jsx("a", { href: "#speakers", className: "hover:text-foreground transition", children: "Voices" }),
          /* @__PURE__ */ jsx("a", { href: "#partners", className: "hover:text-foreground transition", children: "Partners" }),
          /* @__PURE__ */ jsx("a", { href: "/about", className: "hover:text-foreground transition font-semibold text-coral", children: "DoraDAO" })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://discord.gg/CRaEtrtZ2v",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition",
            children: [
              "Apply ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "top", className: "relative mx-auto w-[min(94%,1100px)] mt-6", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[2rem] shadow-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: heroBeach,
            alt: "Pink sunset beach",
            width: 1920,
            height: 1080,
            className: "absolute inset-0 h-full w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/55" }),
        /* @__PURE__ */ jsxs("div", { className: "relative px-6 pt-24 pb-10 md:px-12 md:pt-36 md:pb-14 min-h-[80svh] flex flex-col justify-end", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-hand text-3xl md:text-5xl text-[oklch(0.95_0.15_95)] drop-shadow-[0_2px_8px_oklch(0.3_0.1_30/0.6)]", children: [
            "hey bestie ",
            /* @__PURE__ */ jsx(Flower2, { className: "inline h-6 w-6 md:h-8 md:w-8" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display font-extrabold text-white leading-[0.95] tracking-tight text-[clamp(2.6rem,8vw,6.2rem)] drop-shadow-[0_4px_20px_oklch(0.2_0.1_30/0.5)]", children: [
            "Girls Who ",
            /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
            "Yap",
            " ",
            /* @__PURE__ */ jsx("span", { className: "inline-flex items-end align-baseline", children: /* @__PURE__ */ jsx("span", { className: "bg-coral text-primary-foreground px-4 py-0 rounded-[1.5rem] shadow-glow rotate-[-1deg] inline-block", children: "Fellowship 2.0" }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xl text-white/95 text-base md:text-lg drop-shadow-[0_2px_8px_oklch(0.2_0.1_30/0.6)]", children: "A 4-week women-first cohort to play with AI, ship in public, and find your people." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-2.5 text-xs text-white", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1.5", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
              " 4 weeks"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1.5", children: [
              /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5" }),
              " Virtual + IRL"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1.5", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
              " Finale · Delhi"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://discord.gg/CRaEtrtZ2v",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow hover:scale-[1.03] transition px-6 py-3 text-sm font-semibold",
                children: [
                  "Apply now ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(Countdown, {})
          ] })
        ] }),
        /* @__PURE__ */ jsx(HeroBeachDecor, {})
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "relative mt-6 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto w-[min(94%,1100px)] mb-2 text-[10px] uppercase tracking-[0.3em] text-foreground/55 font-semibold", children: "✿ supporting partners" }),
        /* @__PURE__ */ jsx("div", { className: "flex animate-marquee whitespace-nowrap gap-10 py-3", children: [...partners, ...partners, ...partners].map((p, i) => /* @__PURE__ */ jsxs("span", { className: "font-display font-semibold text-xl md:text-2xl text-foreground/70", children: [
          p,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-coral mx-2", children: "✿" })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs(
        Chapter,
        {
          id: "story",
          kicker: "the invite",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Anyone who wants to ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "play with AI" }),
            "."
          ] }),
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-foreground/75 text-base md:text-lg max-w-xl", children: "Creators, builders, PMs, marketers, designers — if you're curious about AI and ready to yap, you're in." }),
            /* @__PURE__ */ jsx("div", { className: "mt-7 flex flex-wrap gap-3 justify-center", children: roles.map((r) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center justify-center gap-2 rounded-full bg-white/70 border border-white/80 px-4 py-3 text-sm font-medium min-w-[140px] text-center", children: [
              /* @__PURE__ */ jsx(r.i, { className: "h-4 w-4 text-coral shrink-0" }),
              " ",
              /* @__PURE__ */ jsx("span", { children: r.t })
            ] }, r.t)) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Chapter,
        {
          kicker: "the fellowship",
          wide: true,
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "The GWY ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "Fellowship" }),
            "."
          ] }),
          children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12 items-start", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "chapter-num", children: "what it is" }),
              /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display font-semibold text-2xl md:text-3xl leading-tight", children: "A women-first cohort to demystify AI — together, out loud." }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/75 text-base leading-relaxed", children: "GWY Fellowship is a community-led program by Girls Who Yap × DoraDAO. We pair hands-on AI experiments with public storytelling — so you don't just learn the tools, you build a body of work and a circle of friends shipping alongside you." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-3 text-foreground/75 text-base leading-relaxed", children: [
                "Cohort 2.0 runs across ",
                /* @__PURE__ */ jsx("strong", { children: "virtual sessions + IRL touchpoints" }),
                ", with a finale in Delhi. Open to creators, builders, PMs, marketers and designers — anyone ready to play."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap gap-2 text-xs text-foreground/70", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-white/60 border border-white/70 px-3 py-1.5", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 text-coral" }),
                  " 4 weeks"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-white/60 border border-white/70 px-3 py-1.5", children: [
                  /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-coral" }),
                  " Virtual + IRL"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-white/60 border border-white/70 px-3 py-1.5", children: [
                  /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-coral" }),
                  " Finale · Delhi"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "chapter-num", children: "this year, week by week" }),
              /* @__PURE__ */ jsx("div", { className: "mt-3 grid sm:grid-cols-2 gap-4", children: weeks.map((w, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 p-5 rounded-2xl bg-white/65 border border-white/80 shadow-soft h-full min-h-[200px]", children: [
                /* @__PURE__ */ jsxs("div", { className: "shrink-0 h-10 w-10 rounded-full bg-coral grid place-items-center text-primary-foreground shadow-glow font-mono text-[12px] font-bold", children: [
                  "0",
                  i + 1
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-foreground/50 font-mono font-semibold", children: w.w }),
                  /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-lg mt-1", children: w.t }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground/70 mt-2 leading-relaxed", children: w.d })
                ] })
              ] }, w.t)) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-foreground/65", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx(Mic, { className: "h-3.5 w-3.5 text-coral" }),
                  " Weekly yap sessions"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx(DollarSign, { className: "h-3.5 w-3.5 text-coral" }),
                  " Bounties"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx(Heart, { className: "h-3.5 w-3.5 text-coral" }),
                  " Dora Delight"
                ] })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("section", { id: "hack", className: "relative", children: [
        /* @__PURE__ */ jsx(Stars, {}),
        /* @__PURE__ */ jsx(
          Chapter,
          {
            kicker: "the bonfire · dorahack 2.0",
            dark: true,
            wide: true,
            title: /* @__PURE__ */ jsxs(Fragment, { children: [
              "Ship ",
              /* @__PURE__ */ jsx("span", { className: "text-coral", children: "products" }),
              ", not projects."
            ] }),
            children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 md:gap-10 items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl shadow-glow border border-white/15", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: hackCollage,
                      alt: "Women building together at a sunset beach hackathon",
                      width: 1024,
                      height: 1024,
                      loading: "lazy",
                      className: "w-full h-auto object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" }),
                  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 font-mono", children: [
                    /* @__PURE__ */ jsx("span", { className: "rounded-full bg-white/15 backdrop-blur px-2.5 py-1 border border-white/20", children: "building · cohort 1.0" }),
                    /* @__PURE__ */ jsx("span", { className: "rounded-full bg-coral text-primary-foreground px-2.5 py-1 shadow-glow", children: "7-day sprint" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-3 gap-2 text-[10px] text-white/70 font-mono uppercase tracking-widest", children: [
                  /* @__PURE__ */ jsx("span", { className: "rounded-xl bg-white/10 border border-white/15 px-2 py-2 text-center", children: "✿ ship" }),
                  /* @__PURE__ */ jsx("span", { className: "rounded-xl bg-white/10 border border-white/15 px-2 py-2 text-center", children: "✿ launch" }),
                  /* @__PURE__ */ jsx("span", { className: "rounded-xl bg-white/10 border border-white/15 px-2 py-2 text-center", children: "✿ celebrate" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-white/80 max-w-md", children: "A 7-day women-first build sprint inside the cohort. Form pods, ship on Product Hunt, hype each other's launches — and win chunky prizes." }),
                /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2.5", children: [
                  { i: Trophy, t: "Open tracks", d: "Agents, tools, content, commerce — anything useful." },
                  { i: Zap, t: "Product Hunt launch day", d: "We ship together. Threads, demos, comments — full hype mode." },
                  { i: Gift, t: "Prizes & perks", d: "Cash, credits, creator perks — partners stack soon." },
                  { i: Heart, t: "Mentor office hours", d: "Founders & engineers on-call across the 7 days." }
                ].map((d) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 rounded-2xl bg-white/10 border border-white/15 p-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "shrink-0 h-9 w-9 rounded-full bg-coral grid place-items-center text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsx(d.i, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-base text-white", children: d.t }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-white/70 mt-0.5 leading-snug", children: d.d })
                  ] })
                ] }, d.t)) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "https://dorahacks.io/",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow hover:scale-[1.03] transition px-6 py-3 text-sm font-semibold",
                      children: [
                        "Register for DoraHack ",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://discord.gg/CRaEtrtZ2v",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/25 transition",
                      children: "Find a pod"
                    }
                  )
                ] })
              ] })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        Chapter,
        {
          kicker: "last year, by the numbers",
          dark: true,
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "A year of ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "loud beginnings" }),
            "."
          ] }),
          children: [
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-4xl md:text-6xl text-coral leading-none", children: s.k }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs uppercase tracking-widest text-white/65 font-mono", children: s.v })
            ] }, s.v)) }),
            /* @__PURE__ */ jsx("p", { className: "mt-8 text-white/70 max-w-xl text-sm", children: "280+ institutional collabs · 10K+ curated posts in <1 year · 10+ APAC countries plus India, USA & EMEA · one flagship Women-in-Tech conference." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden py-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(94%,1100px)] mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "chapter-num text-white/70", children: "interlude · moments" }),
          /* @__PURE__ */ jsxs("h3", { className: "mt-2 font-display font-bold text-2xl md:text-3xl text-white max-w-xl", children: [
            "Snapshots from ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "our members" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [0, 1].map((row) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex gap-4 animate-marquee whitespace-nowrap",
            style: row % 2 === 1 ? { animationDirection: "reverse" } : void 0,
            children: [...peek, ...peek, ...peek].map((p, i) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://x.com/connectdoradao",
                target: "_blank",
                rel: "noreferrer",
                className: `group relative h-36 w-56 md:h-44 md:w-72 shrink-0 overflow-hidden rounded-2xl shadow-card bg-gradient-to-br ${p.grad}`,
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-lines opacity-30" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 text-3xl md:text-4xl drop-shadow-lg", children: p.emoji }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" }),
                  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-foreground truncate", children: p.cap }),
                    /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5 text-white shrink-0 ml-2" })
                  ] })
                ]
              },
              `${row}-${i}`
            ))
          },
          row
        )) })
      ] }),
      /* @__PURE__ */ jsxs(
        Chapter,
        {
          id: "speakers",
          kicker: "the voices",
          dark: true,
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Speakers & ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "mentors" }),
            "."
          ] }),
          children: [
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: speakers.map((s, i) => {
              return /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/voices",
                  className: "group rounded-2xl bg-white/10 border border-white/15 p-4 transition-transform duration-300 hover:-translate-y-2 hover:bg-white/15 shadow-soft",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: `aspect-square rounded-xl bg-gradient-to-br ${speakerGrads[i % speakerGrads.length]} grid place-items-center text-white font-display text-3xl font-bold shadow-glow relative overflow-hidden`, children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-lines opacity-25" }),
                      /* @__PURE__ */ jsx("span", { className: "relative drop-shadow-md", children: getInitials(s.n) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between text-[10px] text-white/50 font-mono", children: [
                      /* @__PURE__ */ jsxs("span", { children: [
                        "#0",
                        i + 1
                      ] }),
                      /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5 group-hover:text-coral transition" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-0.5 font-display font-semibold text-sm text-white", children: s.n }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-white/65", children: s.r })
                  ]
                },
                s.n
              );
            }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/voices",
                className: "inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/25 transition",
                children: [
                  "See more voices ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Chapter,
        {
          kicker: "what to expect",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Your ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "5-week journey" }),
            "."
          ] }),
          children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: whatToExpect.map((item) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl bg-white/65 border border-white/80 p-6 hover:-translate-y-1 hover:bg-white/85 transition h-full flex flex-col items-center justify-center text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center h-12 w-12 rounded-xl bg-coral text-primary-foreground shadow-glow mb-3", children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-lg text-foreground text-center", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 mt-2 leading-relaxed text-center", children: item.desc })
          ] }, item.title)) })
        }
      ),
      /* @__PURE__ */ jsx(
        Chapter,
        {
          kicker: "the timeline",
          wide: true,
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Mark your ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "calendar" }),
            "."
          ] }),
          children: /* @__PURE__ */ jsxs("div", { className: "relative py-8", children: [
            /* @__PURE__ */ jsx("svg", { className: "pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[120px] overflow-visible", viewBox: "0 0 100 760", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M50 40 C72 120, 28 200, 50 260 S 82 380, 50 440 S 18 540, 50 620 S 78 720, 50 760",
                className: "timeline-curve"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "space-y-12", children: timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "animate-fade-in relative",
                  style: { animationDelay: `${i * 0.15}s` },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: `grid md:grid-cols-2 gap-8 items-center`, children: [
                      /* @__PURE__ */ jsx("div", { className: isLeft ? "md:col-span-1" : "md:col-span-1 md:col-start-2", children: isLeft && /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-sunrise-soft border border-white/50 p-6 shadow-soft hover:shadow-lg hover:-translate-y-1 transition", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest font-bold text-coral mb-2 font-mono", children: event.date }),
                        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl md:text-2xl text-foreground mb-3", children: event.title }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: event.desc })
                      ] }) }),
                      /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:col-span-1 justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-coral rounded-full animate-pulse", style: { width: "20px", height: "20px" } }),
                        /* @__PURE__ */ jsx("div", { className: "h-5 w-5 rounded-full bg-white border-4 border-coral shadow-glow relative z-10" })
                      ] }) }),
                      /* @__PURE__ */ jsx("div", { className: !isLeft ? "md:col-span-1" : "md:col-span-1 md:col-start-1", children: !isLeft && /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-sunrise-soft border border-white/50 p-6 shadow-soft hover:shadow-lg hover:-translate-y-1 transition", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest font-bold text-coral mb-2 font-mono", children: event.date }),
                        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl md:text-2xl text-foreground mb-3", children: event.title }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: event.desc })
                      ] }) })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "md:hidden absolute left-0 top-6 h-5 w-5 rounded-full bg-white border-4 border-coral shadow-glow -translate-x-2" })
                  ]
                },
                event.title
              );
            }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        Chapter,
        {
          kicker: "common questions",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Got ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "questions?" })
          ] }),
          children: /* @__PURE__ */ jsx("div", { className: "space-y-3 max-w-2xl", children: faqs.map((faq, i) => /* @__PURE__ */ jsx(FAQItem, { question: faq.q, answer: faq.a }, i)) })
        }
      ),
      /* @__PURE__ */ jsxs(
        Chapter,
        {
          id: "partners",
          kicker: "the crew",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Powered by an ",
            /* @__PURE__ */ jsx("span", { className: "text-coral", children: "incredible crew" }),
            "."
          ] }),
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-foreground/70 max-w-xl text-sm", children: "Company partners + community partners making GWY happen." }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3", children: partnersList.map((p, i) => {
              const initial = p.n[0];
              const kindColor = p.kind === "Company" ? "text-coral" : p.kind === "Investor" ? "text-[oklch(0.55_0.2_290)]" : "text-[oklch(0.62_0.18_340)]";
              return /* @__PURE__ */ jsxs("div", { className: "group aspect-square rounded-2xl bg-white/65 border border-white/80 flex flex-col items-center justify-center text-center px-4 py-6 hover:-translate-y-1 hover:bg-white/85 transition relative overflow-hidden", children: [
                /* @__PURE__ */ jsx("div", { className: `absolute -top-4 -right-4 h-14 w-14 rounded-full bg-gradient-to-br ${speakerGrads[i % speakerGrads.length]} opacity-30 blur-xl` }),
                /* @__PURE__ */ jsxs("div", { className: "font-display font-bold text-base md:text-lg text-foreground/90 leading-tight text-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-coral", children: initial }),
                  p.n.slice(1)
                ] }),
                /* @__PURE__ */ jsxs("div", { className: `text-[8px] uppercase tracking-wider mt-2 font-mono font-semibold ${kindColor}`, children: [
                  "✿ ",
                  p.kind
                ] })
              ] }, p.n);
            }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { id: "apply", className: "relative mx-auto w-[min(94%,1100px)] py-10 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "chapter-glass relative overflow-hidden px-8 md:px-16 py-14 md:py-20 text-center", children: [
        /* @__PURE__ */ jsx(Moon, { className: "absolute right-8 top-8 h-8 w-8 text-foreground/30", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx(Sun, { className: "absolute left-8 bottom-8 h-10 w-10 text-coral animate-spin-slow", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx("span", { className: "font-hand text-3xl md:text-4xl text-coral", children: "last call ✿" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-2 font-display font-bold text-4xl md:text-6xl leading-[1.05]", children: [
          "Catch the ",
          /* @__PURE__ */ jsx("span", { className: "bg-coral text-primary-foreground rounded-2xl px-3 inline-block -rotate-1 shadow-glow", children: "sunrise" }),
          " cohort."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-lg mx-auto text-foreground/75", children: "Applications close July 15. Join the community and follow along — we'd love you in the room." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center [&_*]:!text-foreground/90", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-white/60 border border-white/80 px-3 py-2.5 backdrop-blur-md", children: /* @__PURE__ */ jsx(Countdown, {}) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://discord.gg/CRaEtrtZ2v",
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow hover:scale-[1.03] transition px-6 py-3 text-sm font-semibold",
              children: [
                /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4" }),
                " Join the Discord"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://lu.ma/Doradao",
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 rounded-full bg-foreground/90 text-background hover:bg-foreground transition px-6 py-3 text-sm font-semibold",
              children: [
                /* @__PURE__ */ jsx(Gift, { className: "h-4 w-4" }),
                " Upcoming events"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-2 text-xs", children: socials.map((s) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: s.href,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1.5 rounded-full bg-white/60 border border-white/80 px-3.5 py-1.5 hover:bg-white/80 transition text-foreground/80",
            children: [
              s.label,
              " ",
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" })
            ]
          },
          s.label
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("footer", { className: "relative py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(94%,1100px)] flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-foreground/70", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-coral text-primary-foreground", children: /* @__PURE__ */ jsx(Sun, { className: "h-3 w-3" }) }),
          "GWY Fellowship 2.0 — a DoraDAO cohort ✿"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4", children: socials.map((s) => /* @__PURE__ */ jsx("a", { href: s.href, target: "_blank", rel: "noreferrer", className: "hover:text-foreground transition", children: s.label }, s.label)) })
      ] }) }),
      /* @__PURE__ */ jsx(Sparkles, { className: "hidden" })
    ] })
  ] });
}
const VoicesRoute = Route$2.update({
  id: "/voices",
  path: "/voices",
  getParentRoute: () => Route$3
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$3
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  VoicesRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
