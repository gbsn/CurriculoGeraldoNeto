"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
// hotspotTop/height deslocados pra baixo pra não brigar com o painel do título.
const RAYS: Ray[] = [
  { top: "-15%", left: "8%", width: "140px", height: "92%", rotate: 18, hotspotTop: "40%", hotspotLeft: "20%" },
  { top: "-15%", left: "38%", width: "110px", height: "97%", rotate: -6, hotspotTop: "34%", hotspotLeft: "42%" },
  { top: "-15%", left: "68%", width: "120px", height: "92%", rotate: -16, hotspotTop: "42%", hotspotLeft: "66%" },
  { top: "10%", left: "-15%", width: "100px", height: "107%", rotate: 65, hotspotTop: "60%", hotspotLeft: "16%" },
  { top: "5%", left: "92%", width: "100px", height: "107%", rotate: -65, hotspotTop: "57%", hotspotLeft: "82%" },
  { top: "40%", left: "-12%", width: "90px", height: "97%", rotate: 72, hotspotTop: "80%", hotspotLeft: "28%" },
  { top: "35%", left: "96%", width: "90px", height: "97%", rotate: -72, hotspotTop: "84%", hotspotLeft: "74%" },
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

/**
 * Painel do tema ativo, renderizado via portal direto no <body>.
 * Ancorar o painel embaixo de cada ponto de luz é frágil perto das
 * bordas da tela (pontos a 82%/74%/16% estouram a largura no mobile)
 * — um painel fixo embaixo, centralizado, nunca estoura em nenhum
 * tamanho de tela.
 */
function ActiveThemePanel({ theme }: { theme: Theme | null }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Portais precisam de document.body, que não existe no SSR — este
    // é o padrão-guarda padrão pra portais em Next.js, não uma
    // sincronização de estado evitável.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {theme && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 340, damping: 28 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] glass rounded-2xl px-5 py-4 w-[min(320px,88vw)] [transform-origin:bottom_center] [transform:translateZ(0)] isolate"
        >
          <p className="font-display text-sm text-ink mb-1.5">{theme.label}</p>
          <p className="font-body text-xs text-ink-soft leading-relaxed">
            {theme.blurb}
          </p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

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
      {/* Cérebro em vídeo, dando o ar de mistério */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.32 }}
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
            animate={{ opacity: lit ? 1 : 0.16 }}
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
          </div>
        );
      })}

      <ActiveThemePanel theme={active} />
    </div>
  );
}
