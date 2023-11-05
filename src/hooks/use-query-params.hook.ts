'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useQueryParams<T>() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const urlSearchParams = new URLSearchParams(searchParams?.toString());

    const setQueryParams = (params: Partial<T>): void => {
        Object.entries(params)
            .forEach(([key, value]) => {
                if (value) {
                    urlSearchParams.set(key, String(value));
                } else {
                    urlSearchParams.delete(key);
                }
            });

        const search = urlSearchParams.toString();
        const query = search ? `?${search}` : '';

        router.replace(`${pathname}${query}`);
    }

    return { queryParams: searchParams, setQueryParams };
}
