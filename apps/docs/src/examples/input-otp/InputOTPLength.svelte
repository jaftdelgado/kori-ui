<script lang="ts">
  import { InputOTP } from "@kori-ui/svelte";
</script>

<div class="flex flex-col items-center gap-6">
  <InputOTP
    label="Security PIN"
    length={4}
    description="Set a 4-digit code to secure your local access."
  />

  <InputOTP
    label="Verification Code"
    length={6}
    description="Enter the 6-digit verification code sent via SMS."
  />
</div>
