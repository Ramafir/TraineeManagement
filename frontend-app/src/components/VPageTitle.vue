<template>
    <div
        class="lg:mb-[20px] lg:mt-[16px] lg:pb-0 lg:pr-0"
        :class="{
            'pb-[5px]': mobileButtonsNumber > 0,
            'pr-[42px] md:pr-[44px]': mobileButtonsNumber === 1,
            'pr-[84px] md:pr-[86px]': mobileButtonsNumber === 2,
            'pr-[126px] md:pr-[128px]': mobileButtonsNumber === 3
        }"
    >
        <p v-if="subtitle" class="text-xs font-bold text-gray-400 lg:text-sm">
            {{ subtitle }}
        </p>
        <h1 class="hyphens-auto text-base font-semibold text-[#333] dark:text-gray-200 lg:text-2xl lg:font-bold">
            {{ title }}
        </h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VPageTitle',

    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false,
            default: ''
        },
        mobileButtonsNumber: {
            type: Number,
            required: false,
            default: 0
        }
    }
});
</script>
