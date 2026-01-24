<script lang="ts">
  import { Button } from "@kori-ui/svelte";
  import Icon from "@components/ui/Icon.svelte";
</script>

{#snippet ShareIcon()}
  <Icon name="share" />
{/snippet}

{#snippet TrashIcon()}
  <Icon name="trash" />
{/snippet}

{#snippet SearchIcon()}
  <Icon name="search" />
{/snippet}

<div class="flex flex-wrap gap-4 p-8">
  <Button iconOnly aria-label="Ajustes">
    {#snippet children()}
      {@render ShareIcon()}
    {/snippet}
  </Button>

  <Button variant="secondary" iconOnly aria-label="Ajustes">
    {#snippet children()}
      {@render SearchIcon()}
    {/snippet}
  </Button>

  <Button variant="danger" iconOnly aria-label="Eliminar">
    {#snippet children()}
      {@render TrashIcon()}
    {/snippet}
  </Button>
</div>
