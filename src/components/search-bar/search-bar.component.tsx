'use client';

import * as React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { TextFieldInputDebounced } from '@/components/text-field-input-debounced/text-field-input-debounced.component';

interface Props {
  className?: string;
  value?: string | null;
  placeholder: string;
  onChange(value: string): void;
}

export const SearchBar: React.FC<Props> = (props) => {
  const { className } = props;
  const { value, placeholder, onChange } = props;

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onChange(event.target.value);
  };

  return (
    <TextField.Root className={className} size='3'>
      <TextField.Slot>
        <MagnifyingGlassIcon height='16' width='16' />
      </TextField.Slot>
      <TextFieldInputDebounced
        value={value || ''}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </TextField.Root>
  );
};
