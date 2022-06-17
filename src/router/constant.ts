export const PARENT_LAYOUT_NAME = 'ParentLayout';

export const LAYOUT = () => import('@/layouts/default/index.vue')

export const getParentLayout = (_name?: string) => {
    return () => {
        new Promise((resolve) => {
            resolve({
                _name: PARENT_LAYOUT_NAME
            })
        })
    }
}
