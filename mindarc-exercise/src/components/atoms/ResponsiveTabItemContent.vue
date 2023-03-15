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
    isActive: Boolean,
    content: String
});

const contentTypeClassName = computed(() => {
    let primaryTabClassName = 'tab-accordion';
    let appendedClassName = (props.screenType === screenTypeConstants.DISPLAY_TYPE_DESKTOP) ? '__content' : '--mobile__content';
    return primaryTabClassName + appendedClassName;
});

</script>

<template>
    <div :class="[ contentTypeClassName, { 'tab-accordion__content--active': props.isActive } ]">
        <div :class="[{
            'tab-accordion--mobile__text' : (props.screenType === screenTypeConstants.DISPLAY_TYPE_MOBILE),
            'tab-accordion__text' : (props.screenType === screenTypeConstants.DISPLAY_TYPE_DESKTOP)
        }]" v-html="content"></div>
    </div>
</template>