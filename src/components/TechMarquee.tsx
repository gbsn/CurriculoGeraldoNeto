"use client";

const STACK = [
  "Next.js",
  "TypeScript",
  "React",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "Python",
  "SCRUM",
  "Vercel",
  "Google AI Studio",
];

/**
 * Faixa rolando infinitamente com o stack técnico — placeholder pra
 * validação de conceito. Lista final entra no Sprint 2, com o
 * conteúdo real da página de Tecnologia.
 */
export function TechMarquee() {
  const items = [...STACK, ...STACK];

  return (
    <div className="relative overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-8 animate-marquee">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="glass rounded-full px-4 py-1.5 font-mono text-xs text-ink-soft whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
