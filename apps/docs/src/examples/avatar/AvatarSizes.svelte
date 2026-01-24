<script lang="ts">
  import { Avatar } from "@kori-ui/svelte";
</script>

<div class="flex items-center justify-center w-full gap-6 py-10">
  <div class="flex flex-col items-center gap-2">
    <Avatar size="sm" fallback="SM" />
    <span class="text-[10px] text-secondaryText font-bold">SM</span>
  </div>

  <div class="flex flex-col items-center gap-2">
    <Avatar size="md" fallback="MD" />
    <span class="text-[10px] text-secondaryText font-bold">MD</span>
  </div>

  <div class="flex flex-col items-center gap-2">
    <Avatar size="lg" fallback="LG" />
    <span class="text-[10px] text-secondaryText font-bold">LG</span>
  </div>
</div>
