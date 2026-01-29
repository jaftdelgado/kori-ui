<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { NumberInputController } from "./number-input.svelte.js";

  interface Props extends Omit<HTMLInputAttributes, "size" | "type"> {
    value?: number | null;
    size?: "sm" | "md" | "lg";
    label?: string;
    description?: string;
    isRequired?: boolean;
    min?: number;
    max?: number;
    step?: number;
  }

  let {
    class: className,
    size = "md",
    disabled = false,
    value = $bindable(null),
    label,
    description,
    isRequired = false,
    min = -Infinity,
    max = Infinity,
    step = 1,
    id = crypto.randomUUID(),
    ...rest
  }: Props = $props();

  const controller = new NumberInputController({
    getValue: () => value,
    setValue: (v) => (value = v),
    getProps: () => ({
      min,
      max,
      step,
      disabled: disabled ?? false
    })
  });
</script>

<div class={cn("input-group", disabled && "input-group--disabled")}>
  {#if label}
    <label for={id} class="input-label">
      {label}
      {#if isRequired}
        <span class="text-destructive">*</span>
      {/if}
    </label>
  {/if}

  <div class="number-input-wrapper">
    <input
      {id}
      type="number"
      {disabled}
      {min}
      {max}
      {step}
      bind:value
      class={cn("input number-input", `input--${size}`, className)}
      {...rest}
    />

    <button
      type="button"
      tabindex="-1"
      class="number-control number-control--dec"
      onpointerdown={() => controller.start(controller.decrement)}
      onpointerup={controller.stop}
      onpointerleave={controller.stop}
      disabled={disabled || (value !== null && value <= min)}
      aria-label="Disminuir valor"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14" />
      </svg>
    </button>

    <button
      type="button"
      tabindex="-1"
      class="number-control number-control--inc"
      onpointerdown={() => controller.start(controller.increment)}
      onpointerup={controller.stop}
      onpointerleave={controller.stop}
      disabled={disabled || (value !== null && value >= max)}
      aria-label="Aumentar valor"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    </button>
  </div>

  {#if description}
    <span class="input-description">
      {description}
    </span>
  {/if}
</div>
