import { genVideoItemListMock, VideoItem } from '@/app/data';
import { SearchParams } from '@/app/types';

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const data = genVideoItemListMock(200);

export async function getAllVideos(
  searchParams: SearchParams,
  offset: number = 0,
  perPage: number = 20
): Promise<VideoItem[]> {
  const { sort = 'asc', search } = searchParams

  await sleep(2000);

  const sorted = [...data].sort((a, b) => {
    if (sort === 'asc') return dateComparator(a.publish_date, b.publish_date);
    if (sort === 'desc') return dateComparator(b.publish_date, a.publish_date);

    return 0;
  });

  const filtered = sorted.filter((v) =>
    v.title.toLowerCase().includes(search?.toLowerCase() || '')
  );

  const videos = filtered.slice(offset, offset + perPage);

  return Promise.resolve(videos);
}


function dateComparator(a: Date, b: Date): number {
  let aTime = a.getTime();
  let bTime = b.getTime();

  if (aTime < bTime) {
    return -1
  } else if (aTime > bTime) {
    return 1
  } else {
    return 0
  }
};
