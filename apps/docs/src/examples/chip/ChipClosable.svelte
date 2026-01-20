<script lang="ts">
  import { Chip } from "@kori-ui/svelte";

  let tags = $state(["Svelte", "Tailwind", "Kori UI", "TypeScript"]);

  function removeTag(tagToRemove: string) {
    tags = tags.filter((t) => t !== tagToRemove);
  }
</script>

<div class="flex flex-wrap items-center justify-center gap-3 w-full max-w-sm mx-auto">
  {#if tags.length === 0}
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs text-secondaryText italic">No tags remaining</span>
      <button
        onclick={() => (tags = ["Svelte", "Tailwind", "Kori UI", "TypeScript"])}
        class="text-[10px] uppercase tracking-wider font-bold text-primaryControl hover:underline"
      >
        Reset Tags
      </button>
    </div>
  {/if}

  {#each tags as tag}
    <Chip label={tag} variant="outline" size="md" onremove={() => removeTag(tag)} />
  {/each}
</div>
