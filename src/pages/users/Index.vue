<template>
    <user-table
        :users="items"
        :total="pagination.total"
        :per-page="pagination.perPage"
        :page="pagination.page"
        :total-pages="pagination.totalPages"
        @delete-user="openConfirmDelete"
        @update-page="onPageChange"
    />

    <confirm-delete
        v-if="showConfirmDelete"
        :resource-name="resourceName"
        :show-confirm-delete="showConfirmDelete"
        :selected-item="selectedItem"
        @canceled="showConfirmDelete = false"
        @confirmed="onDelete"
    />
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';

import { useUsersStore } from '@/store/modules/users';
import UserTable from '@/components/users/UserTable.vue';
import ConfirmDelete from '@/components/ConfirmDelete.vue';

import type { IIndexData, IUserItem } from '@/types/user';
import type { ITableLabel } from '@/types/table';

export default defineComponent({
    name: 'UsersPage',

    components: { UserTable, ConfirmDelete },

    data(): IIndexData {
        return {
            items: [],
            pagination: {
                page: 1,
                total: 0,
                perPage: 6,
                totalPages: 0,
                descending: false,
                search: ''
            },
            isLoading: false,
            selectedId: '',
            resourceName: 'user',
            selectedItem: {
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                avatar: ''
            },
            showConfirmDelete: false
        };
    },

    created() {
        this.getUsers();
    },

    methods: {
        ...mapActions(useUsersStore, ['index', 'destroy']),

        async getUsers() {
            this.isLoading = true;

            try {
                const { data, total, total_pages } = await this.index(this.pagination);

                this.pagination.total = total;
                this.pagination.totalPages = total_pages;

                this.items = data;
            } catch (error) {
                this.$toastError();
            } finally {
                this.isLoading = false;
            }
        },

        openConfirmDelete(selectedItem: IUserItem) {
            this.selectedItem = selectedItem;
            this.selectedId = selectedItem.id;
            this.showConfirmDelete = true;
        },

        async onDelete() {
            try {
                await this.destroy(this.selectedId);

                this.$toast('User deleted succesfully!');

                this.showConfirmDelete = false;
            } catch (error) {
                this.$toastError();
            }
        },

        async onPageChange(newPage: number) {
            this.pagination.page = newPage;

            await this.getUsers();
        }
    }
});
</script>
