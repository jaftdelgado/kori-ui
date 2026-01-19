<script lang="ts">
  import { Input } from "@kori-ui/svelte";

  let email = $state("");
  let password = $state("");
</script>

<div class="flex flex-col gap-4 w-full max-w-xs mx-auto">
  <Input
    label="Email Address"
    description="We'll never share your email with anyone else."
    placeholder="name@company.com"
    type="email"
    bind:value={email}
  />

  <Input label="Password" placeholder="Enter your password" type="password" bind:value={password} />
</div>
