import { createHighlighter, type Highlighter } from "shiki";

let highlighter: Highlighter | null = null;

export async function highlight(
  code: string,
  lang: string = "svelte",
  theme: string = "github-light"
) {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: [theme],
      langs: [lang, "javascript", "typescript", "html", "css"]
    });
  }

  return highlighter.codeToHtml(code, {
    lang,
    theme
  });
}
