export interface SearchParams {
  sort?: Sort;
  search?: string;
}

export type Sort = 'asc' | 'desc';
