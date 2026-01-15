<script lang="ts">
  const sections = [
    { id: "usage", label: "Usage" },
    { id: "variants", label: "Variants" },
    { id: "props", label: "Props" },
    { id: "anatomy", label: "Anatomy" }
  ];
</script>

<aside class="w-64 h-full hidden xl:flex flex-col overflow-hidden">
  <div class="p-6 overflow-y-auto flex-1">
    <div class="px-3">
      <h2 class="text-xs font-bold uppercase tracking-widest text-secondaryText/60">
        On this page
      </h2>
      <nav class="mt-4 flex flex-col gap-3 border-l border-secondaryControl/40">
        {#each sections as section}
          <a
            href="#{section.id}"
            class="text-sm pl-4 -ml-px border-l border-transparent hover:border-primaryControl hover:text-primaryText transition-all text-secondaryText"
          >
            {section.label}
          </a>
        {/each}
      </nav>
    </div>
  </div>
</aside>
