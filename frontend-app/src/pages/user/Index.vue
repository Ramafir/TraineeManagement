<template>
    <v-container class="mt-8">
        <v-row>
            <v-card-title class="text-3xl text-gray-600">Add user</v-card-title>
        </v-row>
        <v-row class="mt-4">
            <v-col cols="12" md="7">
                <v-card class="p-6 min-h-[350px] relative flex flex-col justify-start w-full">
                    <v-row>
                        <v-col cols="12" md="6" class="mt-10">
                            <label for="firstName" class="text-xs font-medium block">First Name</label>
                            <v-text-field
                                class="my-2"
                                id="firstName"
                                variant="outlined"
                                density="compact"
                                v-model="formData.first_name"
                                hide-details
                            />
                        </v-col>
                        <v-col cols="12" md="6" class="mt-10">
                            <label for="lastName" class="text-xs font-medium block">Last Name</label>
                            <v-text-field
                                class="my-2"
                                id="lastName"
                                variant="outlined"
                                density="compact"
                                v-model="formData.last_name"
                                hide-details
                            />
                        </v-col>
                    </v-row>
                    <v-btn
                        color="green-darken-4"
                        class="text-white absolute bottom-4 left-4 py-3"
                        @click="submitHandler"
                    >
                        {{ editMode ? 'Update Details' : 'Add User' }}
                    </v-btn>
                </v-card>
            </v-col>

            <v-col cols="12" md="5">
                <v-card class="flex flex-col items-center justify-between py-8 min-h-[350px] max-w-[500px] relative">
                    <div class="flex flex-col items-center mt-8">
                        <v-avatar size="120" class="mb-4 mx-auto">
                            <img src="https://via.placeholder.com/150" alt="User avatar" />
                        </v-avatar>
                    </div>
                    <v-btn
                        variant="outlined"
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
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';

import { useUsersStore } from '@/store/modules/users';

export default defineComponent({
    name: 'AddUserPage',

    props: {
        selectedId: {
            type: String,
            required: false,
            default: ''
        }
    },

    data() {
        const defaultFormData = {
            first_name: '',
            last_name: ''
        };

        return {
            isProcessing: false,
            initValue: { ...defaultFormData },
            defaultFormData,
            formData: { ...defaultFormData }
        };
    },

    computed: {
        hasFormChanged() {
            return JSON.stringify(this.initValue) !== JSON.stringify(this.formData);
        },

        editMode() {
            return !!this.selectedId;
        }
    },

    methods: {
        ...mapActions(useUsersStore, ['store', 'update']),

        async submitHandler() {
            this.isProcessing = true;

            try {
                const data = {
                    first_name: this.formData.first_name,
                    last_name: this.formData.last_name
                };

                if (this.editMode) {
                    await this.update(data, this.selectedId);
                } else {
                    await this.store(data);
                }

                this.$router.push('/');
            } catch (error) {
                console.log(error);
            } finally {
                this.isProcessing = false;
            }
        }
    }
});
</script>
