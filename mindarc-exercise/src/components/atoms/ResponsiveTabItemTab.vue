<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue'
import { screenTypeConstants } from '@/types/ScreenType';
import type ScreenType from '@/types/ScreenType';

const props = defineProps({
    screenType: {
        type: String as PropType<ScreenType>,
        required: true,
    },
    isActive: Boolean
});

const tabTypeClassName = computed(() => {
    let primaryTabClassName = 'tab-accordion';
    let appendedClassName = (props.screenType === screenTypeConstants.DISPLAY_TYPE_DESKTOP) ? '__tab' : '--mobile__tab';
    return primaryTabClassName + appendedClassName;
});

</script>

<template>
    <div :class="[ tabTypeClassName, { 'tab-accordion__tab--active': props.isActive } ]">
        <slot></slot>
    </div>
</template>