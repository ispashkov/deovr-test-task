import {SelectBoxOption} from "@/components/select-box/select-box.types";

export function genVideoSortingSelectOptions(): SelectBoxOption[] {
    return [
        {
            value: 'asc',
            label: 'By date (ASC)'
        },
        {
            value: 'desc',
            label: 'By date (DESC)'
        }
    ]
}
