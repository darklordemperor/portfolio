import { projects } from '../data/resume'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Apps shaped for real users">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon

          return (
            <article
              key={project.title}
              className="rounded-lg border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-sky-400/60 hover:bg-slate-900"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-400/10 text-sky-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-700 px-3 py-1 text-sm text-sky-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
