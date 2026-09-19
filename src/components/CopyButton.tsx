"use client";

import { useState } from "react";

export function CopyButton({ text, label, copiedLabel }: { text: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 접근이 차단된 환경(권한 거부 등)에서는 조용히 무시한다.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2.5 border border-border text-sm font-sans text-ink/80 hover:border-primary hover:text-primary transition-colors"
    >
      <span aria-hidden="true">⧉</span>
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}
