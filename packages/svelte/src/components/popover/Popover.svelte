<script lang="ts">
  import { cn, portal } from "@kori-ui/utilities";
  import { scale } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import type { Snippet } from "svelte";
  import type { Strategy } from "@floating-ui/dom";
  import { PopoverState, type PopoverPlacement } from "./popover.svelte.ts";

  interface Props {
    trigger: Snippet;
    children?: Snippet;
    placement?: PopoverPlacement;
    strategy?: Strategy;
    offset?: number;
    header?: string;
    subtitle?: string;
    class?: string;
    isOpen?: boolean;
    closeOnScroll?: boolean;
    onOpenChange?: (open: boolean) => void;
  }

  let {
    trigger,
    children,
    placement = "bottom",
    strategy = "absolute",
    offset: offsetVal = 8,
    header = "",
    subtitle = "",
    class: className,
    isOpen = $bindable(false),
    closeOnScroll = true,
    onOpenChange
  }: Props = $props();

  const state = new PopoverState({
    get placement() {
      return placement;
    },
    get strategy() {
      return strategy;
    },
    get offsetVal() {
      return offsetVal;
    },
    get closeOnScroll() {
      return closeOnScroll;
    },
    get isOpen() {
      return isOpen;
    },
    set isOpen(value) {
      isOpen = value;
    },
    get onOpenChange() {
      return onOpenChange;
    }
  });
</script>

<svelte:window
  onclick={state.handleClickOutside}
  onscrollcapture={state.handleScroll}
  onkeydown={state.handleKeydown}
/>

<div
  bind:this={state.referenceEl}
  onclick={state.toggle}
  class="popover__trigger"
  role="button"
  tabindex="0"
  onkeydown={(e) => e.key === "Enter" && state.toggle()}
>
  {@render trigger()}
</div>

{#if isOpen}
  <div
    use:portal
    bind:this={state.floatingEl}
    class={cn("popover", className)}
    transition:scale={{
      duration: 350,
      start: 0.6,
      easing: backOut,
      opacity: 0
    }}
    style:transform-origin={state.transformOrigin}
    style:z-index="100"
  >
    {#if header || subtitle}
      <div class="flex flex-col py-1">
        {#if header}
          <span class="popover__header">{header}</span>
        {/if}
        {#if subtitle}
          <span class="popover__subtitle">{subtitle}</span>
        {/if}
      </div>
    {/if}

    {#if children}
      {@render children()}
    {/if}
  </div>
{/if}
