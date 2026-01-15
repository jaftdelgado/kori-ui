<script lang="ts">
  import { SegmentedControl } from "@kori-ui/segmented-control";

  let theme = $state("light");
</script>

{#snippet sunIcon()}
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="5" /><path
      d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
    />
  </svg>
{/snippet}

{#snippet moonIcon()}
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
{/snippet}

{#snippet monitorIcon()}
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line
      x1="8"
      y1="21"
      x2="16"
      y2="21"
    /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
{/snippet}

<div class="w-full max-w-md">
  <SegmentedControl
    bind:value={theme}
    options={[
      { value: "light", label: "Light", icon: sunIcon },
      { value: "dark", label: "Dark", icon: moonIcon },
      { value: "system", label: "System", icon: monitorIcon }
    ]}
  />
</div>
