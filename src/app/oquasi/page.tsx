import { PageShell } from "@/components/PageShell";

export default function OQuasiPage() {
  return (
    <PageShell>
      <main className="pt-40 pb-32 min-h-screen">
        <section className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
            Fora do expediente · em construção
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] text-ink mb-4">
            oQuasi
          </h1>
          <p className="font-body text-lg text-ink-soft">
            Quem eu sou quando a câmera do trabalho desliga. A experiência
            completa desse portal chega em um sprint futuro.
          </p>
        </section>
      </main>
    </PageShell>
  );
}
