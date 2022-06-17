import { PluginOption } from "vite"
import vue from "@vitejs/plugin-vue"
import WindiCSS from "vite-plugin-windicss"
import { configSvgIconsPlugin } from "./svgSprite"
export function createVitePlugins() {
    const vitePlugins: (PluginOption | PluginOption[])[] = [
        vue(),
    ]
    // vite-plugin-windicss
    vitePlugins.push(WindiCSS())
    // vite-plugin-svg-icons
    vitePlugins.push(configSvgIconsPlugin())

    return vitePlugins;
}
