<script lang="ts">
  import { Checkbox } from "@chroma-ui/checkbox";
  import ComponentExample from "$lib/components/ComponentExample.svelte";

  let checked = $state(true);
</script>

<main class="p-12 space-y-8">
  <header class="border-b border-secondaryControl pb-6">
    <h1 class="text-4xl font-bold italic text-primaryText">Checkbox</h1>
    <p class="mt-2 text-secondaryText">
      Un control que permite al usuario seleccionar una o más opciones de un conjunto.
    </p>
  </header>

  <section class="space-y-4">
    <ComponentExample
      title="Basic Usage"
      code={/* html */ `
<Checkbox label="Accept terms and conditions" />
<Checkbox label="Subscribe to newsletter" checked />
      `}
    >
      {#snippet preview()}
        <div class="flex flex-col gap-4">
          <Checkbox label="Accept terms and conditions" />
          <Checkbox label="Subscribe to newsletter" checked />
        </div>
      {/snippet}
    </ComponentExample>

    <ComponentExample
      title="With Description"
      code={/* html */ `
<Checkbox 
  label="Notifications" 
  description="Receive email updates about your account activity." 
/>
      `}
    >
      {#snippet preview()}
        <Checkbox
          label="Notifications"
          description="Receive email updates about your account activity."
        />
      {/snippet}
    </ComponentExample>

    <ComponentExample
      title="States"
      code={/* html */ `
<Checkbox label="Disabled unchecked" disabled />
<Checkbox label="Disabled checked" checked disabled />
      `}
    >
      {#snippet preview()}
        <div class="flex flex-col gap-4">
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" checked disabled />
        </div>
      {/snippet}
    </ComponentExample>

    <ComponentExample
      title="Controlled Component"
      code={/* html */ `
<script>
  let checked = $state(true);
</script>

<Checkbox 
  label="Simple binding" 
  bind:checked={checked} 
/>

<p>The checkbox is: {checked ? 'checked' : 'unchecked'}</p>
      `}
    >
      {#snippet preview()}
        <div class="flex flex-col gap-2">
          <Checkbox label="Simple binding" bind:checked />
          <p class="text-sm text-secondaryText">
            Estado actual: <span class="font-mono font-bold text-primaryControl"
              >{checked ? "Checked" : "Unchecked"}</span
            >
          </p>
        </div>
      {/snippet}
    </ComponentExample>
  </section>

  <footer class="pt-8 text-sm italic text-secondaryText">Renderizado con Svelte 5 Runes</footer>
</main>
