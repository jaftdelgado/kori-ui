export class OTPController {
  inputs = $state<HTMLInputElement[]>([]);
  #length: () => number;
  #pattern: () => RegExp;
  #oncomplete: () => ((value: string) => void) | undefined;
  #readonly: () => boolean;

  private _isProgrammaticFocus = false;

  constructor(
    lengthAccessor: () => number,
    patternAccessor: () => RegExp,
    oncompleteAccessor: () => ((value: string) => void) | undefined,
    readonlyAccessor: () => boolean
  ) {
    this.#length = lengthAccessor;
    this.#pattern = patternAccessor;
    this.#oncomplete = oncompleteAccessor;
    this.#readonly = readonlyAccessor;
  }

  get length() {
    return this.#length();
  }

  get pattern() {
    return this.#pattern();
  }

  get readonly() {
    return this.#readonly();
  }

  private checkComplete(value: string) {
    const callback = this.#oncomplete();
    if (value.length === this.length && callback) {
      callback(value);
    }
  }

  focus(index: number) {
    if (index >= 0 && index < this.length) {
      const el = this.inputs[index];
      if (el) {
        this._isProgrammaticFocus = true;
        el.focus();
        el.select();
        this._isProgrammaticFocus = false;
      }
    }
  }

  handleFocus(index: number, value: string) {
    if (this._isProgrammaticFocus) return;
    const currentVal = value || "";
    if (index > currentVal.length) {
      this.focus(currentVal.length);
    } else {
      const el = this.inputs[index];
      if (el) el.select();
    }
  }

  handleInput(e: Event, index: number, value: string, setValue: (v: string) => void) {
    if (this.readonly) return;

    const target = e.target as HTMLInputElement;
    const val = target.value;

    if (val !== "" && !this.pattern.test(val)) {
      target.value = value[index] || "";
      return;
    }

    const currentVal = value || "";
    let newValue = currentVal.split("");

    if (newValue.length < this.length) {
      newValue = [...newValue, ...Array(this.length - newValue.length).fill("")];
    }

    if (val.length > 1) {
      const chars = val
        .split("")
        .filter((c) => this.pattern.test(c))
        .slice(0, this.length - index);
      chars.forEach((char, i) => {
        if (index + i < this.length) {
          newValue[index + i] = char;
          const inputEl = this.inputs[index + i];
          if (inputEl) inputEl.value = char;
        }
      });
      this.focus(Math.min(index + chars.length, this.length - 1));
    } else {
      newValue[index] = val;
      if (val) this.focus(index + 1);
    }

    const result = newValue.join("").slice(0, this.length);
    setValue(result);
    this.checkComplete(result);
  }

  handleKeydown(e: KeyboardEvent, index: number, value: string, setValue: (v: string) => void) {
    const currentVal = value || "";
    if (e.key === "Backspace") {
      if (this.readonly) return;
      if (!currentVal[index] && index > 0) {
        this.focus(index - 1);
        const newValue = currentVal.split("");
        newValue[index - 1] = "";
        setValue(newValue.join(""));
        const prevInput = this.inputs[index - 1];
        if (prevInput) prevInput.value = "";
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      this.focus(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex <= currentVal.length) {
        this.focus(nextIndex);
      }
    }
  }

  handlePaste(e: ClipboardEvent, setValue: (v: string) => void) {
    if (this.readonly) return;
    e.preventDefault();
    const pastedData = e.clipboardData?.getData("text/plain") || "";
    const filteredChars = pastedData
      .split("")
      .filter((char) => this.pattern.test(char))
      .slice(0, this.length);

    if (filteredChars.length === 0) return;

    const result = filteredChars.join("");
    setValue(result);
    filteredChars.forEach((char, i) => {
      const inputEl = this.inputs[i];
      if (inputEl) inputEl.value = char;
    });
    this.focus(Math.min(filteredChars.length, this.length - 1));
    this.checkComplete(result);
  }
}
