import { PageShell } from "@/components/PageShell";
import { RubberBandGate } from "@/components/RubberBandGate";

export default function SobrePage() {
  return (
    <PageShell>
      <RubberBandGate prevHref="/experiencias" nextHref="/">
      <main className="pt-40 pb-32 min-h-screen">
        <section className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
            Edição pessoal · em construção
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] text-ink mb-4">
            Sobre mim
          </h1>
          <p className="font-body text-lg text-ink-soft">
            Um pouco de vida fora do trabalho — o suficiente pra você me conhecer melhor. Conteúdo chega no próximo sprint.
          </p>
        </section>
      </main>
      </RubberBandGate>
    </PageShell>
  );
}
