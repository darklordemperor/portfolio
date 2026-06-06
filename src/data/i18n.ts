export type LanguageMode = "en" | "th";

export const copy = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      workflow: "Workflow",
      skills: "Skills",
      contact: "Contact",
      switchLight: "Switch to light theme",
      switchDark: "Switch to dark theme",
      language: "Switch language",
    },
    hero: {
      name: "Apirat Mathasathien",
      secondaryName: "อภิรัตน์ เมธาเสถียร",
      experience: "mobile development",
      rolePrefix: "Mobile App Developer",
      tagline:
        "Building polished Android and iOS apps with React Native, Flutter, web UI skills, and production deployment discipline.",
      viewPortfolio: "View portfolio",
      developerGoal: "Senior Mobile Developer",
    },
    sections: {
      aboutEyebrow: "About",
      aboutTitle: "Mobile engineer with product delivery range",
      experienceEyebrow: "Experience",
      experienceTitle: "Production mobile app work",
      projectsEyebrow: "Projects",
      projectsTitle: "Apps shaped for real users",
      workflowEyebrow: "Workflow",
      workflowTitle: "My Work Flow",
      skillsEyebrow: "Skills",
      skillsTitle: "Mobile and web skills with delivery tools",
      educationEyebrow: "Education & Certs",
      educationTitle: "Engineering foundation and focused training",
      contactEyebrow: "Contact",
      contactTitle: "Let's build useful mobile products",
    },
    about: {
      summary:
        "Mobile developer specializing in React Native and Flutter for Android and iOS, with practical web frontend experience. Skilled in Android native code, Google Cloud Console, API integration, AI-assisted Python experiments, and app deployment to Google Play Store. Currently growing toward a Senior Mobile Developer role through deeper platform ownership, architecture, and product delivery.",
      stats: [
        ["Experience", "3+ years"],
        ["Primary Stack", "React Native & Flutter"],
        ["Direction", "Senior Mobile Developer"],
      ],
    },
    experienceBullets: [
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
    projects: {
      repoBadge: "Public repository work",
      repoTitle: "My Github project",
      repoIntro:
        "A practical collection of mobile, frontend, backend, and full-stack repositories showing how I practice real product flows across different stacks.",
      viewRepository: "View repository",
      cards: {
        "EV Charging App":
          "React Native mobile app for EV charging workflows, focused on reliable Android and iOS delivery, platform integrations, and production store readiness.",
        "AI Chat App":
          "React Native AI chat experience with polished mobile screens, conversational flows, and production-minded app structure.",
        "Video Call App":
          "React Native Expo video calling app using WebRTC for real-time peer communication, camera handling, and mobile call experience.",
        "GPS Tracking App":
          "Flutter GPS tracking app using native map APIs to avoid Google Maps usage costs while still supporting location and route-focused workflows.",
      },
    },
    workflowStepLabel: "Step",
    workflowCards: {
      "Mobile Development Flow": {
        title: "Mobile Development Flow",
        description:
          "A release-minded flow for React Native and Flutter apps, from requirement clarity to store-ready delivery.",
        steps: [
          {
            label: "Get Requirements",
            detail:
              "Clarify business goal, user journey, platforms, APIs, device behavior, and release scope.",
          },
          {
            label: "Develop",
            detail:
              "Build screens, state, integrations, native features, and platform-specific app behavior.",
          },
          {
            label: "Unit Test",
            detail:
              "Validate core logic and components with Jest, Flutter test, or framework-level tests.",
          },
          {
            label: "Automation E2E Test",
            detail:
              "Run end-to-end scenarios for important flows such as login, checkout, booking, or payment.",
          },
          {
            label: "Deploy",
            detail:
              "Prepare builds, review release settings, and publish through Google Play or app delivery tools.",
          },
        ],
      },
      "Web Development Flow": {
        title: "Web Development Flow",
        description:
          "A practical web workflow for turning product logic into responsive, tested, and deployable interfaces.",
        steps: [
          {
            label: "Confirm Scope",
            detail:
              "Review requirements, user roles, content, page structure, API contracts, and success criteria.",
          },
          {
            label: "Design UI Structure",
            detail:
              "Map layouts, reusable components, routes, forms, loading states, and responsive behavior.",
          },
          {
            label: "Develop Frontend",
            detail:
              "Implement pages, interactions, state handling, service calls, validation, and accessibility basics.",
          },
          {
            label: "Test & Review",
            detail:
              "Check unit behavior, browser rendering, responsive views, user flow, and edge-case handling.",
          },
          {
            label: "Deploy & Monitor",
            detail:
              "Build production assets, deploy, verify live behavior, and keep track of feedback or fixes.",
          },
        ],
      },
    },
    education: {
      degree: "B.Eng. Computer Engineering",
      school: "Rajamangala University of Technology Phra Nakhon",
      graduated: "Graduated 2022",
      project: "Final project: Flutter E-Commerce App with Firebase",
    },
    contact: {
      intro:
        "Available for mobile app development conversations across React Native, Flutter, Android, iOS, cloud-backed apps, and deployment pipelines.",
      copied: "Copied",
      copyEmail: "Copy email",
    },
    footer: "Built with React, Vite, TypeScript, and Tailwind CSS.",
  },
  th: {
    nav: {
      about: "เกี่ยวกับ",
      experience: "ประสบการณ์",
      projects: "โปรเจกต์",
      workflow: "ขั้นตอนงาน",
      skills: "ทักษะ",
      contact: "ติดต่อ",
      switchLight: "เปลี่ยนเป็นโหมดสว่าง",
      switchDark: "เปลี่ยนเป็นโหมดมืด",
      language: "เปลี่ยนภาษา",
    },
    hero: {
      name: "อภิรัตน์ เมธาเสถียร",
      secondaryName: "Apirat Mathasathien",
      experience: "ประสบการณ์พัฒนาแอปมือถือ",
      rolePrefix: "นักพัฒนาแอปมือถือ",
      tagline:
        "สร้างแอป Android และ iOS ที่ใช้งานจริงด้วย React Native, Flutter, web UI, API integration และแนวคิดการส่งมอบโปรดักชัน",
      viewPortfolio: "ดูผลงาน",
      developerGoal: "Senior Mobile Developer",
    },
    sections: {
      aboutEyebrow: "เกี่ยวกับ",
      aboutTitle: "นักพัฒนาแอปมือถือที่เข้าใจงานส่งมอบจริง",
      experienceEyebrow: "ประสบการณ์",
      experienceTitle: "งานพัฒนาแอปมือถือสำหรับโปรดักชัน",
      projectsEyebrow: "โปรเจกต์",
      projectsTitle: "แอปที่ออกแบบจากการใช้งานจริง",
      workflowEyebrow: "ขั้นตอนงาน",
      workflowTitle: "ขั้นตอนการทำงานของฉัน",
      skillsEyebrow: "ทักษะ",
      skillsTitle: "ทักษะ Mobile, Web, Backend และเครื่องมือส่งมอบงาน",
      educationEyebrow: "การศึกษาและใบรับรอง",
      educationTitle: "พื้นฐานวิศวกรรมและการเรียนรู้เฉพาะทาง",
      contactEyebrow: "ติดต่อ",
      contactTitle: "มาสร้างแอปมือถือที่ใช้งานได้จริงกัน",
    },
    about: {
      summary:
        "นักพัฒนาแอปมือถือที่ทำงานกับ React Native และ Flutter สำหรับ Android และ iOS พร้อมประสบการณ์ด้านเว็บ frontend, Android native code, Google Cloud Console, API integration, การทดลอง AI ด้วย Python และการส่งแอปขึ้น Google Play Store กำลังพัฒนาตัวเองสู่บทบาท Senior Mobile Developer ด้วยความเข้าใจด้าน architecture, platform ownership และการส่งมอบโปรดักต์",
      stats: [
        ["ประสบการณ์", "3+ ปี"],
        ["สแต็กหลัก", "React Native & Flutter"],
        ["เป้าหมาย", "Senior Mobile Developer"],
      ],
    },
    experienceBullets: [
      "พัฒนาแอปมือถือด้วย React Native และ Flutter สำหรับ Android และ iOS",
      "เชื่อมต่อ API สำหรับ workflow ของแอปมือถือและเว็บที่ใช้งานจริง",
      "ทำ Android native code สำหรับฟีเจอร์เฉพาะแพลตฟอร์มและการเชื่อมต่อกับอุปกรณ์",
      "ดูแลขั้นตอน build และ publish สำหรับ release ขึ้น Google Play Store",
      "ใช้งาน Google Cloud Console สำหรับตั้งค่าโปรเจกต์ สนับสนุน build และเตรียม release",
      "ใช้ AI ช่วยพัฒนาด้วย Python สำหรับ OCR, background filtering, MediaPipe, TensorFlow และ WebRTC experiments",
      "เรียนรู้ backend ด้วย Laravel และ Spring Boot โดยใช้ AI ช่วย generate code เพื่อทำความเข้าใจพื้นฐาน",
      "ใช้ macOS development environment สำหรับ iOS build และการเตรียม release",
      "ส่งมอบโปรเจกต์ EV Charging, AI Chat, Video Call และ GPS Tracking app",
    ],
    projects: {
      repoBadge: "ผลงาน repository สาธารณะ",
      repoTitle: "My Github project",
      repoIntro:
        "รวม repository ด้าน mobile, frontend, backend และ full-stack ที่ใช้ฝึกและแสดงแนวทางการทำงานกับ product flow จริง",
      viewRepository: "ดู repository",
      cards: {
        "EV Charging App":
          "แอปมือถือ React Native สำหรับ workflow การชาร์จ EV เน้นการส่งมอบ Android/iOS, integration และความพร้อมสำหรับ production release",
        "AI Chat App":
          "แอป AI chat ด้วย React Native ที่เน้นหน้าจอมือถือ flow การสนทนา และโครงสร้างแอปที่พร้อมต่อยอด",
        "Video Call App":
          "แอป video call ด้วย React Native Expo และ WebRTC สำหรับ real-time peer communication, การใช้งานกล้อง และประสบการณ์การโทรบนมือถือ",
        "GPS Tracking App":
          "แอป GPS tracking ด้วย Flutter ใช้ native map API เพื่อลดค่าใช้จ่ายจาก Google Maps และรองรับงาน location/route workflow",
      },
    },
    workflowStepLabel: "ขั้นตอนที่",
    workflowCards: {
      "Mobile Development Flow": {
        title: "ขั้นตอนการพัฒนาแอปมือถือ",
        description:
          "ขั้นตอนการทำงานสำหรับแอป React Native และ Flutter ตั้งแต่ความเข้าใจ requirement ไปจนถึงการส่งมอบแอปที่พร้อม release",
        steps: [
          {
            label: "รับ requirement",
            detail:
              "ทำความเข้าใจเป้าหมายธุรกิจ user journey แพลตฟอร์ม API พฤติกรรมอุปกรณ์ และขอบเขต release",
          },
          {
            label: "พัฒนา",
            detail:
              "สร้างหน้าจอ จัดการ state เชื่อมต่อ integration ทำ native feature และปรับพฤติกรรมเฉพาะแพลตฟอร์ม",
          },
          {
            label: "ทดสอบ unit",
            detail:
              "ตรวจสอบ logic และ component สำคัญด้วย Jest, Flutter test หรือเครื่องมือทดสอบของแต่ละ framework",
          },
          {
            label: "ทดสอบ E2E อัตโนมัติ",
            detail:
              "ทดสอบ flow สำคัญแบบ end-to-end เช่น login, checkout, booking หรือ payment",
          },
          {
            label: "Deploy",
            detail:
              "เตรียม build ตรวจสอบ release setting และเผยแพร่ผ่าน Google Play หรือเครื่องมือส่งมอบแอป",
          },
        ],
      },
      "Web Development Flow": {
        title: "ขั้นตอนการพัฒนาเว็บ",
        description:
          "ขั้นตอนการทำงานเว็บสำหรับเปลี่ยน product logic ให้เป็น UI ที่ responsive ทดสอบได้ และพร้อม deploy",
        steps: [
          {
            label: "ยืนยัน scope",
            detail:
              "ตรวจ requirement, user role, content, page structure, API contract และตัวชี้วัดความสำเร็จ",
          },
          {
            label: "ออกแบบโครงสร้าง UI",
            detail:
              "วาง layout, reusable component, route, form, loading state และ responsive behavior",
          },
          {
            label: "พัฒนา frontend",
            detail:
              "ทำหน้าเว็บ interaction, state handling, service call, validation และ accessibility พื้นฐาน",
          },
          {
            label: "ทดสอบและ review",
            detail:
              "ตรวจ unit behavior, browser rendering, responsive view, user flow และ edge case",
          },
          {
            label: "Deploy และ monitor",
            detail:
              "build production assets, deploy, ตรวจสอบหลังขึ้นระบบ และติดตาม feedback หรือ fix ที่ต้องทำ",
          },
        ],
      },
    },
    education: {
      degree: "วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์",
      school: "มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร",
      graduated: "สำเร็จการศึกษา 2022",
      project: "โปรเจกต์จบ: Flutter E-Commerce App with Firebase",
    },
    contact: {
      intro:
        "พร้อมคุยเรื่องการพัฒนาแอปมือถือด้วย React Native, Flutter, Android, iOS, cloud-backed apps และ deployment pipelines",
      copied: "คัดลอกแล้ว",
      copyEmail: "คัดลอกอีเมล",
    },
    footer: "สร้างด้วย React, Vite, TypeScript และ Tailwind CSS",
  },
} as const;
