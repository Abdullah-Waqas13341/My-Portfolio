"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, siteMeta } from "@/data/portfolio";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center px-5 pb-24 pt-28 sm:px-6 md:min-h-[88vh]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          {siteMeta.location} · {siteMeta.title}
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {hero.headlineLead}
          </span>
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-rose bg-clip-text text-transparent">
            {hero.headlineAccent}
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          {hero.subline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          {hero.ctas.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              className={
                i === 0
                  ? "group inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-surface shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] transition hover:bg-zinc-100"
                  : "inline-flex items-center justify-center rounded-xl border border-surface-border bg-surface-raised/60 px-6 py-3.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition hover:border-accent-violet/40 hover:text-white"
              }
            >
              {c.label}
              {i === 0 && (
                <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                  →
                </span>
              )}
            </a>
          ))}
          <a
            href={siteMeta.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-transparent px-4 py-3.5 text-sm font-medium text-accent-cyan underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 0.5 }}
        transition={{ delay: 0.8 }}
      >
        <div className="animate-float flex h-10 w-6 justify-center rounded-full border border-white/15 pt-2">
          <span className="block h-2 w-1 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
