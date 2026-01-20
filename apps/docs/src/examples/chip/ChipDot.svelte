<script lang="ts">
  import { Chip } from "@kori-ui/svelte";
</script>

<div class="flex items-center justify-start md:justify-center min-h-25 w-full">
  <div class="flex flex-wrap gap-2 md:gap-4">
    <Chip label="Svelte" dotColor="#ff3e00" />
    <Chip label="JavaScript" dotColor="var(--color-yellow-500)" />
    <Chip label="TypeScript" dotColor="var(--color-blue-500)" />
    <Chip label="CSS" dotColor="#663399" />
  </div>
</div>
