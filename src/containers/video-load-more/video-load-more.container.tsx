'use client';

import * as React from 'react';
import { Button, Flex } from '@radix-ui/themes';
import { VideoItem } from '@/app/data';
import { getAllVideos } from '@/app/actions';
import { VideoCardGrid } from '@/components/video-card-grid/video-card-grid.component';
import { Spinner } from '@/components/spinner/spinner.component';
import { VideoTotal } from '@/components/video-total/video-total.component';
import { VideoCardList } from '@/components/video-card-list/video-card-list.component';
import {SearchParams} from "@/app/types";

interface Props {
  initialCount: number;
  searchParams: SearchParams
}

export const VideoLoadMoreContainer: React.FC<Props> = (props) => {
  const { initialCount, searchParams } = props;

  const [videos, setVideos] = React.useState<VideoItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const onClickHandler = async (): Promise<void> => {
    setLoading(true);

    try {
      const offset = initialCount + videos.length;
      const next = await getAllVideos(searchParams, offset);
      setVideos((prev) => [...prev, ...next]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <VideoCardGrid className='rt-r-mt-8'>
        <VideoCardList data={videos} />
      </VideoCardGrid>

      {initialCount > 0 && (
        <Flex justify='center' align='center' py='8'>
          {loading ? (
            <Spinner />
          ) : (
            <Button
              className='rt-r-w-100% md:rt-r-w-auto'
              size='3'
              onClick={onClickHandler}
            >
              Load more
            </Button>
          )}
        </Flex>
      )}

      <VideoTotal total={initialCount + videos.length} />
    </>
  );
};
