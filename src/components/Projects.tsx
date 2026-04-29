"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-5 py-24 sm:px-6"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-rose">
            Projects
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Selected builds
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            From medical signals to document security and full-stack platforms —
            each project pairs rigorous models with deployable software.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface-raised/35 p-8 backdrop-blur-sm transition hover:border-accent-cyan/25 hover:shadow-[0_0_60px_-20px_rgba(34,211,238,0.35)]"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent-violet/10 blur-2xl transition group-hover:bg-accent-cyan/15"
                aria-hidden
              />
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-2 font-mono text-xs text-accent-cyan/90">
                {project.tech}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-400">
                {project.description.map((line) => (
                  <li key={line.slice(0, 36)} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-violet/80" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
