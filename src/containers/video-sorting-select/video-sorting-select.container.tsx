'use client'

import * as React from 'react';
import useQueryParams from "@/hooks/use-query-params.hook";
import {SelectBox} from "@/components/select-box/select-box.component";
import {genVideoSortingSelectOptions} from "@/containers/video-sorting-select/video-sorting-select.utils";

export const VideoSortingSelectContainer: React.FC = () => {
    const { queryParams, setQueryParams } = useQueryParams()

    const sort = queryParams?.get('sort')

    const options = React.useMemo(genVideoSortingSelectOptions, [])

    const onChangeHandler = (value: string): void => {
        setQueryParams({
            sort: value
        })
    }

    return <SelectBox className="rt-r-mb-4 rt-r-w-100% xs:rt-r-w-auto" value={sort || options[0].value} options={options} onChange={onChangeHandler} />
};
