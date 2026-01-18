<script lang="ts">
  import { Button } from "@kori-ui/svelte";
  import Icon from "@components/Icon.svelte";
</script>

<div class="flex flex-wrap items-center gap-4">
  <Button variant="secondary">
    {#snippet startContent()}
      <Icon name="arrowLeft" />
    {/snippet}
    Go Back
  </Button>

  <Button>
    Save Changes
    {#snippet endContent()}
      <Icon name="check" />
    {/snippet}
  </Button>
</div>
