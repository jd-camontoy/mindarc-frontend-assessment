<script setup lang="ts">
  import { inject, type Ref } from 'vue';
  import type TabItem from '@/types/TabItemType';
  import IndexedTabDataArraySymbol from '@/types/IndexedTabDataSymbol';
  import ResponsiveTabDesktopTabList from '../molecules/ResponsiveTabDesktopTabList.vue';
  import ResponsiveTabDesktopContentList from '../molecules/ResponsiveTabDesktopContentList.vue';

  const recievedIndexedTabData = inject(IndexedTabDataArraySymbol) as Ref<TabItem[]>;
</script>

<template>
    <div class="tab-accordion">
        <ResponsiveTabDesktopTabList :indexedTabData="recievedIndexedTabData"/>
        <ResponsiveTabDesktopContentList :indexedTabData="recievedIndexedTabData"/>
    </div>
</template>