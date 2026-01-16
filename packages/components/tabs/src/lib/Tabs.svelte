<script lang="ts">
  import { cn, segmentedIndicator } from "@kori-ui/utilities";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet, Component } from "svelte";

  export type TabOption = {
    value: string;
    label?: string;
    disabled?: boolean;
    icon?: Component | Snippet;
  };

  interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onchange"> {
    options: TabOption[];
    value: string;
    size?: "md" | "lg";
    disabled?: boolean;
    fullWidth?: boolean;
    onchange?: (value: string) => void;
  }

  let {
    options,
    value = $bindable(),
    size = "md",
    disabled = false,
    fullWidth = false,
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

  const sizes = {
    md: "text-sm h-10 gap-2 px-4",
    lg: "text-base h-12 gap-2.5 px-5"
  };
</script>

{#snippet renderLabel(option: TabOption)}
  <div class="flex items-center justify-center gap-2 relative pointer-events-none z-20">
    {#if option.icon}
      {#if typeof option.icon === "function"}
        {@render (option.icon as Snippet)()}
      {:else}
        {@const Icon = option.icon as Component}
        <Icon />
      {/if}
    {/if}

    {#if option.label}
      <span class="font-medium leading-none truncate">
        {option.label}
      </span>
    {/if}
  </div>
{/snippet}

<div
  role="tablist"
  aria-disabled={disabled}
  class={cn(
    "relative flex items-center border-b border-gray-200 w-full select-none isolate",
    disabled && "opacity-60 cursor-not-allowed",
    className
  )}
  {...rest}
>
  <div
    use:segmentedIndicator={activeElement}
    class="absolute left-0 bottom-0 h-0.5 bg-primaryControl z-10 ease-segmented pointer-events-none"
  ></div>

  {#each options as option}
    {@const isSelected = value === option.value}
    {@const isDisabled = disabled || option.disabled}

    <button
      bind:this={elements[option.value]}
      type="button"
      role="tab"
      aria-selected={isSelected}
      disabled={isDisabled}
      onclick={() => handleSelect(option.value, isDisabled)}
      class={cn(
        "group relative flex items-center justify-center transition-colors duration-300 ease-out focus-visible:outline-none",
        sizes[size],
        fullWidth ? "flex-1" : "min-w-fit",

        isDisabled ? "cursor-auto text-gray-400" : "cursor-pointer",

        isSelected ? "text-primaryText" : "text-secondaryText hover:text-primaryText"
      )}
    >
      {@render renderLabel(option)}
    </button>
  {/each}
</div>
