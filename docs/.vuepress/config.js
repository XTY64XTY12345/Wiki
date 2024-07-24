import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Xdows Software',
  description: '在这查看相关文档',
  plugins: [
    mdEnhancePlugin({
      // 添加选项卡支持
      tabs: true,
    }),
  ],
  theme: defaultTheme({
    logo: "/logo.png",
    navbar: [
      { text: "主页", link: "/README.md", icon: "home" },
      { text: "快速开始", link: "/Xdows-Security/get-started", icon: "config" },
    ],
    sidebar: [
      {text: "Xdows Security",prefix: "/",children: [
          "Xdows-Security/get-started",
          "Xdows-Security/home-feature",
          "Xdows-Security/security-feature",
          "Xdows-Security/tools-feature",
          "Xdows-Security/settings-feature",
          "Xdows-Security/pro-version",
          "Xdows-Security/update",
]，},
      {text: "Xdows Cloud",prefix: "/",children: [
          "Xdows-Cloud/get-started",],},
      {text: "文件中转站",prefix: "/",children: [
          "Files/Home",],},
      {text: "NTOS 系统",prefix: "/",children: [
          "NTOS/Home",],},
      {text: "Winget++",prefix: "/",children: [
          "Winget-Plus/Home",],},
    ],
  }),
  bundler: webpackBundler(),
})
