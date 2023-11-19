import { h } from 'vue'

import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import Home from './components/Home.vue'
import CreatorsHome from './components/CreatorsHome.vue'
import RegisterSW from './components/RegisterSW.vue'

import './css/theme.css'
import './css/components.css'

const customTheme: Theme = {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('Home', Home)
        app.component('CreatorsHome', CreatorsHome)
    },
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'layout-bottom': () => h(RegisterSW)
        })
    }
}

export default customTheme;