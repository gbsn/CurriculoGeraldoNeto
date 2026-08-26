"use client";

import { PageShell } from "@/components/PageShell";
import { TechMarquee } from "@/components/TechMarquee";
import { RubberBandGate } from "@/components/RubberBandGate";
import { CodeBackdrop } from "@/components/CodeBackdrop";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "motion/react";

export default function TecnologiaPage() {
  const { t } = useLanguage();
  const p = t.tecnologiaPage;

  return (
    <PageShell>
      <RubberBandGate prevHref="/" nextHref="/gestao">
        <main className="pt-40 pb-32 relative">
          <CodeBackdrop />

          {/* Masthead */}
          <section className="max-w-3xl mx-auto px-6 mb-14">
            <div className="glass rounded-3xl px-8 py-10 text-center [transform:translateZ(0)] isolate">
              <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
                {p.eyebrow}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink">
                {p.headline}
              </h1>
              <p className="font-body text-base text-ink-soft mt-4 max-w-xl mx-auto">
                {p.subtitle}
              </p>
            </div>
          </section>

          {/* Formação */}
          <section className="max-w-2xl mx-auto px-6">
            <div className="glass rounded-3xl px-8 py-8 [transform:translateZ(0)] isolate">
              <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3 text-center">
                {p.formacaoTitle}
              </p>
              <p className="font-body text-lg leading-relaxed text-ink text-center">
                {p.formacaoText}
              </p>
            </div>
          </section>

          {/* Stack rolando */}
          <div className="mt-12 mb-14">
            <TechMarquee />
          </div>

          {/* Portfólio */}
          <section className="max-w-3xl mx-auto px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-6 text-center">
              {p.portfolioTitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                    delay: (i % 2) * 0.08,
                  }}
                  className="glass rounded-2xl p-6 flex flex-col [transform:translateZ(0)] isolate"
                >
                  <h2 className="font-display text-xl text-ink mb-2">
                    {project.name}
                  </h2>
                  <p className="font-body text-sm text-ink-soft leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-ink-soft bg-paper-raised/60 rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.links.length > 0 ? (
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t hairline">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-ink underline decoration-sage underline-offset-4 hover:text-ink-soft"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="font-mono text-xs text-ink-soft/60 mt-4 pt-4 border-t hairline">
                      {p.privateLabel}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </RubberBandGate>
    </PageShell>
  );
}
