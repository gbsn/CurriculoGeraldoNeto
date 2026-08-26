"use client";

import { PageShell } from "@/components/PageShell";
import { RubberBandGate } from "@/components/RubberBandGate";
import { useLanguage } from "@/components/LanguageProvider";
import { BrainScape } from "@/components/BrainScape";

export default function SobrePage() {
  const { t } = useLanguage();
  const s = t.sobrePage;

  return (
    <PageShell>
      <RubberBandGate prevHref="/experiencias" nextHref="/">
        <main className="pt-40 pb-32">
          <section className="max-w-2xl mx-auto px-6 text-center mb-10">
            <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
              {s.eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink mb-4">
              {s.headline}
            </h1>
            <p className="font-body text-base text-ink-soft max-w-lg mx-auto">
              {s.intro}
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 sm:px-6">
            <BrainScape themes={s.themes} />
          </section>
        </main>
      </RubberBandGate>
    </PageShell>
  );
}
