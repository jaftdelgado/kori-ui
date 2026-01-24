<script lang="ts">
  import { cn } from "@kori-ui/utilities";

  interface Props {
    src?: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
    class?: string;
    fallback?: string;
  }

  let { src, alt = "Avatar", size = "md", class: className, fallback = "?" }: Props = $props();

  let imageError = $state(false);

  function handleError() {
    imageError = true;
  }
</script>

<div class={cn("avatar", `avatar--${size}`, className)}>
  {#if src && !imageError}
    <img {src} {alt} class="avatar__image" onerror={handleError} />
  {:else}
    <div class="avatar__fallback">
      {fallback.slice(0, 2)}
    </div>
  {/if}
</div>
