<script lang="ts">
  import type { Snippet } from "svelte";
  import CodeBlock from "$lib/components/ui/CodeBlock.svelte";

  interface Props {
    preview: Snippet;
    code: string;
    title?: string;
  }

  let { preview, code, title }: Props = $props();
</script>

<div class="my-10 space-y-4">
  {#if title}
    <h3 class="text-xl font-semibold text-primaryText">{title}</h3>
  {/if}

  <div
    class="flex flex-col overflow-hidden border border-secondaryControl rounded-control bg-white"
  >
    <div class="flex min-h-92 items-center justify-center bg-center p-8">
      {@render preview()}
    </div>

    <div class="border-t border-secondaryControl">
      <CodeBlock {code} />
    </div>
  </div>
</div>
