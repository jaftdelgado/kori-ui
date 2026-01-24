<script lang="ts">
  import { cn, portal } from "@kori-ui/utilities";
  import { scale } from "svelte/transition";
  import type { Snippet } from "svelte";
  import type { Strategy } from "@floating-ui/dom";
  import { PopoverState, type PopoverPlacement } from "../popover/popover.svelte.ts";

  interface Props {
    children: Snippet;
    content: string | Snippet;
    placement?: PopoverPlacement;
    strategy?: Strategy;
    offset?: number;
    class?: string;
    delay?: number;
    isOpen?: boolean; // Nuevo: Propiedad opcional para controlar el estado
    onOpenChange?: (open: boolean) => void; // Nuevo: Callback para notificar cambios de estado
  }

  let {
    children,
    content,
    placement = "top",
    strategy = "absolute",
    offset: offsetVal = 8,
    class: className,
    delay = 200,
    isOpen = $bindable(false), // Modificado: Ahora es bindable para permitir control externo
    onOpenChange // Nuevo: Recibimos el callback
  }: Props = $props();

  // Eliminado: let isOpen = $state(false); (Ya viene de las props)
  let timer: ReturnType<typeof setTimeout>;

  const popover = new PopoverState({
    get placement() {
      return placement;
    },
    get strategy() {
      return strategy;
    },
    get offsetVal() {
      return offsetVal;
    },
    get closeOnScroll() {
      return true;
    },
    get isOpen() {
      return isOpen;
    },
    set isOpen(value) {
      isOpen = value; // Modificado: Actualiza la prop bindable directamente
      onOpenChange?.(value); // Nuevo: Ejecuta el callback si existe
    },
    get onOpenChange() {
      return onOpenChange; // Modificado: Retorna la función real en lugar de undefined
    }
  });

  function handleOpen() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      isOpen = true; // Esto actualiza la prop bindable y notifica al padre
    }, delay);
  }

  function handleClose() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      isOpen = false; // Esto actualiza la prop bindable y notifica al padre
    }, 100);
  }
</script>

<svelte:window onscrollcapture={popover.handleScroll} />

<div
  bind:this={popover.referenceEl}
  onmouseenter={handleOpen}
  onmouseleave={handleClose}
  onfocus={handleOpen}
  onblur={handleClose}
  class="tooltip__trigger"
  role="button"
  tabindex="0"
  aria-describedby={isOpen ? "tooltip-content" : undefined}
>
  {@render children()}
</div>

{#if isOpen}
  <div
    id="tooltip-content"
    role="tooltip"
    use:portal
    bind:this={popover.floatingEl}
    class={cn("tooltip", className)}
    transition:scale={{ duration: 200, start: 0.9, opacity: 0 }}
    style:transform-origin={popover.transformOrigin}
    style:z-index="100"
    onmouseenter={handleOpen}
    onmouseleave={handleClose}
  >
    {#if typeof content === "string"}
      {content}
    {:else}
      {@render content()}
    {/if}
  </div>
{/if}
