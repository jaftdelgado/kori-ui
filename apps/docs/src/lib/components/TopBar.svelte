<script lang="ts">
  let { onToggleSidebar } = $props();
</script>

<header
  class="flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-6"
>
  <div class="flex items-center gap-4">
    <button
      class="flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
      onclick={onToggleSidebar}
      aria-label="Toggle Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" x2="21" y1="6" y2="6" />
        <line x1="3" x2="21" y1="12" y2="12" />
        <line x1="3" x2="21" y1="18" y2="18" />
      </svg>
    </button>

    <div class="flex items-center gap-2">
      <div class="h-8 w-8 rounded-lg bg-gray-900"></div>
      <span class="text-lg font-semibold text-gray-900">Brand</span>
    </div>
  </div>

  <div class="flex items-center gap-4">
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
      <a href="/" class="hover:text-gray-900">Dashboard</a>
      <a href="/docs" class="hover:text-gray-900">Docs</a>
      <a href="/settings" class="hover:text-gray-900">Settings</a>
    </nav>

    <div class="hidden md:block h-6 w-px bg-gray-200"></div>

    <button
      class="flex items-center justify-center rounded-full h-8 w-8 bg-gray-100 hover:bg-gray-200 text-gray-600"
    >
      <span class="sr-only">Profile</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </button>
  </div>
</header>
