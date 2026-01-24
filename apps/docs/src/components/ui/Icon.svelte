<script lang="ts">
  import { icons, type IconName } from "@resources/icons";
  import type { SVGAttributes } from "svelte/elements";

  interface Props extends SVGAttributes<SVGElement> {
    name: IconName;
    size?: number;
    class?: string;
  }

  let { name, size = 20, class: className = "", ...restProps }: Props = $props();

  const icon = $derived(icons[name]);
</script>

{#if icon}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={icon.viewBox}
    class={className}
    {...restProps}
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d={icon.path}
      stroke-width="0.03"
      stroke="currentColor"
    />
  </svg>
{/if}
