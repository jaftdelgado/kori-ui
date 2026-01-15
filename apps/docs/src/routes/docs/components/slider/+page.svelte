<script lang="ts">
  import ComponentExample from "$lib/components/showcase/ComponentExample.svelte";
  import SliderBasic from "$lib/examples/slider/SliderBasic.svelte";
  import SliderSizes from "$lib/examples/slider/SliderSizes.svelte";
  import SliderSteps from "$lib/examples/slider/SliderSteps.svelte";
  import * as code from "./codes";
</script>

<main class="space-y-8">
  <header class="border-b border-secondaryControl pb-6">
    <h1 class="text-4xl font-bold italic text-primaryText">Slider</h1>
    <p class="mt-2 text-secondaryText">
      Control deslizante para seleccionar un valor numérico dentro de un rango específico.
    </p>
  </header>

  <section class="space-y-12">
    <ComponentExample title="Basic Usage" code={code.basicCode}>
      {#snippet preview()}
        <SliderBasic />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Sizes" code={code.sizesCode}>
      {#snippet preview()}
        <SliderSizes />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Steps & Range" code={code.stepsCode}>
      {#snippet preview()}
        <SliderSteps />
      {/snippet}
    </ComponentExample>
  </section>

  <footer class="pt-8 text-sm italic text-secondaryText">Renderizado con Svelte 5 Runes</footer>
</main>
