import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import path from "path"

export function configSvgIconsPlugin() {
    const svgIconsPlugin = createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        svgoOptions: true,
        symbolId: 'icon-[dir]-[name]'
    })
    return svgIconsPlugin;
}
