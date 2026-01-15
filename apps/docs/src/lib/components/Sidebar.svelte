<script lang="ts">
  import { page } from "$app/state";

  let { isOpen, onClose } = $props();

  const links = [
    { href: "/docs/components/button", label: "Button" },
    { href: "/docs/components/checkbox", label: "Checkbox" },
    { href: "/docs/components/segmented-control", label: "Segmented Control" },
    { href: "/docs/components/slider", label: "Slider" },
    { href: "/docs/components/switch", label: "Switch" }
  ];
</script>

{#if isOpen}
  <div
    class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity md:hidden"
    onclick={onClose}
    role="button"
    tabindex="0"
    onkeydown={(e) => e.key === "Escape" && onClose()}
  ></div>
{/if}

<aside
  class="
    fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-50/50 p-6 transition-transform duration-300 ease-in-out
    md:static md:translate-x-0 md:border-r md:border-secondaryControl
    {isOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'}
  "
>
  <div class="flex items-center justify-between px-3 mb-6 md:hidden">
    <span class="font-bold text-gray-900">Menú</span>
    <button onclick={onClose} class="text-gray-500 hover:text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg
      >
    </button>
  </div>

  <div class="space-y-4">
    <div class="px-3">
      <h2 class="text-sm font-bold uppercase tracking-wider text-secondaryText">Guía</h2>
      <nav class="mt-2 flex flex-col gap-1">
        <a href="/docs" class="text-sm py-1 hover:text-primaryControl">Introducción</a>
      </nav>
    </div>

    <div class="px-3">
      <h2 class="text-sm font-bold uppercase tracking-wider text-secondaryText">Componentes</h2>
      <nav class="mt-2 flex flex-col gap-1">
        {#each links as link}
          <a
            href={link.href}
            onclick={onClose}
            class="text-sm py-2 px-3 rounded-control transition-colors block
            {page.url.pathname === link.href
              ? 'bg-secondaryControl/70 text-primaryControl font-medium'
              : 'hover:bg-secondaryControl/50 text-secondaryText'}"
          >
            {link.label}
          </a>
        {/each}
      </nav>
    </div>
  </div>
</aside>
