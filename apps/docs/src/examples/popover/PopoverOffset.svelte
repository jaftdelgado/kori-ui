<script lang="ts">
  import { Popover, Button } from "@kori-ui/svelte";
</script>

<div class="flex items-center justify-center w-full py-10">
  <Popover placement="top" offset={20}>
    {#snippet trigger()}
      <Button variant="primary">Custom Offset (20px)</Button>
    {/snippet}

    <div class="px-1 py-2 text-center">
      <span class="text-xs font-medium text-primaryText"> [32px] offset </span>
      <p class="text-xs text-secondaryText">This popover has a larger gap from its trigger.</p>
    </div>
  </Popover>
</div>
