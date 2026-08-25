import { PageShell } from "@/components/PageShell";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TrailCard } from "@/components/TrailCard";
import { RubberBandGate } from "@/components/RubberBandGate";

export default function Home() {
  return (
    <PageShell>
      <RubberBandGate nextHref="/gestao">
      <main className="pt-40 pb-32">
        {/* Masthead */}
        <section className="max-w-3xl mx-auto px-6 text-center border-b hairline pb-10 mb-16">
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
            Edição pessoal · Natal, RN
          </p>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-ink">
            Geraldo Neto
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-ink mt-5">
            Conectando pessoas reais a tecnologia eficaz.
          </p>
          <p className="font-body text-base text-ink-soft mt-3 max-w-xl mx-auto">
            Disciplina, raciocínio econômico e gestão a serviço de processos
            que funcionam.
          </p>
        </section>

        {/* Abertura narrativa */}
        <section className="max-w-2xl mx-auto px-6 flex flex-col gap-6 font-body text-lg leading-relaxed text-ink">
          <p className="font-display italic text-xl text-ink-soft">
            Antes dos cargos, dos números, dos KPIs — teve um começo. Vem
            comigo.
          </p>

          <p>
            Em 2011, antes de qualquer cargo, havia uma ONG e um problema
            simples: adolescentes com problemas de socialização. Não havia
            orçamento, nem estrutura — havia muita vontade de agir e ajudar,
            e tarde livre. Foi ali que aprendi que sistema bom é aquele que
            resolve o problema de quem está na sua frente, não o que fica
            bonito num slide ou num site. Não existia IA acessível naquele
            momento.
          </p>

          <p>
            Os anos seguintes levaram essa lógica para dentro de operações
            grandes e internacionais: da linha de frente ao comando de
            equipes de{" "}
            <strong className="font-display font-normal">
              30 a até 1.400 pessoas
            </strong>
            , sustentando indicadores de desempenho acima de{" "}
            <strong className="font-display font-normal">94%</strong>, tudo
            com base no Lean Six Sigma. Não é o mesmo tipo de sistema — mas é
            o mesmo tipo de problema: processo e informação que precisam se
            encontrar sem fricção.
          </p>

          <blockquote className="relative border-l-2 border-sage pl-8 my-6 font-display text-2xl leading-snug text-ink">
            <span
              aria-hidden
              className="absolute -left-1 -top-8 font-display text-7xl leading-none text-sage/70 select-none"
            >
              &ldquo;
            </span>
            A Tecnologia deve servir as Pessoas e solucionar problemas reais...
          </blockquote>

          <p>
            Formado em Análise de Sistemas e tendo estudado Ciências
            Econômicas a fundo, hoje reúno as duas coisas onde raramente
            coexistem, mas deveriam se completar: profundidade técnica e
            leitura de negócio. É essa combinação que está indo para
            Inteligência Artificial e Análise de Dados — não como modismo,
            mas como continuação natural de uma carreira que sempre tratou
            tecnologia como ferramenta de gente, não como fim em si.
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <TrailCard
              href="/tecnologia"
              title="Tecnologia"
              description="Formação, stack e o portfólio por trás do código."
            />
            <TrailCard
              href="/gestao"
              title="Gestão"
              description="Operações, liderança e os números que provam isso."
              delay={0.1}
            />
            <TrailCard
              href="/oquasi"
              title="Fora do expediente"
              description="Quem eu sou quando a câmera do trabalho desliga."
              delay={0.2}
            />
          </div>
        </section>
      </main>
      </RubberBandGate>
    </PageShell>
  );
}
