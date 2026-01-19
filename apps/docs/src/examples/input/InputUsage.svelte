<script lang="ts">
  import { Input } from "@kori-ui/svelte";

  let value = $state("");
</script>

<div class="flex flex-col items-center justify-center w-full max-w-sm gap-4">
  <Input placeholder="Enter your username..." bind:value />
  <p class="text-xs text-zinc-500 w-full px-1">
    Value: <span class="text-zinc-300 font-mono">{value || "empty"}</span>
  </p>
</div>
