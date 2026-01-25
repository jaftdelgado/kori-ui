<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import { RadioController, type RadioProps } from "./radio.svelte.js";

  let {
    value,
    label,
    description,
    disabled = false,
    class: className,
    id = crypto.randomUUID(),
    ...rest
  }: RadioProps = $props();

  const ctrl = new RadioController(() => ({
    value,
    label,
    description,
    disabled
  }));
</script>

<label
  for={id}
  class={cn("group radio-label", className)}
  data-state={ctrl.isChecked ? "checked" : "unchecked"}
  data-disabled={ctrl.isDisabled}
>
  <div class="radio-control-container">
    <input
      {id}
      type="radio"
      name={ctrl.group.name}
      {value}
      checked={ctrl.isChecked}
      disabled={ctrl.isDisabled}
      onchange={ctrl.handleChange}
      class="radio-input"
      {...rest}
    />

    <div class={cn("radio-control", `radio-control--${ctrl.currentSize}`)}>
      <span class={cn("radio-dot", `radio-dot--${ctrl.currentSize}`)}></span>
    </div>
  </div>

  {#if label || description}
    <div class="radio-text-wrapper">
      {#if label}
        <span class={cn("radio-text-label", `radio-text-label--${ctrl.currentSize}`)}>
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
