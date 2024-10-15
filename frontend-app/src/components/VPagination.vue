<template>
    <div class="flex items-end justify-between gap-2 border-t border-gray-200 pt-[12px] dark:border-gray-600">
        <div class="flex shrink-0 flex-col">
            <label for="perPage" class="block text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm">
                {{ 'users per page' }}
            </label>
            <select
                id="perPage"
                name="perPage"
                class="mt-1 block w-full rounded-md border-gray-300 px-[13px] py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                @change="onPerPageChange"
            >
                <option
                    v-for="rowsPerPageOption in rowsPerPageOptions"
                    :key="rowsPerPageOption"
                    :selected="rowsPerPageOption === perPage"
                >
                    {{ rowsPerPageOption }}
                </option>
            </select>
        </div>
        <div class="flex items-center justify-between gap-3 sm:justify-end">
            <v-button
                variant="gray"
                class="h-[38px] w-[38px] text-xs sm:w-auto sm:px-[17px] sm:py-2 sm:text-sm"
                no-content-padding
                :disabled="previousButtonDisabled"
                @click="setPage(page - 1)"
            >
                <chevron-left-icon class="h-4 w-4 sm:hidden" />
            </v-button>

            <p class="text-xs text-gray-700 dark:text-gray-300 sm:text-sm">
                <span class="font-medium">{{ currentRange }}</span>
                {{ 'of' }}
                <span class="font-medium">{{ total }}</span>
            </p>

            <v-button
                variant="gray"
                class="h-[38px] w-[38px] text-xs sm:w-auto sm:px-[17px] sm:text-sm"
                no-content-padding
                :disabled="nextButtonDisabled"
                @click="setPage(page + 1)"
            >
                <chevron-right-icon class="h-4 w-4 sm:hidden" />
            </v-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';

import VButton from '@/components/VButton.vue';

export default defineComponent({
    name: 'VPagination',

    components: {
        VButton,
        ChevronLeftIcon,
        ChevronRightIcon
    },

    props: {
        modelName: {
            type: String,
            required: false,
            default: ''
        },

        page: {
            type: Number,
            required: false,
            default: 1
        },

        total: {
            type: Number,
            required: true
        },

        perPage: {
            type: Number,
            required: false,
            default: 10
        },

        rowsPerPageOptions: {
            type: Array<number>,
            default: () => [10, 20, 50]
        },

        isLoading: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    emits: ['set-page', 'set-per-page'],

    computed: {
        lastPage() {
            return Math.ceil(this.total / this.perPage);
        },

        currentRange() {
            const lowerLimit = (this.page - 1) * this.perPage + 1;
            const upperLimit = this.page * this.perPage > this.total ? this.total : this.page * this.perPage;

            return `${lowerLimit}-${upperLimit}`;
        },

        previousButtonDisabled() {
            return this.isLoading || this.page === 1;
        },

        nextButtonDisabled() {
            if (this.isLoading) {
                return true;
            }

            return this.page === this.lastPage || this.lastPage === 0;
        }
    },

    methods: {
        setPage(page: number) {
            if (page > 0 && page <= this.lastPage) {
                this.$emit('set-page', page);
            }
        },

        onPerPageChange(event: Event) {
            this.$emit('set-per-page', parseInt((event.target as HTMLInputElement).value));
        }
    }
});
</script>
