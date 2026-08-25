import { PageShell } from "@/components/PageShell";
import { TechMarquee } from "@/components/TechMarquee";
import { RubberBandGate } from "@/components/RubberBandGate";

export default function TecnologiaPage() {
  return (
    <PageShell>
      <RubberBandGate prevHref="/" nextHref="/gestao">
      <main className="pt-40 pb-32 min-h-screen">
        <section className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
            Edição pessoal · em construção
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] text-ink mb-4">
            Tecnologia
          </h1>
          <p className="font-body text-lg text-ink-soft">
            Formação, stack e o portfólio por trás do código. Conteúdo chega no próximo sprint.
          </p>
        </section>

        <div className="mt-14">
          <TechMarquee />
        </div>
      </main>
      </RubberBandGate>
    </PageShell>
  );
}
