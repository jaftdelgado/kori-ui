<script lang="ts">
  import { Slider } from "@kori-ui/svelte";

  let val = $state(40);
</script>

<div class="flex items-center justify-center w-full max-w-md">
  <Slider
    label="Disabled Setting"
    description="This control is currently unavailable"
    disabled
    bind:value={val}
  />
</div>
