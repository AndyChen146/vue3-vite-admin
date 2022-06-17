import type { UserConfig, ConfigEnv } from "vite"
import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins } from "./build/vite/plugin"
import { resolve } from "path"

function pathResolve(dir: string) {
    return resolve(process.cwd(), ".", dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
    const root = process.cwd();
    const env = loadEnv(mode, root);

    return {
        base: '/',
        root,
        resolve: {
            alias: [
                { find: 'vue-i18n', replacement: 'vue-i18n/dist/vue-i18n.cjs.js' },
                { find: /\@\//, replacement: pathResolve('src') + '/' },
                { find: /\#\//, replacement: pathResolve('types') + '/' }
            ]
        },
        // server: {
        //     https: true,
        //     host: true,
        //     port: 3000,

        // },
        plugins: createVitePlugins()
    }
}
