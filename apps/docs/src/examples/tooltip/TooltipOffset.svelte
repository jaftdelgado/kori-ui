<script lang="ts">
  import { Tooltip, Button } from "@kori-ui/svelte";
</script>

<div class="flex flex-wrap gap-8 items-center justify-center py-12">
  <Tooltip content="Offset de 4px" offset={4}>
    <Button variant="secondary">Pegado</Button>
  </Tooltip>

  <Tooltip content="Offset de 24px" offset={24}>
    <Button variant="secondary">Alejado</Button>
  </Tooltip>
</div>
