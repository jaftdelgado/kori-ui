<script lang="ts">
  import { setContext } from "svelte";
  import { cn } from "@kori-ui/utilities";
  import type { Snippet } from "svelte";

  interface ButtonGroupProps {
    children: Snippet;
    class?: string;
    variant?: "primary" | "secondary" | "ghost" | "outline" | "danger" | "soft-danger";
    size?: "sm" | "md" | "lg";
    attached?: boolean;
  }

  let {
    children,
    class: className,
    variant = "primary",
    size = "md",
    attached = true
  }: ButtonGroupProps = $props();

  const BUTTON_GROUP_CTX_KEY = "button-group";

  setContext(BUTTON_GROUP_CTX_KEY, {
    get variant() {
      return variant;
    },
    get size() {
      return size;
    },
    get attached() {
      return attached;
    }
  });
</script>

<div
  role="group"
  class={cn(
    "button-group",
    attached ? "button-group--attached" : "button-group--spaced",
    className
  )}
>
  {@render children()}
</div>
