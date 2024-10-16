import axios from 'axios';
import { defineStore } from 'pinia';

import type { IIndexParams } from '@/types/common';
import type { ITablePagination } from '@/types/table';
import type { IUserItem, IUserState } from '@/types/user';

export const useUsersStore = defineStore('users', {
    state: (): IUserState => {
        return {
            users: []
        };
    },

    getters: {
        getAllUsers: state => state.users
    },

    actions: {
        async index(pagination: ITablePagination): Promise<{ data: IUserItem[]; total: number }> {
            const { page, search } = pagination;

            const params: IIndexParams = { page };

            if (search) {
                params.q = search;
            }

            const response = await axios.get('/users', { params });

            const { data, total } = response.data;

            return { data, total };
        }
    }
});
