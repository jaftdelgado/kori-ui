<script lang="ts">
  import { Tabs } from "@kori-ui/tabs";

  let activeTab = $state("music");

  const options = [
    { value: "music", label: "Music" },
    { value: "podcasts", label: "Podcasts" },
    { value: "live", label: "Live" }
  ];
</script>

<div class="w-full max-w-md border border-gray-200 rounded-lg p-4 bg-white">
  <p class="text-xs text-secondaryText mb-4">Container Width (Full Width Tabs)</p>
  <Tabs fullWidth {options} bind:value={activeTab} />
</div>
