// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  integrations: [svelte(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["@kori-ui/svelte", "@kori-ui/utilities", "@kori-ui/styles"]
    },
    server: {
      fs: {
        allow: [path.resolve(__dirname, "../../")]
      }
    },
    resolve: {
      alias: {
        "@examples": path.resolve(__dirname, "./src/examples"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@resources": path.resolve(__dirname, "./src/resources")
      }
    }
  }
});
