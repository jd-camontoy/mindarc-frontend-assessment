<script setup lang="ts">
import { inject, type PropType, type Ref } from 'vue';
import { screenTypeConstants } from '@/types/ScreenType';
import type TabItem from '@/types/TabItemType';
import type TabIndexIsCurrentlyActiveType from '@/types/TabIndexIsCurrentlyActiveType';
import TabIndexIsCurrentlyActiveSymbol from '@/types/TabIndexIsCurrentlyActiveTypeSymbol';
import ResponsiveTabItemContent from '../atoms/ResponsiveTabItemContent.vue';

const receivedTabIndexIsCurrentlyActive = inject(TabIndexIsCurrentlyActiveSymbol) as Ref<TabIndexIsCurrentlyActiveType>;
const tabIndexIsCurrentlyActiveFn = receivedTabIndexIsCurrentlyActive.value as TabIndexIsCurrentlyActiveType;
const props = defineProps({
    indexedTabData: {
        type: Array as PropType<TabItem[]>
    }
});
</script>

<template>
    <div class="tab-accordion__contents">
        <ResponsiveTabItemContent
            v-for="(item) in indexedTabData"
            :key="item.id"
            :screenType="screenTypeConstants.DISPLAY_TYPE_DESKTOP"
            :isActive="tabIndexIsCurrentlyActiveFn(item.id)"
            :content="item.content as string"
        />
    </div>
</template>