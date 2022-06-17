import { withInstall } from "@/utils"

import appLogo from "./src/AppLogo.vue";
import appProvider from "./src/AppProvider.vue";
import appLocalePicker from "./src/AppLocalePicker.vue"

export const AppLogo = withInstall(appLogo)
export const AppProvider = withInstall(appProvider)
export const AppLocalePicker = withInstall(appLocalePicker)
