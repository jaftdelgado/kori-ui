<script lang="ts">
  import { cn, sliderAnimation } from "@kori-ui/utilities";
  import type { HTMLInputAttributes } from "svelte/elements";

  //TODO: Agregar soporte para modo vertical
  //TODO: Agregar marcas (para rangos) en el track
  //TODO: Agregar posicionamiento de etiquetas (labels) arriba, abajo, izquierda, derecha

  interface SliderProps extends Omit<HTMLInputAttributes, "size" | "type" | "onchange"> {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    label?: string;
    description?: string;
    onchange?: (value: number) => void;
  }

  let {
    value = $bindable(0),
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    size = "md",
    label,
    description,
    class: className,
    id = crypto.randomUUID(),
    onchange,
    ...rest
  }: SliderProps = $props();

  const trackHeights = {
    sm: "h-4",
    md: "h-5",
    lg: "h-6"
  };

  const thumbWidthsRem = {
    sm: "1.03125",
    md: "1.375",
    lg: "1.71875"
  };

  const thumbSizes = {
    sm: `h-3 w-[${thumbWidthsRem.sm}rem]`,
    md: `h-4 w-[${thumbWidthsRem.md}rem]`,
    lg: `h-5 w-[${thumbWidthsRem.lg}rem]`
  };

  let trackRef: HTMLDivElement | undefined = $state();

  let isActive = $state(false);

  let isDragging = $state(false);

  let percentage = $derived((value - min) / (max - min));

  function updateValue(clientX: number) {
    if (!trackRef || disabled) return;

    const rect = trackRef.getBoundingClientRect();
    const padding = 2;
    const thumbWidthPx = parseFloat(thumbWidthsRem[size]) * 16;

    const x = clientX - rect.left - padding;
    const width = rect.width - padding * 2 - thumbWidthPx;

    let newValue = (x / width) * (max - min) + min;

    const stepCount = Math.round((newValue - min) / step);
    newValue = min + stepCount * step;
    newValue = Math.max(min, Math.min(max, newValue));

    if (value !== newValue) {
      value = newValue;
      onchange?.(value);
    }
  }

  function handleTrackDown(e: PointerEvent) {
    if (disabled) return;
    isActive = true;
    trackRef?.setPointerCapture(e.pointerId);
    updateValue(e.clientX);
  }

  function handleThumbDown(e: PointerEvent) {
    if (disabled) return;
    e.stopPropagation();
    isActive = true;
    isDragging = true;
    trackRef?.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: PointerEvent) {
    if (!isActive || disabled) return;
    if (!isDragging) isDragging = true;

    updateValue(e.clientX);
  }

  function handlePointerUp(e: PointerEvent) {
    if (disabled) return;
    isActive = false;
    isDragging = false;
    trackRef?.releasePointerCapture(e.pointerId);
  }
</script>

<div
  class={cn("group w-full flex flex-col gap-2 select-none", className)}
  style:--thumb-width="{thumbWidthsRem[size]}rem"
  style:--padding="0.125rem"
>
  <div class="relative flex items-center w-full">
    <input {id} type="range" class="sr-only" bind:value {min} {max} {step} {disabled} {...rest} />

    <div
      bind:this={trackRef}
      onpointerdown={handleTrackDown}
      onpointermove={handlePointerMove}
      onpointerup={handlePointerUp}
      class={cn(
        "relative w-full flex items-center bg-gray-200 rounded-full cursor-pointer overflow-hidden touch-none",
        trackHeights[size],
        disabled && "opacity-50 cursor-not-allowed bg-gray-200"
      )}
    >
      <div
        use:sliderAnimation={isDragging}
        class="absolute left-0 top-0 bottom-0 bg-primaryControl h-full rounded-r-full will-change-width"
        style:width="calc( (var(--padding) + ({percentage} * (100% - var(--thumb-width) - (var(--padding)
        * 2)))) + var(--thumb-width) + var(--padding) )"
      ></div>

      <div
        onpointerdown={handleThumbDown}
        use:sliderAnimation={isDragging}
        class="absolute top-1/2 -translate-y-1/2 will-change-left"
        style:left="calc(var(--padding) + ({percentage} * (100% - var(--thumb-width) - (var(--padding)
        * 2))))"
      >
        <span
          class={cn(
            "block rounded-full bg-white ring-0 pointer-events-none",
            "transition-all duration-150 ease-out",
            isActive ? "scale-90 shadow-sm" : "scale-100 shadow",
            thumbSizes[size]
          )}
        ></span>
      </div>
    </div>
  </div>

  {#if label || description}
    <div class="flex justify-between items-center px-1">
      <label for={id} class="flex flex-col {disabled ? 'cursor-not-allowed' : 'cursor-pointer'}">
        {#if label}
          <span class="text-sm font-medium text-primaryText leading-none">
            {label}
          </span>
        {/if}
        {#if description}
          <span class="text-xs text-secondaryText mt-1">
            {description}
          </span>
        {/if}
      </label>

      <span class="text-xs font-medium text-secondaryText tabular-nums">
        {value}
      </span>
    </div>
  {/if}
</div>
