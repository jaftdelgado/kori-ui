export type NumberInputOptions = {
  getValue: () => number | null;
  setValue: (value: number) => void;
  getProps: () => {
    min: number;
    max: number;
    step: number;
    disabled: boolean;
  };
};

export class NumberInputController {
  #getValue: () => number | null;
  #setValue: (value: number) => void;
  #getProps: () => { min: number; max: number; step: number; disabled: boolean };
  #intervalId: ReturnType<typeof setInterval> | undefined;
  #timeoutId: ReturnType<typeof setTimeout> | undefined;

  constructor(options: NumberInputOptions) {
    this.#getValue = options.getValue;
    this.#setValue = options.setValue;
    this.#getProps = options.getProps;
  }

  increment = () => {
    const { max, step } = this.#getProps();
    const currentValue = this.#getValue() ?? 0;
    const newValue = currentValue + step;

    if (newValue <= max) {
      this.#setValue(newValue);
    }
  };

  decrement = () => {
    const { min, step } = this.#getProps();
    const currentValue = this.#getValue() ?? 0;
    const newValue = currentValue - step;

    if (newValue >= min) {
      this.#setValue(newValue);
    }
  };

  start = (action: () => void) => {
    const { disabled } = this.#getProps();
    if (disabled) return;

    action();

    this.#timeoutId = setTimeout(() => {
      this.#intervalId = setInterval(() => {
        action();
      }, 60);
    }, 500);
  };

  stop = () => {
    clearTimeout(this.#timeoutId);
    clearInterval(this.#intervalId);
  };
}
