"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CONTACT_EMAIL = "contato@geraldoneto.dev"; // placeholder — ajustar depois

type Path = "direct" | "request" | null;

const SPRING = { type: "spring", stiffness: 420, damping: 34, mass: 0.8 } as const;
const SPRING_SOFT = { type: "spring", stiffness: 300, damping: 30 } as const;

function todayLabel() {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

/**
 * Âncora invisível: colocar perto do fim do conteúdo de cada página.
 * Mede o quanto já cruzou a viewport para calcular um "progresso de
 * revelação" orgânico (0 a 1), em vez de um simples show/hide binário.
 */
export function ScrollAnchor({ onProgress }: { onProgress: (p: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleScroll() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh - rect.top) / (vh * 0.4);
      const clamped = Math.min(1, Math.max(0, raw));
      onProgress(clamped);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [onProgress]);

  return <div ref={ref} aria-hidden className="h-px w-full" />;
}

/** Brilho especular que desliza pela superfície de vidro, tipo reflexo de luz no iOS. */
function SpecularSweep() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute -inset-y-4 w-1/3 rotate-12"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
        }}
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export function ContactPopup({ progress }: { progress: number }) {
  const [expanded, setExpanded] = useState(false);
  const [path, setPath] = useState<Path>(null);
  const [requestEmail, setRequestEmail] = useState("");
  const [sent, setSent] = useState(false);

  const visible = expanded || progress > 0.05;

  function close() {
    setExpanded(false);
    setPath(null);
    setSent(false);
  }

  function handleMockSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Sprint 2: integração real de envio (ex: Resend) entra aqui.
    setSent(true);
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence mode="popLayout">
        {visible && !expanded && (
          <motion.button
            key="pill"
            layoutId="contact-bubble"
            onClick={() => setExpanded(true)}
            initial={{ opacity: 0, scale: 0.85, y: 14 }}
            animate={{
              opacity: Math.min(1, progress * 1.6),
              scale: 0.94 + progress * 0.06,
              y: (1 - progress) * 12,
            }}
            exit={{ opacity: 0, scale: 0.85 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            transition={SPRING}
            className="glass relative overflow-hidden rounded-full pl-4 pr-5 py-2.5 flex items-center gap-2 text-sm font-body text-ink [transform:translateZ(0)] isolate"
          >
            <SpecularSweep />
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-sage"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            Falar comigo
          </motion.button>
        )}

        {expanded && (
          <motion.div
            key="card"
            layoutId="contact-bubble"
            transition={SPRING}
            className="glass relative overflow-hidden rounded-[28px] w-[min(360px,calc(100vw-3rem))] p-5 font-body text-sm [transform:translateZ(0)] isolate"
          >
            <SpecularSweep />

            <motion.div
              layout
              className="flex items-center justify-between mb-4"
            >
              <span className="font-display text-base text-ink">Vamos conversar</span>
              <motion.button
                onClick={close}
                whileTap={{ scale: 0.85, rotate: 90 }}
                transition={SPRING}
                aria-label="Fechar"
                className="text-ink-soft hover:text-ink"
              >
                ✕
              </motion.button>
            </motion.div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.p
                  key="sent"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={SPRING_SOFT}
                  className="text-ink-soft leading-relaxed"
                >
                  Recebido. Retorno o quanto antes pelo canal informado.
                </motion.p>
              ) : path === null ? (
                <motion.div
                  key="choices"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={SPRING_SOFT}
                  className="flex flex-col gap-3"
                >
                  <p className="text-ink-soft leading-relaxed mb-1">
                    Pode me escrever direto, ou pedir que eu te envie meus dados de contato.
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-ink underline decoration-sage underline-offset-4"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setPath("direct")}
                    className="mt-2 text-left glass rounded-2xl px-4 py-3 hover:brightness-95 transition-[filter]"
                  >
                    Escrever uma mensagem por aqui
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setPath("request")}
                    className="text-left glass rounded-2xl px-4 py-3 hover:brightness-95 transition-[filter]"
                  >
                    Solicitar informações de contato
                  </motion.button>
                </motion.div>
              ) : path === "direct" ? (
                <motion.form
                  key="direct"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={SPRING_SOFT}
                  onSubmit={handleMockSubmit}
                  className="flex flex-col gap-3"
                >
                  <label className="flex flex-col gap-1">
                    <span className="text-xs text-ink-soft">Eu sou ou represento:</span>
                    <input
                      required
                      type="text"
                      className="rounded-lg border hairline bg-paper-raised/50 px-3 py-2 outline-none focus-visible:border-horizonte"
                      placeholder="Nome / empresa / projeto"
                    />
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-xs text-ink-soft">Me comunico em:</span>
                    <span className="font-mono text-xs text-ink-soft/70 px-3 py-2 rounded-lg bg-paper-raised/30 select-none">
                      {todayLabel()}
                    </span>
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-xs text-ink-soft">Mensagem</span>
                    <textarea
                      required
                      rows={4}
                      className="rounded-lg border hairline bg-paper-raised/50 px-3 py-2 outline-none resize-none focus-visible:border-horizonte"
                      placeholder="O que você quer tratar comigo"
                    />
                  </label>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="mt-1 rounded-full bg-ink text-paper py-2.5 hover:opacity-90 transition-opacity"
                  >
                    Enviar
                  </motion.button>
                  <button
                    type="button"
                    onClick={() => setPath(null)}
                    className="text-xs text-ink-soft hover:text-ink self-start"
                  >
                    ← voltar
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  key="request"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={SPRING_SOFT}
                  onSubmit={handleMockSubmit}
                  className="flex flex-col gap-3"
                >
                  <p className="text-ink-soft leading-relaxed">
                    Informo aqui seu e-mail e envio meus dados de contato junto com meu currículo em PDF.
                  </p>
                  <input
                    required
                    type="email"
                    value={requestEmail}
                    onChange={(e) => setRequestEmail(e.target.value)}
                    className="rounded-lg border hairline bg-paper-raised/50 px-3 py-2 outline-none focus-visible:border-horizonte"
                    placeholder="seu@email.com"
                  />
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="mt-1 rounded-full bg-ink text-paper py-2.5 hover:opacity-90 transition-opacity"
                  >
                    Solicitar informações de contato
                  </motion.button>
                  <button
                    type="button"
                    onClick={() => setPath(null)}
                    className="text-xs text-ink-soft hover:text-ink self-start"
                  >
                    ← voltar
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
