export interface SelectBoxProps<Value extends string> {
  className?: string;

  value?: Value | null;
  options: SelectBoxOption<Value>[];
  onChange(value: string): void;
}

export interface SelectBoxOption<Value extends string = string> {
  value: Value;
  label: string;
}
