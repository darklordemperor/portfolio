# My Portfolio

Personal portfolio website for Apirat Mathasathien, a Mobile Developer focused on React Native, Flutter, Android, iOS, and practical web/backend learning.

Live site: https://darklordemperor.github.io/portfolio/

## Highlights

- Mobile-first portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion
- English/Thai language toggle with English as the default language
- Theme and language controls grouped in the top-right navigation
- GitHub Pages deployment configured with `HashRouter` and `base: '/portfolio/'`
- Featured mobile project cards for EV Charging, AI Chat, Video Call, and GPS Tracking apps
- GitHub repository showcase with project links, details, and language usage
- Skills grouped by Mobile, Web, Backend, Architecture & State, Versioning & Release, Tools, and AI & Real-time

## Featured Projects

| Project | Stack | Notes |
| --- | --- | --- |
| EV Charging App | React Native | EV charging workflows, Android/iOS delivery, production release readiness |
| AI Chat App | React Native, TypeScript | AI chat flows, polished mobile UX, production-minded app structure |
| Video Call App | React Native Expo, WebRTC | Real-time peer communication, camera handling, mobile call experience |
| GPS Tracking App | Flutter, Dart, Native Map API | Location tracking with native map APIs to avoid Google Maps cost |

## Skills Covered

- **Mobile:** React Native, Flutter, Dart, Kotlin, Android native code, iOS development
- **Web:** React, Next.js, Angular, TypeScript, Tailwind CSS, responsive UI
- **Backend:** API integration, Laravel basics, Spring Boot basics, JWT auth, session cookies
- **Architecture & State:** Clean Architecture, MVC, IoC concepts, state management, Zustand, AsyncStorage
- **Versioning & Release:** Git, GitHub, GitLab, Google Play Store, Apple App Store, deployment
- **Tools:** Docker, VS Code, Postman, Google Cloud Console, Android Studio, macOS build
- **AI & Real-time:** Python AI usage, OCR, background filter, Google MediaPipe, TensorFlow, WebRTC

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router with `HashRouter`
- Lucide React icons
- GitHub Pages deployment with `gh-pages`

## Sections

- Hero with name, role, tagline, top-right theme/language controls, and contact links
- About summary
- Experience timeline for East Innovation
- Featured project cards
- GitHub project showcase
- Workflow overview
- Grouped skills grid
- Education and certification cards
- Contact section with email link and copy button

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`:

```powershell
npm.cmd run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## GitHub Pages Deployment

The project is configured for GitHub Pages:

- `vite.config.ts` uses `base: '/portfolio/'`
- Routing uses `HashRouter` to avoid refresh 404s on GitHub Pages
- Deployment uses the `gh-pages` package

Deploy with:

```bash
npm run deploy
```

PowerShell alternative:

```powershell
npm.cmd run deploy
```

If the GitHub repository name changes, update the `base` value in `vite.config.ts` to match:

```ts
base: "/your-repo-name/";
```

## Project Structure

```text
src/
  components/
    About.tsx
    Contact.tsx
    Education.tsx
    Experience.tsx
    Hero.tsx
    Navigation.tsx
    Projects.tsx
    Section.tsx
    Skills.tsx
    Workflow.tsx
  data/
    resume.ts
  utils/
    scroll.ts
  App.tsx
  index.css
  main.tsx
```

## Contact

- Email: apirat.dev@gmail.com
- Phone: +66 0809429155
- GitHub: https://github.com/darklordemperor
- LinkedIn: https://www.linkedin.com/in/apirat-mathasatien-a6178822a/
- JobsDB: https://th.jobsdb.com/th/profiles/%E0%B8%AD%E0%B8%A0%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B9%8C-%E0%B9%80%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B9%80%E0%B8%AA%E0%B8%96%E0%B8%B5%E0%B8%A2%E0%B8%A3-rkWkkyQffC
