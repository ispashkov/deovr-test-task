import * as React from 'react';
import { TextField } from '@radix-ui/themes';
import { useDebouncedCallback } from '@/hooks/use-debounced-callback.hook';

interface Props {
  value?: string;
  delay?: number;
  placeholder?: string;
  onChange: React.ChangeEventHandler;
}

export const TextFieldInputDebounced = React.forwardRef<
  HTMLInputElement,
  Props
>((props, ref) => {
  const { value, delay = 300, onChange, ...ownProps } = props;

  const [valueInternal, setValueInternal] = React.useState<string>(
    () => value || ''
  );

  React.useEffect((): void => {
    setValueInternal(value || '');
  }, [value]);

  const onChangeDebounced = useDebouncedCallback(onChange, delay);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValueInternal(event.target.value);
    onChangeDebounced(event);
  };

  return (
    <TextField.Input
      {...ownProps}
      ref={ref}
      value={valueInternal}
      onChange={onChangeHandler}
    />
  );
});

TextFieldInputDebounced.displayName = 'TextFieldInputDebounced';
