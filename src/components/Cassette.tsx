"use client";

import { motion } from "motion/react";

export function Cassette({
  layoutId,
  label,
  sublabel,
  spinning = false,
  compact = false,
  onClick,
}: {
  layoutId: string;
  label: string;
  sublabel: string;
  spinning?: boolean;
  compact?: boolean;
  onClick?: () => void;
}) {
  const w = compact ? 108 : 168;
  const h = compact ? 66 : 104;

  return (
    <motion.button
      layoutId={layoutId}
      onClick={onClick}
      disabled={!onClick}
      whileHover={onClick ? { scale: 1.04, rotate: -1 } : undefined}
      whileTap={onClick ? { scale: 0.96 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="relative block"
      style={{ width: w, height: h }}
      aria-label={label}
    >
      {/* Corpo da fita */}
      <div
        className="absolute inset-0 rounded-md shadow-lg"
        style={{
          background: "linear-gradient(160deg, #2a2a2e, #17171a)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Janela central com os carretéis */}
        <div
          className="absolute rounded-sm flex items-center justify-around px-2"
          style={{
            top: "22%",
            bottom: "34%",
            left: "12%",
            right: "12%",
            background: "#0b0b0d",
          }}
        >
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="rounded-full flex items-center justify-center"
              style={{
                width: compact ? 16 : 24,
                height: compact ? 16 : 24,
                background:
                  "repeating-conic-gradient(#3a3a3f 0deg 10deg, #17171a 10deg 20deg)",
              }}
              animate={spinning ? { rotate: 360 } : { rotate: 0 }}
              transition={
                spinning
                  ? { duration: 1.1, repeat: Infinity, ease: "linear" }
                  : { duration: 0 }
              }
            >
              <div
                className="rounded-full bg-[#0b0b0d]"
                style={{ width: compact ? 5 : 8, height: compact ? 5 : 8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Etiqueta escrita à mão */}
        <div
          className="absolute rounded-[2px] flex flex-col items-center justify-center px-1"
          style={{
            top: "6%",
            left: "8%",
            right: "8%",
            height: "16%",
            background: "#EDE6D6",
          }}
        >
          <span
            className="font-handwriting text-ink leading-none truncate w-full text-center"
            style={{ fontSize: compact ? 11 : 15 }}
          >
            {label}
          </span>
        </div>

        {/* Parafusos decorativos */}
        {[
          { top: 4, left: 4 },
          { top: 4, right: 4 },
          { bottom: 4, left: 4 },
          { bottom: 4, right: 4 },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-black/60"
            style={{ width: 3, height: 3, ...pos }}
          />
        ))}
      </div>

      {!compact && (
        <p className="mt-1.5 font-mono text-[10px] text-ink-soft/70 text-center truncate">
          {sublabel}
        </p>
      )}
    </motion.button>
  );
}
