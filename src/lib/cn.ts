/** Tiny class-name joiner (keeps the project dependency-free). */
export const cn = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');
