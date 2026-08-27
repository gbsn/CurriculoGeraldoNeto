"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { getPunishmentRemaining, setPunishment, clearPunishment } from "@/lib/sobreLock";

type Question = { id: string; q: string; answers: string[] };
type Copy = {
  title: string;
  subtitle: string;
  retrySubtitle: string;
  placeholder: string;
  submit: string;
  wrong: string;
  bleedMessage: string;
  punishedTitle: string;
  punishedSubtitle: string;
};

const STORAGE_KEY = "sobre-session-gate";
const DURATION_MS = 3 * 60 * 1000;
const PUNISH_DURATION_MS = 3 * 60 * 1000;
const BLEED_REDIRECT_DELAY_MS = 2700;

function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function loadExpiry(): number | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { expiresAt?: number };
    return typeof parsed.expiresAt === "number" ? parsed.expiresAt : null;
  } catch {
    return null;
  }
}

function saveExpiry(expiresAt: number) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ expiresAt }));
}

function pickRandom(list: Question[]): Question {
  return list[Math.floor(Math.random() * list.length)];
}

function checkAnswer(answer: string, question: Question) {
  const normAnswer = normalize(answer);
  return question.answers.some(
    (a) => normalize(a) === normAnswer || (normAnswer.length > 0 && normAnswer.includes(normalize(a)))
  );
}

type Status = "loading" | "active" | "locked" | "locked-retry" | "bleeding" | "unlocking" | "punished";

/**
 * Brincadeira de sessão pra página Sobre: 3 minutos por tentativa.
 * Esgotando o tempo, expulsa pra home. Tentar voltar exige responder
 * uma pergunta sobre o site.
 *
 * Escalada: errar a primeira pergunta deixa a névoa tempestuosa/escura
 * e dá mais uma chance, com pergunta mais fácil. Errar de novo faz a
 * tela sangrar em vermelho, mostra um aviso, e expulsa pra home — o
 * link "Sobre mim" some do menu por 3 minutos (castigo). Ao fim do
 * castigo, a névoa toma a tela de novo e tudo volta ao estado normal
 * (uma pergunta comum pra tentar entrar).
 */
export function SessionGate({
  questions,
  easyQuestions,
  copy,
}: {
  questions: Question[];
  easyQuestions: Question[];
  copy: Copy;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("loading");
  const [remaining, setRemaining] = useState(0);
  const [punishRemaining, setPunishRemaining] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState("");
  const [wrong, setWrong] = useState(false);
  const [flash, setFlash] = useState(false);
  const expiryRef = useRef(0);
  const punishExpiryRef = useRef(0);

  useEffect(() => {
    const punishLeft = getPunishmentRemaining();
    if (punishLeft > 0) {
      punishExpiryRef.current = Date.now() + punishLeft;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPunishRemaining(Math.ceil(punishLeft / 1000));
      setStatus("punished");
      return;
    }

    const stored = loadExpiry();
    const now = Date.now();
    // Sincronização única de fonte externa (localStorage) no mount —
    // não dá pra usar inicializador lazy no useState por causa do SSR.
    if (stored && stored > now) {
      expiryRef.current = stored;
      setStatus("active");
    } else if (!stored) {
      const exp = now + DURATION_MS;
      expiryRef.current = exp;
      saveExpiry(exp);
      setStatus("active");
    } else {
      setQuestion(pickRandom(questions));
      setStatus("locked");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Contador da sessão ativa
  useEffect(() => {
    if (status !== "active") return;
    const id = window.setInterval(() => {
      const left = expiryRef.current - Date.now();
      if (left <= 0) {
        window.clearInterval(id);
        router.push("/");
        return;
      }
      setRemaining(Math.ceil(left / 1000));
    }, 250);
    return () => window.clearInterval(id);
  }, [status, router]);

  // Contador do castigo
  useEffect(() => {
    if (status !== "punished") return;
    const id = window.setInterval(() => {
      const left = punishExpiryRef.current - Date.now();
      if (left <= 0) {
        window.clearInterval(id);
        clearPunishment();
        setQuestion(pickRandom(questions));
        setStatus("locked");
        return;
      }
      setPunishRemaining(Math.ceil(left / 1000));
    }, 250);
    return () => window.clearInterval(id);
  }, [status, questions]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question) return;
    const ok = checkAnswer(answer, question);

    if (ok) {
      setStatus("unlocking");
      const exp = Date.now() + DURATION_MS;
      expiryRef.current = exp;
      saveExpiry(exp);
      window.setTimeout(() => setStatus("active"), 900);
      return;
    }

    if (status === "locked") {
      // Primeiro erro: névoa fica tempestuosa, pergunta mais fácil
      setWrong(true);
      setFlash(true);
      window.setTimeout(() => setFlash(false), 220);
      window.setTimeout(() => {
        setWrong(false);
        setAnswer("");
        setQuestion(pickRandom(easyQuestions));
        setStatus("locked-retry");
      }, 1000);
    } else if (status === "locked-retry") {
      // Segundo erro: tela sangra, expulsa, castigo de 3 minutos
      setStatus("bleeding");
      window.setTimeout(() => {
        setPunishment(PUNISH_DURATION_MS);
        router.push("/");
      }, BLEED_REDIRECT_DELAY_MS);
    }
  }

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const pMinutes = Math.floor(punishRemaining / 60);
  const pSeconds = punishRemaining % 60;
  const isRetry = status === "locked-retry";
  const fogColor = isRetry ? "rgba(18,16,20,0.96)" : "rgba(234,231,223,0.94)";

  return (
    <>
      {status === "active" && (
        <div className="absolute bottom-6 right-6 z-30">
          <div className="glass rounded-2xl px-4 py-2.5 [transform:translateZ(0)] isolate">
            <span className="font-mono text-2xl tabular-nums text-ink tracking-wide">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      )}

      {/* Flash tipo raio, no primeiro erro */}
      <AnimatePresence>
        {flash && (
          <motion.div
            className="fixed inset-0 z-50 bg-white pointer-events-none"
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Sangramento vermelho no segundo erro */}
      <AnimatePresence>
        {status === "bleeding" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: "#3a0000" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.92 }}
              transition={{ duration: BLEED_REDIRECT_DELAY_MS / 1000, ease: "easeIn" }}
            />
            <motion.p
              className="relative font-display text-xl sm:text-2xl text-white text-center max-w-md leading-snug"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {copy.bleedMessage}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Castigo: névoa toma a tela, sem formulário, só o contador */}
      <AnimatePresence>
        {status === "punished" && (
          <motion.div
            key="punished"
            className="absolute inset-0 z-40 flex items-center justify-center px-6"
            style={{ backgroundColor: "rgba(18,16,20,0.97)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9 } }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="text-center"
            >
              <p className="font-display text-lg text-white mb-2">{copy.punishedTitle}</p>
              <p className="font-body text-sm text-white/70 mb-3">{copy.punishedSubtitle}</p>
              <span className="font-mono text-3xl tabular-nums text-white tracking-wide">
                {pMinutes}:{pSeconds.toString().padStart(2, "0")}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(status === "locked" || status === "locked-retry" || status === "unlocking") && (
          <>
            <motion.div
              key="fog-left"
              className="absolute inset-y-0 left-0 w-1/2 z-30"
              animate={{ backgroundColor: fogColor }}
              style={{ backdropFilter: "blur(48px)" }}
              initial={false}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />
            <motion.div
              key="fog-right"
              className="absolute inset-y-0 right-0 w-1/2 z-30"
              animate={{ backgroundColor: fogColor }}
              style={{ backdropFilter: "blur(48px)" }}
              initial={false}
              exit={{ x: "100%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />

            {(status === "locked" || status === "locked-retry") && question && (
              <motion.div
                key="popup"
                className="absolute inset-0 z-40 flex items-center justify-center px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ scale: 0.9, y: 12 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className={`rounded-3xl px-7 py-8 max-w-sm w-full [transform:translateZ(0)] isolate ${
                    isRetry ? "glass" : "glass"
                  }`}
                  style={isRetry ? { backgroundColor: "rgba(30,10,10,0.55)" } : undefined}
                >
                  <p
                    className={`font-display text-lg mb-1 ${isRetry ? "text-white" : "text-ink"}`}
                  >
                    {copy.title}
                  </p>
                  <p
                    className={`font-body text-sm mb-4 ${isRetry ? "text-white/70" : "text-ink-soft"}`}
                  >
                    {isRetry ? copy.retrySubtitle : copy.subtitle}
                  </p>
                  <p
                    className={`font-body text-base mb-3 ${isRetry ? "text-white" : "text-ink"}`}
                  >
                    {question.q}
                  </p>
                  <input
                    autoFocus
                    value={answer}
                    onChange={(e) =>
                      setAnswer(e.target.value.replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, ""))
                    }
                    placeholder={copy.placeholder}
                    className="w-full rounded-lg border hairline bg-paper-raised/50 px-3 py-2 outline-none focus-visible:border-horizonte font-body text-sm text-ink"
                  />
                  {wrong && (
                    <p className="font-mono text-xs text-red-700/80 mt-2">{copy.wrong}</p>
                  )}
                  <button
                    type="submit"
                    className="mt-4 w-full rounded-full bg-ink text-paper py-2.5 font-body text-sm hover:opacity-90 transition-opacity"
                  >
                    {copy.submit}
                  </button>
                </motion.form>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
