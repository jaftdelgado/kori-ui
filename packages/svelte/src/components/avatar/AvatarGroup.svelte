<script lang="ts">
  import { setContext } from "svelte";
  import { cn } from "@kori-ui/utilities";
  import type { Snippet } from "svelte";

  interface AvatarGroupProps {
    children: Snippet;
    class?: string;
    size?: "sm" | "md" | "lg";
  }

  let { children, class: className, size = "md" }: AvatarGroupProps = $props();

  const AVATAR_GROUP_CTX_KEY = "avatar-group";

  setContext(AVATAR_GROUP_CTX_KEY, {
    get size() {
      return size;
    },
    get isGrouped() {
      return true;
    }
  });
</script>

<div class={cn("avatar-group", className)}>
  {@render children()}
</div>
