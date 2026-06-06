import { ExternalLink, GitBranch } from 'lucide-react'
import { copy, type LanguageMode } from '../data/i18n'
import { githubProjects, projects } from '../data/resume'
import { Section } from './Section'

type ProjectsProps = {
  language: LanguageMode
}

export function Projects({ language }: ProjectsProps) {
  const text = copy[language]
  const languageUsage = githubProjects.reduce<Record<string, number>>((usage, project) => {
    usage[project.language] = (usage[project.language] ?? 0) + 1

    return usage
  }, {})

  return (
    <Section
      id="projects"
      eyebrow={text.sections.projectsEyebrow}
      title={text.sections.projectsTitle}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon
          const description =
            text.projects.cards[project.title as keyof typeof text.projects.cards] ??
            project.description

          return (
            <article
              key={project.title}
              className="rounded-lg border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-sky-400/60 hover:bg-slate-900"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-400/10 text-sky-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{description}</p>
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

      <div className="mt-14 border-t border-slate-800 pt-10">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-sm font-semibold text-sky-200">
              <GitBranch className="h-4 w-4" />
              {text.projects.repoBadge}
            </div>
            <h3 className="text-3xl font-semibold text-white">{text.projects.repoTitle}</h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              {text.projects.repoIntro}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
            {Object.entries(languageUsage).map(([language, count]) => (
              <span
                key={language}
                className="rounded-md border border-slate-700 bg-slate-950/70 px-3 py-1 text-sm text-sky-200"
              >
                {language} x{count}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {githubProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-56 flex-col rounded-lg border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-sky-400/60 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sky-400/10 text-sky-300">
                  <GitBranch className="h-5 w-5" />
                </span>
                <span className="rounded-md border border-slate-700 px-3 py-1 text-sm font-medium text-sky-200">
                  {project.language}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-white transition group-hover:text-sky-100">
                {project.name}
              </h4>
              <p className="mt-3 flex-1 leading-7 text-slate-300">{project.detail}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                {text.projects.viewRepository}
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
