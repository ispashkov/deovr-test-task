'use client'

import * as React from 'react';
import {SearchBar} from "@/components/search-bar/search-bar.component";
import useQueryParams from "@/hooks/use-query-params.hook";

export const VideoSearchBarContainer: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams()

  const search = queryParams?.get('search')

  const onChangeHandler = (value: string): void => {
    setQueryParams({
      search: value
    })
  }

  return <SearchBar className="rt-r-mx-auto rt-r-mb-8 xs:rt-r-w-50%" value={search} placeholder="Search video ..." onChange={onChangeHandler} />
};
