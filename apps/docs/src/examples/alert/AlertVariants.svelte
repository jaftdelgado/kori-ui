<script lang="ts">
  import { Alert } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-6 w-full max-w-sm">
  <Alert variant="default" title="Default Alert">
    This is a standard alert used for general information that doesn't require specific urgency.
  </Alert>

  <Alert variant="info" title="Information">
    An update is available for your application. Please refresh to see the latest changes.
  </Alert>

  <Alert variant="success" title="Success!">
    Your profile has been updated successfully. All changes are now live.
  </Alert>

  <Alert variant="warning" title="Warning">
    Your storage is almost full. Consider upgrading your plan to avoid service interruption.
  </Alert>

  <Alert variant="destructive" title="Error">
    There was a problem processing your request. Please try again or contact support.
  </Alert>
</div>
