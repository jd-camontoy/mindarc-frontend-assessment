<script setup lang="ts">
import ChangeActiveTabIndexSymbol from '@/types/ChangeActiveTabIndexSymbol';
import type ChangeActiveTabIndexType from '@/types/ChangeActiveTabIndexType';
import type TabIndexIsCurrentlyActiveType from '@/types/TabIndexIsCurrentlyActiveType';
import TabIndexIsCurrentlyActiveSymbol from '@/types/TabIndexIsCurrentlyActiveTypeSymbol';
import type TabItem from '@/types/TabItemType';
import { inject, type PropType, type Ref } from 'vue';
import ResponsiveTabMobileItem from './ResponsiveTabMobileItem.vue';

const receivedTabIndexIsCurrentlyActive = inject(TabIndexIsCurrentlyActiveSymbol) as Ref<TabIndexIsCurrentlyActiveType>;
const tabIndexIsCurrentlyActiveFn = receivedTabIndexIsCurrentlyActive.value as TabIndexIsCurrentlyActiveType;

const changeActiveTabIndex = inject(ChangeActiveTabIndexSymbol) as Ref<ChangeActiveTabIndexType>;
const changeActiveTabIndexFn = changeActiveTabIndex.value as ChangeActiveTabIndexType;

const props = defineProps({
    indexedTabData: {
        type: Array as PropType<TabItem[]>
    }
});
</script>

<template>
    <div class="tab-accordion--mobile__items">
        <ResponsiveTabMobileItem 
            v-for="(item) in indexedTabData"
            :key="item.id"
            :tabTitle="item.title as string"
            :tabContent="item.content as string"
            :isActive="tabIndexIsCurrentlyActiveFn(item.id)"
            @click="changeActiveTabIndexFn(item.id)"
        />
    </div>
</template>