import type { InjectionKey, Ref } from 'vue';

const CurrentActiveTabIndexSymbol: InjectionKey<Ref<number>> = Symbol('currentActiveTabIndex');

export default CurrentActiveTabIndexSymbol;