<script lang="ts">
  import { highlight } from "$lib/utils/highlighter";

  interface Props {
    code: string;
    class?: string;
  }

  let { code, class: className }: Props = $props();
  let highlightedCode = $state('<span class="text-gray-400 text-xs">Loading...</span>');
  let isCopied = $state(false);

  $effect(() => {
    highlight(code).then((html) => {
      highlightedCode = html;
    });
  });

  function handleCopy() {
    navigator.clipboard.writeText(code);
    isCopied = true;
    setTimeout(() => (isCopied = false), 2000);
  }
</script>

<div class="relative group bg-[#fafafa] font-mono text-sm leading-relaxed p-5 {className}">
  <button
    class="absolute right-4 top-4 z-10 rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] uppercase tracking-widest text-secondaryText transition-all hover:border-primaryControl hover:text-primaryControl"
    onclick={handleCopy}
    aria-label="Copy code"
  >
    {isCopied ? "Copied!" : "Copy"}
  </button>

  <div class="shiki-container overflow-x-auto">
    {@html highlightedCode}
  </div>
</div>

<style>
  :global(.shiki-container pre) {
    background-color: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }
</style>
