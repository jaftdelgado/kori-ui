<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import { getContext } from "svelte";

  interface Props {
    src?: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
    class?: string;
    fallback?: string;
  }

  let { src, alt = "Avatar", size = "md", class: className, fallback = "?" }: Props = $props();

  const AVATAR_GROUP_CTX_KEY = "avatar-group";

  const groupContext = getContext<{
    size: Props["size"];
    isGrouped: boolean;
  }>(AVATAR_GROUP_CTX_KEY);

  const finalSize = $derived(groupContext?.size ?? size);
  const isGrouped = $derived(groupContext?.isGrouped ?? false);

  let imageError = $state(false);

  function handleError() {
    imageError = true;
  }
</script>

<div class={cn("avatar", `avatar--${finalSize}`, isGrouped && "avatar--grouped", className)}>
  {#if src && !imageError}
    <img {src} {alt} class="avatar__image" onerror={handleError} />
  {:else}
    <div class="avatar__fallback">
      {fallback.slice(0, 2)}
    </div>
  {/if}
</div>
