import { Section } from './Section'
import { profile } from '../data/resume'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Mobile engineer with product delivery range">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <p className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 text-lg leading-8 text-slate-300">
          {profile.summary}
        </p>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ['Experience', profile.experience],
            ['Primary Stack', profile.focus],
            ['Direction', 'Senior Mobile Developer'],
          ].map(([label, value]) => (
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
