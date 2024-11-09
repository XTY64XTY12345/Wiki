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
// giscus
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

export default {
  extends: DefaultTheme,
  
  enhanceApp({app}) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
  },
  
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'XTY64XTY12345/Wiki', //仓库
      repoId: 'R_kgDOMWWaig', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOMWWais4CkG7I', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
    );
}

