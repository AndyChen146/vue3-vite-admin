import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const about: AppRouteModule = {
    path: '/about',
    name: 'About',
    component: LAYOUT,
    redirect: '/about/index',
    meta: {
        title: '',
        icon: 'simple-icons:about-dot-me',
        hideChildrenInMenu: true,
    },
    children: [
        {
            path: 'index',
            name: 'AboutPage',
            component: () => import('/@/views/sys/about/index.vue'),
            meta: {
                title: '',
                icon: 'simple-icons:about-dot-me',
                hideMenu: true,
            },
        }
    ]
}

export default about;
