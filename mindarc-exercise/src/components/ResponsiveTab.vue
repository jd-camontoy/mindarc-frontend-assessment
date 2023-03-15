<script setup lang="ts">
  import tabData from '../data/tabData.json';
  import type TabItem from '@/types/TabItemType';
  import IndexedTabDataArraySymbol from '@/types/IndexedTabDataSymbol';
  import CurrentActiveTabIndexSymbol from '@/types/CurrentActiveTabIndexSymbol';
  import ChangeActiveTabIndexSymbol from '@/types/ChangeActiveTabIndexSymbol';
  import TabIndexIsCurrentlyActiveSymbol from '@/types/TabIndexIsCurrentlyActiveTypeSymbol';
  import type ChangeActiveTabIndexType from '@/types/ChangeActiveTabIndexType';
  import type TabIndexIsCurrentlyActive from '@/types/TabIndexIsCurrentlyActiveType';
  import { ref, provide } from 'vue';
  import ResponsiveTabDesktop from './organisms/ResponsiveTabDesktop.vue';
  import ResponsiveTabMobile from './organisms/ResponsiveTabMobile.vue';

  const tabDataWithIndex: TabItem[] = tabData.map((item, index) => {
      return {
        id: index,
        ...item
      }
  });
  const indexedTabData = ref<TabItem[]>(tabDataWithIndex);
  const currentActiveTabIndex = ref<number>(1);
  const changeActiveTabIndex = ref<ChangeActiveTabIndexType>((newIndex: number) : void => {
      currentActiveTabIndex.value = newIndex + 1;
  });
  const tabIndexIsCurrentlyActive = ref<TabIndexIsCurrentlyActive>((index: number) : boolean => {
    return currentActiveTabIndex.value === index + 1;
  });

  provide(IndexedTabDataArraySymbol, indexedTabData);
  provide(CurrentActiveTabIndexSymbol, currentActiveTabIndex);
  provide(ChangeActiveTabIndexSymbol, changeActiveTabIndex);
  provide(TabIndexIsCurrentlyActiveSymbol, tabIndexIsCurrentlyActive);
</script>

<template>
    <main class="container--responsive-tabs">
        <section class="content">
          <ResponsiveTabDesktop/>
          <ResponsiveTabMobile/>
        </section>
    </main>
</template>