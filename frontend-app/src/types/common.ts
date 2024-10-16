export interface IConfig {
    apiUrl: string;
}

export interface IIndexResponse<ItemType> {
    data: ItemType[];
    total: number;
}

export interface IIndexParams {
    page?: number;
    perPage?: number;
    q?: string;
    sortBy?: string;
    order?: 'DESC' | 'ASC';
    inactive?: 'true';
    filters?: string;
}
