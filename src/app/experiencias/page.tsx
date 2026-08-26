"use client";

import { PageShell } from "@/components/PageShell";
import { RubberBandGate } from "@/components/RubberBandGate";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExperienciasPage() {
  const { t } = useLanguage();
  const e = t.experienciasPage;

  return (
    <PageShell>
      <RubberBandGate prevHref="/gestao" nextHref="/sobre">
        <main className="pt-40 pb-32">
          <section className="max-w-3xl mx-auto px-6 text-center border-b hairline pb-10 mb-12">
            <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
              {e.eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink">
              {e.headline}
            </h1>
            <p className="font-body text-base text-ink-soft mt-4 max-w-xl mx-auto">
              {e.intro}
            </p>
          </section>

          <section className="max-w-2xl mx-auto px-6 mb-10">
            <p className="font-body text-sm italic text-ink-soft/80 text-center">
              {e.draftNote}
            </p>
          </section>

          {/* Anotação bruta — sem storytelling ainda, só a lista cronológica */}
          <section className="max-w-2xl mx-auto px-6 flex flex-col gap-3">
            {e.roles.map((role) => (
              <div
                key={role.title + role.period}
                className="border-b hairline pb-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h2 className="font-display text-lg text-ink">
                    {role.title}
                  </h2>
                  <span className="font-mono text-xs text-ink-soft whitespace-nowrap">
                    {role.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-ink-soft/80 uppercase tracking-wide mt-0.5">
                  {role.company} · {role.location}
                </p>
                <p className="font-body text-sm text-ink-soft leading-relaxed mt-1.5">
                  {role.desc}
                </p>
              </div>
            ))}
          </section>
        </main>
      </RubberBandGate>
    </PageShell>
  );
}
