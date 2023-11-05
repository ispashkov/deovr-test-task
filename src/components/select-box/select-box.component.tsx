'use client';
import * as React from 'react';
import { Select } from '@radix-ui/themes';
import { SelectBoxProps } from '@/components/select-box/select-box.types';

export const SelectBox = <Value extends string = string>(
  props: SelectBoxProps<Value>
) => {
  const { className } = props;
  const { value, options, onChange } = props;

  return (
    <Select.Root size='3' value={value!} onValueChange={onChange}>
      <Select.Trigger className={className} />
      <Select.Content>
        {options.map((option) => (
          <Select.Item key={option.value} value={option.value!}>
            {option.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};
