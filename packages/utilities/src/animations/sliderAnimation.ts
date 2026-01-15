export function sliderAnimation(node: HTMLElement, isDragging: boolean) {
  const update = (active: boolean) => {
    if (active) node.classList.remove("ease-slider");
    else node.classList.add("ease-slider");
  };

  update(isDragging);

  return {
    update
  };
}
