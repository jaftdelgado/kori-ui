export const basicCode = `<script>
  import { Tabs } from "@kori-ui/tabs";

  let activeTab = $state("account");

  const options = [
    { value: "account", label: "Account" },
    { value: "password", label: "Password" },
    { value: "settings", label: "Settings" }
  ];
</script>

<Tabs {options} bind:value={activeTab} />`;

export const iconsCode = `<script>
  import { Tabs } from "@kori-ui/tabs";
  import { User, Lock, Settings } from "lucide-svelte"; 

  let activeTab = $state("account");

  const options = [
    { value: "account", label: "Account", icon: User },
    { value: "password", label: "Password", icon: Lock },
    { value: "settings", label: "Settings", icon: Settings }
  ];
</script>

<Tabs {options} bind:value={activeTab} />`;

export const sizesCode = `<Tabs size="md" {options} bind:value={val1} />
<Tabs size="lg" {options} bind:value={val2} />`;

export const fullWidthCode = `<div class="w-full">
  <Tabs fullWidth {options} bind:value={active} />
</div>`;
