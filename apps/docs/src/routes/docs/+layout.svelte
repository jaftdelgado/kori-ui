<script lang="ts">
  import Sidebar from "$lib/components/Sidebar.svelte";
  import ContentsTable from "$lib/components/ContentsTable.svelte";
  import TopBar from "$lib/components/TopBar.svelte";

  let { children } = $props();
  let isSidebarOpen = $state(false);

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }
</script>

<div class="flex h-screen w-full flex-col overflow-hidden bg-background">
  <TopBar onToggleSidebar={toggleSidebar} />

  <div class="flex flex-1 overflow-hidden">
    <Sidebar isOpen={isSidebarOpen} onClose={() => (isSidebarOpen = false)} />

    <main class="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar w-full">
      <div class="flex items-start justify-center">
        <div class="flex-1 w-full min-w-0 max-w-4xl p-4 md:p-12">
          {@render children()}
        </div>

        <div class="hidden xl:block sticky top-0 h-screen">
          <ContentsTable />
        </div>
      </div>
    </main>
  </div>
</div>
