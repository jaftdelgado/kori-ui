<script lang="ts">
  import { highlight } from "$lib/utils/highlighter";
  import type { Snippet } from "svelte";

  interface Props {
    preview: Snippet;
    code: string;
    title?: string;
  }

  let { preview, code, title }: Props = $props();
  let highlightedCode = $state('<span class="text-gray-500">Loading...</span>');

  $effect(() => {
    highlight(code).then((html) => {
      highlightedCode = html;
    });
  });
</script>

<div class="my-10 space-y-4">
  {#if title}
    <h3 class="text-xl font-semibold text-primaryText">{title}</h3>
  {/if}

  <div
    class="flex flex-col overflow-hidden border border-secondaryControl rounded-control bg-white"
  >
    <div class="flex min-h-38 items-center justify-center bg-[url('/grid.svg')] bg-center p-8">
      {@render preview()}
    </div>

    <div
      class="relative border-t border-secondaryControl bg-[#0d1117] p-5 font-mono text-sm leading-relaxed"
    >
      <button
        class="absolute right-4 top-4 z-10 rounded-md bg-white/5 px-2 py-1 text-[10px] uppercase tracking-widest text-gray-500 transition-colors hover:bg-white/10 hover:text-white"
        onclick={() => navigator.clipboard.writeText(code)}
      >
        Copy
      </button>

      <div class="shiki-container overflow-x-auto">
        {@html highlightedCode}
      </div>
    </div>
  </div>
</div>

<style>
  :global(.shiki-container pre) {
    background-color: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
  }
</style>
