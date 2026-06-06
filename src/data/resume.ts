import {
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Code2,
  FlaskConical,
  GitBranch,
  Globe2,
  GraduationCap,
  Hammer,
  Image,
  ListChecks,
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

export type Workflow = {
  title: string;
  description: string;
  steps: Array<{
    label: string;
    detail: string;
    icon: LucideIcon;
  }>;
};

export const profile = {
  name: "Apirat Mathasathien",
  thaiName: "อภิรัตน์ เมธาเสถียร",
  role: "Mobile App Developer",
  focus: "React Native & Flutter",
  experience: "3+ years",
  email: "apirat.dev@gmail.com",
  phone: "+66 0809429155",
  github: "https://github.com/darklordemperor",
  linkedin: "https://www.linkedin.com/in/apirat-mathasatien-a6178822a/",
  jobsdb:
    "https://th.jobsdb.com/th/profiles/%E0%B8%AD%E0%B8%A0%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B9%8C-%E0%B9%80%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B9%80%E0%B8%AA%E0%B8%96%E0%B8%B5%E0%B8%A2%E0%B8%A3-rkWkkyQffC",
  tagline:
    "Building polished Android and iOS apps with React Native, Flutter, web UI skills, and production deployment discipline.",
  summary:
    "Mobile developer specializing in React Native and Flutter for Android and iOS, with practical web frontend experience. Skilled in Android native code, Docker-based tooling, and end-to-end app deployment to Google Play Store. Currently growing toward a Senior Mobile Developer role through deeper platform ownership, architecture, and product delivery.",
} as const;

export const contacts: ContactLink[] = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "JobsDB", href: profile.jobsdb },
];

export const experience = {
  role: "Programmer",
  company: "EastInnovation",
  period: "Nov 2023 - Present",
  duration: "2 yr 7 mo",
  icon: Rocket,
  bullets: [
    "Mobile app development with React Native and Flutter for Android and iOS.",
    "API integration for production mobile and web application workflows.",
    "Android native code for platform-specific features and device integrations.",
    "Build and publish workflows for production releases to Google Play Store.",
    "Google Cloud Console usage for project setup, build support, and release preparation.",
    "AI-assisted development with Python for OCR, background filtering, MediaPipe, TensorFlow, and WebRTC experiments.",
    "Learning backend development with AI-generated code support for Laravel and Spring Boot foundations.",
    "macOS development environment for iOS builds and release preparation.",
    "Delivered EV Charging, AI Chat, Video Call, and GPS Tracking app projects.",
  ],
} as const;

export const projects = [
  {
    title: "EV Charging App",
    icon: MonitorSmartphone,
    description:
      "React Native mobile app for EV charging workflows, focused on reliable Android and iOS delivery, platform integrations, and production store readiness.",
    tags: ["React Native", "Android", "iOS", "Mobile UX", "Store Release"],
  },
  {
    title: "AI Chat App",
    icon: BrainCircuit,
    description:
      "React Native AI chat experience with polished mobile screens, conversational flows, and production-minded app structure.",
    tags: [
      "React Native",
      "AI Chat",
      "TypeScript",
      "Mobile UX",
      "Android",
      "iOS",
    ],
  },
  {
    title: "Video Call App",
    icon: Video,
    description:
      "React Native Expo video calling app using WebRTC for real-time peer communication, camera handling, and mobile call experience.",
    tags: ["React Native", "Expo", "WebRTC", "Video Call", "Real-time"],
  },
  {
    title: "GPS Tracking App",
    icon: Map,
    description:
      "Flutter GPS tracking app using native map APIs to avoid Google Maps usage costs while still supporting location and route-focused workflows.",
    tags: ["Flutter", "Dart", "Native Map API", "GPS Tracking", "Location"],
  },
] as const;

export const githubProjects = [
  {
    name: "Fullstack_ecommerceApp",
    href: "https://github.com/darklordemperor/Fullstack_ecommerceApp",
    language: "C++",
    detail:
      "Full-stack ecommerce practice project showing product, store, and transaction logic across frontend and backend layers.",
  },
  {
    name: "Fullstack-job-seeker-clone",
    href: "https://github.com/darklordemperor/Fullstack-job-seeker-clone",
    language: "HTML",
    detail:
      "Job seeker platform clone focused on page structure, responsive layout, and practical web interface composition.",
  },
  {
    name: "Angular-UI-context",
    href: "https://github.com/darklordemperor/Angular-UI-context",
    language: "TypeScript",
    detail:
      "Angular UI work demonstrating component structure, typed frontend state, and reusable interface patterns.",
  },
  {
    name: "feature-hub-riverpod",
    href: "https://github.com/darklordemperor/feature-hub-riverpod",
    language: "Objective-C",
    detail:
      "Forked productivity app monorepo with Flutter frontend, NestJS backend, and a shared OpenAPI contract.",
  },
  {
    name: "portfolio",
    href: "https://github.com/darklordemperor/portfolio",
    language: "TypeScript",
    detail:
      "This portfolio site built with React, Vite, TypeScript, Tailwind CSS, and GitHub Pages deployment.",
  },
  {
    name: "dashboard-api",
    href: "https://github.com/darklordemperor/dashboard-api",
    language: "PHP",
    detail:
      "Backend API practice for dashboard data flows, server-side routes, and database-oriented application logic.",
  },
  {
    name: "nextjsproject",
    href: "https://github.com/darklordemperor/nextjsproject",
    language: "TypeScript",
    detail:
      "Next.js project exploring React web app structure, routing, typed pages, and production-ready frontend patterns.",
  },
  {
    name: "springbootproject",
    href: "https://github.com/darklordemperor/springbootproject",
    language: "Java",
    detail:
      "Spring Boot backend project showing Java API development, service structure, and server-side application foundations.",
  },
  {
    name: "Expo-react-native-app",
    href: "https://github.com/darklordemperor/Expo-react-native-app",
    language: "TypeScript",
    detail:
      "Expo React Native app practice for mobile screens, TypeScript components, and cross-platform development flow.",
  },
  {
    name: "darklordemperor",
    href: "https://github.com/darklordemperor/darklordemperor",
    language: "Profile",
    detail:
      "GitHub profile README presenting mobile development focus, React Native, Flutter, and career positioning.",
  },
  {
    name: "apirat_multi_store",
    href: "https://github.com/darklordemperor/apirat_multi_store",
    language: "Dart",
    detail:
      "Dart and Flutter store project focused on mobile ecommerce flow, UI structure, and app feature organization.",
  },
] as const;

export const workflows: Workflow[] = [
  {
    title: "Mobile Development Flow",
    description:
      "A release-minded flow for React Native and Flutter apps, from requirement clarity to store-ready delivery.",
    steps: [
      {
        label: "Get Requirements",
        detail:
          "Clarify business goal, user journey, platforms, APIs, device behavior, and release scope.",
        icon: ListChecks,
      },
      {
        label: "Develop",
        detail:
          "Build screens, state, integrations, native features, and platform-specific app behavior.",
        icon: Code2,
      },
      {
        label: "Unit Test",
        detail:
          "Validate core logic and components with Jest, Flutter test, or framework-level tests.",
        icon: FlaskConical,
      },
      {
        label: "Automation E2E Test",
        detail:
          "Run end-to-end scenarios for important flows such as login, checkout, booking, or payment.",
        icon: CheckCircle2,
      },
      {
        label: "Deploy",
        detail:
          "Prepare builds, review release settings, and publish through Google Play or app delivery tools.",
        icon: Rocket,
      },
    ],
  },
  {
    title: "Web Development Flow",
    description:
      "A practical web workflow for turning product logic into responsive, tested, and deployable interfaces.",
    steps: [
      {
        label: "Confirm Scope",
        detail:
          "Review requirements, user roles, content, page structure, API contracts, and success criteria.",
        icon: ListChecks,
      },
      {
        label: "Design UI Structure",
        detail:
          "Map layouts, reusable components, routes, forms, loading states, and responsive behavior.",
        icon: MonitorSmartphone,
      },
      {
        label: "Develop Frontend",
        detail:
          "Implement pages, interactions, state handling, service calls, validation, and accessibility basics.",
        icon: Code2,
      },
      {
        label: "Test & Review",
        detail:
          "Check unit behavior, browser rendering, responsive views, user flow, and edge-case handling.",
        icon: FlaskConical,
      },
      {
        label: "Deploy & Monitor",
        detail:
          "Build production assets, deploy, verify live behavior, and keep track of feedback or fixes.",
        icon: Rocket,
      },
    ],
  },
];

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
    title: "Web",
    icon: Globe2,
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe2 },
      { name: "Angular", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Code2 },
      { name: "Responsive UI", icon: MonitorSmartphone },
    ],
  },
  {
    title: "Backend",
    icon: TerminalSquare,
    skills: [
      { name: "API Integration", icon: GitBranch },
      { name: "Laravel Basics", icon: Code2 },
      { name: "Spring Boot Basics", icon: Code2 },
      { name: "JWT Auth", icon: ShieldCheck },
      { name: "Session Cookies", icon: ShieldCheck },
    ],
  },
  {
    title: "Architecture & State",
    icon: Boxes,
    skills: [
      { name: "Clean Architecture", icon: Boxes },
      { name: "MVC Pattern", icon: Code2 },
      { name: "IoC Concept", icon: GitBranch },
      { name: "State Management", icon: ListChecks },
      { name: "Zustand", icon: Code2 },
      { name: "AsyncStorage", icon: Store },
    ],
  },
  {
    title: "Versioning & Release",
    icon: GitBranch,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "GitLab", icon: GitBranch },
      { name: "Google Play Store", icon: Store },
      { name: "Apple App Store", icon: Store },
      { name: "Deployment", icon: Rocket },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Docker", icon: Boxes },
      { name: "VS Code", icon: Code2 },
      { name: "Postman", icon: Wrench },
      { name: "Google Cloud Console", icon: Globe2 },
      { name: "Android Studio", icon: MonitorSmartphone },
      { name: "macOS Build", icon: TerminalSquare },
    ],
  },
  {
    title: "AI & Real-time",
    icon: BrainCircuit,
    skills: [
      { name: "Python AI Usage", icon: BrainCircuit },
      { name: "OCR", icon: Image },
      { name: "Background Filter", icon: Image },
      { name: "Google MediaPipe", icon: MonitorSmartphone },
      { name: "TensorFlow", icon: BrainCircuit },
      { name: "WebRTC", icon: Video },
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
