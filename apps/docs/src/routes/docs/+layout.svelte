<script lang="ts">
  let { children } = $props();
</script>

<div class="flex min-h-screen">
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
        <a href="/docs/components/button" class="text-sm py-2 px-3 rounded-control hover:bg-secondaryControl/50 transition-colors">
          Button
        </a>
      </nav>
    </div>
  </aside>

  <main class="flex-1 p-12 max-w-5xl">
    {@render children()}
  </main>
</div>