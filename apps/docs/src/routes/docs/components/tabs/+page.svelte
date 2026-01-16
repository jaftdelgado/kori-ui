<script lang="ts">
  import ComponentExample from "$lib/components/showcase/ComponentExample.svelte";
  import TabsBasic from "$lib/examples/tabs/TabsBasic.svelte";
  import TabsIcons from "$lib/examples/tabs/TabsIcons.svelte";
  import TabsSizes from "$lib/examples/tabs/TabsSizes.svelte";
  import TabsFullWidth from "$lib/examples/tabs/TabsFullWidth.svelte";
  import * as code from "./codes";
</script>

<main class="space-y-8">
  <header class="border-b border-secondaryControl pb-6">
    <h1 class="text-4xl font-bold italic text-primaryText">Tabs</h1>
    <p class="mt-2 text-secondaryText">
      Navegación por pestañas que permite cambiar entre diferentes vistas o conjuntos de datos
      dentro del mismo contexto.
    </p>
  </header>

  <section class="space-y-12">
    <ComponentExample title="Basic Usage" code={code.basicCode}>
      {#snippet preview()}
        <TabsBasic />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="With Icons" code={code.iconsCode}>
      {#snippet preview()}
        <TabsIcons />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Sizes" code={code.sizesCode}>
      {#snippet preview()}
        <TabsSizes />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Full Width" code={code.fullWidthCode}>
      {#snippet preview()}
        <TabsFullWidth />
      {/snippet}
    </ComponentExample>
  </section>

  <footer class="pt-8 text-sm italic text-secondaryText">Renderizado con Svelte 5 Runes</footer>
</main>
