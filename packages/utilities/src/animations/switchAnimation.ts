export function switchAnimation(node: HTMLElement, size: "sm" | "md" | "lg" = "md") {
  const handleDown = () => {
    const classSuffix = size === "md" ? "" : `-${size}`;
    node.classList.add("switch-thumb-pressed" + (size === "md" ? "" : classSuffix));
  };

  const handleUp = () => {
    const classSuffix = size === "md" ? "" : `-${size}`;
    node.classList.remove("switch-thumb-pressed" + (size === "md" ? "" : classSuffix));
  };

  node.addEventListener("pointerdown", handleDown);
  node.addEventListener("pointerup", handleUp);
  node.addEventListener("pointerleave", handleUp);

  return {
    update(newSize: "sm" | "md" | "lg") {
      size = newSize;
    },
    destroy() {
      node.removeEventListener("pointerdown", handleDown);
      node.removeEventListener("pointerup", handleUp);
      node.removeEventListener("pointerleave", handleUp);
    }
  };
}
