import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, BriefcaseBusiness, GitBranch, Mail, Phone, Smartphone } from 'lucide-react'
import { contacts, profile } from '../data/resume'
import { scrollToSection } from '../utils/scroll'

const contactIcons = {
  Email: Mail,
  GitHub: GitBranch,
  LinkedIn: BriefcaseBusiness,
} as const

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const textY = useTransform(scrollYProgress, [0, 1], [0, -52])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -28])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative mx-auto grid min-h-screen w-full max-w-6xl scroll-mt-24 items-center gap-10 px-5 pb-14 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10"
    >
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200">
          <Smartphone className="h-4 w-4" />
          {profile.experience} mobile development
        </div>
        <p className="mb-3 text-lg text-slate-300">{profile.thaiName}</p>
        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-2xl font-semibold text-sky-300 sm:text-3xl">
          {profile.role} <span className="text-slate-400">({profile.focus})</span>
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {contacts.map((contact) => {
            const Icon = contactIcons[contact.label as keyof typeof contactIcons]

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-300 hover:bg-sky-400/10 hover:text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                <Icon className="h-4 w-4" />
                {contact.label}
              </a>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        className="relative"
        style={{ y: cardY }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
      >
        <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-5 shadow-2xl shadow-sky-950/30">
          <div className="mb-5 flex items-center gap-2 border-b border-slate-800 pb-4">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-sm text-slate-400">mobile_profile.ts</span>
          </div>
          <pre className="overflow-hidden text-sm leading-7 text-slate-300 sm:text-base">
            <code>{`const developer = {
  name: '${profile.name}',
  stack: ['React Native', 'Flutter'],
  platforms: ['Android', 'iOS'],
  cloud: 'Google Cloud Platform',
  deploy: 'Google Play Store',
  goal: 'Senior Mobile Developer'
}`}</code>
          </pre>
        </div>
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-100"
        >
          View portfolio
          <ArrowDown className="h-4 w-4" />
        </button>
        <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-sky-200">
            <Phone className="mr-2 inline h-4 w-4" />
            {profile.phone}
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-sky-200">
            <Mail className="mr-2 inline h-4 w-4" />
            {profile.email}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
