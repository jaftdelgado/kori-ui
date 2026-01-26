import { type Snippet } from "svelte";

export interface AccordionItemProps {
  key?: string;
  title: string;
  subtitle?: string;
  content?: string;
  disabled?: boolean;
  startContent?: Snippet;
  indicator?: Snippet;
}

export interface AccordionConfig {
  items: () => AccordionItemProps[];
  selectionMode: () => "single" | "multiple";
  defaultExpandedKeys: () => string[];
}

interface NormalizedAccordionItem extends AccordionItemProps {
  key: string;
}

export class AccordionController {
  #selectedKeys = $state<Set<string>>(new Set());
  #config: AccordionConfig;

  constructor(config: AccordionConfig) {
    this.#config = config;
    this.#selectedKeys = new Set(config.defaultExpandedKeys());
  }

  get items(): NormalizedAccordionItem[] {
    return this.#config.items().map((item, index) => ({
      ...item,
      key: item.key ?? `generated-key-${index}`
    }));
  }

  isOpen(key: string): boolean {
    return this.#selectedKeys.has(key);
  }

  handlePress(key: string, disabled?: boolean): void {
    if (disabled) return;

    const newKeys = new Set(this.#selectedKeys);
    const mode = this.#config.selectionMode();

    if (mode === "single") {
      if (newKeys.has(key)) {
        newKeys.clear();
      } else {
        newKeys.clear();
        newKeys.add(key);
      }
    } else {
      if (newKeys.has(key)) {
        newKeys.delete(key);
      } else {
        newKeys.add(key);
      }
    }

    this.#selectedKeys = newKeys;
  }
}
