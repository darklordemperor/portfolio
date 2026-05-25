import { workflows } from '../data/resume'
import { Section } from './Section'

export function Workflow() {
  return (
    <Section id="workflow" eyebrow="Workflow" title="How I move from logic to release">
      <div className="grid gap-5 lg:grid-cols-2">
        {workflows.map((workflow) => (
          <article key={workflow.title} className="rounded-lg border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white">{workflow.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{workflow.description}</p>
            </div>

            <ol className="space-y-4">
              {workflow.steps.map((step, index) => {
                const StepIcon = step.icon

                return (
                  <li key={step.label} className="relative flex gap-4">
                    {index < workflow.steps.length - 1 ? (
                      <span className="absolute left-5 top-11 h-[calc(100%-1.25rem)] w-px bg-slate-700" />
                    ) : null}
                    <span className="z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-sky-400/30 bg-slate-950 text-sky-300">
                      <StepIcon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 rounded-md border border-slate-800 bg-slate-950/70 p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                          Step {index + 1}
                        </span>
                        <h4 className="text-lg font-semibold text-white">{step.label}</h4>
                      </div>
                      <p className="mt-2 leading-6 text-slate-300">{step.detail}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  )
}
