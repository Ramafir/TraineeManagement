<template>
    <v-card-title class="pl-0">User list</v-card-title>
    <v-card>
        <div class="flex justify-end mb-4">
            <v-btn prepend-icon="mdi-plus" class="m-7 rounded-full" color="green-darken-4"> Add user </v-btn>
        </div>
        <v-data-table :items="users" :headers="labels" class="v-data-table--with-background">
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
        }
    },

    emits: ['edit-user', 'delete-user'],

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
        editUser(user: IUserItem) {
            this.$emit('edit-user', user);
        },

        deleteUser(user: IUserItem) {
            this.$emit('delete-user', user);
        }
    }
});
</script>
