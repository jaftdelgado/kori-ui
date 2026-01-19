<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { HTMLInputAttributes } from "svelte/elements";

  interface Props extends Omit<HTMLInputAttributes, "size"> {
    value?: string | number;
    size?: "sm" | "md" | "lg";
    label?: string;
    description?: string;
  }

  let {
    class: className,
    size = "md",
    disabled = false,
    value = $bindable(""),
    type = "text",
    label,
    description,
    id = crypto.randomUUID(),
    ...rest
  }: Props = $props();
</script>

<div class={cn("input-group", disabled && "input-group--disabled")}>
  {#if label}
    <label for={id} class="input-label">
      {label}
    </label>
  {/if}

  <input
    {id}
    {type}
    {disabled}
    bind:value
    class={cn("input", `input--${size}`, className)}
    {...rest}
  />

  {#if description}
    <span class="input-description">
      {description}
    </span>
  {/if}
</div>
