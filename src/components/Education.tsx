import { certifications, education } from '../data/resume'
import { Section } from './Section'

export function Education() {
  const EducationIcon = education.icon

  return (
    <Section id="education" eyebrow="Education & Certs" title="Engineering foundation and focused training">
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-lg border border-slate-800 bg-slate-900/70 p-6">
          <EducationIcon className="mb-5 h-8 w-8 text-sky-300" />
          <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
          <p className="mt-3 text-slate-300">{education.school}</p>
          <p className="mt-2 text-sm font-semibold text-sky-300">{education.graduated}</p>
          <p className="mt-5 leading-7 text-slate-300">{education.project}</p>
        </article>

        {certifications.map((certification) => {
          const Icon = certification.icon

          return (
            <article
              key={certification.title}
              className="rounded-lg border border-slate-800 bg-slate-900/70 p-6"
            >
              <Icon className="mb-5 h-8 w-8 text-sky-300" />
              <h3 className="text-2xl font-semibold text-white">{certification.title}</h3>
              <p className="mt-3 text-slate-300">{certification.issuer}</p>
              <p className="mt-2 text-sm font-semibold text-sky-300">{certification.date}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
