<script lang="ts">
  import { closeIcon, cn } from "@kori-ui/utilities";
  import type { Snippet } from "svelte";

  interface ChipProps {
    children?: Snippet;
    startContent?: Snippet;
    endContent?: Snippet;
    label?: string;
    variant?: "solid" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    class?: string;
    dotColor?: string;
    onremove?: () => void;
  }

  let {
    children,
    startContent,
    endContent,
    label,
    variant = "solid",
    size = "md",
    disabled = false,
    class: className,
    dotColor,
    onremove,
    ...rest
  }: ChipProps = $props();

  const getDotStyle = (color: string) => {
    if (!color) return "";
    if (color.startsWith("var(") || color.startsWith("#") || color.startsWith("rgb")) {
      return color;
    }
    return `var(--${color})`;
  };
</script>

<div
  class={cn("chip", `chip--${variant}`, `chip--${size}`, disabled && "chip--disabled", className)}
  {...rest}
>
  {#if dotColor || startContent}
    <div class="chip-content-wrapper">
      {#if dotColor}
        <span class="chip-dot" style:background-color={getDotStyle(dotColor)}></span>
      {:else if startContent}
        {@render startContent()}
      {/if}
    </div>
  {/if}

  <span class="chip-content">
    {#if children}
      {@render children()}
    {:else}
      {label}
    {/if}
  </span>

  {#if onremove || endContent}
    <div class="chip-content-wrapper">
      {#if onremove && !disabled}
        <button
          type="button"
          class="chip-remove-button"
          onclick={(e) => {
            e.stopPropagation();
            onremove();
          }}
          aria-label="Remove"
        >
          <svg {...closeIcon.attributes} class="chip-remove-icon">
            <path d={closeIcon.path} />
          </svg>
        </button>
      {:else if endContent}
        {@render endContent()}
      {/if}
    </div>
  {/if}
</div>
