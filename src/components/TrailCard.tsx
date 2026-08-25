"use client";

import Link from "next/link";
import { motion } from "motion/react";

const BOUNCE_IN = { type: "spring", stiffness: 260, damping: 18 } as const;
const FLOAT = { type: "spring", stiffness: 300, damping: 22 } as const;

export function TrailCard({
  href,
  title,
  description,
  delay = 0,
}: {
  href: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ ...BOUNCE_IN, delay }}
      whileHover={{ y: -6 }}
    >
      <Link href={href} className="block group">
        <motion.div
          className="glass rounded-2xl p-6"
          initial={false}
          whileHover={{
            boxShadow:
              "0 20px 45px rgba(30,36,33,0.18), inset 0 1px 0 rgba(255,255,255,0.7)",
          }}
          transition={FLOAT}
        >
          <p className="font-display text-xl text-ink mb-1">{title}</p>
          <p className="font-body text-sm text-ink-soft">{description}</p>
        </motion.div>
      </Link>
    </motion.div>
  );
}
