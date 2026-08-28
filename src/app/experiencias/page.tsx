"use client";

import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { RubberBandGate } from "@/components/RubberBandGate";
import { useLanguage } from "@/components/LanguageProvider";
import { Cassette } from "@/components/Cassette";
import { PaperFicha } from "@/components/PaperFicha";
import { Walkman } from "@/components/Walkman";
import { motion } from "motion/react";

// true = fita (áudio), false = ficha de papel (só texto).
// Ordem bate com a ordem cronológica de t.experienciasPage.roles.
const IS_TAPE = [true, false, false, true, false, false, true];

const MOCK_DURATION_MS = 12000;

export default function ExperienciasPage() {
  const { t } = useLanguage();
  const e = t.experienciasPage;

  const [insertedIndex, setInsertedIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function stopPlayback() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function insertTape(index: number) {
    stopPlayback();
    setInsertedIndex(index);
    setProgress(0);
    setPlaying(true);
    // Só executa dentro do handler de clique, nunca durante o render —
    // falso positivo da regra de pureza do compilador.
    // eslint-disable-next-line react-hooks/purity
    const start = Date.now();
    intervalRef.current = window.setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / MOCK_DURATION_MS);
      setProgress(p);
      if (p >= 1) {
        stopPlayback();
        setPlaying(false);
      }
    }, 100);
  }

  function eject() {
    stopPlayback();
    setInsertedIndex(null);
    setPlaying(false);
    setProgress(0);
  }

  useEffect(() => stopPlayback, []);

  const insertedRole = insertedIndex !== null ? e.roles[insertedIndex] : null;

  return (
    <PageShell>
      <RubberBandGate prevHref="/gestao" nextHref="/sobre">
        <main className="pt-40 pb-32">
          <section className="max-w-2xl mx-auto px-6 text-center mb-6">
            <div className="glass rounded-3xl px-8 py-8 [transform:translateZ(0)] isolate">
              <p className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase mb-3">
                {e.eyebrow}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink mb-4">
                {e.headline}
              </h1>
              <p className="font-body text-base text-ink-soft max-w-lg mx-auto">
                {e.intro}
              </p>
            </div>
          </section>

          <section className="max-w-md mx-auto px-6 mb-14 text-center">
            <p className="font-body text-xs italic text-ink-soft/80">
              {e.draftNote}
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
              {e.roles.map((role, i) => {
                const isInserted = insertedIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 32, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                      delay: (i % 4) * 0.06,
                    }}
                  >
                    {IS_TAPE[i] ? (
                      isInserted ? (
                        <div style={{ width: 168, height: 104 }} aria-hidden />
                      ) : (
                        <Cassette
                          layoutId={`tape-${i}`}
                          label={role.company}
                          sublabel={role.period}
                          onClick={() => insertTape(i)}
                        />
                      )
                    ) : (
                      <PaperFicha
                        title={role.title}
                        company={role.company}
                        period={role.period}
                        location={role.location}
                        desc={role.desc}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>
        </main>
      </RubberBandGate>

      <Walkman
        tape={
          insertedRole
            ? { id: `${insertedIndex}`, label: insertedRole.company, sublabel: insertedRole.period }
            : null
        }
        playing={playing}
        progress={progress}
        onEject={eject}
        playLabel={e.walkmanEject}
        ejectLabel={e.walkmanEject}
      />
    </PageShell>
  );
}
