import * as React from 'react';
import { VideoCard } from '@/components/video-card/video-card.component';
import { VideoItem } from '@/app/data';

interface Props {
  data: VideoItem[];
}

export const VideoCardList: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((it) => (
        <VideoCard
          key={it.id}
          id={it.id}
          title={it.title}
          thumbnail={it.thumbnail}
          duration={it.duration}
          publish_date={it.publish_date}
        />
      ))}
    </>
  );
};
