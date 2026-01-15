<script lang="ts">
  import ComponentExample from "$lib/components/showcase/ComponentExample.svelte";
  import ButtonVariants from "$lib/examples/button/ButtonVariants.svelte";
  import ButtonIcons from "$lib/examples/button/ButtonIcons.svelte";
  import * as code from "./codes";
</script>

<main class="space-y-8">
  <header class="border-b border-secondaryControl pb-6">
    <h1 class="text-4xl font-bold text-primaryText">Button</h1>
    <p class="mt-2 text-secondaryText">
      Interacciones táctiles y estados visuales para acciones de usuario.
    </p>
  </header>

  <section class="space-y-12">
    <ComponentExample title="Variants & States" code={code.variantsCode}>
      {#snippet preview()}
        <ButtonVariants />
      {/snippet}
    </ComponentExample>

    <ComponentExample title="With Icons" code={code.iconsCode}>
      {#snippet preview()}
        <ButtonIcons />
      {/snippet}
    </ComponentExample>
  </section>

  <footer class="pt-8 text-sm italic text-secondaryText">Renderizado con Svelte 5 Runes</footer>
</main>
