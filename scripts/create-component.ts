import { write, file } from "bun";
import { mkdir, appendFile } from "node:fs/promises";
import { join } from "node:path";

interface PackageJson {
  name: string;
  version: string;
  dependencies?: Record<string, string>;
  [key: string]: any;
}

const inputName = process.argv[2];

if (!inputName) {
  process.exit(1);
}

// Name formatting
const nameKebab = inputName
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, "-")
  .toLowerCase();

const namePascal = nameKebab
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join("");

const rootDir = process.cwd();
// New path: inside the svelte package components directory
const sveltePkgDir = join(rootDir, "packages", "svelte");
const componentDir = join(sveltePkgDir, "src", "components", nameKebab);
const stylesDir = join(rootDir, "packages", "styles", "src", "components");
const docsDir = join(rootDir, "apps", "docs", "src");

const svelteContent = `<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "@kori-ui/utilities";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: import("svelte").Snippet;
  }

  let { class: className, children, ...rest }: Props = $props();
</script>

<div class={cn("kori-${nameKebab}", className)} {...rest}>
  {@render children?.()}
</div>
`;

// Updated index content to point to current directory (no /lib/)
const indexContent = `export { default as ${namePascal} } from "./${namePascal}.svelte";\n`;
const cssContent = `.${nameKebab} {\n  /* Styles for ${nameKebab} */\n}\n`;
const mdxContent = `# ${namePascal}\n\nDocumentation for ${namePascal} component.`;

try {
  // 1. Create component directory structure
  await mkdir(componentDir, { recursive: true });

  // 2. Write component files directly in the new path
  await write(join(componentDir, `${namePascal}.svelte`), svelteContent);
  await write(join(componentDir, "index.ts"), indexContent);

  // 3. Handle Styles
  await mkdir(stylesDir, { recursive: true });
  await write(join(stylesDir, `${nameKebab}.css`), cssContent);
  await appendFile(join(stylesDir, "index.css"), `@import "./${nameKebab}.css";\n`);

  // 4. Update Main Svelte Index (Barrel Export)
  const mainIndexPath = join(sveltePkgDir, "src", "index.ts");
  const exportStatement = `export * from "./components/${nameKebab}/index.js";\n`;

  // Read, sort and update the main index to keep it alphabetical
  const currentIndex = await file(mainIndexPath).text();
  const lines = currentIndex.split("\n").filter((l) => l.trim() !== "");

  if (!lines.includes(exportStatement.trim())) {
    lines.push(exportStatement.trim());
  }

  // Sort only the component exports, keeping utilities at the top if necessary
  const utilityLines = lines.filter((l) => l.includes("@kori-ui/utilities"));
  const componentLines = lines.filter((l) => l.includes("./components/")).sort();

  const updatedIndex = [...utilityLines, ...componentLines].join("\n") + "\n";
  await write(mainIndexPath, updatedIndex);

  // 5. Documentation and Examples
  await mkdir(join(docsDir, "examples", nameKebab), { recursive: true });
  await write(join(docsDir, "pages", "docs", "components", `${nameKebab}.mdx`), mdxContent);
} catch (error) {
  console.error("Error creating component:", error);
  process.exit(1);
}
