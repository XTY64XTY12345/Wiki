import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xdows Software",
  logo: '/logo.svg',
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  description: "Xdows 软件的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/Xdows-Security/get-started.md' }
    ],

    sidebar: [
      {
        text: '',
        items: [
            {
              text: 'Xdows Security',
              items: [
                { text: '快速开始', link: 'Xdows-Security/get-started' },
                { text: '主页功能', link: 'Xdows-Security/home-feature' },
                { text: '杀毒功能', link: 'Xdows-Security/security-feature' },
                { text: 'Xdows Tools', link: 'Xdows-Security/tools-feature' },
                { text: '设置功能', link: 'Xdows-Security/settings-feature' },
                { text: 'Xdows Tools', link: 'Xdows-Security/tools-feature' },
                { text: 'Pro 版本计划', link: 'Xdows-Security/pro-version' },
                { text: '更新日志', link: 'Xdows-Security/update' }
              ]
            },
            {
              text: 'Xdows Cloud',
              items: [
                { text: '快速开始', link: 'Xdows-Cloud/get-started' }
              ]
            },
            {
              text: '文件中转站',
              items: [
                { text: '暂无相关文档', link: 'Files/Home' }
              ]
            },
            {
              text: 'NTOS 系统',
              items: [
                { text: '暂无相关文档', link: 'NTOS/Home' }
              ]
            },
            {
              text: 'Winget++',
              items: [
                { text: '暂无相关文档', link: 'Winget-Plus/Home' }
              ]
            },
        ]
      }
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
