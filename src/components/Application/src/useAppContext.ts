import { Ref, InjectionKey } from "vue"
import { createContexts } from "@/hooks/core/useContext"

export interface AppProviderContextProps {
    prefixCls: Ref<string>;
    isMobile: Ref<boolean>;
}

const key: InjectionKey<AppProviderContextProps> = Symbol()

export function createAppProviderContext(context: AppProviderContextProps) {
    return createContexts<AppProviderContextProps>(context, key)
}
