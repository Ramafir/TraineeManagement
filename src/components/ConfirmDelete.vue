<template>
    <v-dialog v-model="isModalShown" persistent scrollable height="300" width="500">
        <v-card class="p-3">
            <v-card-title> Are you sure? </v-card-title>

            <v-divider />

            <v-card-text class="mt-6">
                Are you sure you want to delete this
                {{ resourceName }}?
            </v-card-text>

            <v-divider />

            <v-card-actions>
                <v-spacer />
                <v-btn color="primary" outlined @click="onCancel"> cancel </v-btn>
                <v-btn color="error" outlined @click="onConfirm"> confirm </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import type { IUserItem } from '@/types/user';

export default defineComponent({
    name: 'ConfirmDelete',

    props: {
        resourceName: String,
        showConfirmDelete: Boolean,
        selectedItem: Object as PropType<IUserItem>
    },

    emits: ['confirmed', 'canceled'],

    data() {
        return {
            isModalShown: this.showConfirmDelete
        };
    },

    methods: {
        onConfirm() {
            this.$emit('confirmed');
        },

        onCancel() {
            this.$emit('canceled');
        }
    }
});
</script>
