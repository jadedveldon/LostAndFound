import React, { ReactNode } from "react";

/**
 * Renders simple inline markdown (bold, italic, [text](url) links, and bare
 * emails auto-linked to mailto:) into React nodes. Kept intentionally tiny —
 * journal body copy only ever uses these four patterns.
 */
export function formatInline(text: string, keyPrefix: string): ReactNode[] {
  const pattern =
    /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\*[^*]+\*|[\w.+-]+@[\w-]+\.[a-zA-Z]{2,})/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    const key = `${keyPrefix}-${i++}`;

    if (token.startsWith("**")) {
      parts.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("[")) {
      const m = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (m) {
        parts.push(
          <a
            key={key}
            href={m[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--denim)] underline underline-offset-2"
          >
            {m[1]}
          </a>
        );
      } else {
        parts.push(token);
      }
    } else if (token.startsWith("*")) {
      parts.push(<em key={key}>{token.slice(1, -1)}</em>);
    } else {
      parts.push(
        <a
          key={key}
          href={`mailto:${token}`}
          className="text-[var(--denim)] underline underline-offset-2"
        >
          {token}
        </a>
      );
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}
