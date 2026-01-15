<script lang="ts">
  import { page } from "$app/state";

  const links = [
    { href: "/docs/components/button", label: "Button" },
    { href: "/docs/components/checkbox", label: "Checkbox" },
    { href: "/docs/components/slider", label: "Slider" },
    { href: "/docs/components/switch", label: "Switch" }
  ];
</script>

<aside class="w-64 border-r border-secondaryControl p-6 space-y-4 bg-gray-50/50">
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
</aside>
