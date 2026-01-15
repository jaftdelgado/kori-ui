<script lang="ts">
  import ComponentExample from "$lib/components/showcase/ComponentExample.svelte";
  import CheckboxBasic from "$lib/examples/checkbox/CheckboxBasic.svelte";
  import CheckboxDescription from "$lib/examples/checkbox/CheckboxDescription.svelte";
  import CheckboxStates from "$lib/examples/checkbox/CheckboxStates.svelte";
  import CheckboxControlled from "$lib/examples/checkbox/CheckboxControlled.svelte";
  import * as code from "./codes";
</script>

<main class="space-y-8">
  <header class="border-b border-secondaryControl pb-6">
    <h1 class="text-4xl font-bold italic text-primaryText">Checkbox</h1>
    <p class="mt-2 text-secondaryText">
      Un control que permite al usuario seleccionar una o más opciones de un conjunto.
    </p>
  </header>

  <section class="space-y-12">
    <ComponentExample title="Basic Usage" code={code.basicCode}>
      {#snippet preview()}
        <CheckboxBasic />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="With Description" code={code.descriptionCode}>
      {#snippet preview()}
        <CheckboxDescription />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="States" code={code.statesCode}>
      {#snippet preview()}
        <CheckboxStates />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="Controlled Component" code={code.controlledCode}>
      {#snippet preview()}
        <CheckboxControlled />
      {/snippet}
    </ComponentExample>
  </section>

  <footer class="pt-8 text-sm italic text-secondaryText">Renderizado con Svelte 5 Runes</footer>
</main>
