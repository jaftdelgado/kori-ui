<script lang="ts">
  import { draw } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { cn, checkAnimation } from "@kori-ui/utilities";

  type CheckboxProps = {
    checked?: boolean;
    label?: string;
    description?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    onchange?: (checked: boolean) => void;
  };

  let {
    checked = $bindable(false),
    label,
    description,
    disabled = false,
    name,
    id = crypto.randomUUID(),
    onchange
  }: CheckboxProps = $props();

  function toggle() {
    if (disabled) return;
    checked = !checked;
    onchange?.(checked);
  }
</script>

<div class="checkbox-group">
  <div class="checkbox-container">
    <input {id} {name} type="checkbox" bind:checked {disabled} />

    <div
      role="presentation"
      onclick={toggle}
      use:checkAnimation={checked}
      class={cn(
        "checkbox-box",
        checked && "checkbox-box--checked",
        disabled && "checkbox-box--disabled"
      )}
    >
      {#if checked}
        <svg
          class="checkbox-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3.5"
        >
          <path
            in:draw={{
              duration: 300,
              delay: 200,
              easing: cubicOut
            }}
            d="M5 13l4 4L19 7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      {/if}
    </div>
  </div>

  {#if label || description}
    <label
      for={id}
      class={cn("checkbox-label-wrapper", disabled && "checkbox-label-wrapper--disabled")}
    >
      {#if label}
        <span class="checkbox-label">
          {label}
        </span>
      {/if}
      {#if description}
        <span class="checkbox-description">
          {description}
        </span>
      {/if}
    </label>
  {/if}
</div>
