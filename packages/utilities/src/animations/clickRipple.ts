export function clickRipple(node: HTMLElement, options = { color: "rgba(255, 255, 255, 0.3)" }) {
  const handleMouseDown = (event: MouseEvent) => {
    const rect = node.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");

    Object.assign(ripple.style, {
      position: "absolute",
      width: `${size}px`,
      height: `${size}px`,
      top: `${y}px`,
      left: `${x}px`,
      background: options.color,
      borderRadius: "50%",
      pointerEvents: "none",
      transform: "scale(0)",
      animation: "click-ripple-effect 600ms linear"
    });

    node.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  node.style.position = "relative";
  node.style.overflow = "hidden";
  node.addEventListener("mousedown", handleMouseDown);

  return {
    destroy() {
      node.removeEventListener("mousedown", handleMouseDown);
    }
  };
}
