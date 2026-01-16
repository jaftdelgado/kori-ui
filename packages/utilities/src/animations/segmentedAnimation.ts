export function segmentedIndicator(node: HTMLElement, activeTab: HTMLElement | undefined) {
  const resizeObserver = new ResizeObserver(() => {
    if (activeTab) updatePosition(activeTab);
  });

  function updatePosition(target: HTMLElement) {
    const parent = target.offsetParent as HTMLElement;
    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const left = targetRect.left - parentRect.left;
    const width = targetRect.width;

    node.style.transform = `translateX(${left}px)`;
    node.style.width = `${width}px`;
  }

  function update(newTab: HTMLElement | undefined) {
    activeTab = newTab;
    if (newTab) {
      updatePosition(newTab);
      if (newTab.parentElement) {
        resizeObserver.disconnect();
        resizeObserver.observe(newTab.parentElement);
      }
    }
  }

  if (activeTab) update(activeTab);

  return {
    update(newTab: HTMLElement | undefined) {
      update(newTab);
    },
    destroy() {
      resizeObserver.disconnect();
    }
  };
}
