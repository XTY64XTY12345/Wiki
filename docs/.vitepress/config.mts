import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({


  title: "Xdows Software",
  logo: '/logo.svg',
  description: "Xdows 软件的文档",
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg',
      },
    ],
  ],
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  sitemap: {
    hostname: 'https://xty64xty.netlify.app',
  },
  themeConfig: {
    //本地搜索
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/Xdows-Security/get-started.md' }
    ],

    sidebar: [
            {
              text: 'Xdows Security 3.0',
              collapsed: false,
              items: [
                { text: '快速开始', link: 'Xdows-Security/get-started' },
                { text: '系统要求', link: 'Xdows-Security/system' },
                { text: '主页功能', link: 'Xdows-Security/home-feature' },
                { text: '杀毒功能', link: 'Xdows-Security/security-feature' },
                { text: 'Xdows Tools', link: 'Xdows-Security/tools-feature' },
                { text: '设置功能', link: 'Xdows-Security/settings-feature' },
                { text: '版本计划', link: 'Xdows-Security/version' },
                { text: '常见问题', link: 'Xdows-Security/help' },
                { text: '更新日志', link: 'Xdows-Security/update' },
                { text: '代码授权', link: 'Xdows-Security/code-authorization' },
                { text: '开源说明', link: 'Xdows-Security/Open-Source' },
              ]
            },
            {
              text: 'Xdows Security 4.0',
              collapsed: true,
              items: [
                { text: '快速开始', link: 'Xdows-Security-4/get-started' },
                { text: 'Xdows Tools', link: 'Xdows-Security-4/xdows-tools' },
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
    editLink: {
      pattern: 'https://github.com/XTY64XTY12345/Wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XTY64XTY12345' }
    ]
}})
