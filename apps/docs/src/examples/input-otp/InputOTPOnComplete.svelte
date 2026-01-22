<script lang="ts">
  import { InputOTP, Button } from "@kori-ui/svelte";

  let value = $state("");
  let isComplete = $state(false);

  $effect(() => {
    if (value.length < 6) {
      isComplete = false;
    }
  });
</script>

<div class="flex flex-col items-center gap-6 max-w-sm mx-auto">
  <InputOTP
    bind:value
    length={6}
    separators={[3]}
    label="Verification Code"
    description="Please enter the full code to continue."
    oncomplete={() => (isComplete = true)}
  />

  <Button variant="primary" class="w-full" disabled={!isComplete}>Verify Account</Button>
</div>
