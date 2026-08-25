"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { useRouter } from "next/navigation";

/**
 * No fim do conteúdo, rolar mais faz a página "bater numa mola" e
 * voltar — como o overscroll elástico do iOS. Se a pessoa insistir
 * (soma de tentativas passa do limiar numa janela curta de tempo),
 * navega para `nextHref` usando a transição de virar página já
 * existente no layout.
 */
export function RubberBandGate({
  nextHref,
  children,
  insistThreshold = 260,
  resetMs = 900,
}: {
  nextHref: string;
  children: React.ReactNode;
  insistThreshold?: number;
  resetMs?: number;
}) {
  const y = useMotionValue(0);
  const router = useRouter();
  const insistRef = useRef(0);
  const lastTimeRef = useRef(0);
  const navigatingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    function atBottom() {
      return (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      );
    }

    function pulse(amount: number) {
      const pull = Math.min(30, amount / 12);
      animate(y, -pull, { type: "spring", stiffness: 520, damping: 32 });
      window.setTimeout(() => {
        animate(y, 0, { type: "spring", stiffness: 300, damping: 22 });
      }, 110);
    }

    function registerInsistence(delta: number) {
      if (navigatingRef.current) return;
      const now = Date.now();
      if (now - lastTimeRef.current > resetMs) insistRef.current = 0;
      lastTimeRef.current = now;
      insistRef.current += delta;

      pulse(insistRef.current);

      if (insistRef.current > insistThreshold) {
        navigatingRef.current = true;
        router.push(nextHref);
      }
    }

    function handleWheel(e: WheelEvent) {
      if (e.deltaY <= 0) return;
      if (!atBottom()) {
        insistRef.current = 0;
        return;
      }
      registerInsistence(e.deltaY);
    }

    function handleTouchStart(e: TouchEvent) {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    }

    function handleTouchMove(e: TouchEvent) {
      if (touchStartYRef.current === null) return;
      const currentY = e.touches[0]?.clientY ?? touchStartYRef.current;
      const delta = touchStartYRef.current - currentY; // positivo = arrastando pra cima
      touchStartYRef.current = currentY;
      if (delta <= 0) return;
      if (!atBottom()) {
        insistRef.current = 0;
        return;
      }
      registerInsistence(delta * 2);
    }

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [nextHref, insistThreshold, resetMs, router, y]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
