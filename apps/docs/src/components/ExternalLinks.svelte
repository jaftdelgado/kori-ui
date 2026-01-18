<script lang="ts">
  import { Button } from "@kori-ui/svelte";

  interface Props {
    githubUrl?: string;
    styleUrl?: string;
  }

  let { githubUrl = "https://github.com/jaftdelgado/kori-ui", styleUrl }: Props = $props();

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
</script>

<div class="flex flex-wrap gap-3 my-6">
  {#if githubUrl}
    <Button variant="secondary" size="sm" onclick={() => openLink(githubUrl)}>
      <span class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          ></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg
        >
        View Source
      </span>
    </Button>
  {/if}

  {#if styleUrl}
    <Button variant="ghost" size="sm" onclick={() => openLink(styleUrl)}>
      <span class="flex items-center gap-2 text-zinc-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><path
            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
          ></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line
            x1="12"
            y1="22.08"
            x2="12"
            y2="12"
          ></line></svg
        >
        Styles
      </span>
    </Button>
  {/if}
</div>
