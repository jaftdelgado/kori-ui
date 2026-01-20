<script lang="ts">
  import { Alert } from "@kori-ui/svelte";
  import Icon from "@components/Icon.svelte";

  let isVisible = $state(true);
</script>

<div class="w-full max-w-sm">
  {#if isVisible}
    <Alert title="Heads up!" closable onclose={() => (isVisible = false)}>
      {#snippet icon()}
        <Icon name="monitor" />
      {/snippet}
      You can add components to your app using the cli.
    </Alert>
  {:else}
    <div class="flex justify-center p-4 border border-dashed border-secondaryControl rounded-xl">
      <button
        type="button"
        class="text-sm font-medium text-secondaryText hover:text-primaryText transition-colors"
        onclick={() => (isVisible = true)}
      >
        Show Alert Again
      </button>
    </div>
  {/if}
</div>
