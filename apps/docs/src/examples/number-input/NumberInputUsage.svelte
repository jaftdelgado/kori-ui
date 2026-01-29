<script lang="ts">
  import { NumberInput } from "@kori-ui/svelte";

  let quantity = $state(1);
</script>

<div class="flex flex-col items-center justify-center w-full max-w-75">
  <NumberInput bind:value={quantity} placeholder="Enter quantity..." />
</div>
