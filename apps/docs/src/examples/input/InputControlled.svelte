<script lang="ts">
  import { Input } from "@kori-ui/svelte";

  let username = $state("");
</script>

<div class="flex flex-col gap-6 w-full max-w-xs mx-auto">
  <Input
    label="GitHub Username"
    placeholder="Enter your username..."
    bind:value={username}
    description={`github.com/${username}`}
  />
</div>
