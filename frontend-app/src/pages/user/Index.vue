<template>
    <v-container class="mt-8">
        <v-row>
            <v-card-title class="text-2xl text-gray-600">Add user</v-card-title>
        </v-row>
        <v-row class="mt-4">
            <v-col cols="12" md="7">
                <v-card class="p-6 min-h-[350px] relative flex flex-col justify-start">
                    <v-row>
                        <v-col cols="12" md="6">
                            <label for="firstName" class="text-xs font-medium block">First Name</label>
                            <v-text-field
                                class="my-2"
                                id="firstName"
                                variant="outlined"
                                v-model="firstName"
                                hide-details
                            />
                        </v-col>
                        <v-col cols="12" md="6">
                            <label for="lastName" class="text-xs font-medium block">Last Name</label>
                            <v-text-field
                                class="my-2"
                                id="lastName"
                                variant="outlined"
                                v-model="lastName"
                                hide-details
                            />
                        </v-col>
                    </v-row>
                    <v-btn
                        color="green darken-4"
                        class="text-white absolute bottom-4 left-4 py-3"
                        @click="updateDetails"
                    >
                        Update Details
                    </v-btn>
                </v-card>
            </v-col>

            <v-col cols="12" md="5">
                <v-card class="flex flex-col items-center justify-between py-8 min-h-[350px] relative">
                    <div class="flex flex-col items-center">
                        <v-avatar size="96" class="mb-4 mx-auto">
                            <img src="https://via.placeholder.com/150" alt="User avatar" />
                        </v-avatar>
                    </div>
                    <v-btn
                        outlined
                        class="absolute bottom-4 left-4 right-1 py-2 mr-2"
                        prepend-icon="mdi-camera"
                        @click="changePhoto"
                    >
                        Change Photo
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AddUserPage',
    data() {
        return {
            firstName: '',
            lastName: ''
        };
    },
    methods: {
        updateDetails() {
            console.log('Details updated:', this.firstName, this.lastName);
        },
        changePhoto() {
            console.log('Change photo clicked');
        }
    }
});
</script>
