import type { InjectionKey, Ref } from 'vue';
import type TabItem from '@/types/TabItemType';

const IndexedTabDataArraySymbol: InjectionKey<Ref<TabItem[]>> = Symbol('indexedTabData');

export default IndexedTabDataArraySymbol;