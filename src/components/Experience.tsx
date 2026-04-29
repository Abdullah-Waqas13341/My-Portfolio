"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="scroll-mt-24 px-5 py-24 sm:px-6"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Where I&apos;ve shipped
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-12 border-l border-surface-border pl-8 md:pl-10">
          {experience.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              className="relative"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span
                className="absolute -left-[39px] top-2 h-3 w-3 rounded-full border-2 border-accent-violet bg-surface md:-left-[45px]"
                aria-hidden
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <p className="text-zinc-400">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-mono text-accent-cyan/90">
                  {job.period}
                </p>
              </div>
              <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-400 marker:text-accent-rose/80">
                {job.highlights.map((h) => (
                  <li key={h.slice(0, 40)} className="pl-1 leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
