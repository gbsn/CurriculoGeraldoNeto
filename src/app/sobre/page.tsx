"use client";

import { PageShell } from "@/components/PageShell";
import { RubberBandGate } from "@/components/RubberBandGate";
import { useLanguage } from "@/components/LanguageProvider";
import { BrainScape } from "@/components/BrainScape";
import { SessionGate } from "@/components/SessionGate";

export default function SobrePage() {
  const { t } = useLanguage();
  const s = t.sobrePage;
  const gate = t.sobreGate;

  return (
    <PageShell>
      <RubberBandGate prevHref="/experiencias" nextHref="/">
        <main className="relative min-h-[150vh]">
          <BrainScape themes={s.themes} />

          <div className="relative z-10 pt-24 pb-8 sm:pt-40 sm:pb-16 max-w-2xl mx-auto px-6 text-center">
            <div className="glass rounded-3xl px-6 py-5 sm:px-8 sm:py-8 [transform:translateZ(0)] isolate">
              <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-2 sm:mb-3">
                {s.eyebrow}
              </p>
              <h1 className="font-display text-2xl sm:text-5xl leading-[1.1] text-ink mb-2 sm:mb-4">
                {s.headline}
              </h1>
              <p className="font-body text-sm sm:text-base text-ink-soft max-w-lg mx-auto">
                {s.intro}
              </p>
            </div>
          </div>

          <SessionGate questions={gate.questions} easyQuestions={gate.easyQuestions} copy={gate} />
        </main>
      </RubberBandGate>
    </PageShell>
  );
}
