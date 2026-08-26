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
  { top: "-15%", left: "8%", width: "140px", height: "80%", rotate: 18, hotspotTop: "28%", hotspotLeft: "20%" },
  { top: "-15%", left: "38%", width: "110px", height: "85%", rotate: -6, hotspotTop: "22%", hotspotLeft: "42%" },
  { top: "-15%", left: "68%", width: "120px", height: "80%", rotate: -16, hotspotTop: "30%", hotspotLeft: "66%" },
  { top: "10%", left: "-15%", width: "100px", height: "95%", rotate: 65, hotspotTop: "48%", hotspotLeft: "16%" },
  { top: "5%", left: "92%", width: "100px", height: "95%", rotate: -65, hotspotTop: "45%", hotspotLeft: "82%" },
  { top: "40%", left: "-12%", width: "90px", height: "85%", rotate: 72, hotspotTop: "68%", hotspotLeft: "28%" },
  { top: "35%", left: "96%", width: "90px", height: "85%", rotate: -72, hotspotTop: "72%", hotspotLeft: "74%" },
];

// Cores neon pastel, uma por tema, seguindo a ordem do arco-íris.
const THEME_COLORS = [
  "#FF5C7A", // vermelho
  "#FFA552", // laranja
  "#FFE156", // amarelo
  "#5CFFA0", // verde
  "#5CC8FF", // azul
  "#7C83FF", // índigo
  "#E45CFF", // violeta
];

export function BrainScape({ themes }: { themes: Theme[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const activeId = pinnedId ?? hoveredId;
  const active = themes.find((t) => t.id === activeId) ?? null;

  return (
    <div
      className="absolute inset-0 overflow-hidden"
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

      {/* Raios de luz: quase invisíveis por padrão, clareiam feito amanhecer quando o tema correspondente é ativado */}
      {themes.map((theme, i) => {
        const ray = RAYS[i % RAYS.length];
        const lit = activeId === theme.id;
        return (
          <motion.div
            key={`ray-${theme.id}`}
            aria-hidden
            className="absolute pointer-events-none overflow-hidden"
            style={{
              top: ray.top,
              left: ray.left,
              width: ray.width,
              height: ray.height,
              transform: `rotate(${ray.rotate}deg)`,
              transformOrigin: "top center",
              filter: "blur(14px)",
              mixBlendMode: "screen",
            }}
            animate={{ opacity: lit ? 1 : 0.05 }}
            transition={{ duration: lit ? 0.5 : 0.9, ease: "easeOut" }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,244,214,0.55), rgba(255,244,214,0.08) 55%, transparent 85%)",
              }}
            />
            {/* Varredura: uma faixa de luz mais forte desce pelo raio ao acender */}
            <AnimatePresence>
              {lit && (
                <motion.div
                  key="sweep"
                  className="absolute inset-x-0"
                  style={{
                    height: "40%",
                    background:
                      "linear-gradient(180deg, transparent, rgba(255,250,230,0.9), transparent)",
                  }}
                  initial={{ top: "-40%" }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* Vinheta pra não iluminar tudo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, transparent 15%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Pontos de tema */}
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
                style={{ width: 16, height: 16, borderWidth: 2, borderStyle: "solid" }}
                animate={
                  activeId === theme.id
                    ? {
                        backgroundColor: THEME_COLORS[i % THEME_COLORS.length],
                        borderColor: THEME_COLORS[i % THEME_COLORS.length],
                        boxShadow: `0 0 26px 8px ${THEME_COLORS[i % THEME_COLORS.length]}99`,
                        scale: 1.5,
                      }
                    : {
                        backgroundColor: "#050507",
                        borderColor: "#ffffff",
                        boxShadow: "0 0 6px 1px rgba(255,255,255,0.25)",
                        scale: 1,
                      }
                }
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                initial={false}
              />
              <span className="font-mono text-xs text-white/80 whitespace-nowrap drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
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
