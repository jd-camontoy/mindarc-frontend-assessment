<script setup lang="ts">
import { inject, type PropType, type Ref, computed } from 'vue';
import type TabItem from '@/types/TabItemType';
import ChangeActiveTabIndexSymbol from '@/types/ChangeActiveTabIndexSymbol';
import ResponsiveTabItemTab from '../atoms/ResponsiveTabItemTab.vue';
import { screenTypeConstants } from '@/types/ScreenType';
import type ChangeActiveTabIndexType from '@/types/ChangeActiveTabIndexType';
import CurrentActiveTabIndexSymbol from '@/types/CurrentActiveTabIndexSymbol';
import TabIndexIsCurrentlyActiveSymbol from '@/types/TabIndexIsCurrentlyActiveTypeSymbol';
import type TabIndexIsCurrentlyActiveType from '@/types/TabIndexIsCurrentlyActiveType';

const receivedCurrentActiveTabIndex = inject(CurrentActiveTabIndexSymbol) as Ref<number>;
const currentActiveTabIndex = computed(() => receivedCurrentActiveTabIndex.value);

const changeActiveTabIndex = inject(ChangeActiveTabIndexSymbol) as Ref<ChangeActiveTabIndexType>;
const changeActiveTabIndexFn = changeActiveTabIndex.value as ChangeActiveTabIndexType;
const receivedTabIndexIsCurrentlyActive = inject(TabIndexIsCurrentlyActiveSymbol) as Ref<TabIndexIsCurrentlyActiveType>;
const tabIndexIsCurrentlyActiveFn = receivedTabIndexIsCurrentlyActive.value as TabIndexIsCurrentlyActiveType;
const props = defineProps({
    indexedTabData: {
        type: Array as PropType<TabItem[]>
    }
});
</script>

<template>
    <div class="tab-accordion__tabs">
        <ResponsiveTabItemTab 
            v-for="(item) in indexedTabData"
            :key="item.id"
            :screenType="screenTypeConstants.DISPLAY_TYPE_DESKTOP"
            :isActive="tabIndexIsCurrentlyActiveFn(item.id)"
            @click="changeActiveTabIndexFn(item.id)"
        >
            {{ item.title }}
        </ResponsiveTabItemTab>
        <div class="tab-accordion__indicator" :class="'tab-accordion__indicator--tab-' + currentActiveTabIndex"></div>
    </div>
</template>