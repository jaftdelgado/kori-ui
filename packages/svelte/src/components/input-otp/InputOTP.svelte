<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { HTMLInputAttributes } from "svelte/elements";
  import TextField from "../text-field/TextField.svelte";
  import { OTPController } from "./otp.svelte.js";

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
    errorMessage?: string;
    isRequired?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    pattern?: RegExp;
    oncomplete?: (value: string) => void;
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
    errorMessage,
    isRequired = false,
    oncomplete,
    id,
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

<TextField
  id={id ?? undefined}
  {label}
  {description}
  {errorMessage}
  {isRequired}
  disabled={disabled ?? false}
  class={cn(className)}
>
  {#snippet children(generatedId)}
    <div class="input-otp-container">
      {#each Array(length) as _, i}
        <input
          bind:this={otp.inputs[i]}
          id={i === 0 ? generatedId : `${generatedId}-${i}`}
          type="text"
          inputmode="numeric"
          disabled={disabled ?? false}
          {readonly}
          maxlength={1}
          value={value?.[i] ?? ""}
          class={cn(
            "input-otp-slot",
            `otp--${size}`,
            !!errorMessage && "input-otp-slot--error",
            value?.[i] && "input-otp-slot--filled"
          )}
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
  {/snippet}
</TextField>
