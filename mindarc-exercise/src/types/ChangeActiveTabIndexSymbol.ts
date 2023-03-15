import type { InjectionKey, Ref } from 'vue';
import type ChangeActiveTabIndexType from './ChangeActiveTabIndexType';

const ChangeActiveTabIndexSymbol: InjectionKey<Ref<ChangeActiveTabIndexType>> = Symbol('changeActiveTabIndex');

export default ChangeActiveTabIndexSymbol;