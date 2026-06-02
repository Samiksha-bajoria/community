export const speakerGrads = [
  "from-[oklch(0.78_0.2_40)] to-[oklch(0.65_0.22_15)]",
  "from-[oklch(0.7_0.2_320)] to-[oklch(0.55_0.2_290)]",
  "from-[oklch(0.82_0.16_55)] to-[oklch(0.7_0.21_25)]",
  "from-[oklch(0.75_0.18_350)] to-[oklch(0.6_0.2_320)]",
  "from-[oklch(0.7_0.18_15)] to-[oklch(0.5_0.18_350)]",
  "from-[oklch(0.8_0.14_45)] to-[oklch(0.65_0.2_10)]",
  "from-[oklch(0.72_0.18_300)] to-[oklch(0.5_0.16_270)]",
  "from-[oklch(0.85_0.13_60)] to-[oklch(0.7_0.2_30)]",
];

export const homeSpeakers = [
  { n: "Anika Rao", r: "Founder, NovaAgents" },
  { n: "Maya Iyer", r: "AI Researcher, OpenLab" },
  { n: "Zara Khan", r: "DevRel, ToolForge" },
  { n: "Priya Menon", r: "Founder, ShipWeekly" },
  { n: "Riya Das", r: "Engineer, Anthropic" },
  { n: "Tara Singh", r: "Investor, Beach Capital" },
  { n: "Lina Park", r: "Founder, Yappers.ai" },
  { n: "Noor Ahmed", r: "PM, Agentic Labs" },
];

export const allSpeakers = [
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
  { n: "Mira Shah", r: "Senior Technical Recruiter, GroupH" },
];

export const pastSponsors = [
  { n: "DoraDAO", cat: "Community Platform" },
  { n: "Anthropic", cat: "AI/ML" },
  { n: "OpenLab", cat: "Community" },
  { n: "NovaAgents", cat: "AI Tools" },
  { n: "ToolForge", cat: "Developer Tools" },
  { n: "ShipWeekly", cat: "Creator Tools" },
  { n: "Beach Capital", cat: "Investment" },
  { n: "Yappers.ai", cat: "Community" },
  { n: "Agentic Labs", cat: "AI Research" },
  { n: "PalmStack", cat: "Web3" },
  { n: "Girlscript", cat: "Community" },
  { n: "BelleCrypto", cat: "Web3" },
  { n: "FOSSASIA", cat: "Open Source" },
  { n: "DigitalOcean", cat: "Cloud Infrastructure" },
];

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
