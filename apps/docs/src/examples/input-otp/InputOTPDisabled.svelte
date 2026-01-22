<script lang="ts">
  import { InputOTP } from "@kori-ui/svelte";
  import { Button } from "@kori-ui/svelte";
</script>

<div class="max-w-xs">
  <InputOTP
    disabled={true}
    label="Security Verification"
    description="Too many failed attempts. Please retry in 60 seconds."
    length={6}
    separators={[3]}
  />
</div>
