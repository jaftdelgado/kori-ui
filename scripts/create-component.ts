import { write } from "bun";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

// CLI argument validation
const inputName = process.argv[2];

if (!inputName) {
  console.error("Error: Component name argument is required.");
  process.exit(1);
}

// Naming convention normalization
const nameKebab = inputName
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, "-")
  .toLowerCase();

const namePascal = nameKebab
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join("");

// Directory path resolution
const rootDir = process.cwd();
const componentDir = join(rootDir, "packages", "components", nameKebab);
const libDir = join(componentDir, "src", "lib");

// File content templates
const packageJsonContent = `{
  "name": "@kori-ui/${nameKebab}",
  "version": "0.0.1",
  "type": "module",
  "main": "./src/index.ts",
  "module": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "svelte": "./src/index.ts",
      "default": "./src/index.ts"
    },
    "./${namePascal}.svelte": "./src/lib/${namePascal}.svelte"
  },
  "dependencies": {
    "@kori-ui/core": "workspace:*",
    "@kori-ui/utilities": "workspace:*"
  },
  "peerDependencies": {
    "svelte": "^5.0.0"
  }
}`;

const svelteContent = `<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "@kori-ui/utilities";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: import("svelte").Snippet;
  }

  let { class: className, children, ...rest }: Props = $props();
</script>

<div class={cn("", className)} {...rest}>
  {@render children?.()}
</div>
`;

const indexContent = `export { default as ${namePascal} } from "./lib/${namePascal}.svelte";
`;

console.log(`Scaffolding component: ${namePascal} (@kori-ui/${nameKebab})...`);

try {
  await mkdir(libDir, { recursive: true });

  await write(join(componentDir, "package.json"), packageJsonContent);
  await write(join(libDir, `${namePascal}.svelte`), svelteContent);
  await write(join(componentDir, "src", "index.ts"), indexContent);

  console.log(`Component successfully generated at: packages/components/${nameKebab}`);
} catch (error) {
  console.error("File system operation failed:", error);
}
