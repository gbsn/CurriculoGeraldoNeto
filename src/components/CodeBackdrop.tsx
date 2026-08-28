"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Slot = { top: string; side: "left" | "right"; rotate: number; color: string };

const SLOTS: Slot[] = [
  { top: "9%", side: "left", rotate: -3, color: "#4EC9B0" },
  { top: "24%", side: "right", rotate: 2, color: "#DCDCAA" },
  { top: "40%", side: "left", rotate: 3, color: "#CE9178" },
  { top: "55%", side: "right", rotate: -2, color: "#4EC9B0" },
  { top: "70%", side: "left", rotate: -3, color: "#DCDCAA" },
  { top: "87%", side: "right", rotate: 2, color: "#CE9178" },
];

/** Pool de 100 piadas de código — sorteia 6 sem repetir a cada carregamento. */
const JOKES: string[] = [
  // bugs / features
  "// It's not a bug, it's an undocumented feature",
  "if (bug) { feature = true; }",
  "// TODO: fix this before the interview",
  "99 little bugs in the code, 99 little bugs...",
  "take one down, patch it around, 127 little bugs in the code",
  "// works on my machine ¯\\_(ツ)_/¯",
  "while (!success) { tryAgain(); coffee++; }",
  "rm -rf node_modules && pray()",
  "// this code was written by past me, present me is confused",
  "catch (Exception e) { /* silence is golden */ }",
  "// dear future me, sorry",
  "if (works) { doNotTouch(); }",
  "// temporary fix, permanent since 2019",
  "let bug = feature ?? undefined;",
  "// this line intentionally left cursed",
  "throw new Error('it was working yesterday')",
  "// commented out because I'm scared",
  "if (Math.random() < 0.5) { crash(); }",
  "// production is basically staging with more users",
  "return null; // good luck",
  // git
  'git commit -m "fixes typo" (247 files changed)',
  "git blame -> it was me",
  "git push --force // hold my beer",
  "// merge conflict resolved via vibes",
  'git commit -m "final version"',
  'git commit -m "final version 2"',
  'git commit -m "final version FINAL"',
  "git stash // I'll deal with this later (never)",
  "// rebasing is just time travel for cowards",
  'git commit -m "WIP" // 3 meses atrás',
  // linguagens
  "if (life == java) { life.outOfBounds(); }",
  "<?php // still alive since 1995",
  "SELECT * FROM life WHERE sense = TRUE; -- 0 rows",
  "func (l *Life) Debug() { panic('unrecoverable') }",
  "local happiness = nil -- attempt to index a nil value",
  "class Me : Human { override void Sleep() { /* TODO */ } }",
  "const coffee = await brew(); // await forever",
  "print('help') # SyntaxError: too much honesty",
  "SELECT sleep FROM night WHERE deadline IS NULL; -- empty set",
  "npm install happiness --save // 0 packages found",
  "using System.Life; // namespace not found",
  "def motivation(): return None",
  "$stress++; // undefined variable but somehow still works",
  "echo 'weekend'; // Notice: undefined index",
  "SELECT * FROM excuses ORDER BY creativity DESC;",
  // café / rotina dev
  "sudo make me a coffee",
  "// coffee.exe has stopped working",
  "brew install sleep // command not found",
  "if (!coffee) { return 'error 418: I'm a teapot'; }",
  "// running on caffeine and denial",
  "const energy = coffee * 3 - deadline;",
  "// 3am is just a state of mind",
  "while (awake) { debug(); coffee.refill(); }",
  "// standup meeting: o verdadeiro boss fight diário",
  "// esta função roda a base de vibe e energético",
  // IA / pair programming
  "// written with an AI, blamed on the AI",
  "// a IA escreveu esse comentário, eu não me responsabilizo",
  "ai.suggest() // aceito sem ler, como manda a tradição",
  "// pair programming com um robô que não julga meus nomes de variável",
  "// autocomplete terminou minha frase melhor que meu ex",
  "// prompt engineering é só falar bonito com um papagaio muito esperto",
  "// 'confia', disse a IA, e eu confiei",
  "// esse bug foi gerado por IA, aprovado por humano, amaldiçoado pelo universo",
  "// dois devs, um humano, um não, ambos igualmente confusos",
  "// pedi um fix rápido pra IA, recebi um ensaio filosófico",
  // oQuasi / streaming / gaming
  "twitch.tv/oquasi — brb, debugando IRL",
  "// esse commit performa melhor que eu na live",
  'console.log("cast heal neste bug")',
  "// avatar.blink(); ainda mais expressivo que meu code review",
  "// chat, foco: ele tá refatorando de novo",
  "!uptime // sempre rodando, igual meu servidor de café",
  "// XP +10: bug corrigido sem rage quit",
  "// oQuasi tá de olho nos seus commits 👀",
  "raid incoming // 3 issues abertas simultaneamente",
  "// nerfem esse bug, tá overpowered",
  "// respawn em 3, 2, 1... deploy",
  "// essa build é mais estável que minha conexão de stream",
  "loot.drop('bugfix') // raro, mas existe",
  "// moderaIA aprovaria essa call",
  "// HUD atualizado, vida real ainda sem patch",
  "// server tick rate: minha paciência com bugs de produção",
  "// personagem secundário: eu, às 2h da manhã debugando",
  "achievement unlocked: fixed without asking Stack Overflow",
  "// essa quest não tinha no tutorial",
  "// grinding XP em produção, não recomendado",
  // suporte / sysadmin
  "// já tentou desligar e ligar de novo?",
  "ping -t localhost // conversando comigo mesmo",
  "// ticket #4821: 'não funciona' — descrição completa",
  "// SLA: sempre 5 minutos antes do impossível",
  "// VPN conectada, alma desconectada",
  "// reiniciando o roteador da minha motivação",
  "// sinal fraco, café forte",
  "// suporte nível 1: você tentou o básico?",
  "// backup? claro, na nuvem da esperança",
  "// senha resetada, ego intacto",
  // diversos
  "// this joke was randomly selected, just like your bugs",
  "// 42 // a resposta pra bugs, o universo e tudo mais",
  "// atualiza a página pra uma piada nova, a ciência recomenda",
  "// você achou um easter egg, XP não concedido",
  "// continue rolando, tem mais caos lá embaixo",
];

function pickRandomJokes(count: number): string[] {
  const pool = [...JOKES];
  const picked: string[] = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return picked;
}

function EasterEggs() {
  // Estado inicial determinístico (bate com o SSR); o sorteio real
  // acontece no mount, no client — sempre antes de qualquer egg ficar
  // visível, já que eles só aparecem ao rolar até a posição deles.
  const [texts, setTexts] = useState<string[]>(() => JOKES.slice(0, SLOTS.length));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTexts(pickRandomJokes(SLOTS.length));
  }, []);

  return (
    <>
      {SLOTS.map((slot, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`hidden lg:block absolute font-mono text-xs px-3 py-1.5 rounded-lg border whitespace-nowrap ${
            slot.side === "left" ? "left-[3%]" : "right-[3%]"
          }`}
          style={{
            top: slot.top,
            color: slot.color,
            backgroundColor: "rgba(0,0,0,0.55)",
            borderColor: `${slot.color}55`,
          }}
          initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
          whileInView={{ opacity: 0.9, scale: 1, rotate: slot.rotate }}
          viewport={{ once: false, margin: "-20% 0px" }}
          transition={{ type: "spring", stiffness: 340, damping: 16 }}
        >
          {texts[i]}
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
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 480], [0, 1]);

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "#1b1b1b", opacity: bgOpacity }}
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
    </motion.div>
  );
}
