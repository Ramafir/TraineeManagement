<template>
    <v-card-title class="pl-0">User list</v-card-title>
    <v-card>
        <v-btn prepend-icon="mdi-plus" color="green-darken-4" rounded="sm">Add user</v-btn>
        <v-data-table :items="users" :headers="headers">
            <template v-slot:[`item.action`]="{ item }">
                <v-icon v-if="!item.deletedAt" small class="mr-2" color="grey" @click="editUser(item)">
                    mdi-pencil-box-outline
                </v-icon>
                <v-icon v-if="!item.deletedAt" small class="mr-2" color="grey" @click="deleteUser(item)">
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'UsersPage',

    data() {
        return {
            showCreateOrEditModal: false,
            headers: [
                {
                    title: 'ID',
                    value: 'id',
                    sortable: false
                },
                {
                    title: 'First name',
                    value: 'firstName',
                    sortable: false
                },
                {
                    title: 'Last name',
                    value: 'lastName',
                    sortable: false
                },
                {
                    title: 'Email',
                    value: 'email',
                    sortable: false
                },
                {
                    title: 'Avatar',
                    value: 'avatar',
                    sortable: false
                },
                { title: 'Action', value: 'action', sortable: false }
            ],
            users: [
                {
                    id: 2,
                    email: 'janet.weaver@reqres.in',
                    firstName: 'Janet',
                    lastName: 'Weaver',
                    avatar: 'https://reqres.in/img/faces/2-image.jpg'
                }
            ]
        };
    }
});
</script>
