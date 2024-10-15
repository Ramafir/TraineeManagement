<template>
    <v-container class="mt-8">
        <v-row>
            <v-card-title>Add user</v-card-title>
        </v-row>

        <v-row class="mt-4">
            <v-col cols="12" md="7">
                <v-card class="p-6 min-h-[350px] relative">
                    <v-row>
                        <v-col cols="12" md="6">
                            <label for="firstName" class="text-sm font-medium mb-2 block">First Name</label>
                            <v-text-field
                                class="my-4"
                                id="firstName"
                                variant="outlined"
                                v-model="firstName"
                                hide-details
                            />
                        </v-col>
                        <v-col cols="12" md="6">
                            <label for="lastName" class="text-sm font-medium mb-2 block">Last Name</label>
                            <v-text-field
                                class="my-4"
                                id="lastName"
                                variant="outlined"
                                v-model="lastName"
                                hide-details
                            />
                        </v-col>
                    </v-row>
                    <v-btn color="green darken-4" class="text-white update-btn" @click="updateDetails">
                        Update Details
                    </v-btn>
                </v-card>
            </v-col>

            <v-col cols="12" md="5">
                <v-card class="flex flex-col items-center py-8 min-h-[350px]">
                    <div class="flex flex-col items-center mb-4">
                        <v-avatar size="96" class="mb-4">
                            <img src="https://via.placeholder.com/150" alt="User avatar" />
                        </v-avatar>
                        <v-btn variant="outlined" class="mt-4" prepend-icon="mdi-camera" @click="changePhoto">
                            Change Photo
                        </v-btn>
                    </div>
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

<style scoped>
/* Pozycjonowanie absolutne przycisku */
.update-btn {
    position: absolute;
    bottom: 16px;
    left: 16px;
}

/* Zwiększona minimalna wysokość karty */
.v-card {
    min-height: 350px;
    position: relative;
}
</style>
