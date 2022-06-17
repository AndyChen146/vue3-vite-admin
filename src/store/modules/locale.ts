import { defineStore } from "pinia"
import { store } from "@/store"
interface LocaleState {
    localeInfo: string;
}

export const useLocaleStore = defineStore({
    id: '',
    state: (): LocaleState => ({
        localeInfo: ''
    }),
    getters: {
        getShowPicker(): boolean {
            return false;
        },
        getLocale() {
            return 'zh_CN'
        }
    },
    actions: {

    }
})

export function useLocaleStoreWithOut() {
    return useLocaleStore(store)
}
