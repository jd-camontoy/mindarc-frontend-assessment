<script setup lang="ts">
import { screenTypeConstants } from '@/types/ScreenType';
import ResponsiveTabItemContent from '../atoms/ResponsiveTabItemContent.vue';
import ResponsiveTabItemTab from '../atoms/ResponsiveTabItemTab.vue';

const props = defineProps({
    tabTitle: {
        required: true,
        type: String
    },
    tabContent: {
        required: true,
        type: String
    },
    isActive: Boolean
});
</script>

<template>
    <div :class="[ 'tab-accordion--mobile__item', { 'tab-accordion--mobile__item--active': isActive }]">
        <ResponsiveTabItemTab
            :screenType="screenTypeConstants.DISPLAY_TYPE_MOBILE"
        >
            {{ tabTitle }}
        </ResponsiveTabItemTab>
        <ResponsiveTabItemContent
            :screenType="screenTypeConstants.DISPLAY_TYPE_MOBILE"
            :content="tabContent"
        />
    </div>
</template>