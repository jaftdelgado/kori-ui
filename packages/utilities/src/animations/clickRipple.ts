export function clickRipple(node: HTMLElement) {
  const handleMouseDown = (event: MouseEvent) => {
    if ((node as HTMLButtonElement).disabled) return;

    const rect = node.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");

    const style = window.getComputedStyle(node);
    const currentOpacity = style.getPropertyValue("--btn-hover-opacity");

    Object.assign(ripple.style, {
      position: "absolute",
      width: `${size}px`,
      height: `${size}px`,
      top: `${y}px`,
      left: `${x}px`,
      background: "var(--color-hover)",
      borderRadius: "50%",
      pointerEvents: "none",
      transform: "scale(0)",
      opacity: `calc(${currentOpacity} * 3)`,
      animation: "click-ripple-effect 1200ms ease-out"
    });

    node.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  node.addEventListener("mousedown", handleMouseDown);

  return {
    destroy() {
      node.removeEventListener("mousedown", handleMouseDown);
    }
  };
}
