"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/translations";

type Theme = { id: string; label: string; blurb: string };

// Posições espalhadas, tipo constelação — independentes de idioma.
const POSITIONS: { top: string; left: string; size: number }[] = [
  { top: "14%", left: "18%", size: 14 },
  { top: "22%", left: "68%", size: 10 },
  { top: "42%", left: "38%", size: 16 },
  { top: "52%", left: "12%", size: 11 },
  { top: "38%", left: "85%", size: 13 },
  { top: "68%", left: "58%", size: 12 },
  { top: "80%", left: "26%", size: 15 },
];

export function MindScape({ themes, lang }: { themes: Theme[]; lang: Locale }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = themes.find((t) => t.id === activeId) ?? null;
  const closeLabel = lang === "en" ? "Close" : lang === "zh" ? "关闭" : "Fechar";

  return (
    <div
      className="relative min-h-[70vh] sm:min-h-[85vh] rounded-3xl overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #1a1a2e 0%, #0d0d16 60%, #08080c 100%)",
      }}
    >
      {themes.map((theme, i) => {
        const pos = POSITIONS[i % POSITIONS.length];
        return (
          <button
            key={theme.id}
            onClick={() => setActiveId(theme.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group"
            style={{ top: pos.top, left: pos.left }}
            aria-label={theme.label}
          >
            <motion.span
              className="block rounded-full"
              style={{
                width: pos.size,
                height: pos.size,
                background: "radial-gradient(circle, #fff 0%, #a7b4c9 60%, transparent 100%)",
                boxShadow: "0 0 16px 4px rgba(167,180,201,0.55)",
              }}
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.25, 1] }}
              transition={{
                duration: 2.6 + (i % 3) * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.6 }}
              whileTap={{ scale: 0.9 }}
            />
            <span className="font-mono text-[11px] text-white/70 group-hover:text-white transition-colors whitespace-nowrap">
              {theme.label}
            </span>
          </button>
        );
      })}

      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className="glass rounded-3xl px-7 py-8 max-w-sm [transform:translateZ(0)] isolate"
            >
              <p className="font-display text-xl text-ink mb-2">{active.label}</p>
              <p className="font-body text-sm text-ink-soft leading-relaxed">
                {active.blurb}
              </p>
              <button
                onClick={() => setActiveId(null)}
                className="mt-5 font-mono text-xs text-ink-soft hover:text-ink"
              >
                ← {closeLabel}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
