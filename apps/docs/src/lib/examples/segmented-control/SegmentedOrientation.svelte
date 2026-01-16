<script lang="ts">
  import { SegmentedControl } from "@kori-ui/segmented-control";

  const options = [
    { value: "profile", label: "Profile" },
    { value: "account", label: "Account" },
    { value: "appearance", label: "Appearance" },
    { value: "notifications", label: "Notifications" }
  ];

  let currentTab = $state("profile");
</script>

<div class="flex justify-center">
  <SegmentedControl
    {options}
    bind:value={currentTab}
    orientation="vertical"
    class="w-48"
  />
</div>