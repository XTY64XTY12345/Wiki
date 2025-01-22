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
// 图片放大
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
// 时间线
import "vitepress-markdown-timeline/dist/theme/index.css";

import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式

export default {
  extends: DefaultTheme,
  
  enhanceApp({app}) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
    
    NProgress.configure({ showSpinner: false })
    router.onBeforeRouteChange = () => {
    NProgress.start() // 开始进度条
    }
    NProgress.done() // 停止进度条
  },
 
  setup() {
    const route = useRoute();
    // 图片放大
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // giscus配置
    const { frontmatter } = useData();
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
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
 }
}

