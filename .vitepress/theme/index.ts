import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import Home from './components/Home.vue'
import CreatorsHome from './components/CreatorsHome.vue'

import './css/theme.css'
import './css/components.css'

const customTheme: Theme = {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('Home', Home)
        app.component('CreatorsHome', CreatorsHome)
    }
}

export default customTheme;