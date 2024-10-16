<template>
    <v-card-title class="pl-0 text-3xl text-gray-600">User list</v-card-title>
    <v-card>
        <div class="flex justify-end mb-4">
            <v-text-field
                class="max-w-[400px] max-h-[40px] m-7"
                v-model="search"
                density="compact"
                label="Search for users..."
                append-inner-icon="mdi-magnify"
                variant="solo-filled"
                flat
                hide-details
                single-line
            />

            <v-spacer />

            <v-btn prepend-icon="mdi-plus" class="m-7 rounded-full" color="green-darken-4" @click="addUser">
                Add user
            </v-btn>
        </div>

        <v-data-table :items="users" :items-per-page="perPage" :headers="labels" class="v-data-table--with-background">
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

            <template v-slot:bottom>
                <div class="text-center pt-2">
                    <v-pagination :length="totalPages" :model-value="localPage" @update:model-value="updatePage" />
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { IUserItem } from '@/types/user';
import type { ITableLabel } from '@/types/table';

export default defineComponent({
    name: 'UserTable',

    props: {
        users: {
            type: Array as PropType<IUserItem[]>,
            required: false,
            defaultValue: () => []
        },

        total: {
            type: Number,
            required: true
        },

        totalPages: {
            type: Number,
            required: true
        },

        perPage: {
            type: Number,
            required: true
        },

        page: {
            type: Number,
            required: true
        }
    },

    emits: ['edit-user', 'delete-user', 'update-page'],

    data() {
        return {
            search: '',
            localPage: this.page || 1
        };
    },

    watch: {
        page(newPage) {
            this.localPage = newPage;
        }
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
        },

        filteredUsers() {
            if (this.search) {
                const searchTerm = this.search.toLowerCase();

                return this.users?.filter(user =>
                    `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm)
                );
            }

            return this.users;
        }
    },

    methods: {
        addUser() {
            this.$router.push('/user');
        },

        editUser(user: IUserItem) {
            this.$emit('edit-user', user);
        },

        deleteUser(user: IUserItem) {
            this.$emit('delete-user', user);
        },

        updatePage(newPage: number) {
            this.$emit('update-page', newPage);
        }
    }
});
</script>
