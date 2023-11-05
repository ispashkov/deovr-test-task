import * as React from 'react';
import { Text } from '@radix-ui/themes';

interface Props {
  total: number;
}

export const VideoTotal: React.FC<Props> = (props) => {
  const { total } = props;
  return (
    <Text
      className='rt-r-display-block rt-r-w-100%'
      align='center'
      color='gray'
    >
      Founded {total} items
    </Text>
  );
};
