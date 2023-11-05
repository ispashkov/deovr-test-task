import { faker } from '@faker-js/faker';

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  publish_date: Date;
  duration: number;
}

export function genVideoItemMock(): VideoItem {
  return {
    id: faker.string.uuid(),
    title: faker.animal.dog(),
    thumbnail: faker.image.urlLoremFlickr({ category: 'dogs' }),
    publish_date: faker.date.anytime(),
    duration: faker.number.int({ min: 10000, max: 1000 * 60 * 3 }),
  };
}

export function genVideoItemListMock(length: number): VideoItem[] {
  return Array(length).fill(null).map(genVideoItemMock);
}
