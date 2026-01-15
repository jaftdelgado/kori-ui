<script lang="ts">
  import { Slider } from "@kori-ui/slider";
</script>

<div class="flex flex-col gap-8 max-w-sm w-full">
  <Slider id="slider-sm" size="sm" value={25} label="Small" />
  <Slider id="slider-md" size="md" value={50} label="Medium (Default)" />
  <Slider id="slider-lg" size="lg" value={75} label="Large" />
</div>
