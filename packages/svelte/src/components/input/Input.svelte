<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { HTMLInputAttributes } from "svelte/elements";
  import TextField from "../text-field/TextField.svelte";

  interface Props extends Omit<HTMLInputAttributes, "size"> {
    value?: string | number;
    size?: "sm" | "md" | "lg";
    label?: string;
    description?: string;
    errorMessage?: string;
    isRequired?: boolean;
  }

  let {
    class: className,
    size = "md",
    disabled = false,
    value = $bindable(""),
    type = "text",
    label,
    description,
    errorMessage,
    isRequired = false,
    id,
    ...rest
  }: Props = $props();
</script>

<TextField
  id={id ?? undefined}
  {label}
  {description}
  {errorMessage}
  {isRequired}
  disabled={disabled ?? false}
>
  {#snippet children(generatedId)}
    <input
      id={generatedId}
      {type}
      {disabled}
      bind:value
      aria-invalid={!!errorMessage}
      class={cn("input", `input--${size}`, !!errorMessage && "input--error", className)}
      {...rest}
    />
  {/snippet}
</TextField>
