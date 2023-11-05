import * as React from 'react';
import { VideoCardGrid } from '@/components/video-card-grid/video-card-grid.component';
import { getAllVideos } from '@/app/actions';
import Await from '@/app/await';
import { SearchParams } from '@/app/types';
import Loading from '@/app/loading';
import { VideoLoadMoreContainer } from '@/containers/video-load-more/video-load-more.container';
import { VideoCardList } from '@/components/video-card-list/video-card-list.component';

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const promise = getAllVideos(searchParams);

  return (
    <React.Suspense key={JSON.stringify(searchParams)} fallback={<Loading />}>
      <Await promise={promise}>
        {(videos) => (
          <>
            <VideoCardGrid>
              <VideoCardList data={videos} />
            </VideoCardGrid>
            <VideoLoadMoreContainer searchParams={searchParams} initialCount={videos.length} />
          </>
        )}
      </Await>
    </React.Suspense>
  );
}
