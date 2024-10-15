<template>
    <div :class="{ 'flex h-full w-full items-center justify-center': box }">
        <div class="default-loader flex items-center justify-center" :style="outerSpinnerStyle">
            <div class="border-transparent" :class="colorClass" :style="innerSpinnerStyle" />
            <div class="border-transparent" :class="colorClass" :style="innerSpinnerStyle" />
            <div class="border-transparent" :class="colorClass" :style="innerSpinnerStyle" />
            <div class="border-transparent" :class="colorClass" :style="innerSpinnerStyle" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VSpinner',

    props: {
        colorClass: {
            type: String,
            required: false,
            default: 'border-t-sky-600'
        },

        size: {
            type: Number,
            required: true
        },

        box: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    computed: {
        outerSpinnerStyle() {
            return {
                width: this.size + 'px',
                height: this.size + 'px'
            };
        },
        innerSpinnerStyle() {
            return {
                width: this.size / 1.4 + 'px',
                height: this.size / 1.4 + 'px'
            };
        }
    }
});
</script>

<style lang="scss">
.default-loader {
    position: relative;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        border-width: 2px;
        border-style: solid;
        border-radius: 50%;
        animation: default-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

        &:first-child {
            animation-delay: -0.45s;
        }

        &:nth-child(2) {
            animation-delay: -0.3s;
        }

        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
}

@keyframes default-loader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
