<script lang="ts">
  import { InputOTP } from "@kori-ui/svelte";
  const alphanumericPattern = /^[a-zA-Z0-9]$/;
</script>

<div class="flex flex-col items-center gap-4">
  <InputOTP
    length={8}
    separators={[4]}
    pattern={alphanumericPattern}
    label="Software Activation Key"
    description="Enter the 8-character alphanumeric code found on your retail card."
  />
</div>
