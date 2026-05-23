import { Code2 } from 'lucide-react'
import { profile } from '../data/resume'
import { scrollToSection } from '../utils/scroll'

const links = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Contact', 'contact'],
] as const

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-white"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-sky-400 text-slate-950">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="hidden font-semibold sm:block">{profile.name}</span>
          <span className="font-semibold sm:hidden">AM</span>
        </button>
        <div className="hidden items-center gap-5 md:flex">
          {links.map(([label, id]) => (
            <button
              key={label}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-sm font-medium text-slate-300 hover:text-sky-200"
            >
              {label}
            </button>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md border border-sky-400/40 px-3 py-2 text-sm font-semibold text-sky-200 hover:bg-sky-400/10"
        >
          Hire me
        </a>
      </nav>
    </header>
  )
}
