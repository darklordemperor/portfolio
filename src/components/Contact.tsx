import { useState } from 'react'
import { Check, Copy, Mail, Phone } from 'lucide-react'
import { copy, type LanguageMode } from '../data/i18n'
import { profile } from '../data/resume'
import { Section } from './Section'

type ContactProps = {
  language: LanguageMode
}

export function Contact({ language }: ContactProps) {
  const [copied, setCopied] = useState(false)
  const text = copy[language]

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
    <Section
      id="contact"
      eyebrow={text.sections.contactEyebrow}
      title={text.sections.contactTitle}
    >
      <div className="rounded-lg border border-sky-400/30 bg-slate-900/80 p-6 sm:p-8">
        <p className="max-w-3xl text-lg leading-8 text-slate-300">{text.contact.intro}</p>
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
            {copied ? text.contact.copied : text.contact.copyEmail}
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
