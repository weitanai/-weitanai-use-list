import {Ref} from 'vue';


export interface Itemtype extends Object{
};

export interface OptionsType<T = any> {
    filterOption?: Ref<T>;
    immediate?: boolean;
    pageSize?: number;
}

export interface ReponseType<T extends any> {
    list: Ref<T[]>,
    curPage: Ref<number>,
    total: Ref<number>,
    pageSize: Ref<number>,
    loading: Ref<boolean>,
    loadData: (page: number) => void,
    reset: () => void,
    downloadCSV: (data: Itemtype[], filename: string) => void
}