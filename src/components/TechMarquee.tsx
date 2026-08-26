"use client";

const STACK = [
  "Next.js",
  "TypeScript",
  "React",
  "Vue",
  "PHP",
  "Python",
  "C#",
  "Lua",
  "Go",
  "MySQL",
  "Tailwind CSS",
  "SCRUM",
  "Vercel",
  "Google AI Studio",
];

/**
 * Faixa rolando infinitamente com o stack técnico real, baseado
 * nos repositórios e projetos do usuário.
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
