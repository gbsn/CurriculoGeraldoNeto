"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { useRouter } from "next/navigation";

/**
 * No topo ou no fim do conteúdo, rolar além faz a página "bater
 * numa mola" e voltar — como o overscroll elástico do iOS. Se a
 * pessoa insistir (soma de tentativas passa do limiar numa janela
 * curta de tempo), navega para `prevHref` (rolando pra cima no
 * topo) ou `nextHref` (rolando pra baixo no fim), usando a
 * transição de virar página já existente no layout. Qualquer um
 * dos dois pode ser omitido (início ou fim da corrente de páginas).
 */
export function RubberBandGate({
  prevHref,
  nextHref,
  children,
  insistThreshold = 260,
  resetMs = 900,
}: {
  prevHref?: string;
  nextHref?: string;
  children: React.ReactNode;
  insistThreshold?: number;
  resetMs?: number;
}) {
  const y = useMotionValue(0);
  const router = useRouter();
  const downRef = useRef(0);
  const upRef = useRef(0);
  const lastDownRef = useRef(0);
  const lastUpRef = useRef(0);
  const navigatingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    function atBottom() {
      return (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      );
    }
    function atTop() {
      return window.scrollY <= 0;
    }

    function pulse(direction: 1 | -1, amount: number) {
      const pull = Math.min(30, amount / 12) * direction;
      animate(y, pull, { type: "spring", stiffness: 520, damping: 32 });
      window.setTimeout(() => {
        animate(y, 0, { type: "spring", stiffness: 300, damping: 22 });
      }, 110);
    }

    function registerDown(delta: number) {
      if (!nextHref || navigatingRef.current) return;
      const now = Date.now();
      if (now - lastDownRef.current > resetMs) downRef.current = 0;
      lastDownRef.current = now;
      downRef.current += delta;
      pulse(-1, downRef.current);
      if (downRef.current > insistThreshold) {
        navigatingRef.current = true;
        router.push(nextHref);
      }
    }

    function registerUp(delta: number) {
      if (!prevHref || navigatingRef.current) return;
      const now = Date.now();
      if (now - lastUpRef.current > resetMs) upRef.current = 0;
      lastUpRef.current = now;
      upRef.current += delta;
      pulse(1, upRef.current);
      if (upRef.current > insistThreshold) {
        navigatingRef.current = true;
        router.push(prevHref);
      }
    }

    function handleWheel(e: WheelEvent) {
      if (e.deltaY > 0) {
        if (atBottom()) registerDown(e.deltaY);
        else downRef.current = 0;
      } else if (e.deltaY < 0) {
        if (atTop()) registerUp(-e.deltaY);
        else upRef.current = 0;
      }
    }

    function handleTouchStart(e: TouchEvent) {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    }

    function handleTouchMove(e: TouchEvent) {
      if (touchStartYRef.current === null) return;
      const currentY = e.touches[0]?.clientY ?? touchStartYRef.current;
      const delta = touchStartYRef.current - currentY; // positivo = dedo subindo
      touchStartYRef.current = currentY;
      if (delta > 0) {
        if (atBottom()) registerDown(delta * 2);
        else downRef.current = 0;
      } else if (delta < 0) {
        if (atTop()) registerUp(-delta * 2);
        else upRef.current = 0;
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [prevHref, nextHref, insistThreshold, resetMs, router, y]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
