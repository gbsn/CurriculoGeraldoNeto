import { PageShell } from "@/components/PageShell";

export default function ExperienciasPage() {
  return (
    <PageShell>
      <main className="pt-40 pb-32 min-h-screen">
        <section className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
            Edição pessoal · em construção
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] text-ink mb-4">
            Experiências
          </h1>
          <p className="font-body text-lg text-ink-soft">
            Vivências que não cabem nos temas principais, mas também contam a história. Conteúdo chega no próximo sprint.
          </p>
        </section>
      </main>
    </PageShell>
  );
}
