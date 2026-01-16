<script lang="ts">
  import { Tabs } from "@kori-ui/tabs";
  import Icon from "$lib/components/ui/Icon.svelte";
  let activeTab = $state("profile");
</script>

{#snippet userIcon()}
  <Icon name="users" />
{/snippet}

{#snippet shieldIcon()}
  <Icon name="shield" />
{/snippet}

<div class="flex flex-col gap-4">
  <Tabs
    bind:value={activeTab}
    options={[
      { value: "profile", label: "Profile", icon: userIcon },
      { value: "security", label: "Security", icon: shieldIcon }
    ]}
  />
</div>
