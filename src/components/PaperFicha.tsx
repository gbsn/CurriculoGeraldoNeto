"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function PaperFicha({
  title,
  company,
  period,
  location,
  desc,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  desc: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.button
      onClick={() => setOpen((v) => !v)}
      whileHover={{ rotate: open ? 0 : -1, scale: open ? 1 : 1.02 }}
      className="relative block text-left w-[168px]"
      style={{ fontFamily: "var(--font-handwriting)" }}
    >
      {/* Clipe de papel */}
      <div
        className="absolute -top-2 left-4 w-4 h-7 rounded-sm border-2 z-10"
        style={{ borderColor: "rgba(120,110,90,0.55)", background: "transparent" }}
      />

      <motion.div
        animate={{ height: open ? "auto" : 84 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="rounded-sm px-4 pt-4 pb-3 shadow-md overflow-hidden"
        style={{
          background: "#F2EEE1",
          border: "1px solid rgba(120,110,90,0.25)",
        }}
      >
        <p className="font-handwriting text-lg text-ink leading-tight mb-0.5">
          {title}
        </p>
        <p className="font-mono text-[10px] text-ink-soft/80 uppercase tracking-wide mb-1">
          {company} · {period}
        </p>
        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-body text-xs text-ink-soft leading-relaxed mt-1"
            >
              {location} — {desc}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}
