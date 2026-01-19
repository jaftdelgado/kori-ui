<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";

  type Variant = "title" | "subtitle" | "headline" | "body" | "description";

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    variant?: Variant;
    tag?: string;
  }

  let { children, variant = "body", tag, class: className, ...rest }: Props = $props();

  const defaultTags: Record<Variant, string> = {
    title: "h1",
    subtitle: "h2",
    headline: "h4",
    body: "p",
    description: "p"
  };

  let finalTag = $derived(tag || defaultTags[variant]);
  let finalClasses = $derived(cn(`text--${variant}`, className));
</script>

<svelte:element this={finalTag} class={finalClasses} {...rest}>
  {@render children()}
</svelte:element>
