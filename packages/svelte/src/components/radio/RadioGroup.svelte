<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import { initRadioGroup, type RadioGroupProps } from "./radio.svelte.js";

  let {
    children,
    value = $bindable(),
    name = crypto.randomUUID(),
    size = "md",
    disabled = false,
    orientation = "vertical",
    onchange,
    class: className,
    ...rest
  }: RadioGroupProps & { children: any } = $props();

  initRadioGroup(
    () => ({ value, name, size, disabled, orientation, onchange }),
    (v) => (value = v)
  );
</script>

<div
  role="radiogroup"
  aria-orientation={orientation}
  class={cn("radio-group", className)}
  data-orientation={orientation}
  {...rest}
>
  {@render children()}
</div>
