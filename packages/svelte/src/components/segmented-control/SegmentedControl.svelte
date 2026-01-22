<script lang="ts">
  import { cn, segmentedIndicator } from "@kori-ui/utilities";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet, Component } from "svelte";

  export type SegmentedOption = {
    value: string;
    label?: string;
    disabled?: boolean;
    icon?: Component | Snippet;
    iconOnly?: boolean;
  };

  interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onchange"> {
    options: SegmentedOption[];
    value: string;
    name?: string;
    size?: "md" | "lg";
    orientation?: "horizontal" | "vertical";
    disabled?: boolean;
    onchange?: (value: string) => void;
  }

  let {
    options,
    value = $bindable(),
    name,
    size = "md",
    orientation = "horizontal",
    disabled = false,
    onchange,
    class: className,
    ...rest
  }: Props = $props();

  let elements: Record<string, HTMLElement> = $state({});
  let activeElement = $derived(elements[value]);

  const isCompact = $derived(options.every((opt) => opt.iconOnly));

  function handleSelect(optionValue: string, optionDisabled?: boolean) {
    if (disabled || optionDisabled) return;
    value = optionValue;
    onchange?.(value);
  }
</script>

{#snippet renderLabel(option: SegmentedOption)}
  <div class="segmented-content">
    {#if option.icon}
      {#if typeof option.icon === "function"}
        {@render (option.icon as Snippet)()}
      {:else}
        {@const Icon = option.icon as Component}
        <Icon />
      {/if}
    {/if}

    {#if option.label && !option.iconOnly}
      <span class="segmented-label">
        {option.label}
      </span>
    {/if}
  </div>
{/snippet}

<div
  role="radiogroup"
  aria-disabled={disabled}
  class={cn("segmented-group", className)}
  data-orientation={orientation}
  data-size={size}
  data-compact={isCompact}
  {...rest}
>
  {#if name}
    <input type="hidden" {name} {value} />
  {/if}

  <div use:segmentedIndicator={activeElement} class="segmented-indicator"></div>

  {#each options as option}
    {@const isSelected = value === option.value}
    {@const isDisabled = disabled || option.disabled}

    <button
      bind:this={elements[option.value]}
      type="button"
      role="radio"
      aria-checked={isSelected}
      disabled={isDisabled}
      onclick={() => handleSelect(option.value, isDisabled)}
      class="segmented-item"
      data-icon-only={option.iconOnly ?? false}
    >
      {@render renderLabel(option)}
    </button>
  {/each}
</div>
