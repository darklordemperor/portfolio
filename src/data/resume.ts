import {
  Bot,
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  GraduationCap,
  Hammer,
  Languages,
  Map,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  TerminalSquare,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ContactLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: Array<{
    name: string;
    icon: LucideIcon;
  }>;
};

export const profile = {
  name: "Apirat Mathasathien",
  thaiName: "อภิรัตน์ เมธาเสถียร",
  role: "Mobile App Developer",
  focus: "React Native & Flutter",
  experience: "3+ years",
  email: "apirat55555@gmail.com",
  phone: "+66 0809429155",
  github: "https://github.com/apirat55555",
  linkedin: "https://www.linkedin.com/in/apirat-mathasathien",
  tagline:
    "Building polished Android and iOS apps with React Native, Flutter, cloud infrastructure, and production deployment discipline.",
  summary:
    "Mobile developer specializing in React Native and Flutter for Android and iOS. Skilled in Android native code, Google Cloud Platform, Docker, and end-to-end app deployment to Google Play Store. Currently growing toward a Senior Mobile Developer role through deeper platform ownership, architecture, and product delivery.",
} as const;

export const contacts: ContactLink[] = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export const experience = {
  role: "Programmer",
  company: "EastInnovation",
  period: "Nov 2023 - Present",
  duration: "2 yr 7 mo",
  icon: Rocket,
  bullets: [
    "Mobile app development with React Native and Flutter for Android and iOS.",
    "Android native code for platform-specific features and device integrations.",
    "Build and publish workflows for production releases to Google Play Store.",
    "Google Cloud Platform usage for backend and infrastructure management.",
    "macOS development environment for iOS builds and release preparation.",
    "Delivered EV Charging App and Fortune-telling App projects.",
  ],
} as const;

export const projects = [
  {
    title: "EV Charging App",
    icon: MonitorSmartphone,
    description:
      "Cross-platform mobile app for EV charging workflows, focused on reliable Android and iOS delivery, platform integrations, and production store readiness.",
    tags: ["React Native", "Flutter", "Android", "iOS", "Google Maps"],
  },
  {
    title: "Fortune-telling AI App",
    icon: BrainCircuit,
    description:
      "Interactive mobile experience combining video call features, animation, card drawing, and AI chat into a polished consumer app.",
    tags: ["Flutter", "AI Chat", "Video Call", "Animation", "Mobile UX"],
  },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: MonitorSmartphone },
      { name: "Dart", icon: Code2 },
      { name: "Kotlin", icon: TerminalSquare },
      { name: "Android Native Code", icon: Hammer },
      { name: "iOS Development", icon: ShieldCheck },
    ],
  },
  {
    title: "Backend",
    icon: Cloud,
    skills: [
      { name: "Google Cloud", icon: Cloud },
      { name: "Firebase", icon: Database },
      { name: "Next.js", icon: Globe2 },
      { name: "Angular", icon: Code2 },
      { name: "AI Agents", icon: Bot },
      { name: "ChatGPT", icon: BrainCircuit },
    ],
  },
  {
    title: "DevOps",
    icon: Boxes,
    skills: [
      { name: "Docker", icon: Boxes },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "GitLab", icon: GitBranch },
      { name: "Google Play Store", icon: Store },
      { name: "Deployment", icon: Rocket },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Android Studio", icon: MonitorSmartphone },
      { name: "Google Maps", icon: Map },
      { name: "macOS Builds", icon: TerminalSquare },
      { name: "Video Features", icon: Video },
      { name: "Thai Native", icon: Languages },
      { name: "English", icon: Languages },
    ],
  },
];

export const education = {
  degree: "B.Eng. Computer Engineering",
  school: "Rajamangala University of Technology Phra Nakhon",
  graduated: "Graduated 2022",
  project: "Final project: Flutter E-Commerce App with Firebase",
  icon: GraduationCap,
} as const;

export const certifications = [
  {
    title: "Flutter & Firebase E-Commerce App Development",
    issuer: "Udemy",
    date: "Jul 2022",
    icon: ShieldCheck,
  },
] as const;
