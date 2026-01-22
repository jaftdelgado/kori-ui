<script lang="ts">
  import { cn, sliderAnimation } from "@kori-ui/utilities";
  import type { HTMLInputAttributes } from "svelte/elements";

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

  const thumbWidthsRem = {
    sm: "1.03125",
    md: "1.375",
    lg: "1.71875"
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
  class={cn("slider-group", className)}
  style:--thumb-width="{thumbWidthsRem[size]}rem"
  style:--padding="0.125rem"
  style:--percentage={percentage}
>
  <div class="slider-container">
    <input {id} type="range" bind:value {min} {max} {step} {disabled} {...rest} />

    <div
      bind:this={trackRef}
      onpointerdown={handleTrackDown}
      onpointermove={handlePointerMove}
      onpointerup={handlePointerUp}
      class={cn("slider-track", `slider-track--${size}`, disabled && "slider-track--disabled")}
    >
      <div use:sliderAnimation={isDragging} class="slider-fill"></div>

      <div
        onpointerdown={handleThumbDown}
        use:sliderAnimation={isDragging}
        class="slider-thumb-wrapper"
      >
        <span data-active={isActive} class={cn("slider-thumb", `slider-thumb--${size}`)}></span>
      </div>
    </div>
  </div>

  {#if label || description}
    <div class="slider-info">
      <label for={id} class={cn("slider-label-wrapper", disabled && "cursor-not-allowed")}>
        {#if label}
          <span class="slider-label">{label}</span>
        {/if}
        {#if description}
          <span class="slider-description">{description}</span>
        {/if}
      </label>
      <span class="slider-value">{value}</span>
    </div>
  {/if}
</div>
