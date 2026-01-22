<script lang="ts">
  import { cn, switchAnimation } from "@kori-ui/utilities";
  import type { HTMLInputAttributes } from "svelte/elements";

  interface SwitchProps extends Omit<HTMLInputAttributes, "size" | "onchange"> {
    checked?: boolean;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    label?: string;
    description?: string;
    labelPosition?: "before" | "after";
    onchange?: (checked: boolean) => void;
  }

  let {
    checked = $bindable(false),
    disabled = false,
    size = "md",
    label,
    description,
    labelPosition = "after",
    class: className,
    id = crypto.randomUUID(),
    onchange,
    ...rest
  }: SwitchProps = $props();

  function toggle() {
    if (disabled) return;
    checked = !checked;
    onchange?.(checked);
  }
</script>

<div class={cn("switch-group", labelPosition === "before" && "switch-group--reverse", className)}>
  <div class="switch-container">
    <input
      {id}
      type="checkbox"
      role="switch"
      class="peer switch-input"
      bind:checked
      {disabled}
      onclick={toggle}
      {...rest}
    />

    <div
      class={cn("switch-track", `switch-track--${size}`)}
      onclick={toggle}
      role="presentation"
      data-state={checked ? "checked" : "unchecked"}
      data-disabled={disabled}
    >
      <span
        use:switchAnimation={size}
        class={cn("switch-thumb", `switch-thumb--${size}`)}
        data-state={checked ? "checked" : "unchecked"}
      ></span>
    </div>
  </div>

  {#if label || description}
    <label
      for={id}
      class="switch-label-wrapper"
      data-disabled={disabled}
      data-size={size}
      data-position={labelPosition}
    >
      {#if label}
        <span class="switch-label">{label}</span>
      {/if}
      {#if description}
        <span class="switch-description">{description}</span>
      {/if}
    </label>
  {/if}
</div>
