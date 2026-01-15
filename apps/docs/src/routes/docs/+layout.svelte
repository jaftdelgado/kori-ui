<script lang="ts">
  import Sidebar from "$lib/components/Sidebar.svelte";
  import ContentsTable from "$lib/components/ContentsTable.svelte";
  let { children } = $props();
</script>

<div class="flex h-screen w-full overflow-hidden bg-white">
  <Sidebar />

  <main class="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
    <div class="flex items-start justify-center">
      <div class="flex-1 max-w-4xl p-12">
        {@render children()}
      </div>

      <div class="sticky top-0 h-screen">
        <ContentsTable />
      </div>
    </div>
  </main>
</div>
