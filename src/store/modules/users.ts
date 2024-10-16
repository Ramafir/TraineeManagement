import axios from 'axios';
import { defineStore } from 'pinia';

import type { IIndexParams } from '@/types/common';
import type { ITablePagination } from '@/types/table';
import type { ICreateUserData, IUserItem, IUserState } from '@/types/user';
import { th } from 'vuetify/locale';

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

            this.users = data;

            return { data, total };
        },

        async store(data: ICreateUserData): Promise<IUserItem> {
            const user: IUserItem = await axios.post('/users', data);

            this.stored(user);

            return user;
        },

        async update(data: ICreateUserData, id: string): Promise<IUserItem> {
            const user: IUserItem = await axios.put(`/users/${id}`, data);

            this.updated(user);

            return user;
        },

        stored(user: IUserItem) {
            this.users.push(user);
        },

        updated(user: IUserItem) {
            const index = this.users.findIndex(storedUser => storedUser.id === user.id);

            if (~index) {
                this.users.splice(index, 1, user);
            }
        },

        async destroy(id: string) {
            await axios.delete(`/users/${id}`);

            this.destroyed(id);
        },

        destroyed(id: string) {
            const index = this.users.findIndex(user => user.id === id);

            if (~index) {
                this.users.splice(index, 1);
            }
        }
    }
});
