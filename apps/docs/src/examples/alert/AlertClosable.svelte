<script lang="ts">
  import { Alert } from "@kori-ui/svelte";

  let show = $state(true);
</script>

<div class="w-full max-w-sm">
  <Alert variant="info" title="Dismissible Alert" closable={true} onclose={() => (show = false)}>
    Click the close button on the right to dismiss this message.
  </Alert>
</div>
