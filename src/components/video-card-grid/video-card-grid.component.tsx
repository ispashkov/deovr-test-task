import * as React from 'react';
import { Grid } from '@radix-ui/themes';

interface Props {
  className?: string;
}

export const VideoCardGrid: React.FC<React.PropsWithChildren<Props>> = (
  props
) => {
  const { className, children } = props;
  return (
    <Grid
      className={className}
      columns={{ initial: '1', xs: '2', sm: '3', md: '4' }}
      gap='4'
      gapY='8'
    >
      {children}
    </Grid>
  );
};
