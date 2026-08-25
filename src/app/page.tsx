import { PageShell } from "@/components/PageShell";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <PageShell>
      <main className="pt-40 pb-32">
        {/* Masthead */}
        <section className="max-w-3xl mx-auto px-6 text-center border-b hairline pb-10 mb-16">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
            Edição pessoal · Natal, RN
          </p>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-ink">
            Geraldo Neto
          </h1>
          <p className="font-body text-lg text-ink-soft mt-4 max-w-xl mx-auto">
            Tecnologia com disciplina de gestão. Gestão com raciocínio de
            economista. Uma carreira construída na prática, não na teoria.
          </p>
        </section>

        {/* Abertura narrativa */}
        <section className="max-w-2xl mx-auto px-6 flex flex-col gap-6 font-body text-lg leading-relaxed text-ink">
          <p>
            Em 2011, antes de qualquer cargo, havia uma ONG e um problema
            simples: adolescentes sem acesso a tecnologia. Não havia
            orçamento, nem estrutura — havia código, vontade e tarde livre.
            Foi ali que aprendi que sistema bom é aquele que resolve o
            problema de quem está na sua frente, não o que fica bonito num
            slide.
          </p>

          <p>
            Os anos seguintes levaram essa lógica para dentro de operações
            grandes: da linha de frente ao comando de equipes de até{" "}
            <strong className="font-display font-normal">800 pessoas</strong>,
            sustentando indicadores de desempenho acima de{" "}
            <strong className="font-display font-normal">94%</strong>. Não é
            o mesmo tipo de sistema — mas é o mesmo tipo de problema:
            pessoas, processo e informação que precisam se encontrar sem
            fricção.
          </p>

          <blockquote className="border-l-2 border-sage pl-5 my-4 font-display text-2xl leading-snug text-ink">
            Sistema bom é aquele que resolve o problema de quem está na sua
            frente.
          </blockquote>

          <p>
            Formado em Análise de Sistemas e com passagem por Ciências
            Econômicas, hoje reúno as duas coisas onde raramente coexistem:
            profundidade técnica e leitura de negócio. É essa combinação que
            está indo para Inteligência Artificial e Análise de Dados — não
            como modismo, mas como continuação natural de uma carreira que
            sempre tratou tecnologia como ferramenta de gente, não como fim
            em si.
          </p>
        </section>

        {/* Números / prova rápida */}
        <section className="max-w-3xl mx-auto px-6 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { n: 800, suffix: "", l: "pessoas lideradas, pico operacional" },
            { n: 94, suffix: "%+", l: "KPIs sustentados no período" },
            { n: 15, suffix: "", l: "anos entre operação, dev e gestão" },
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
            Continue a leitura
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/tecnologia"
              className="rounded-2xl border hairline p-6 hover:bg-paper-raised/60 transition-colors"
            >
              <p className="font-display text-xl text-ink mb-1">Tecnologia</p>
              <p className="font-body text-sm text-ink-soft">
                Formação, stack e o portfólio por trás do código.
              </p>
            </a>
            <a
              href="/gestao"
              className="rounded-2xl border hairline p-6 hover:bg-paper-raised/60 transition-colors"
            >
              <p className="font-display text-xl text-ink mb-1">Gestão</p>
              <p className="font-body text-sm text-ink-soft">
                Operações, liderança e os números que provam isso.
              </p>
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
