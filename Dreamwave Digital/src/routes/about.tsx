import { createFileRoute } from "@tanstack/react-router";
import { CursorTrail } from "@/components/CursorTrail";
import {
  ArrowRight,
  Heart,
  Globe,
  Zap,
  Users,
  Sparkles,
  Sun,
  Flower2,
} from "lucide-react";
import girlsWhoYap from "@/assets/GWY.jpg";
import gwyImg from "@/assets/gwy.jpg";
import doraHacksImg from "@/assets/dorahacks.jpg";
import w3mImg from "@/assets/w3m.jpg";
import doradao from "@/assets/doradao.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      // { title: "About DoraDAO — Building Bridges, Not Just Tools" },
      {
        name: "description",
        content:
          "DoraDAO is a purpose-driven, non-profit parent community making emerging tech accessible and inclusive across 15+ countries.",
      },
      { property: "og:title", content: "About DoraDAO" },
      {
        property: "og:description",
        content:
          "We build bridges, not just tools. Making emerging tech accessible to everyone.",
      },
    ],
  }),
  component: About,
});

function SkyDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-[7vh] -translate-x-1/2 h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.92_0.18_60/0.7),transparent_70%)] blur-2xl" />
      <div className="absolute -right-32 top-[40vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.22_15/0.45),transparent_70%)] blur-3xl" />
      <div className="absolute -left-32 top-[70vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_320/0.45),transparent_70%)] blur-3xl" />
      <div className="absolute left-1/3 bottom-[8vh] h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.18_50/0.5),transparent_70%)] blur-3xl" />
    </div>
  );
}

const doraPrograms = [
  {
    icon: Sparkles,
    title: "Girls Who Yap",
    desc: "A women-led fellowship empowering creators to demystify AI, ship in public, and find their people.",
    emoji: "👩‍💻",
    img: gwyImg,   
  },
  {
    icon: Zap,
    title: "DoraHacks",
    desc: "Global builder hackathons where innovators come together to ship products, not just ideas.",
    emoji: "🔨",
    img: doraHacksImg,
  },
  {
    icon: Globe,
    title: "W3M",
    desc: "Where Web3 meets AI — exploring the intersection of decentralization and intelligent systems.",
    emoji: "🌐",
    img: w3mImg,
  },
];

const stats = [
  { num: "11+", label: "Countries" },
  { num: "5K+", label: "Community Members" },
  { num: "6L+", label: "Social Reach" },
  { num: "∞", label: "Possibilities" },
];

const illustration = (
  <svg viewBox="0 0 400 300" className="w-full h-auto">
    {/* Sky background */}
    <rect width="400" height="300" fill="url(#skyGradient)" />
    
    {/* Clouds */}
    <ellipse cx="80" cy="50" rx="40" ry="25" fill="white" opacity="0.8" />
    <ellipse cx="320" cy="70" rx="50" ry="30" fill="white" opacity="0.8" />
    
    {/* Ground */}
    <rect y="250" width="400" height="50" fill="#f5deb3" />
    <path d="M 0 240 Q 100 220 200 240 T 400 240" stroke="#f5deb3" strokeWidth="3" fill="none" />
    
    {/* Girl 1 - sitting and relaxing */}
    <g>
      {/* Head */}
      <circle cx="120" cy="180" r="16" fill="#ffc0a0" />
      {/* Hair */}
      <path d="M 104 180 Q 100 160 120 160 Q 140 160 136 180" fill="#8b4513" />
      {/* Body */}
      <rect x="110" y="200" width="20" height="30" fill="#ff69b4" rx="4" />
      {/* Legs */}
      <line x1="115" y1="230" x2="110" y2="250" stroke="#8b6f47" strokeWidth="4" />
      <line x1="125" y1="230" x2="130" y2="250" stroke="#8b6f47" strokeWidth="4" />
      {/* Arms */}
      <line x1="110" y1="208" x2="90" y2="200" stroke="#ffc0a0" strokeWidth="4" />
      <line x1="130" y1="208" x2="140" y2="220" stroke="#ffc0a0" strokeWidth="4" />
      {/* Smile */}
      <path d="M 116 188 Q 120 192 124 188" stroke="#000" strokeWidth="1.5" fill="none" />
    </g>
    
    {/* Girl 2 - dancing/celebrating */}
    <g>
      {/* Head */}
      <circle cx="280" cy="170" r="16" fill="#ffc0a0" />
      {/* Hair */}
      <path d="M 264 170 Q 260 150 280 150 Q 300 150 296 170" fill="#d2691e" />
      {/* Body */}
      <rect x="270" y="190" width="20" height="30" fill="#4169e1" rx="4" />
      {/* Legs */}
      <line x1="275" y1="220" x2="270" y2="245" stroke="#8b6f47" strokeWidth="4" />
      <line x1="285" y1="220" x2="290" y2="242" stroke="#8b6f47" strokeWidth="4" />
      {/* Arms up - celebrating */}
      <line x1="270" y1="198" x2="250" y2="170" stroke="#ffc0a0" strokeWidth="4" />
      <line x1="290" y1="198" x2="310" y2="170" stroke="#ffc0a0" strokeWidth="4" />
      {/* Happy expression */}
      <circle cx="276" cy="166" r="2" fill="#000" />
      <circle cx="284" cy="166" r="2" fill="#000" />
      <path d="M 278 172 Q 280 175 282 172" stroke="#000" strokeWidth="1.5" fill="none" />
    </g>
    
    {/* Decorative elements */}
    <circle cx="200" cy="100" r="8" fill="#FFD700" opacity="0.6" />
    <circle cx="150" cy="120" r="6" fill="#FFD700" opacity="0.6" />
    <circle cx="320" cy="130" r="7" fill="#FFD700" opacity="0.6" />
    
    <defs>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ffc0d9", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#fff5f7", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-journey text-foreground">
      <CursorTrail />
      <SkyDecor />

      <div className="relative z-10">
        {/* NAV */}
        <header className="sticky top-4 z-50 mx-auto w-[min(94%,1100px)]">
          <nav className="chapter-glass flex items-center justify-between px-4 py-2.5 rounded-full">
            <a href="/" className="flex items-center gap-2.5 font-display text-base font-bold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow">
                <Sun className="h-3.5 w-3.5" />
              </span>
              <span>GWY <span className="text-coral">2.0</span></span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm text-foreground/70">
              <a href="/" className="hover:text-foreground transition">Home</a>
              <a href="/about" className="text-coral font-semibold">About DoraDAO</a>
            </div>
            <a
              href="https://discord.gg/CRaEtrtZ2v"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition"
            >
              Join <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-8 mb-12">
          <div className="relative overflow-hidden rounded-3xl shadow-card min-h-[60vh] flex items-end">
            <img
              src={girlsWhoYap}
              alt="DoraDAO community"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
            <div className="relative z-10 p-12 md:p-20 max-w-3xl">
              {/* <span className="font-hand text-3xl md:text-5xl text-[oklch(0.95_0.15_95)] drop-shadow-lg">
                Meet DoraDAO <Flower2 className="inline h-8 w-8" />
              </span>
              <h1 className="mt-4 font-display font-extrabold text-4xl md:text-6xl leading-tight text-white drop-shadow-md">
                Building <span className="text-coral">bridges</span>, not just tools.
              </h1> */}
              <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-2xl">
                A purpose-driven, non-profit parent community ...
              </p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="relative mx-auto w-[min(94%,1100px)] mb-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-coral font-bold">Our Mission</span>
              <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl leading-tight text-foreground">
                Our name is a nod to <span className="text-coral drop-shadow-[0_2px_8px_oklch(0.1_0.05_30/0.7)]">Dora the Explorer</span>.
              </h2>
              <p className="mt-4 text-foreground/75 text-lg leading-relaxed">
                The ultimate symbol of fearless curiosity. Dora questioned everything without embarrassment or fear of judgment. That is our exact DNA — we believe groundbreaking innovation always begins with a simple, unafraid question.
              </p>
            </div> 
            <div className="relative"> 
            <div className="bg-white/30 rounded-2xl p-0 border border-white/40 shadow-soft overflow-hidden">              {/* <div className="bg-white/60 rounded-3xl p-8 border border-white/80 shadow-soft"> */}
                {/* {illustration} */}
                <img
                    src={doradao}
                    alt="DoraDAO community"
                    className="w-full h-full object-c rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="relative mx-auto w-[min(94%,1100px)] mb-12">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-coral font-semibold">Our Playground</span>
            <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl leading-tight text-coral">
              Bold initiatives, bold ideas.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {doraPrograms.map((prog) => (
              <div
                  key={prog.title}
                  className="group relative rounded-2xl overflow-hidden border border-white/20 hover:-translate-y-1 transition h-full flex flex-col items-center justify-center text-center min-h-[280px]"
                >
                  {/* Background image */}
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition" />
                  
                  {/* Content on top */}
                  <div className="relative z-10 p-8 flex flex-col items-center">
                    <span className="text-2xl mb-4">{prog.emoji}</span>
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-coral text-primary-foreground shadow-glow mb-4">
                      <prog.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">{prog.title}</h3>
                    <p className="text-sm text-white/80 mt-3 leading-relaxed">{prog.desc}</p>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="relative mx-auto w-[min(94%,1100px)] mb-12">
          <div className="bg-white/65 rounded-3xl p-12 border border-white/80">
            <h2 className="font-display font-bold text-3xl text-center mb-12 text-foreground">
              By the <span className="text-coral">numbers</span>.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-4xl md:text-5xl text-coral">{stat.num}</div>
                  <div className="text-sm uppercase tracking-widest text-foreground/60 font-semibold mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="relative mx-auto w-[min(94%,1100px)] mb-12">
          <div className="rounded-3xl bg-white/65 border border-white/80 p-10 md:p-16">
            <span className="text-xs uppercase tracking-widest text-coral font-semibold">How We Roll</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
              We don't just build <span className="text-coral">technical systems</span>;<br/>
              we build the pioneers who <span className="text-coral">run them</span>.
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-3xl">
              The Girls Initiative Fellowship is the heartbeat of this mission. Moving beyond basic tools, we engineer real pathways, forge global Web3 networks, and cultivate a fearless sisterhood of leaders — delivering borderless access, funding, and mentorship.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow hover:scale-105 transition px-6 py-3 text-sm font-semibold"
              >
                Explore GWY Fellowship <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://discord.gg/CRaEtrtZ2v"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-white/80 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/80 transition"
              >
                Join the Community <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative py-10">
          <div className="mx-auto w-[min(94%,1100px)] flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-foreground/70">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-coral text-primary-foreground">
                <Sun className="h-3 w-3" />
              </span>
              DoraDAO — Building Bridges for Emerging Tech ✿
            </div>
            <div className="flex gap-4">
              <a href="/" className="hover:text-foreground transition">Home</a>
              <a href="https://discord.gg/CRaEtrtZ2v" className="hover:text-foreground transition">Discord</a>
              <a href="https://x.com/connectdoradao" className="hover:text-foreground transition">Twitter</a>
            </div>
          </div>
        </footer>


        <Sparkles className="hidden" />
      </div>
    </div>
  );
}
