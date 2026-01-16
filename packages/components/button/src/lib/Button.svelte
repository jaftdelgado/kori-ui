<script lang="ts">
  import { cn, clickRipple } from "@kori-ui/utilities";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { Snippet, Component } from "svelte";

  interface Props extends HTMLButtonAttributes {
    children?: Snippet;
    startContent?: Snippet | Component | string;
    endContent?: Snippet | Component | string;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
  }

  let {
    children,
    startContent,
    endContent,
    onclick,
    class: className,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    ...rest
  }: Props = $props();

  const variants: Record<string, string> = {
    primary: "bg-primaryControl text-white hover:bg-primaryControlHover disabled:bg-gray-300",
    secondary:
      "bg-secondaryControl text-primaryText hover:bg-secondaryControlHover disabled:opacity-50",
    ghost: "bg-transparent text-primaryText hover:bg-secondaryControl/50 disabled:opacity-30"
  };

  const sizes: Record<string, string> = {
    sm: "h-9 px-4 text-sm gap-2",
    md: "h-10 px-5 text-sm gap-2.5",
    lg: "h-11 px-6 text-base gap-3"
  };

  const rippleColors = {
    primary: "rgba(255, 255, 255, 0.35)",
    secondary: "rgba(0, 0, 0, 0.1)",
    ghost: "rgba(0, 0, 0, 0.1)"
  };
</script>

{#snippet renderContent(content: Props["startContent"])}
  {#if typeof content === "string"}
    <span class={content}></span>
  {:else if content}
    {#if typeof content === "function" && content.name === "Snippet"}
      {@render (content as Snippet)()}
    {:else}
      {@const DynamicComponent = content as Component}
      <DynamicComponent />
    {/if}
  {/if}
{/snippet}

<button
  {type}
  {onclick}
  {disabled}
  {...rest}
  use:clickRipple={{ color: rippleColors[variant] }}
  class={cn(
    "relative overflow-hidden inline-flex items-center justify-center rounded-control font-medium transition-colors duration-200 cursor-pointer disabled:cursor-auto",
    "leading-none text-center whitespace-nowrap select-none",
    variants[variant],
    sizes[size],
    className
  )}
>
  <span class="relative z-10 flex items-center justify-center gap-inherit">
    {@render renderContent(startContent)}

    {#if children}
      {@render children()}
    {/if}

    {@render renderContent(endContent)}
  </span>
</button>
