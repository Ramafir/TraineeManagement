<template>
    <v-card-title class="pl-0">User list</v-card-title>
    <v-card>
        <div class="flex justify-end mb-4">
            <v-btn prepend-icon="mdi-plus" class="m-7 rounded-full" color="green-darken-4"> Add user </v-btn>
        </div>
        <v-data-table :items="items" :headers="labels" class="v-data-table--with-background">
            <template v-slot:[`item.avatar`]="{ item }">
                <v-avatar size="32">
                    <img :src="item.avatar" alt="User avatar" />
                </v-avatar>
            </template>

            <template v-slot:[`item.fullName`]="{ item }"> {{ item.first_name }} {{ item.last_name }} </template>

            <template v-slot:[`item.action`]="{ item }">
                <v-icon small class="mr-2" color="grey" @click="editUser(item)">mdi-pencil-box-outline</v-icon>
                <v-icon small class="mr-2" color="grey" @click="deleteUser(item)">mdi-delete</v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';

import { useUsersStore } from '@/store/modules/users';

import type { IIndexData } from '@/types/user';
import type { ITableLabel } from '@/types/table';

export default defineComponent({
    name: 'UsersPage',

    data(): IIndexData {
        return {
            items: [],
            pagination: {
                page: 1,
                total: 0,
                perPage: 10,
                descending: false,
                search: ''
            },
            isLoading: false,
            selectedId: ''
        };
    },

    created() {
        this.getUsers();
    },

    computed: {
        labels(): ITableLabel[] {
            return [
                {
                    value: 'avatar',
                    sortable: false
                },
                {
                    title: 'Full Name',
                    value: 'fullName',
                    sortable: false
                },
                { title: 'Action', value: 'action', sortable: false }
            ];
        }
    },

    methods: {
        ...mapActions(useUsersStore, ['index']),

        async getUsers() {
            this.isLoading = true;

            try {
                const { data, total } = await this.index(this.pagination);

                this.pagination.total = total;
                this.items = data;
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false;
            }
        }
    }
});
</script>
