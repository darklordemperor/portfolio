import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  eyebrow: string
  title: string
  className?: string
}>

export function Section({ id, eyebrow, title, className = '', children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}
