<script lang="ts">
  import ComponentExample from "$lib/components/showcase/ComponentExample.svelte";
  import SegmentedBasic from "$lib/examples/segmented-control/SegmentedBasic.svelte";
  import SegmentedSizes from "$lib/examples/segmented-control/SegmentedSizes.svelte";
  import SegmentedDisabled from "$lib/examples/segmented-control/SegmentedDisabled.svelte";
  import SegmentedIcons from "$lib/examples/segmented-control/SegmentedIcons.svelte";
  import * as code from "./codes";
</script>

<main class="space-y-8">
  <header class="border-b border-secondaryControl pb-6">
    <h1 class="text-4xl font-bold italic text-primaryText">Segmented Control</h1>
    <p class="mt-2 text-secondaryText">
      Un conjunto lineal de segmentos mutuamente excluyentes, ideal para alternar vistas o filtrar
      contenido.
    </p>
  </header>

  <section class="space-y-12">
    <ComponentExample title="Basic Usage" code={code.basicCode}>
      {#snippet preview()}
        <SegmentedBasic />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Sizes" code={code.sizesCode}>
      {#snippet preview()}
        <SegmentedSizes />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="With Icons" code={code.iconsCode}>
      {#snippet preview()}
        <SegmentedIcons />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Disabled States" code={code.disabledCode}>
      {#snippet preview()}
        <SegmentedDisabled />
      {/snippet}
    </ComponentExample>
  </section>

  <footer class="pt-8 text-sm italic text-secondaryText">Renderizado con Svelte 5 Runes</footer>
</main>
