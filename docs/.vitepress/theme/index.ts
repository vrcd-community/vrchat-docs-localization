import { h } from "vue"

import DefaultTheme from "vitepress/theme"
import type { Theme } from "vitepress"

import Home from "./components/Home.vue"
import CreatorsHome from "./components/CreatorsHome.vue"
import RegisterSW from "./components/RegisterSW.vue"
import ToOfficialDocs from "./components/ToOfficialDocs.vue"
import ImagePreviewRegister from "./components/ImagePreviewRegister.vue"

import "./css/theme.css"
import "./css/components.css"
import "vue-draggable-resizable/style.css"

const customTheme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Home", Home)
    app.component("CreatorsHome", CreatorsHome)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(RegisterSW),
      "aside-outline-after": () => h(ToOfficialDocs),
      "doc-bottom": () => h(ImagePreviewRegister),
    })
  },
}

export default customTheme
