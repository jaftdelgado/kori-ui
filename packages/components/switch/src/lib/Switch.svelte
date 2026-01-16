<script lang="ts">
  import { cn, switchAnimation } from "@kori-ui/utilities";
  import type { HTMLInputAttributes } from "svelte/elements";

  interface SwitchProps extends Omit<HTMLInputAttributes, "size" | "onchange"> {
    checked?: boolean;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    label?: string;
    description?: string;
    onchange?: (checked: boolean) => void;
  }

  let {
    checked = $bindable(false),
    disabled = false,
    size = "md",
    label,
    description,
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

  const trackSizes = {
    sm: "h-4 w-8",
    md: "h-5 w-10",
    lg: "h-6 w-12"
  };

  const thumbSizes = {
    sm: "h-3 w-[1.03125rem]",
    md: "h-4 w-[1.375rem]",
    lg: "h-5 w-[1.71875rem]"
  };

  const thumbTranslate = {
    sm: "translate-x-[0.71875rem]",
    md: "translate-x-[0.875rem]",
    lg: "translate-x-[1.03125rem]"
  };
</script>

<div class={cn("group inline-flex items-start gap-3 select-none", className)}>
  <div class="relative flex items-center">
    <input
      {id}
      type="checkbox"
      role="switch"
      class="peer sr-only"
      bind:checked
      {disabled}
      onclick={toggle}
      {...rest}
    />

    <div
      class={cn(
        "flex items-center p-0.5 bg-gray-200 peer-focus:ring-2 peer-focus:ring-primaryControl/20 transition-colors duration-300 ease-switch-custom rounded-full cursor-pointer",
        trackSizes[size],
        checked ? "bg-primaryControl" : "bg-secondaryControl group-hover:bg-secondaryControlHover",
        disabled && "opacity-50 cursor-not-allowed bg-gray-200 group-hover:bg-gray-200"
      )}
      onclick={toggle}
      role="presentation"
    >
      <span
        use:switchAnimation={size}
        class={cn(
          "pointer-events-none block rounded-full bg-white shadow ring-0 transition-all duration-300 ease-switch-custom",
          thumbSizes[size],
          checked ? thumbTranslate[size] : "translate-x-0"
        )}
      ></span>
    </div>
  </div>

  {#if label || description}
    <label for={id} class="flex flex-col cursor-pointer {disabled ? 'cursor-not-allowed' : ''}">
      {#if label}
        <span class="text-sm font-medium text-primaryText leading-none mt-1">
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
