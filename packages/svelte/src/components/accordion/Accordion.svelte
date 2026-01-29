<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { backOut, cubicOut } from "svelte/easing";
  import { cn, IconWrapper, chevronRightIcon } from "@kori-ui/utilities";
  import type { Snippet } from "svelte";
  import { AccordionController, type AccordionItemProps } from "./accordion.svelte.ts";

  //TO DO: Seguir puliendo animacion de in y out del accordion y su contenido
  //TO DO: Agregar disabled state
  //TO DO: Agregar soporte para icono a la izquierda del title

  interface AccordionProps {
    items: AccordionItemProps[];
    selectionMode?: "single" | "multiple";
    defaultExpandedKeys?: string[];
    class?: string;
    itemClasses?: {
      base?: string;
      trigger?: string;
      title?: string;
      subtitle?: string;
      content?: string;
      indicator?: string;
    };
    children?: Snippet<[AccordionItemProps]>;
    titleContent?: Snippet<[AccordionItemProps]>;
  }

  let {
    items,
    selectionMode = "single",
    defaultExpandedKeys = [],
    class: className,
    itemClasses = {},
    children,
    titleContent,
    ...rest
  }: AccordionProps = $props();

  const controller = new AccordionController({
    items: () => items,
    selectionMode: () => selectionMode,
    defaultExpandedKeys: () => defaultExpandedKeys
  });
</script>

<div class={cn("accordion", className)} {...rest}>
  {#each controller.items as item (item.key)}
    {@const isOpen = controller.isOpen(item.key)}

    <div
      class={cn("accordion-item", item.disabled && "accordion-item--disabled", itemClasses.base)}
    >
      <button
        type="button"
        class={cn("accordion-trigger", itemClasses.trigger)}
        onclick={() => controller.handlePress(item.key, item.disabled)}
        aria-expanded={isOpen}
        disabled={item.disabled}
      >
        <div class="flex items-center gap-3">
          {#if item.startContent}
            {@render item.startContent()}
          {/if}

          <div class="accordion-title-wrapper">
            {#if titleContent}
              {@render titleContent(item)}
            {:else}
              <span class={cn("accordion-title", itemClasses.title)}>{item.title}</span>
              {#if item.subtitle}
                <span class={cn("accordion-subtitle", itemClasses.subtitle)}>{item.subtitle}</span>
              {/if}
            {/if}
          </div>
        </div>

        <div
          class={cn(
            "accordion-indicator",
            isOpen && "accordion-indicator--rotate",
            itemClasses.indicator
          )}
        >
          {#if item.indicator}
            {@render item.indicator()}
          {:else}
            <IconWrapper {...chevronRightIcon} class="w-full h-full" />
          {/if}
        </div>
      </button>

      {#if isOpen}
        <div
          class={cn("accordion-content", itemClasses.content)}
          in:slide={{ duration: 400, easing: backOut, axis: "y" }}
          out:slide={{ duration: 300, easing: cubicOut, axis: "y" }}
        >
          <div class="accordion-content-wrapper" in:fade={{ duration: 100, delay: 150 }}>
            {#if item.content}
              {item.content}
            {:else if children}
              {@render children(item)}
            {/if}
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>
