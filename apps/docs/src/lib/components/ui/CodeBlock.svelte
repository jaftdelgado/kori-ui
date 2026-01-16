<script lang="ts">
  import { highlight } from "$lib/utils/highlighter";

  interface Props {
    code: string;
    class?: string;
  }

  let { code, class: className }: Props = $props();
  let highlightedCode = $state('<span class="text-gray-400 text-xs">Loading...</span>');
  let isCopied = $state(false);
  let isExpanded = $state(false);

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

<div
  class="relative group bg-surface font-mono text-sm leading-relaxed rounded-lg {className}"
>
  <div class="absolute right-4 top-4 z-10 flex gap-2">
    <button
      class="rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] uppercase tracking-widest text-secondaryText transition-all hover:border-primaryControl hover:text-primaryControl"
      onclick={handleCopy}
      aria-label="Copy code"
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  </div>

  <div class="p-5">
    <div
      class="shiki-container overflow-x-auto transition-all duration-300 ease-in-out {isExpanded
        ? ''
        : 'max-h-40 overflow-hidden'}"
    >
      {@html highlightedCode}
    </div>
  </div>

  {#if !isExpanded}
    <div
      class="absolute inset-x-0 bottom-0 z-20 flex h-32 flex-col justify-end bg-linear-to-t from-surface via-surface/80 to-transparent pb-4 text-center rounded-b-lg"
    >
      <button
        onclick={() => (isExpanded = true)}
        class="mx-auto rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-medium text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
      >
        Expandir código
      </button>
    </div>
  {:else}
    <div class="border-t border-gray-200 bg-gray-50 p-2 text-center rounded-b-lg">
      <button
        onclick={() => (isExpanded = false)}
        class="text-xs font-medium text-gray-500 hover:text-gray-900"
      >
        Colapsar
      </button>
    </div>
  {/if}
</div>

<style>
  :global(.shiki-container pre) {
    background-color: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }
</style>
