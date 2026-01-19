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

const nameKebab = inputName
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, "-")
  .toLowerCase();

const namePascal = nameKebab
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join("");

const rootDir = process.cwd();
const componentsRoot = join(rootDir, "packages", "components");
const componentDir = join(componentsRoot, nameKebab);
const stylesDir = join(rootDir, "packages", "styles", "src", "components");
const mainPackageDir = join(rootDir, "packages", "kori-ui");
const docsDir = join(rootDir, "apps", "docs", "src");

const packageJsonContent = `{
  "name": "@kori-ui/${nameKebab}",
  "version": "0.0.2-alpha.1",
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "svelte": "./src/index.ts",
      "default": "./src/index.ts"
    }
  },
  "files": [
    "src"
  ],
  "publishConfig": {
    "access": "public"
  },
  "dependencies": {
    "@kori-ui/utilities": "^0.0.2-alpha.1"
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

<div class={cn("kori-${nameKebab}", className)} {...rest}>
  {@render children?.()}
</div>
`;

const indexContent = `export { default as ${namePascal} } from "./lib/${namePascal}.svelte";\n`;
const readmeContent = `# @kori-ui/${nameKebab}\n\nComponente ${namePascal} para Kori UI.`;
const cssContent = `.kori-${nameKebab} {\n  /* Estilos para ${nameKebab} */\n}\n`;
const mdxContent = `# ${namePascal}\n\nDocumentación para el componente ${namePascal}.`;

try {
  await mkdir(join(componentDir, "src", "lib"), { recursive: true });
  await write(join(componentDir, "package.json"), packageJsonContent);
  await write(join(componentDir, "README.md"), readmeContent);
  await write(join(componentDir, "src", "index.ts"), indexContent);
  await write(join(componentDir, "src", "lib", `${namePascal}.svelte`), svelteContent);

  await mkdir(stylesDir, { recursive: true });
  await write(join(stylesDir, `${nameKebab}.css`), cssContent);
  await appendFile(join(stylesDir, "index.css"), `@import "./${nameKebab}.css";\n`);

  const mainPkgPath = join(mainPackageDir, "package.json");
  const mainPkgFile = (await file(mainPkgPath).json()) as PackageJson;

  const currentDeps = mainPkgFile.dependencies || {};
  currentDeps[`@kori-ui/${nameKebab}`] = "^0.0.2-alpha.1";

  const sortedDeps = Object.keys(currentDeps)
    .sort()
    .reduce((acc: Record<string, string>, key) => {
      const val = currentDeps[key];
      if (val !== undefined) {
        acc[key] = val;
      }
      return acc;
    }, {});

  mainPkgFile.dependencies = sortedDeps;
  await write(mainPkgPath, JSON.stringify(mainPkgFile, null, 2));

  const mainIndexPath = join(mainPackageDir, "src", "index.ts");
  await appendFile(mainIndexPath, `export * from "@kori-ui/${nameKebab}";\n`);

  await mkdir(join(docsDir, "examples", nameKebab), { recursive: true });
  await write(join(docsDir, "pages", "docs", "components", `${nameKebab}.mdx`), mdxContent);
} catch (error) {
  process.exit(1);
}
