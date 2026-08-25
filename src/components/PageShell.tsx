"use client";

import { useState } from "react";
import { ScrollAnchor, ContactPopup } from "@/components/ContactPopup";

/**
 * Envolve o conteúdo de uma página-tema. Coloca a âncora invisível
 * logo antes do fim do conteúdo (onde o CTA deve "nascer" do scroll)
 * e mantém o popup fixo, escutando esse progresso.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);

  return (
    <>
      {children}
      <ScrollAnchor onProgress={setProgress} />
      <ContactPopup progress={progress} />
    </>
  );
}
