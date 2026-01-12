import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      "@chroma-ui/core": "../../packages/core/src/index.ts",
      "@chroma-ui/utilities": "../../packages/utilities/src/index.ts",
      "@chroma-ui/*": "../../packages/components/*",
    },
  },
};

export default config;
