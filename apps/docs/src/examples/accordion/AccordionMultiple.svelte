<script lang="ts">
  import { Accordion } from "@kori-ui/svelte";

  const items = [
    {
      key: "1",
      title: "Accordion Item 1",
      subtitle: "Press to expand"
    },
    {
      key: "2",
      title: "Accordion Item 2",
      subtitle: "Important information here"
    },
    {
      key: "3",
      title: "Accordion Item 3",
      subtitle: "Additional details"
    }
  ];
</script>

<div class="w-full max-w-md">
  <Accordion {items} selectionMode="multiple">
    {#snippet children(item)}
      <div>
        Content for {item.title}. En el modo de selección múltiple, puedes abrir varios paneles de
        forma simultánea sin que los anteriores se cierren.
      </div>
    {/snippet}
  </Accordion>
</div>
