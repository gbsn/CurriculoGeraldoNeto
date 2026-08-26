"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";

type Question = { id: string; q: string; answers: string[] };
type Copy = {
  title: string;
  subtitle: string;
  placeholder: string;
  submit: string;
  wrong: string;
};

const STORAGE_KEY = "sobre-session-gate";
const DURATION_MS = 3 * 60 * 1000;

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

/**
 * Brincadeira de sessão pra página Sobre: 3 minutos por tentativa.
 * Esgotando o tempo, expulsa pra home. Tentar voltar exige responder
 * uma pergunta sobre o site — acerta, a névoa se abre e ganha mais
 * 3 minutos.
 */
export function SessionGate({ questions, copy }: { questions: Question[]; copy: Copy }) {
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "active" | "locked" | "unlocking">(
    "loading"
  );
  const [remaining, setRemaining] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState("");
  const [wrong, setWrong] = useState(false);
  const expiryRef = useRef(0);

  useEffect(() => {
    const stored = loadExpiry();
    const now = Date.now();
    // Sincronização única de fonte externa (localStorage) no mount —
    // não dá pra usar inicializador lazy no useState por causa do SSR.
    if (stored && stored > now) {
      expiryRef.current = stored;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus("active");
    } else if (!stored) {
      const exp = now + DURATION_MS;
      expiryRef.current = exp;
      saveExpiry(exp);
      setStatus("active");
    } else {
      setQuestion(questions[Math.floor(Math.random() * questions.length)]);
      setStatus("locked");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question) return;
    const normAnswer = normalize(answer);
    const ok = question.answers.some(
      (a) => normalize(a) === normAnswer || (normAnswer.length > 0 && normAnswer.includes(normalize(a)))
    );
    if (ok) {
      setStatus("unlocking");
      const exp = Date.now() + DURATION_MS;
      expiryRef.current = exp;
      saveExpiry(exp);
      window.setTimeout(() => setStatus("active"), 900);
    } else {
      setWrong(true);
      setAnswer("");
      window.setTimeout(() => setWrong(false), 1600);
    }
  }

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

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

      <AnimatePresence>
        {(status === "locked" || status === "unlocking") && (
          <>
            <motion.div
              key="fog-left"
              className="absolute inset-y-0 left-0 w-1/2 z-30"
              style={{ backdropFilter: "blur(48px)", backgroundColor: "rgba(234,231,223,0.94)" }}
              initial={false}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />
            <motion.div
              key="fog-right"
              className="absolute inset-y-0 right-0 w-1/2 z-30"
              style={{ backdropFilter: "blur(48px)", backgroundColor: "rgba(234,231,223,0.94)" }}
              initial={false}
              exit={{ x: "100%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />

            {status === "locked" && question && (
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
                  className="glass rounded-3xl px-7 py-8 max-w-sm w-full [transform:translateZ(0)] isolate"
                >
                  <p className="font-display text-lg text-ink mb-1">{copy.title}</p>
                  <p className="font-body text-sm text-ink-soft mb-4">{copy.subtitle}</p>
                  <p className="font-body text-base text-ink mb-3">{question.q}</p>
                  <input
                    autoFocus
                    value={answer}
                    onChange={(e) =>
                      setAnswer(e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""))
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
