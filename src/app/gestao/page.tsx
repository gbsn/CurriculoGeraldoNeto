"use client";

import { PageShell } from "@/components/PageShell";
import { RubberBandGate } from "@/components/RubberBandGate";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "motion/react";

export default function GestaoPage() {
  const { t } = useLanguage();
  const g = t.gestaoPage;

  return (
    <PageShell>
      <RubberBandGate prevHref="/tecnologia" nextHref="/experiencias">
        <main className="pt-40 pb-32">
          {/* Masthead */}
          <section className="max-w-3xl mx-auto px-6 text-center border-b hairline pb-10 mb-16">
            <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
              {g.eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink">
              {g.headline}
            </h1>
            <p className="font-body text-base text-ink-soft mt-4 max-w-xl mx-auto">
              {g.intro}
            </p>
          </section>

          {/* Timeline de cargos */}
          <section className="max-w-2xl mx-auto px-6 flex flex-col gap-4">
            {g.roles.map((role, i) => (
              <motion.div
                key={role.title + role.period}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                  delay: i * 0.06,
                }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h2 className="font-display text-xl text-ink">
                    {role.title}
                  </h2>
                  <span className="font-mono text-xs text-ink-soft whitespace-nowrap">
                    {role.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-ink-soft uppercase tracking-wide mb-3">
                  {role.company} · {role.location}
                </p>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </section>

          {/* Certificações */}
          <section className="max-w-2xl mx-auto px-6 mt-14 text-center">
            <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-4">
              {g.certsTitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {g.certs.map((cert) => (
                <span
                  key={cert}
                  className="glass rounded-full px-4 py-1.5 font-mono text-xs text-ink"
                >
                  {cert}
                </span>
              ))}
            </div>
          </section>

          {/* Números de prova */}
          <section className="max-w-3xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: 1400, suffix: "", l: g.statPeople },
              { n: 94, suffix: "%+", l: g.statKpi },
              { n: 8, suffix: "+", l: g.statYears },
            ].map((stat) => (
              <div
                key={stat.l}
                className="glass rounded-2xl px-5 py-6 text-center"
              >
                <p className="font-display text-3xl text-ink">
                  <AnimatedCounter value={stat.n} suffix={stat.suffix} />
                </p>
                <p className="font-mono text-xs text-ink-soft mt-2 uppercase tracking-wide">
                  {stat.l}
                </p>
              </div>
            ))}
          </section>
        </main>
      </RubberBandGate>
    </PageShell>
  );
}
