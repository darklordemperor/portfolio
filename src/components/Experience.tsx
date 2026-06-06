import { CheckCircle2 } from 'lucide-react'
import { copy, type LanguageMode } from '../data/i18n'
import { experience } from '../data/resume'
import { Section } from './Section'

type ExperienceProps = {
  language: LanguageMode
}

export function Experience({ language }: ExperienceProps) {
  const Icon = experience.icon
  const text = copy[language]

  return (
    <Section
      id="experience"
      eyebrow={text.sections.experienceEyebrow}
      title={text.sections.experienceTitle}
    >
      <div className="relative border-l border-sky-400/30 pl-6 sm:pl-8">
        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-sky-300 bg-slate-950" />
        <article className="rounded-lg border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-md bg-sky-400/10 text-sky-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {experience.role} - {experience.company}
              </h3>
            </div>
            <div className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-300">
              {experience.period}
              <span className="block text-sky-300">{experience.duration}</span>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
            {text.experienceBullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-sky-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
