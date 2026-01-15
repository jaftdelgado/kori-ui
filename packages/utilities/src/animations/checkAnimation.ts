export function checkAnimation(node: HTMLElement, checked: boolean) {
  const update = (isSelected: boolean) => {
    if (isSelected) {
      node.classList.remove("animate-checkbox-pop");
      void node.offsetWidth;
      node.classList.add("animate-checkbox-pop");
    }
  };

  return {
    update
  };
}
