<script lang="ts">
  import { Button } from "@chroma-ui/button";
  import CalendarPlus from "$lib/resources/svg/CalendarPlus.svelte";
  import ComponentExample from "$lib/components/ComponentExample.svelte";
</script>

<main class="p-12 space-y-8">
  <header class="border-b border-secondaryControl pb-6">
    <h1 class="text-4xl font-bold italic text-primaryText">Chroma UI</h1>
    <p class="mt-2 text-secondaryText">Sistema de diseño basado en Svelte 5 y Tailwind v4</p>
  </header>

  <section class="space-y-4">
    <h2 class="text-2xl font-semibold text-primaryText">Button</h2>

    <ComponentExample
      title="Variants & States"
      code={/* html */ `
<Button variant="primary" size="sm">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="ghost" size="lg">Ghost Style</Button>
<Button variant="primary" disabled>Disabled</Button>
      `}
    >
      {#snippet preview()}
        <div class="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
          <Button variant="ghost" size="lg">Ghost Style</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      {/snippet}
    </ComponentExample>

    <ComponentExample
      title="With Icons"
      code={/* html */ `
<Button variant="primary" startContent={CalendarPlus}>
  Schedule Meeting
</Button>

<Button variant="secondary" size="lg" endContent={CalendarPlus}>
  Add Event
</Button>
      `}
    >
      {#snippet preview()}
        <div class="flex flex-wrap items-center gap-4">
          <Button variant="primary" startContent={CalendarPlus}>Schedule Meeting</Button>
          <Button variant="secondary" size="lg" endContent={CalendarPlus}>Add Event</Button>
        </div>
      {/snippet}
    </ComponentExample>
  </section>

  <footer class="pt-8 text-sm italic text-secondaryText">Renderizado con Svelte 5 Runes</footer>
</main>
