<script lang="ts">
	import "../index.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" />
</svelte:head>

{@render children()}
