"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/translations";

const LANGS: { code: Locale; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

const SPRING = { type: "spring", stiffness: 420, damping: 34 } as const;

export function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  const NAV_ITEMS = [
    { href: "/tecnologia", label: t.nav.tecnologia },
    { href: "/gestao", label: t.nav.gestao },
    { href: "/experiencias", label: t.nav.experiencias },
    { href: "/sobre", label: t.nav.sobre },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={SPRING}
      >
      <nav className="glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink shrink-0"
        >
          Geraldo Neto
        </Link>

        <ul className="hidden md:flex items-center gap-1 font-body text-sm text-ink-soft">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`relative z-10 block px-3 py-1.5 rounded-full transition-colors ${
                    active ? "text-ink" : "hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {active && (
                  <motion.div
                    layoutId="nav-liquid-indicator"
                    transition={SPRING}
                    className="absolute inset-0 rounded-full bg-paper-raised/80"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center gap-1 font-mono text-xs relative"
            role="group"
            aria-label="Selecionar idioma"
          >
            {LANGS.map((l) => (
              <motion.button
                key={l.code}
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                whileTap={{ scale: 0.9 }}
                className="relative z-10 px-2 py-1 rounded-full transition-colors"
                style={{ color: lang === l.code ? "var(--paper)" : "var(--ink-soft)" }}
              >
                {lang === l.code && (
                  <motion.span
                    layoutId="lang-liquid-indicator"
                    transition={SPRING}
                    className="absolute inset-0 rounded-full bg-ink -z-10"
                  />
                )}
                {l.label}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-ink text-sm font-mono"
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </motion.button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={SPRING}
          className="glass mt-2 rounded-2xl px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3 font-body text-sm text-ink-soft">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-1 mt-4 font-mono text-xs">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`px-2 py-1 rounded-full transition-colors ${
                  lang === l.code
                    ? "bg-ink text-paper"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
      </motion.div>
    </header>
  );
}
