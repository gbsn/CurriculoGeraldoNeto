"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Theme = { id: string; label: string; blurb: string };

type Ray = {
  top: string;
  left: string;
  width: string;
  height: string;
  rotate: number;
  hotspotTop: string;
  hotspotLeft: string;
};

// Raios entrando por cima, esquerda e direita — como ideias entrando na cabeça.
const RAYS: Ray[] = [
  { top: "-15%", left: "8%", width: "90px", height: "70%", rotate: 18, hotspotTop: "28%", hotspotLeft: "20%" },
  { top: "-15%", left: "38%", width: "70px", height: "75%", rotate: -6, hotspotTop: "22%", hotspotLeft: "42%" },
  { top: "-15%", left: "68%", width: "80px", height: "70%", rotate: -16, hotspotTop: "30%", hotspotLeft: "66%" },
  { top: "10%", left: "-15%", width: "60px", height: "90%", rotate: 65, hotspotTop: "48%", hotspotLeft: "16%" },
  { top: "5%", left: "95%", width: "60px", height: "90%", rotate: -65, hotspotTop: "45%", hotspotLeft: "82%" },
  { top: "40%", left: "-10%", width: "50px", height: "80%", rotate: 72, hotspotTop: "68%", hotspotLeft: "28%" },
  { top: "35%", left: "98%", width: "50px", height: "80%", rotate: -72, hotspotTop: "72%", hotspotLeft: "74%" },
];

export function BrainScape({ themes }: { themes: Theme[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const activeId = pinnedId ?? hoveredId;
  const active = themes.find((t) => t.id === activeId) ?? null;

  return (
    <div
      className="relative min-h-[75vh] sm:min-h-[90vh] rounded-3xl overflow-hidden"
      style={{ backgroundColor: "#050507" }}
    >
      {/* Cérebro em vídeo, quase invisível, dando o ar de mistério */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.14, mixBlendMode: "screen" }}
      >
        <source src="/media/cerebro-cerebrando.mp4" type="video/mp4" />
      </video>

      {/* Raios de luz entrando por cima e pelos lados */}
      {RAYS.map((ray, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: ray.top,
            left: ray.left,
            width: ray.width,
            height: ray.height,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04) 55%, transparent 85%)",
            transform: `rotate(${ray.rotate}deg)`,
            transformOrigin: "top center",
            filter: "blur(10px)",
            mixBlendMode: "screen",
          }}
        />
      ))}

      {/* Vinheta pra não iluminar tudo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, transparent 20%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Pontos de tema, sobre os raios */}
      {themes.map((theme, i) => {
        const ray = RAYS[i % RAYS.length];
        return (
          <div
            key={theme.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: ray.hotspotTop, left: ray.hotspotLeft }}
          >
            <button
              onMouseEnter={() => setHoveredId(theme.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(theme.id)}
              onBlur={() => setHoveredId(null)}
              onClick={() => setPinnedId((p) => (p === theme.id ? null : theme.id))}
              className="flex flex-col items-center gap-2"
              aria-label={theme.label}
            >
              <motion.span
                className="block rounded-full"
                style={{
                  width: 12,
                  height: 12,
                  background: "radial-gradient(circle, #fff 0%, #e8dcc8 60%, transparent 100%)",
                  boxShadow: "0 0 20px 6px rgba(255,241,214,0.5)",
                }}
                animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.3, 1] }}
                transition={{ duration: 2.4 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.7 }}
              />
              <span className="font-mono text-[11px] text-white/75 whitespace-nowrap">
                {theme.label}
              </span>
            </button>

            <AnimatePresence>
              {activeId === theme.id && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 340, damping: 26 }}
                  className="glass rounded-2xl px-5 py-4 max-w-[240px] absolute top-full mt-3 left-1/2 -translate-x-1/2 [transform-origin:top_center] [transform:translateZ(0)] isolate"
                >
                  <p className="font-body text-xs text-ink-soft leading-relaxed">
                    {active?.blurb}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
