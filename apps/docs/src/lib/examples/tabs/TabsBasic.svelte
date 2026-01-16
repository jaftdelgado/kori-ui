<script lang="ts">
  import { Tabs } from "@kori-ui/tabs";

  let activeTab = $state("overview");

  const options = [
    { value: "overview", label: "Overview" },
    { value: "integrations", label: "Integrations" },
    { value: "activity", label: "Activity" },
    { value: "domains", label: "Domains" }
  ];
</script>

<div class="flex flex-col gap-4">
  <Tabs {options} bind:value={activeTab} />

  <div class="p-4 bg-gray-50 border border-secondaryControl rounded-xl text-sm text-secondaryText">
    Content for: <span class="font-bold text-primaryText">{activeTab}</span>
  </div>
</div>
