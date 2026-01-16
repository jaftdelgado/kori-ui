<script lang="ts">
  import ComponentExample from "$lib/components/showcase/ComponentExample.svelte";
  import RadioBasic from "$lib/examples/radio/RadioBasic.svelte";
  import RadioSizes from "$lib/examples/radio/RadioSizes.svelte";
  import RadioOrientation from "$lib/examples/radio/RadioOrientation.svelte";
  import RadioDisabled from "$lib/examples/radio/RadioDisabled.svelte";
  import * as code from "./codes";
</script>

<main class="space-y-8">
  <header class="border-b border-secondaryControl pb-6">
    <h1 class="text-4xl font-bold italic text-primaryText">Radio Group</h1>
    <p class="mt-2 text-secondaryText">
      Conjunto de opciones mutuamente excluyentes donde el usuario solo puede seleccionar una a la
      vez.
    </p>
  </header>

  <section class="space-y-12">
    <ComponentExample title="Basic Usage" code={code.basicCode}>
      {#snippet preview()}
        <RadioBasic />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Sizes" code={code.sizesCode}>
      {#snippet preview()}
        <RadioSizes />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Orientation" code={code.orientationCode}>
      {#snippet preview()}
        <RadioOrientation />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Disabled States" code={code.disabledCode}>
      {#snippet preview()}
        <RadioDisabled />
      {/snippet}
    </ComponentExample>
  </section>

  <footer class="pt-8 text-sm italic text-secondaryText">Renderizado con Svelte 5 Runes</footer>
</main>
