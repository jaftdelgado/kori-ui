<script lang="ts">
  import { cn, segmentedIndicator } from "@kori-ui/utilities";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet, Component } from "svelte";

  export type SegmentedOption = {
    value: string;
    label?: string;
    disabled?: boolean;
    icon?: Component | Snippet;
  };

  interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onchange"> {
    options: SegmentedOption[];
    value: string;
    name?: string;
    size?: "md" | "lg";
    disabled?: boolean;
    onchange?: (value: string) => void;
  }

  let {
    options,
    value = $bindable(),
    name,
    size = "md",
    disabled = false,
    onchange,
    class: className,
    ...rest
  }: Props = $props();

  let elements: Record<string, HTMLElement> = $state({});
  let activeElement = $derived(elements[value]);

  function handleSelect(optionValue: string, optionDisabled?: boolean) {
    if (disabled || optionDisabled) return;
    value = optionValue;
    onchange?.(value);
  }

  const containerSizes = {
    md: "h-10 p-1",
    lg: "h-12 p-1"
  };

  const textSizes = {
    md: "text-sm",
    lg: "text-base"
  };
</script>

{#snippet renderLabel(option: SegmentedOption)}
  <div class="flex items-center justify-center gap-2 relative pointer-events-none">
    {#if option.icon}
      {#if typeof option.icon === "function"}
        {@render (option.icon as Snippet)()}
      {:else}
        {@const Icon = option.icon as Component}
        <Icon />
      {/if}
    {/if}

    {#if option.label}
      <span class="leading-tight font-medium truncate">
        {option.label}
      </span>
    {/if}
  </div>
{/snippet}

<div
  role="radiogroup"
  aria-disabled={disabled}
  class={cn(
    "relative inline-flex items-center bg-gray-100 rounded-control w-full select-none isolate",
    containerSizes[size],
    disabled && "opacity-60 cursor-not-allowed",
    className
  )}
  {...rest}
>
  {#if name}
    <input type="hidden" {name} {value} />
  {/if}

  <div
    use:segmentedIndicator={activeElement}
    class="absolute left-0 top-1 bottom-1 bg-white shadow-sm rounded-[calc(var(--radius-control)-4px)] z-10 ease-segmented pointer-events-none"
  ></div>

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
      class={cn(
        "group relative z-20 flex-1 h-full rounded-[calc(var(--radius-control)-4px)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryControl/20",
        "transition-colors duration-300 ease-out",
        textSizes[size],
        isDisabled ? "cursor-auto text-gray-400 opacity-50" : "cursor-pointer",
        isSelected ? "text-primaryText" : "text-secondaryText hover:text-primaryText"
      )}
    >
      {@render renderLabel(option)}
    </button>
  {/each}
</div>
