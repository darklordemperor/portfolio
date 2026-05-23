import { skillGroups } from '../data/resume'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Mobile-first stack with cloud delivery">
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon

          return (
            <article key={group.title} className="rounded-lg border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-sky-400/10 text-sky-300">
                  <GroupIcon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.skills.map((skill) => {
                  const SkillIcon = skill.icon

                  return (
                    <div
                      key={skill.name}
                      className="flex min-h-20 flex-col justify-between rounded-md border border-slate-800 bg-slate-950/70 p-3 text-slate-300"
                    >
                      <SkillIcon className="h-5 w-5 text-sky-300" />
                      <span className="text-sm font-medium leading-5">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
