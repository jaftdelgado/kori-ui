export function segmentedIndicator(node: HTMLElement, activeTab: HTMLElement | undefined) {
  const resizeObserver = new ResizeObserver(() => {
    if (activeTab) updatePosition(activeTab);
  });

  function updatePosition(target: HTMLElement) {
    // Buscamos el contenedor padre (el que tiene relative)
    const parent = target.offsetParent as HTMLElement;
    if (!parent) return;

    // Usamos getBoundingClientRect para precisión absoluta
    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    // Calculamos la posición X relativa al contenedor
    // Esto incluye automáticamente el padding del padre
    const left = targetRect.left - parentRect.left;
    const width = targetRect.width;

    node.style.transform = `translateX(${left}px)`;
    node.style.width = `${width}px`;
  }

  function update(newTab: HTMLElement | undefined) {
    activeTab = newTab;
    if (newTab) {
      updatePosition(newTab);
      // Observamos el padre para ajustar si cambia el tamaño de la ventana
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
