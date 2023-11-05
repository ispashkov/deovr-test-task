import * as React from 'react';
import { VideoCardGrid } from '@/components/video-card-grid/video-card-grid.component';
import { VideoCardLoader } from '@/components/video-card/video-card.loader';

export default function Loading() {
  return (
    <VideoCardGrid>
      {new Array(20).fill(null).map((_, index) => (
        <VideoCardLoader key={index} />
      ))}
    </VideoCardGrid>
  );
}
