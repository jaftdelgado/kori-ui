export const variantsCode = `<Button variant="primary" size="sm">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="ghost" size="lg">Ghost Style</Button>
<Button variant="primary" disabled>Disabled</Button>`;

export const iconsCode = `<script>
  import { Button } from "@kori-ui/button";
  import CalendarPlus from "$lib/resources/svg/CalendarPlus.svelte";
</script>

<Button variant="primary" startContent={CalendarPlus}>
  Schedule Meeting
</Button>

<Button variant="secondary" size="lg" endContent={CalendarPlus}>
  Add Event
</Button>`;
