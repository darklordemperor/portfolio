import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  eyebrow: string
  title: string
  className?: string
}>

export function Section({ id, eyebrow, title, className = '', children }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [34, -34])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10 ${className}`}
    >
      <motion.div
        style={{ y: parallaxY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
      </motion.div>
    </section>
  )
}
