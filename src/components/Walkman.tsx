"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Cassette } from "@/components/Cassette";

type InsertedTape = { id: string; label: string; sublabel: string } | null;

export function Walkman({
  tape,
  playing,
  progress,
  onEject,
  playLabel,
  ejectLabel,
}: {
  tape: InsertedTape;
  playing: boolean;
  progress: number;
  onEject: () => void;
  playLabel: string;
  ejectLabel: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Portais precisam de document.body, que não existe no SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return createPortal(
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start">
      {/* Fio saindo do walkman até o canto da tela */}
      <svg
        aria-hidden
        className="absolute pointer-events-none"
        style={{ bottom: "90%", left: 18, width: 160, height: 400, overflow: "visible" }}
      >
        <path
          d="M 8 400 C 8 250, 70 220, 40 120 C 10 20, 60 10, 90 -40"
          fill="none"
          stroke="rgba(30,36,33,0.35)"
          strokeWidth={3}
          strokeLinecap="round"
        />
      </svg>

      <div className="glass rounded-2xl p-4 w-[210px] [transform:translateZ(0)] isolate">
        <div
          className="rounded-xl mb-3 flex items-center justify-center"
          style={{ height: 92, background: "rgba(10,10,12,0.9)" }}
        >
          <AnimatePresence mode="wait">
            {tape ? (
              <motion.div
                key={tape.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
              >
                <Cassette
                  layoutId={`tape-${tape.id}`}
                  label={tape.label}
                  sublabel={tape.sublabel}
                  spinning={playing}
                  compact
                />
              </motion.div>
            ) : (
              <span className="font-mono text-[10px] text-white/30">— · —</span>
            )}
          </AnimatePresence>
        </div>

        {tape && (
          <>
            <div className="h-1 rounded-full bg-paper-raised/60 overflow-hidden mb-3">
              <motion.div
                className="h-full bg-sage"
                animate={{ width: `${progress * 100}%` }}
                transition={{ ease: "linear", duration: 0.2 }}
              />
            </div>
            <button
              onClick={onEject}
              className="w-full rounded-full bg-ink text-paper py-2 font-mono text-xs hover:opacity-90 transition-opacity"
            >
              {playing ? playLabel : ejectLabel}
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
