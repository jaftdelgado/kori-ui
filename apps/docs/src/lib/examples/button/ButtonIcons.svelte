<script lang="ts">
  import { Button } from "@kori-ui/button";
  import CalendarPlus from "$lib/resources/svg/CalendarPlus.svelte";
</script>

<div class="flex flex-wrap items-center gap-4">
  <Button variant="primary" startContent={CalendarPlus}>Schedule Meeting</Button>
  <Button variant="secondary" size="lg" endContent={CalendarPlus}>Add Event</Button>
</div>
