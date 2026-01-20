<script lang="ts">
  import { cn, IconWrapper } from "@kori-ui/utilities";
  import { closeIcon, crossIcon, infoIcon, successIcon, warningIcon } from "@kori-ui/utilities";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";

  interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    children?: Snippet;
    icon?: Snippet | string;
    title?: string | Snippet;
    variant?: "default" | "destructive" | "success" | "warning" | "info";
    closable?: boolean;
    onclose?: () => void;
  }

  //TO DO: Add animation on open n close
  //TO DO: Add styles without description
  //TO DO: Add action buttons

  let {
    children,
    icon,
    title,
    class: className,
    variant = "default",
    closable = false,
    onclose,
    ...rest
  }: Props = $props();

  let isVisible = $state(true);

  const handleClose = (e: MouseEvent) => {
    e.stopPropagation();
    isVisible = false;
    if (onclose) onclose();
  };

  const variantIcons = {
    info: infoIcon,
    default: infoIcon,
    destructive: crossIcon,
    success: successIcon,
    warning: warningIcon
  };

  let defaultIcon = $derived(variantIcons[variant]);
</script>

{#if isVisible}
  <div
    role="alert"
    class={cn("alert", `alert--${variant}`, className, closable && "pr-10")}
    {...rest}
  >
    {#snippet renderIcon(content: Props["icon"])}
      {#if typeof content === "string"}
        <span class={cn("flex items-center justify-center shrink-0", content)}></span>
      {:else if content}
        <span class="flex items-center justify-center shrink-0">
          {@render content()}
        </span>
      {/if}
    {/snippet}

    {#snippet renderTitle(content: Props["title"])}
      {#if typeof content === "string"}
        {content}
      {:else if content}
        {@render content()}
      {/if}
    {/snippet}

    {#if icon || defaultIcon}
      <div class="alert__icon-wrapper">
        {#if icon}
          {@render renderIcon(icon)}
        {:else if defaultIcon}
          <IconWrapper {...defaultIcon} class="w-full h-full" />
        {/if}
      </div>
    {/if}

    <div class="alert__content">
      {#if title}
        <h5 class="alert__title">
          {@render renderTitle(title)}
        </h5>
      {/if}

      {#if children}
        <div class="alert__description">
          {@render children()}
        </div>
      {/if}
    </div>

    {#if closable}
      <button type="button" class="alert__close-button" onclick={handleClose} aria-label="Close">
        <IconWrapper {...closeIcon} class="alert__close-icon" />
      </button>
    {/if}
  </div>
{/if}
