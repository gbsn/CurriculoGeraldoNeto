"use client";

import { motion } from "motion/react";

type Egg = {
  text: string;
  top: string;
  side: "left" | "right";
  rotate: number;
  color: string;
};

const EGGS: Egg[] = [
  {
    text: "if (life == java) { life.outOfBounds(); }",
    top: "9%",
    side: "left",
    rotate: -3,
    color: "#4EC9B0",
  },
  {
    text: "// 99 little bugs in the code...",
    top: "24%",
    side: "right",
    rotate: 2,
    color: "#DCDCAA",
  },
  {
    text: "twitch.tv/oquasi — brb, debugando IRL",
    top: "40%",
    side: "left",
    rotate: 3,
    color: "#CE9178",
  },
  {
    text: 'sudo make me a coffee',
    top: "55%",
    side: "right",
    rotate: -2,
    color: "#4EC9B0",
  },
  {
    text: "// esse commit performa melhor que eu na live",
    top: "70%",
    side: "left",
    rotate: -3,
    color: "#DCDCAA",
  },
  {
    text: 'console.log("cast heal neste bug")',
    top: "87%",
    side: "right",
    rotate: 2,
    color: "#CE9178",
  },
];

function EasterEggs() {
  return (
    <>
      {EGGS.map((egg) => (
        <motion.div
          key={egg.text}
          aria-hidden
          className={`hidden lg:block absolute font-mono text-xs px-3 py-1.5 rounded-lg border whitespace-nowrap ${
            egg.side === "left" ? "left-[3%]" : "right-[3%]"
          }`}
          style={{
            top: egg.top,
            color: egg.color,
            backgroundColor: "rgba(0,0,0,0.55)",
            borderColor: `${egg.color}55`,
          }}
          initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
          whileInView={{ opacity: 0.9, scale: 1, rotate: egg.rotate }}
          viewport={{ once: false, margin: "-20% 0px" }}
          transition={{ type: "spring", stiffness: 340, damping: 16 }}
        >
          {egg.text}
        </motion.div>
      ))}
    </>
  );
}

const COLOR = {
  comment: "#6A9955",
  keyword: "#C586C0",
  string: "#CE9178",
  fn: "#DCDCAA",
  variable: "#9CDCFE",
  number: "#B5CEA1",
  type: "#4EC9B0",
  punct: "#D4D4D4",
  plain: "#D4D4D4",
};

type Token = { t: string; c?: keyof typeof COLOR };
type Line = Token[];

const SNIPPET: Line[] = [
  [{ t: "// UZIr — kill count bridge", c: "comment" }],
  [
    { t: "func ", c: "keyword" },
    { t: "SyncKill", c: "fn" },
    { t: "(player ", c: "plain" },
    { t: "string", c: "type" },
    { t: ") ", c: "plain" },
    { t: "error", c: "type" },
    { t: " {", c: "punct" },
  ],
  [
    { t: "  entry := ", c: "plain" },
    { t: "LeagueEntry", c: "type" },
    { t: "{", c: "punct" },
  ],
  [
    { t: "    Player: ", c: "variable" },
    { t: "player", c: "plain" },
    { t: ",", c: "punct" },
  ],
  [
    { t: "    Kills:  ", c: "variable" },
    { t: "0", c: "number" },
    { t: ",", c: "punct" },
  ],
  [{ t: "  }", c: "punct" }],
  [{ t: "  return ", c: "keyword" }, { t: "nil", c: "keyword" }],
  [{ t: "}", c: "punct" }],
  [{ t: "" }],
  [{ t: "-- QuasimoDOVS-Clock", c: "comment" }],
  [
    { t: "local ", c: "keyword" },
    { t: "season", c: "variable" },
    { t: " = ", c: "punct" },
    { t: "api", c: "plain" },
    { t: ".", c: "punct" },
    { t: "GetSeason", c: "fn" },
    { t: "()", c: "punct" },
  ],
  [
    { t: "hud", c: "plain" },
    { t: ":", c: "punct" },
    { t: "SetColor", c: "fn" },
    { t: "(pastel[season])", c: "plain" },
  ],
  [{ t: "" }],
  [{ t: "// CurriculoGeraldoNeto", c: "comment" }],
  [
    { t: "export ", c: "keyword" },
    { t: "function ", c: "keyword" },
    { t: "GestaoPage", c: "fn" },
    { t: "() {", c: "punct" },
  ],
  [
    { t: "  const ", c: "keyword" },
    { t: "{ t } ", c: "variable" },
    { t: "= ", c: "punct" },
    { t: "useLanguage", c: "fn" },
    { t: "()", c: "punct" },
  ],
  [{ t: "  return ", c: "keyword" }, { t: "<Timeline />", c: "plain" }],
  [{ t: "}", c: "punct" }],
  [{ t: "" }],
  [{ t: "# moderaIA", c: "comment" }],
  [
    { t: "def ", c: "keyword" },
    { t: "moderate", c: "fn" },
    { t: "(stream", c: "variable" },
    { t: "):", c: "punct" },
  ],
  [
    { t: "    ", c: "plain" },
    { t: "if ", c: "keyword" },
    { t: "toxic(chat)", c: "fn" },
    { t: ":", c: "punct" },
  ],
  [{ t: "        warn(user)", c: "fn" }],
  [{ t: "" }],
  [{ t: "<?php", c: "keyword" }],
  [{ t: "// ThePHPLogin", c: "comment" }],
  [
    { t: "function ", c: "keyword" },
    { t: "authenticate", c: "fn" },
    { t: "($user", c: "variable" },
    { t: ") {", c: "punct" },
  ],
  [
    { t: "  return ", c: "keyword" },
    { t: "password_verify", c: "fn" },
    { t: "($hash);", c: "plain" },
  ],
  [{ t: "}", c: "punct" }],
];

function CodeColumn({ reverse = false }: { reverse?: boolean }) {
  const lines = [...SNIPPET, ...SNIPPET];
  return (
    <pre
      className={`font-mono text-[11px] leading-[1.7] whitespace-pre-wrap ${
        reverse ? "animate-code-drift-reverse" : "animate-code-drift"
      }`}
    >
      {lines.map((line, i) => (
        <div key={i}>
          {line.length === 0
            ? "\u00A0"
            : line.map((tok, j) => (
                <span key={j} style={{ color: tok.c ? COLOR[tok.c] : COLOR.plain }}>
                  {tok.t}
                </span>
              ))}
        </div>
      ))}
    </pre>
  );
}

/**
 * Fundo fixo estilo tela de IDE (VS Code Dark+): código sintaticamente
 * colorido, borrado e sutil, que aparece através do blur dos cards de
 * vidro por cima. Decorativo — não interativo, oculto de leitores de
 * tela.
 */
export function CodeBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "#1b1b1b" }}
    >
      <div className="absolute inset-0 opacity-[0.38] blur-[1px] grid grid-cols-2 sm:grid-cols-3 gap-8 px-6 py-10">
        <CodeColumn />
        <CodeColumn reverse />
        <CodeColumn />
      </div>
      {/* Vinheta pra escurecer as bordas e focar o centro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Easter eggs — nítidos, sem blur, saltam ao entrar na viewport */}
      <EasterEggs />
    </div>
  );
}
