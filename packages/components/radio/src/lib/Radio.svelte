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

  const radioSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  };

  const dotSizes = {
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
    lg: "h-2.5 w-2.5"
  };

  function handleChange() {
    if (!isDisabled) {
      group.setValue(value);
    }
  }
</script>

<label
  for={id}
  class={cn(
    "group flex items-start gap-3 relative select-none",
    isDisabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
    className
  )}
>
  <div class="relative flex items-center justify-center h-full pt-0.5">
    <input
      {id}
      type="radio"
      name={group.name}
      {value}
      checked={isChecked}
      disabled={isDisabled}
      onchange={handleChange}
      class="sr-only"
      {...rest}
    />

    <div
      class={cn(
        "rounded-full flex items-center justify-center transition-all duration-200 ease-out border border-transparent",
        radioSizes[currentSize],
        isChecked ? "bg-primaryControl shadow-sm" : "bg-gray-200 group-hover:bg-gray-300",
        "group-focus-within:ring-2 group-focus-within:ring-primaryControl/20"
      )}
    >
      <span
        class={cn(
          "rounded-full bg-white shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
          dotSizes[currentSize],
          isChecked ? "scale-100" : "scale-0"
        )}
      ></span>
    </div>

    {#if !isDisabled}
      <div
        class="absolute inset-0 rounded-full pointer-events-none"
        use:clickRipple={{ color: "rgba(var(--primaryControl-rgb), 0.2)" }}
      ></div>
    {/if}
  </div>

  {#if label || description}
    <div class="flex flex-col">
      {#if label}
        <span
          class={cn(
            "font-medium text-primaryText leading-tight",
            currentSize === "sm" && "text-sm",
            currentSize === "md" && "text-sm",
            currentSize === "lg" && "text-base"
          )}
        >
          {label}
        </span>
      {/if}
      {#if description}
        <span class="text-xs text-secondaryText mt-1 leading-normal">
          {description}
        </span>
      {/if}
    </div>
  {/if}
</label>
