<script lang="ts">
  import { cn } from "@kori-ui/utilities";
  import { setContext, type Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onchange"> {
    children: Snippet;
    value?: any;
    name?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    orientation?: "vertical" | "horizontal";
    onchange?: (value: any) => void;
  }

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
  }: Props = $props();

  class RadioContext {
    get value() {
      return value;
    }
    get name() {
      return name;
    }
    get size() {
      return size;
    }
    get disabled() {
      return disabled;
    }

    setValue(v: any) {
      if (disabled) return;
      value = v;
      onchange?.(v);
    }
  }

  const context = new RadioContext();
  setContext("RadioGroup", context);
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
