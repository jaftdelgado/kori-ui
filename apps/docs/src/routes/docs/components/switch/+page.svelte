<script lang="ts">
  import ComponentExample from "$lib/components/showcase/ComponentExample.svelte";
  import SwitchBasic from "$lib/examples/switch/SwitchBasic.svelte";
  import SwitchSizes from "$lib/examples/switch/SwitchSizes.svelte";
  import SwitchDisabled from "$lib/examples/switch/SwitchDisabled.svelte";
  import * as code from "./codes";
</script>

<main class="space-y-8">
  <header class="border-b border-secondaryControl pb-6">
    <h1 class="text-4xl font-bold italic text-primaryText">Switch</h1>
    <p class="mt-2 text-secondaryText">
      Control de selección binaria que permite activar o desactivar una opción individual.
    </p>
  </header>

  <section class="space-y-12">
    <ComponentExample title="Basic Usage" code={code.basicCode}>
      {#snippet preview()}
        <SwitchBasic />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Sizes" code={code.sizesCode}>
      {#snippet preview()}
        <SwitchSizes />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Disabled State" code={code.disabledCode}>
      {#snippet preview()}
        <SwitchDisabled />
      {/snippet}
    </ComponentExample>
  </section>

  <footer class="pt-8 text-sm italic text-secondaryText">Renderizado con Svelte 5 Runes</footer>
</main>
