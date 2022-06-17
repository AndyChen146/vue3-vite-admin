import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const dashboard: AppRouteModule = {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/analysis',
    meta: {
        orderNo: 10,
        icon: 'ion:grid-outline',
        title: '',
    },
    children: [
        {
            path: 'analysis',
            name: 'Analysis',
            component: () => import('/@/views/dashboard/analysis/index.vue'),
            meta: {
                // affix: true,
                title: '',
            },
        },
        {
            path: 'workbench',
            name: 'Workbench',
            component: () => import('/@/views/dashboard/workbench/index.vue'),
            meta: {
                title: '',
            },
        }
    ]
}

export default dashboard;
