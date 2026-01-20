<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { SVGAttributes } from "svelte/elements";

  interface IconData {
    path?: string;
    viewBox?: string;
    attributes?: Record<string, string | number>;
  }

  interface Props extends Omit<SVGAttributes<SVGSVGElement>, "path" | "viewBox">, IconData {}

  let { path, viewBox = "0 0 16 16", attributes = {}, class: className, ...rest }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  fill="currentColor"
  fill-rule="evenodd"
  clip-rule="evenodd"
  stroke="currentColor"
  stroke-width="0.125"
  {...attributes}
  {...rest}
  class={cn("select-none", className)}
>
  {#if path}
    <path d={path} />
  {/if}
</svg>
