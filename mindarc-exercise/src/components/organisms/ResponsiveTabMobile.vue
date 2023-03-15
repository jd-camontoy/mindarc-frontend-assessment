<script setup lang="ts">
  import IndexedTabDataArraySymbol from '@/types/IndexedTabDataSymbol';
  import type TabItem from '@/types/TabItemType';
  import { inject, type Ref } from 'vue';
  import ResponsiveTabMobileList from '../molecules/ResponsiveTabMobileList.vue';

  const recievedIndexedTabData = inject(IndexedTabDataArraySymbol) as Ref<TabItem[]>;
</script>

<template>
    <div class="tab-accordion--mobile">
        <ResponsiveTabMobileList :indexedTabData="recievedIndexedTabData"/>
    </div>
</template>