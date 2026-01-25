<script lang="ts">
  import { Button, Input, Separator } from "@kori-ui/svelte";
  import Icon from "@components/ui/Icon.svelte";
</script>

{#snippet ArrowLeftIcon()}
  <Icon name="arrowLeft" />
{/snippet}

<div class="flex flex-col gap-6 w-full max-w-xs mx-auto">
  <div class="flex flex-row gap-4">
    <Input placeholder="Enter your username..." class="flex-1"></Input>
    <Button iconOnly class="shrink-0">
      {#snippet children()}
        {@render ArrowLeftIcon()}
      {/snippet}
    </Button>
  </div>

  <Separator label="OR" />

  <Button variant="secondary">
    {#snippet startContent()}
      <Icon name="github" />
    {/snippet}
    Continue with GitHub
  </Button>
</div>
