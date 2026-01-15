<script lang="ts">
  import type { Snippet } from "svelte";
  import { Text } from "@kori-ui/Text";
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
    <Text variant="headline" class="text-primaryText">{title}</Text>
  {/if}

  <div class="flex flex-col overflow-hidden border border-secondaryControl rounded-2xl">
    <div class="flex min-h-92 items-center justify-center bg-center p-8">
      {@render preview()}
    </div>

    <div class="border-t border-secondaryControl">
      <CodeBlock {code} />
    </div>
  </div>
</div>
