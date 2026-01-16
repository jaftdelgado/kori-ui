<script lang="ts">
  import { SegmentedControl } from "@kori-ui/segmented-control";
  import Icon from "$lib/components/ui/Icon.svelte";
  import { onMount } from "svelte";

  let { onToggleSidebar } = $props();

  // Inicializamos con el valor guardado o 'system' por defecto
  let theme = $state("system");

  // Efecto para aplicar el tema al DOM
  $effect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", isDark);

    // Guardamos la preferencia
    if (theme !== "system") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
  });

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) theme = savedTheme;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        window.document.documentElement.classList.toggle("dark", mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  });
</script>

{#snippet sunIcon()}
  <Icon name="sun" />
{/snippet}

{#snippet moonIcon()}
  <Icon name="moon" />
{/snippet}

{#snippet monitorIcon()}
  <Icon name="display" />
{/snippet}

<header
  class="flex h-16 w-full items-center justify-between border-b border-gray-200 bg-background px-6"
>
  <div class="flex items-center gap-4">
    <button
      class="flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-900"
      onclick={onToggleSidebar}
      aria-label="Toggle Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" x2="21" y1="6" y2="6" />
        <line x1="3" x2="21" y1="12" y2="12" />
        <line x1="3" x2="21" y1="18" y2="18" />
      </svg>
    </button>

    <div class="flex items-center gap-2">
      <div class="h-8 w-8 rounded-lg bg-gray-900"></div>
      <span class="text-lg font-semibold text-gray-900">Brand</span>
    </div>
  </div>

  <div class="hidden md:block">
    <SegmentedControl
      bind:value={theme}
      options={[
        { value: "light", icon: sunIcon, iconOnly: true },
        { value: "dark", icon: moonIcon, iconOnly: true },
        { value: "system", icon: monitorIcon, iconOnly: true }
      ]}
    />
  </div>
</header>
