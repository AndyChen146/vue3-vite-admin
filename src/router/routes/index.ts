import type { AppRouteRecordRaw, AppRouteModule } from "@/router/types"
import { PageEnum } from "@/enums/pageEnum"
import { mainOutRoutes } from "./mainOut"

const modules = import.meta.globEager('./modules/**/*.ts')
const routeModuleList: AppRouteModule[] = [];
Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || [];
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routeModuleList.push(...modList)
})

export const asyncRoutes = [...routeModuleList]

export const RootRoute: AppRouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: PageEnum.BASE_HOME,
    meta: {
        title: 'Root'
    }
}

export const LoginRoute: AppRouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/sys/login/Login.vue'),
    meta: {
        title: ''
    }
}

export const basicRoutes = [
    LoginRoute,
    RootRoute,
    ...mainOutRoutes
]
