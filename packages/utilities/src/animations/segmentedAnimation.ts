export function segmentedIndicator(node: HTMLElement, activeTab: HTMLElement | undefined) {
  let retryCount = 0;
  let rafId: number;
  let isInitialized = false;

  node.style.opacity = "0";

  const resizeObserver = new ResizeObserver(() => {
    if (activeTab) {
      retryCount = 0;
      updatePosition(activeTab);
    }
  });

  function updatePosition(target: HTMLElement) {
    if (!target) return;

    const parent = target.parentElement as HTMLElement;
    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const width = targetRect.width;
    const height = targetRect.height;
    const left = targetRect.left - parentRect.left;
    const top = targetRect.top - parentRect.top;

    if ((width === 0 || height === 0) && retryCount < 10) {
      retryCount++;
      rafId = requestAnimationFrame(() => updatePosition(target));
      return;
    }

    if (!isInitialized) {
      node.style.transition = "none";
      node.style.transform = `translate3d(${left}px, ${top}px, 0)`;
      node.style.width = `${width}px`;
      node.style.height = `${height}px`;

      node.style.opacity = "1";

      requestAnimationFrame(() => {
        node.style.transition = "";
        isInitialized = true;
      });
    } else {
      node.style.transform = `translate3d(${left}px, ${top}px, 0)`;
      node.style.width = `${width}px`;
      node.style.height = `${height}px`;
    }
  }

  function update(newTab: HTMLElement | undefined) {
    activeTab = newTab;
    retryCount = 0;

    if (newTab) {
      if (rafId) cancelAnimationFrame(rafId);

      requestAnimationFrame(() => {
        updatePosition(newTab);
      });

      if (newTab.parentElement) {
        resizeObserver.disconnect();
        resizeObserver.observe(newTab.parentElement);
      }
    }
  }

  if (activeTab) {
    update(activeTab);
  }

  return {
    update(newTab: HTMLElement | undefined) {
      update(newTab);
    },
    destroy() {
      resizeObserver.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    }
  };
}
