<script lang="ts">
  import { Checkbox } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-4 items-center justify-center w-full">
  <Checkbox label="Beta access" description="Slots are currently full." disabled />

  <Checkbox label="Privacy Policy" description="Agreed on 01/12/2026." checked disabled />
</div>
