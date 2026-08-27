const PUNISH_KEY = "sobre-punishment-until";

/** Milissegundos restantes de castigo, ou 0 se não houver castigo ativo. */
export function getPunishmentRemaining(): number {
  try {
    const raw = window.localStorage.getItem(PUNISH_KEY);
    if (!raw) return 0;
    const until = Number(raw);
    if (!until) return 0;
    const left = until - Date.now();
    return left > 0 ? left : 0;
  } catch {
    return 0;
  }
}

export function setPunishment(durationMs: number) {
  window.localStorage.setItem(PUNISH_KEY, String(Date.now() + durationMs));
}

export function clearPunishment() {
  window.localStorage.removeItem(PUNISH_KEY);
}
