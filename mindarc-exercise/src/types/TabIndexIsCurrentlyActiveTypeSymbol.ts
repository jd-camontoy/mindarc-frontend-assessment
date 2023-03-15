import type { InjectionKey, Ref } from 'vue';
import type TabIndexIsCurrentlyActiveType from './TabIndexIsCurrentlyActiveType';

const TabIndexIsCurrentlyActiveSymbol: InjectionKey<Ref<TabIndexIsCurrentlyActiveType>> = Symbol('changeActiveTabIndex');

export default TabIndexIsCurrentlyActiveSymbol;