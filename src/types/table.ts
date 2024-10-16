export type ITableLabelType = 'string' | 'number' | 'enum';

export interface ITableLabel {
    value: string;
    title?: string;
    sortable?: boolean;
    key?: string;
}

export interface ITableExpandedLabel extends ITableLabel {
    isVisible: boolean;
}

export interface ITablePagination {
    page?: number;
    total?: number;
    perPage?: number;
    descending?: boolean;
    search?: string;
    totalPages?: number;
}
