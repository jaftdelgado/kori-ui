<script lang="ts">
  import { SegmentedControl } from "@kori-ui/svelte";
  interface Props {
    options: any[];
    value: string;
    size?: "md" | "lg";
  }

  let { options, value = $bindable(), size = "md" }: Props = $props();
</script>

<SegmentedControl bind:value {options} {size} />
