"use client";

import { PageShell } from "@/components/PageShell";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TrailCard } from "@/components/TrailCard";
import { RubberBandGate } from "@/components/RubberBandGate";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <PageShell>
      <RubberBandGate nextHref="/tecnologia">
      <main className="pt-40 pb-32">
        {/* Masthead */}
        <section className="max-w-3xl mx-auto px-6 text-center border-b hairline pb-10 mb-16">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
            {t.home.eyebrow}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-ink">
            Geraldo Neto
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-ink mt-5">
            {t.home.headline}
          </p>
          <p className="font-body text-base text-ink-soft mt-3 max-w-xl mx-auto">
            {t.home.subtitle}
          </p>
        </section>

        {/* Abertura narrativa */}
        <section className="max-w-2xl mx-auto px-6 flex flex-col gap-6 font-body text-lg leading-relaxed text-ink">
          <p className="font-display italic text-xl text-ink-soft">
            {t.home.invite}
          </p>

          <p>{t.home.p1}</p>

          <p>{t.home.p2}</p>

          <blockquote className="relative border-l-2 border-sage pl-8 my-6 font-display text-2xl leading-snug text-ink">
            <span
              aria-hidden
              className="absolute -left-1 -top-8 font-display text-7xl leading-none text-sage/70 select-none"
            >
              &ldquo;
            </span>
            {t.home.quote}
          </blockquote>

          <p>{t.home.p3}</p>
        </section>

        {/* Números / prova rápida */}
        <section className="max-w-3xl mx-auto px-6 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { n: 1400, suffix: "", l: t.home.statsPeople },
            { n: 94, suffix: "%+", l: t.home.statsKpi },
            { n: 15, suffix: "", l: t.home.statsYears },
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

        {/* Trilhas — leva pros outros temas */}
        <section className="max-w-3xl mx-auto px-6 mt-24">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-6 text-center">
            {t.home.continueReading}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <TrailCard
              href="/tecnologia"
              title={t.home.cardTecTitle}
              description={t.home.cardTecDesc}
            />
            <TrailCard
              href="/gestao"
              title={t.home.cardGesTitle}
              description={t.home.cardGesDesc}
              delay={0.1}
            />
            <TrailCard
              href="/oquasi"
              title={t.home.cardOquasiTitle}
              description={t.home.cardOquasiDesc}
              delay={0.2}
            />
          </div>
        </section>
      </main>
      </RubberBandGate>
    </PageShell>
  );
}
