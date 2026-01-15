<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";

  type Variant = "title" | "subtitle" | "headline" | "body" | "description" | "caption";
  type Weight = "thin" | "normal" | "medium" | "semibold" | "bold" | "black";
  type Color = "default" | "secondary" | "primary" | "success" | "warning" | "danger" | "white";

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    variant?: Variant;
    weight?: Weight;
    color?: Color;
    tag?: string;
  }

  let {
    children,
    variant = "body",
    weight,
    color = "default",
    tag,
    class: className,
    ...rest
  }: Props = $props();

  const variantStyles: Record<Variant, string> = {
    title: "text-4xl md:text-5xl tracking-tight leading-tight",
    subtitle: "text-2xl md:text-3xl tracking-tight leading-snug",
    headline: "text-headline leading-snug",
    body: "text-base leading-relaxed",
    description: "text-sm leading-relaxed",
    caption: "text-xs leading-normal"
  };

  const defaultTags: Record<Variant, string> = {
    title: "h1",
    subtitle: "h2",
    headline: "h3",
    body: "p",
    description: "p",
    caption: "span"
  };

  const weightStyles: Record<Weight, string> = {
    thin: "font-thin",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black"
  };

  const colorStyles: Record<Color, string> = {
    default: "text-primaryText",
    secondary: "text-secondaryText",
    primary: "text-primaryControl",
    success: "text-green-600",
    warning: "text-amber-600",
    danger: "text-red-600",
    white: "text-white"
  };

  // Si no se especifica peso, asignamos uno por defecto según la variante
  const defaultWeights: Record<Variant, string> = {
    title: "font-bold",
    subtitle: "font-semibold",
    headline: "font-medium text-primaryText",
    body: "font-normal",
    description: "font-normal",
    caption: "font-medium"
  };

  let finalTag = $derived(tag || defaultTags[variant]);
  let finalWeightClass = $derived(weight ? weightStyles[weight] : defaultWeights[variant]);
</script>

<svelte:element
  this={finalTag}
  class={cn("block", variantStyles[variant], colorStyles[color], finalWeightClass, className)}
  {...rest}
>
  {@render children()}
</svelte:element>
