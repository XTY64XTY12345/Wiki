// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './blur.css'
import './style.css'
import './var.css'
import './vp-code-group.css'
import './custom-block.css'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: Layout
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
