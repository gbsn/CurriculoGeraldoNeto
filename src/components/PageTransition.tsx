"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const PAGE_SPRING = { type: "spring", stiffness: 260, damping: 30 } as const;

/**
 * Transição de "virar página de jornal" entre rotas: a página sai
 * girando pela borda direita (como uma folha virando), a nova entra
 * girando a partir da borda esquerda, com uma sombra de dobra que
 * varre a tela durante a troca.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{ perspective: 2200 }} className="relative">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ rotateY: -14, opacity: 0, x: -18 }}
          animate={{ rotateY: 0, opacity: 1, x: 0 }}
          exit={{ rotateY: 14, opacity: 0, x: 18 }}
          transition={PAGE_SPRING}
          style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Sombra de dobra: varre a tela no momento da virada */}
      <AnimatePresence>
        <motion.div
          key={`fold-${pathname}`}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-40"
          initial={{ opacity: 0.35 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            background:
              "linear-gradient(90deg, rgba(30,36,33,0.18), transparent 35%, transparent 65%, rgba(30,36,33,0.18))",
          }}
        />
      </AnimatePresence>
    </div>
  );
}
