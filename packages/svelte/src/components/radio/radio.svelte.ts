import { getContext, setContext } from "svelte";
import type { HTMLInputAttributes, HTMLAttributes } from "svelte/elements";

export interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "onchange"> {
  value?: any;
  name?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  orientation?: "vertical" | "horizontal";
  onchange?: (value: any) => void;
}

export interface RadioProps extends Omit<HTMLInputAttributes, "size" | "value"> {
  value: any;
  label?: string;
  description?: string;
  disabled?: boolean;
}

const RADIO_KEY = Symbol("RadioGroup");

export class RadioGroupState {
  #props: () => RadioGroupProps;
  #setValueFn: (v: any) => void;

  constructor(propsGetter: () => RadioGroupProps, setValueFn: (v: any) => void) {
    this.#props = propsGetter;
    this.#setValueFn = setValueFn;
  }

  get value() {
    return this.#props().value;
  }

  get name() {
    return this.#props().name;
  }

  get size() {
    return this.#props().size;
  }

  get disabled() {
    return this.#props().disabled;
  }

  setValue(v: any) {
    if (this.disabled) return;
    this.#setValueFn(v);
    this.#props().onchange?.(v);
  }
}

export class RadioController {
  #props: () => RadioProps;
  #group: RadioGroupState;

  constructor(propsGetter: () => RadioProps) {
    this.#props = propsGetter;
    this.#group = getContext<RadioGroupState>(RADIO_KEY);
  }

  get group() {
    return this.#group;
  }

  get isChecked() {
    return this.#group.value === this.#props().value;
  }

  get isDisabled() {
    return this.#group.disabled || this.#props().disabled;
  }

  get currentSize() {
    return this.#group.size;
  }

  handleChange = () => {
    if (!this.isDisabled) {
      this.#group.setValue(this.#props().value);
    }
  };
}

export function initRadioGroup(props: () => RadioGroupProps, setValue: (v: any) => void) {
  const state = new RadioGroupState(props, setValue);
  setContext(RADIO_KEY, state);
  return state;
}
