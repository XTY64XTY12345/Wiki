// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './blur.css'
import './style.css'
import './var.css'
import './vp-code-group.css'
import './custom-block.css'
import './blockquote.css'
import './rainbow.css'
import Linkcard from "./components/Linkcard.vue"

export default {
  extends: DefaultTheme,
  enhanceApp({app}) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
  },
}
