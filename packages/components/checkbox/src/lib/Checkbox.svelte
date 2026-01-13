<script lang="ts">
  import { draw } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

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

<div class="group flex items-start gap-3 select-none">
  <div class="relative flex items-center mt-0.5">
    <input {id} {name} type="checkbox" bind:checked {disabled} class="peer sr-only" />

    <div
      role="presentation"
      onclick={toggle}
      class="flex h-5 w-5 shrink-0 items-center justify-center rounded-control border-2 transition-all duration-200 cursor-pointer
      {checked
        ? 'bg-primaryControl border-primaryControl'
        : 'bg-white border-secondaryControl group-hover:border-primaryControl/50'}
      {disabled ? 'opacity-50 cursor-not-allowed bg-gray-100 border-gray-300' : ''}"
    >
      {#if checked}
        <svg
          class="h-3.5 w-3.5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3.5"
        >
          <path
            in:draw={{
              duration: 300,
              delay: 300,
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
      class="flex flex-col justify-center min-h-6 cursor-pointer {disabled
        ? 'cursor-not-allowed'
        : ''}"
    >
      {#if label}
        <span class="text-sm font-medium text-primaryText leading-tight">
          {label}
        </span>
      {/if}
      {#if description}
        <span class="text-xs text-secondaryText mt-1">
          {description}
        </span>
      {/if}
    </label>
  {/if}
</div>
