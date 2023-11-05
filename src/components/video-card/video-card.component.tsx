import * as React from 'react';
import Image from 'next/image';
import { AspectRatio, Box, Card, Inset, Text } from '@radix-ui/themes';
import { VideoItem } from '@/app/data';

export const VideoCard: React.FC<VideoItem> = (props) => {
  const { title, thumbnail, publish_date } = props;
  return (
    <Box>
      <Card size='2' mb='3'>
        <AspectRatio ratio={16 / 9}>
          <Inset>
            <Image src={thumbnail} alt={title} width={640} height={480} />
          </Inset>
        </AspectRatio>
      </Card>
      <Text as='p' size='3' weight='bold' mb='1'>
        {title}
      </Text>
      <Text size='2' color='gray'>
          {publish_date.toLocaleDateString()}
      </Text>
    </Box>
  );
};
