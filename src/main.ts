import "virtual:windi-base.css"
import "virtual:windi-components.css"
import "@/desigin/index.less"
import "virtual:windi-utilities.css"
import "virtual:svg-icons-register"

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from "@/router"
import { setupI18n } from "@/locales/setupI18n"
import { setupStore } from "@/store"

async function golbalstap() {
    const app = createApp(App)
    // 配置store
    setupStore(app)

    // 配置路由
    setupRouter(app)

    // 多语言配置
    await setupI18n(app)



    app.mount("#app")
}
golbalstap()

