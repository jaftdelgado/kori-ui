<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet<[string]>;
    id?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
    isRequired?: boolean;
    disabled?: boolean;
    class?: string;
  }

  let {
    children,
    id = crypto.randomUUID(),
    label,
    description,
    errorMessage,
    isRequired = false,
    disabled = false,
    class: className
  }: Props = $props();

  const hasError = $derived(!!errorMessage);
</script>

<div class={cn("text-field", disabled && "text-field--disabled", className)}>
  {#if label}
    <label for={id} class="text-field-label">
      {label}
      {#if isRequired}
        <span class="text-destructive">*</span>
      {/if}
    </label>
  {/if}

  {@render children(id)}

  {#if hasError}
    <span class="text-field-error" id="{id}-error" role="alert">
      {errorMessage}
    </span>
  {:else if description}
    <span class="text-field-description" id="{id}-description">
      {description}
    </span>
  {/if}
</div>
