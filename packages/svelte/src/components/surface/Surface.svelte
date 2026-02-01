<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: "default";
  }

  let { class: className, variant = "default", children, ...rest }: Props = $props();
</script>

<div class={cn("surface", `surface--${variant}`, className)} {...rest}>
  {@render children?.()}
</div>
