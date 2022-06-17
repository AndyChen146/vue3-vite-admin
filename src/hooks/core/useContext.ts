import { InjectionKey, inject, provide, reactive, readonly as defineReadonly, UnwrapRef } from "vue"

export interface CreateContextOptions {
    readonly?: boolean;
    createProvoider?: boolean;
    native?: boolean
}

export function createContexts<T>(context: any, key: InjectionKey<T> = Symbol(), options: CreateContextOptions = {}) {
    const { readonly = true, createProvoider = false, native = false } = options;
    const state = reactive(context);
    const provideData = readonly ? defineReadonly(state) : state;
    !createProvoider && provide(key, native ? context : provideData)
    return {
        state
    }
}
