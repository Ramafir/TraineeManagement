import type { ITablePagination } from '@/types/table';

export interface IIndexData {
    items: IUserItem[];
    pagination: Required<ITablePagination>;
    isLoading: boolean;
    selectedId: string;
    resourceName: string;
    selectedItem: IUserItem;
    showConfirmDelete: boolean;
}

export interface IUserItem {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string | null;
}

export interface IUserState {
    users: IUserItem[];
}
