import { Section } from './Section'
import { copy, type LanguageMode } from '../data/i18n'

type AboutProps = {
  language: LanguageMode
}

export function About({ language }: AboutProps) {
  const text = copy[language]

  return (
    <Section
      id="about"
      eyebrow={text.sections.aboutEyebrow}
      title={text.sections.aboutTitle}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <p className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 text-lg leading-8 text-slate-300">
          {text.about.summary}
        </p>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {text.about.stats.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 text-xl font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
