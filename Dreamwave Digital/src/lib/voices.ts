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
  { n: "Founder", r: "FOSSASIA", img: "src/assets/speakers/speaker-1.jpg" },
  { n: "Community Manager", r: "Outreachy", img: "src/assets/speakers/speaker-2.jpg" },
  { n: "3X Founder", r: "FE TV HUB", img: "src/assets/speakers/speaker-3.jpg" },
  { n: "Ex-Google", r: "Investor", img: "src/assets/speakers/speaker-4.jpg" },
  { n: "Co-founder, CEO", r: "zeroone", img: "src/assets/speakers/speaker-5.jpg" },
  { n: "Principal Ambassador", r: "Polkadot", img: "src/assets/speakers/speaker-6.jpg" },
  { n: "Founder", r: "GirlScript Foundation", img: "src/assets/speakers/speaker-7.jpg" },
  { n: "Talent Head", r: "BeInCrypto", img: "src/assets/speakers/speaker-8.jpg" },
];

export const allSpeakers = [
  { n: "Founder", r: "FOSSASIA", img: "src/assets/speakers/speaker-1.jpg" },
  { n: "Community Manager", r: "Outreachy", img: "src/assets/speakers/speaker-2.jpg" },
  { n: "3X Founder", r: "FE TV HUB", img: "src/assets/speakers/speaker-3.jpg" },
  { n: "Ex-Google", r: "Investor", img: "src/assets/speakers/speaker-4.jpg" },
  { n: "Co-founder, CEO", r: "zeroone", img: "src/assets/speakers/speaker-5.jpg" },
  { n: "Principal Ambassador", r: "Polkadot", img: "src/assets/speakers/speaker-6.jpg" },
  { n: "Founder", r: "GirlScript Foundation", img: "src/assets/speakers/speaker-7.jpg" },
  { n: "Talent Head", r: "BeInCrypto", img: "src/assets/speakers/speaker-8.jpg" },
  { n: "Developer Advocate", r: "@DigitalOcean", img: "src/assets/speakers/speaker-9.jpg" },
  { n: "Head of Events", r: "SCRIB3", img: "src/assets/speakers/speaker-10.jpg" },
  { n: "Software Developer", r: "Zomato", img: "src/assets/speakers/speaker-11.jpg" },
  { n: "Founder", r: "SI1ICON", img: "src/assets/speakers/speaker-12.jpg" },
  { n: "Software Engineer II", r: "@Red Hat", img: "src/assets/speakers/speaker-13.jpg" },
  { n: "Buidling cabal", r: "Arbitrum Fndn", img: "src/assets/speakers/speaker-14.jpg" },
  { n: "CMO", r: "Soonami Venture", img: "src/assets/speakers/speaker-15.jpg" },
  { n: "Software Engineer II", r: "Intuit", img: "src/assets/speakers/speaker-16.jpg" },
  { n: "Ex-Ecosystem", r: "Brain Strom", img: "src/assets/speakers/speaker-17.jpg" },
  { n: "Head of Product marketing", r: "Telegram", img: "src/assets/speakers/speaker-18.jpg" },
];

export const pastSponsors = [
  { n: "Devfolio", cat: "Hackathon Platform", img: "src/assets/sponsors/sponsor-1.png" },
  { n: "GitHub", cat: "Developer Platform", img: "src/assets/sponsors/sponsor-2.png" },
  { n: "QuillAudits", cat: "Security", img: "src/assets/sponsors/sponsor-3.png" },
  { n: "Filecoin", cat: "Web3 Storage", img: "src/assets/sponsors/sponsor-4.png" },
  { n: "Soonam.ai", cat: "Platform", img: "src/assets/sponsors/sponsor-5.png" },
  { n: "5ireChain", cat: "Blockchain", img: "src/assets/sponsors/sponsor-6.png" },
  { n: "Progate", cat: "Education", img: "src/assets/sponsors/sponsor-7.png" },
  { n: "Dmail Network", cat: "Web3 Email", img: "src/assets/sponsors/sponsor-8.png" },
  { n: "Suku", cat: "Platform", img: "src/assets/sponsors/sponsor-9.png" },
  { n: "U°Community", cat: "Community", img: "src/assets/sponsors/sponsor-10.png" },
  { n: "Oasis Network", cat: "Blockchain", img: "src/assets/sponsors/sponsor-11.png" },
  { n: "HECO Chain", cat: "Blockchain", img: "src/assets/sponsors/sponsor-12.png" },
  { n: "Core DAO", cat: "Blockchain", img: "src/assets/sponsors/sponsor-13.png" },
  { n: "Socrates", cat: "Platform", img: "src/assets/sponsors/sponsor-14.png" },
  { n: "Mentro", cat: "Community", img: "src/assets/sponsors/sponsor-15.png" },
  { n: "Starlay Finance", cat: "DeFi", img: "src/assets/sponsors/sponsor-16.png" },
  { n: "Floxus", cat: "Platform", img: "src/assets/sponsors/sponsor-17.png" },
  { n: "QuickBlox", cat: "Communication", img: "src/assets/sponsors/sponsor-18.png" },
  { n: "Reskill", cat: "Education", img: "src/assets/sponsors/sponsor-19.png" },
  { n: "MongoDB", cat: "Database", img: "src/assets/sponsors/sponsor-20.png" },
];

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
