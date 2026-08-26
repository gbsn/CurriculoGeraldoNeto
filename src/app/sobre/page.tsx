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
        <main className="relative min-h-screen">
          <BrainScape themes={s.themes} />

          <div className="relative z-10 pt-40 pb-16 max-w-2xl mx-auto px-6 text-center">
            <div className="glass rounded-3xl px-8 py-8 [transform:translateZ(0)] isolate">
              <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
                {s.eyebrow}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink mb-4">
                {s.headline}
              </h1>
              <p className="font-body text-base text-ink-soft max-w-lg mx-auto">
                {s.intro}
              </p>
            </div>
          </div>
        </main>
      </RubberBandGate>
    </PageShell>
  );
}
