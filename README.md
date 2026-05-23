# Apirat Methasathien Portfolio

Personal portfolio website for Apirat Methasathien, a Mobile App Developer specializing in React Native and Flutter for Android and iOS.

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

- Hero with name, role, tagline, and contact links
- About summary
- Experience timeline for EastInnovation
- Project cards for EV Charging App and Fortune-telling AI App
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

If the GitHub repository name changes, update the `base` value in `vite.config.ts` to match:

```ts
base: '/your-repo-name/'
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
  data/
    resume.ts
  utils/
    scroll.ts
  App.tsx
  index.css
  main.tsx
```

## Contact

- Email: apirat55555@gmail.com
- Phone: +66 0809429155
- GitHub: https://github.com/apirat55555
- LinkedIn: https://www.linkedin.com/in/apirat-methasathien
