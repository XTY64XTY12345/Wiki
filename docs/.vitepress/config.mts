import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"; 
import taskLists from 'markdown-it-task-checkbox'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xdows Software",
  description: "Xdows Software",
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
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
    zh: {
      label: '简体中文',
      lang: 'zh', 
      link: '/zh/'
    }
  },
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    config: (md) => {
      // 创建 markdown-it 插件
      md.use(taskLists, {
        disabled: true,
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item',
      })
      md.use((md) => {
        md.use(timeline);
        const defaultRender = md.render
        md.render = function (...args) {

          // 调用原始渲染
          let defaultContent = defaultRender.apply(md, args)
          // 替换内容
          defaultContent = defaultContent
                .replace(/NOTE/g, '提醒')
                .replace(/TIP/g, '建议')
                .replace(/IMPORTANT/g, '重要')
                .replace(/WARNING/g, '警告')
                .replace(/CAUTION/g, '注意')
          // 返回渲染的内容
          return defaultContent
        }
      })
    },
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
          zh: {
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
      {
        text: '简体中文',
        items: [
          { 
            text: '主页',
            link: '/zh/',
          },
          { 
            text: '快速开始',
            link: '/zh/Xdows-Security-4/get-started.md',
          },
        ],
      },
      {
        text: 'English',
        items: [
          { 
            text: 'Home',
            link: '/en/' ,
          },
          { 
            text: 'Getting Started',
            link: '/en/Xdows-Security-4/get-started.md',
          },
        ],
      },
    ],
    sidebar: {
      "/en/": [
        {
          text: 'Xdows Security',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: 'en/Xdows-Security-4/get-started' },
            {
            text: 'Xdows Tools',
            collapsed: false,
            items: [
                { text: 'Getting Started', link: 'en/Xdows-Security-4/Xdows-Tools/get-started.md' },
                {
                  text: 'Plugins',
                  collapsed: false,
                  items: [
                          { text: 'Getting Started', link: 'en/Xdows-Security-4/Xdows-Tools/Plugins/get-started.md' },
                          { text: 'Making Packages', link: 'en/Xdows-Security-4/Xdows-Tools/Plugins/Packages.md' },
                          { text: 'Main.dll', link: 'en/Xdows-Security-4/Xdows-Tools/Plugins/Main.dll.md' },
                  ]
                },
              ]
            },
            { text: 'Changelog', link: 'en/Xdows-Security-4/update' },
          ]
        },
      ],
      "/zh/": [
        {
          text: 'Xdows Security 3.0',
          collapsed: false,
          items: [
            { text: '快速开始', link: 'zh/Xdows-Security/get-started' },
            { text: '系统要求', link: 'zh/Xdows-Security/system' },
            { text: '主页功能', link: 'zh/Xdows-Security/home-feature' },
            { text: '杀毒功能', link: 'zh/Xdows-Security/security-feature' },
            { text: 'Xdows Tools', link: 'zh/Xdows-Security/tools-feature' },
            { text: '设置功能', link: 'zh/Xdows-Security/settings-feature' },
            { text: '版本计划', link: 'zh/Xdows-Security/version' },
            { text: '常见问题', link: 'zh/Xdows-Security/help' },
            { text: '更新日志', link: 'zh/Xdows-Security/update' },
            { text: '代码授权', link: 'zh/Xdows-Security/code-authorization' },
            { text: '开源说明', link: 'zh/Xdows-Security/Open-Source' },
          ]
        },
        {
          text: 'Xdows Security 4.0',
          collapsed: true,
          items: [
            { text: '快速开始', link: 'zh/Xdows-Security-4/get-started' },
            {
            text: 'Xdows Tools',
            collapsed: false,
            items: [
                { text: '快速开始', link: 'zh/Xdows-Security-4/Xdows-Tools/get-started.md' },
                {
                  text: '插件系统',
                  collapsed: false,
                  items: [
                          { text: '快速开始', link: 'zh/Xdows-Security-4/Xdows-Tools/Plugins/get-started.md' },
                          { text: '打包插件', link: 'zh/Xdows-Security-4/Xdows-Tools/Plugins/Packages.md' },
                          { text: 'Main.dll', link: 'zh/Xdows-Security-4/Xdows-Tools/Plugins/Main.dll.md' },
                  ]
                },
              ]
            },
            { text: '更新日志', link: 'zh/Xdows-Security-4/update' },
          ]
        },
        {
          text: 'Xdows Cloud',
          collapsed: true,
          items: [
            { text: '快速开始', link: 'zh/Xdows-Cloud/get-started' }
          ]
        },
        {
          text: '文件中转站',
          collapsed: true,
          items: [
            { text: '暂无相关文档', link: 'zh/Files/Home' }
          ]
        },
        {
          text: 'NTOS 系统',
          collapsed: true,
          items: [
            { text: '暂无相关文档', link: 'zh/NTOS/Home' }
          ]
        },
        {
          text: 'Winget++',
          collapsed: true,
          items: [
            { text: '暂无相关文档', link: 'zh/Winget-Plus/Home' }
          ]
        },
      ],
    },
    footer: {
      //message: '反馈群：749412281',
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
