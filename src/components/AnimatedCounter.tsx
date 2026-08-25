"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";

/**
 * Sobe de 0 até `value` quando o elemento entra na tela, e reinicia
 * a contagem periodicamente (a cada `repeatInterval` ms) enquanto
 * a seção continuar visível — chama atenção de novo se a pessoa
 * ficar parada na página. Aceita um `suffix` (ex: "%", "+") fixo.
 */
export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.4,
  repeatInterval = 15000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  repeatInterval?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const runCount = () =>
      animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });

    let controls = runCount();
    const id = setInterval(() => {
      controls.stop();
      controls = runCount();
    }, repeatInterval);

    return () => {
      controls.stop();
      clearInterval(id);
    };
  }, [inView, value, duration, repeatInterval]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display.toLocaleString("pt-BR")}
      {suffix}
    </motion.span>
  );
}
