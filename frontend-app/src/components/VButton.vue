<template>
    <component
        :is="to ? 'router-link' : 'button'"
        :to="to"
        :type="type"
        :disabled="isDisabled || isProcessing"
        :class="classes"
        class="flex justify-center font-medium"
        @click="onClick"
    >
        <v-spinner v-if="isProcessing" :size="20" class="absolute" box />
        <span
            class="flex h-full w-full items-center justify-center"
            :class="{
                'opacity-0': isProcessing,
                'px-4 py-2': size === 'default' && !noContentPadding,
                'px-[11px] py-[7px]': isSmall && !noContentPadding
            }"
        >
            <slot />
        </span>
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VSpinner from '@/components/VSpinner.vue';

import type { PropType } from 'vue';

export default defineComponent({
    name: 'VButton',

    components: { VSpinner },

    props: {
        type: {
            type: String as PropType<Object>,
            required: false,
            default: undefined
        },

        isProcessing: {
            type: Boolean,
            required: false,
            default: false
        },

        isDisabled: {
            type: Boolean,
            required: false,
            default: false
        },

        isFullWidth: {
            type: Boolean,
            required: false,
            default: false
        },

        to: {
            type: String,
            required: false,
            default: ''
        },

        variant: {
            type: String as PropType<
                'default' | 'gray' | 'danger' | 'danger-outlined' | 'secondary' | 'success' | 'warning' | 'purple'
            >,
            required: false,
            default: 'default'
        },

        flat: {
            type: Boolean,
            default: false
        },

        size: {
            type: String as PropType<'small' | 'default'>,
            required: false,
            default: 'default'
        },

        noContentPadding: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    emits: ['click'],

    computed: {
        isDefault() {
            return this.variant === 'default';
        },

        isDanger() {
            return this.variant === 'danger';
        },

        isDangerOutlined() {
            return this.variant === 'danger-outlined';
        },

        isSmall() {
            return this.size === 'small';
        },

        classes() {
            return {
                'w-full': this.isFullWidth,
                'opacity-50 dark:opacity-60': this.isDisabled,
                'text-sm': !this.isSmall,
                'text-xs': this.isSmall,
                'bg-white': (this.isGray && !this.link) || this.isDangerOutlined,
                'text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300':
                    this.link && this.isDefault,
                'text-amber-500 hover:text-amber-400 disabled:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300 disabled:text-amber-400':
                    this.link && this.isWarning,
                'text-gray-500 bg-transparent hover:text-gray-400 disabled:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 dark:disabled:text-gray-500':
                    this.link && this.isGray,
                'text-red-500 hover:text-red-400 disabled:text-red-400': this.link && this.isDanger,
                'bg-primary-600 dark:bg-gray-100 dark:text-gray-800 hover:bg-primary-500 dark:hover:bg-gray-300 disabled:bg-primary-600 dark:disabled:bg-gray-200 dark:disabled:text-gray-600':
                    !this.link && this.isDefault,
                'bg-primary-500 hover:bg-primary-400 disabled:bg-primary-500': !this.link && this.isSecondary,
                'text-gray-900 border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-500 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:disabled:hover:bg-gray-700 dark:disabled:text-gray-400 dark:disabled:opacity-80':
                    !this.link && this.isGray,
                'bg-red-600 hover:bg-red-500 disabled:bg-red-600 dark:bg-red-500 dark:hover:bg-red-400 dark:disabled:bg-red-400 dark:border-transparent dark:disabled:border-transparent':
                    !this.link && this.isDanger,
                'text-red-600 border-red-600 hover:text-red-500 hover:bg-red-50 disabled:text-red-600 disabled:bg-white dark:bg-gray-900 dark:border-red-500 dark:text-red-500 dark:hover:text-red-400 dark:hover:bg-[#450a0a] dark:disabled:bg-gray-900 dark:disabled:text-red-500':
                    !this.link && this.isDangerOutlined,
                'bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-600 dark:border-transparent dark:disabled:border-transparent':
                    !this.link && this.isSuccess,
                'bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-500': !this.link && this.isWarning,
                'bg-indigo-500 hover:bg-indigo-400 disabled:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:disabled:bg-indigo-700 dark:disabled:text-gray-400':
                    !this.link && this.isPurple
            };
        }
    },

    methods: {
        onClick(event: Event) {
            this.$emit('click', event);
        }
    }
});
</script>
