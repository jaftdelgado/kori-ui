<script lang="ts">
  import { InputOTP } from "@kori-ui/svelte";

  let otpValue = $state("");
  let length = 6;

  let description = $derived(
    otpValue.length === 0
      ? "Please enter the verification code"
      : `Value: ${otpValue} (${otpValue.length}/${length})`
  );

  let isComplete = $derived(otpValue.length === length);
</script>

<div class="max-w-xs">
  <InputOTP bind:value={otpValue} {length} label="Enter OTP" {description} />
</div>
