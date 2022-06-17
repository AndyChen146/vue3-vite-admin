import type { AppRouteModule } from "@/router/types"

export const mainOutRoutes: AppRouteModule[] = [
    {
        path: '/main-out',
        name: 'MainOut',
        component: () => import("@/views/comp/main-out/index.vue"),
        meta: {
            title: 'MainOut',
            ignoreAuth: true
        }
    }
]

export const mainOutRouteNames = mainOutRoutes.map((item) => item.name)
