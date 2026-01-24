<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { OTPController } from "./otp.svelte.ts";

  // TO DO: agregar Placeholder
  // Agregar animacion de escritura
  // Agregar estado de validacion

  interface Props extends Omit<
    HTMLInputAttributes,
    "size" | "value" | "placeholder" | "pattern" | "readonly"
  > {
    value?: string;
    size?: "sm" | "md" | "lg";
    length?: number;
    separators?: number[];
    label?: string;
    description?: string;
    disabled?: boolean;
    readonly?: boolean;
    pattern?: RegExp;
    oncomplete?: (value: string) => void;
    placeholder?: never;
  }

  let {
    class: className,
    size = "md",
    disabled = false,
    readonly = false,
    value = $bindable(""),
    length = 6,
    separators = [],
    pattern = /^\d+$/,
    label,
    description,
    oncomplete,
    id = crypto.randomUUID(),
    placeholder: _,
    ...rest
  }: Props = $props();

  const otp = new OTPController(
    () => length,
    () => pattern,
    () => oncomplete,
    () => readonly
  );

  $effect(() => {
    if (value && value.length > length) {
      value = value.slice(0, length);
    }
  });
</script>

<div class={cn("input-group", disabled && "input-group--disabled", className)}>
  <div class="input-otp-wrapper">
    {#if label}
      <label for="{id}-0" class="input-label">
        {label}
      </label>
    {/if}

    <div class="input-otp-container">
      {#each Array(length) as _, i}
        <input
          bind:this={otp.inputs[i]}
          id="{id}-{i}"
          type="text"
          inputmode="numeric"
          {disabled}
          {readonly}
          maxlength={1}
          value={value?.[i] ?? ""}
          class={cn("input input-otp-slot", `input--${size}`)}
          oninput={(e) => otp.handleInput(e, i, value ?? "", (v) => (value = v))}
          onkeydown={(e) => otp.handleKeydown(e, i, value ?? "", (v) => (value = v))}
          onpaste={(e) => otp.handlePaste(e, (v) => (value = v))}
          onfocus={() => otp.handleFocus(i, value ?? "")}
          {...rest}
        />

        {#if separators.includes(i + 1) && i < length - 1}
          <div class="input-otp-separator"></div>
        {/if}
      {/each}
    </div>

    {#if description}
      <span class="input-description">{description}</span>
    {/if}
  </div>
</div>
