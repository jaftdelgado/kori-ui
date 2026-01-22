<script lang="ts">
  import { InputOTP } from "@kori-ui/svelte";
</script>

<div class="">
  <InputOTP
    length={9}
    separators={[3, 6]}
    label="Product License Key"
    description="Enter the code provided with your purchase to activate your license."
  />
</div>
