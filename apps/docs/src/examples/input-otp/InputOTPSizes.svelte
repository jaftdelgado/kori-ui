<script lang="ts">
  import { InputOTP } from "@kori-ui/svelte";
</script>

<div class="flex flex-col items-center max-w-xs gap-6">
  <InputOTP label="Small size" size="sm" length={4} />

  <InputOTP label="Medium size (default)" size="md" length={4} />

  <InputOTP label="Large size" size="lg" length={4} />
</div>
