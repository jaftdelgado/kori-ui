<script lang="ts">
  import { cn } from "@kori-ui/utilities";

  interface Props {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
    class?: string;
    label?: string;
  }

  let { orientation = "horizontal", decorative = true, class: className, label }: Props = $props();

  const isHorizontal = $derived(orientation === "horizontal");
  const hasLabel = $derived(isHorizontal && label);
</script>

<div
  role={decorative ? "none" : "separator"}
  aria-orientation={decorative ? undefined : orientation}
  class={cn(
    "separator",
    !hasLabel && `separator--${orientation}`,
    hasLabel && "separator--with-label",
    className
  )}
>
  {#if hasLabel}
    <span class="separator__label">
      {label}
    </span>
  {/if}
</div>
