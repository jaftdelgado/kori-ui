<script lang="ts">
  import { cn } from "@chroma-ui/utilities";
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
    secondary: "bg-secondaryControl text-primaryText hover:bg-secondaryControlHover disabled:opacity-50",
    ghost: "bg-transparent text-primaryText hover:bg-secondaryControl/50 disabled:opacity-30"
  };

  const sizes: Record<string, string> = {
    sm: "h-control-sm px-4 text-sm gap-2",
    md: "h-control-md px-5 text-base gap-2.5",
    lg: "h-control-lg px-6 text-lg gap-3"
  };
</script>

{#snippet renderContent(content)}
  {#if typeof content === 'string'}
    <span class={content}></span>
  {:else if typeof content === 'function'}
    {#if content.name === 'Snippet'}
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
  class={cn(
    "inline-flex items-center justify-center rounded-control font-medium transition-colors duration-200 cursor-pointer disabled:cursor-auto",
    "leading-none text-center whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  )}
>
  {@render renderContent(startContent)}
  
  {#if children}
    {@render children()}
  {/if}

  {@render renderContent(endContent)}
</button>