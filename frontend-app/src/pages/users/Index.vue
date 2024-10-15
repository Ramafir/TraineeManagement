<template>
    <v-page-title :title="'User list'" />

    <v-card>
        <v-data-table :items="users" :headers="headers" />
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VPageTitle from '@/components/VPageTitle.vue';

export default defineComponent({
    name: 'UsersPage',

    components: {
        VPageTitle
    },

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
                { title: 'Actions', value: 'action', sortable: false }
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
