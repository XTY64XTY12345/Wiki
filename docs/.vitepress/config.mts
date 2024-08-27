import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xdows Software",
  logo: '/logo.svg',
  description: "Xdows 软件的文档",
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/Xdows-Security/get-started.md' }
    ],

    sidebar: [
            {
              text: 'Xdows Security',
              collapsed: false,
              items: [
                { text: '快速开始', link: 'Xdows-Security/get-started' },
                { text: '主页功能', link: 'Xdows-Security/home-feature' },
                { text: '杀毒功能', link: 'Xdows-Security/security-feature' },
                { text: 'Xdows Tools', link: 'Xdows-Security/tools-feature' },
                { text: '设置功能', link: 'Xdows-Security/settings-feature' },
                { text: 'Xdows Tools', link: 'Xdows-Security/tools-feature' },
                { text: 'Pro 版本计划', link: 'Xdows-Security/pro-version' },
                { text: '更新日志', link: 'Xdows-Security/update' },
                { text: '代码授权', link: 'Xdows-Security/code-authorization' }
              ]
            },

            {
              text: 'Xdows Cloud',
              collapsed: true,
              items: [
                { text: '快速开始', link: 'Xdows-Cloud/get-started' }
              ]
            },
            {
              text: '文件中转站',
              collapsed: true,
              items: [
                { text: '暂无相关文档', link: 'Files/Home' }
              ]
            },
            {
              text: 'NTOS 系统',
              collapsed: true,
              items: [
                { text: '暂无相关文档', link: 'NTOS/Home' }
              ]
            },
            {
              text: 'Winget++',
              collapsed: true,
              items: [
                { text: '暂无相关文档', link: 'Winget-Plus/Home' }
              ]
            },
    ],
    footer: {
      message: '反馈群：749412281',
      copyright: 'Xdows Software 版权所有'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XTY64XTY12345' }
    ]
  }
})
