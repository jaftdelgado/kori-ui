<script lang="ts">
  import { cn, clickRipple } from "@kori-ui/utilities";
  import { getContext } from "svelte";
  import type { HTMLInputAttributes } from "svelte/elements";

  interface RadioContextType {
    value: any;
    name: string;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    setValue: (v: any) => void;
  }

  interface Props extends Omit<HTMLInputAttributes, "size" | "value"> {
    value: any;
    label?: string;
    description?: string;
    disabled?: boolean;
  }

  let {
    value,
    label,
    description,
    disabled = false,
    class: className,
    id = crypto.randomUUID(),
    ...rest
  }: Props = $props();

  const group = getContext<RadioContextType>("RadioGroup");

  let isChecked = $derived(group.value === value);
  let isDisabled = $derived(group.disabled || disabled);
  let currentSize = $derived(group.size);

  function handleChange() {
    if (!isDisabled) {
      group.setValue(value);
    }
  }
</script>

<label
  for={id}
  class={cn("group radio-label", className)}
  data-state={isChecked ? "checked" : "unchecked"}
  data-disabled={isDisabled}
>
  <div class="radio-control-container">
    <input
      {id}
      type="radio"
      name={group.name}
      {value}
      checked={isChecked}
      disabled={isDisabled}
      onchange={handleChange}
      class="radio-input"
      {...rest}
    />

    <div class={cn("radio-control", `radio-control--${currentSize}`)}>
      <span class={cn("radio-dot", `radio-dot--${currentSize}`)}></span>
    </div>

    {#if !isDisabled}
      <div
        class="absolute inset-0 rounded-full pointer-events-none"
        use:clickRipple={{ color: "rgba(var(--primaryControl-rgb), 0.2)" }}
      ></div>
    {/if}
  </div>

  {#if label || description}
    <div class="radio-text-wrapper">
      {#if label}
        <span class={cn("radio-text-label", `radio-text-label--${currentSize}`)}>
          {label}
        </span>
      {/if}
      {#if description}
        <span class="radio-text-description">
          {description}
        </span>
      {/if}
    </div>
  {/if}
</label>
