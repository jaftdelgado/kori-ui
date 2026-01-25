<script lang="ts">
  import { Separator } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-4 w-full max-w-xs mx-auto">
  <div class="space-y-1">
    <h4 class="text-sm font-medium leading-none text-primaryText">Kori UI</h4>
    <p class="text-sm text-secondaryText">An open-source UI component library.</p>
  </div>

  <Separator />

  <div class="flex h-5 items-center space-x-4 text-sm text-primaryText">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>
