"use client";

import { PageShell } from "@/components/PageShell";
import { RubberBandGate } from "@/components/RubberBandGate";
import { useLanguage } from "@/components/LanguageProvider";

export default function Page() {
  const { t } = useLanguage();
  const s = t.stub.sobre;

  return (
    <PageShell>
      <RubberBandGate prevHref="/experiencias" nextHref="/">
      <main className="pt-40 pb-32 min-h-screen">
        <section className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
            {s.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] text-ink mb-4">
            {s.title}
          </h1>
          <p className="font-body text-lg text-ink-soft">{s.desc}</p>
        </section>
      </main>
      </RubberBandGate>
    </PageShell>
  );
}
