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

  /**
   * Mantener los colores del ripple en el componente es correcto ya que
   * dependen de la lógica de ejecución del script de utilidades.
   */
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
  class={cn("button", `button--${variant}`, `button--${size}`, className)}
>
  <span class="relative z-10 flex items-center justify-center gap-inherit">
    {@render renderContent(startContent)}

    {#if children}
      {@render children()}
    {/if}

    {@render renderContent(endContent)}
  </span>
</button>
