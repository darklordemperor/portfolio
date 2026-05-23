import { useState } from 'react'
import { Check, Copy, Mail, Phone } from 'lucide-react'
import { profile } from '../data/resume'
import { Section } from './Section'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = profile.email
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build useful mobile products">
      <div className="rounded-lg border border-sky-400/30 bg-slate-900/80 p-6 sm:p-8">
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Available for mobile app development conversations across React Native, Flutter, Android,
          iOS, cloud-backed apps, and deployment pipelines.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:border-sky-300 hover:bg-sky-400/10 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:border-sky-300 hover:bg-sky-400/10 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
        </div>
      </div>
    </Section>
  )
}
