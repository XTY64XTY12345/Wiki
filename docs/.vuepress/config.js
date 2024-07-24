import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Xdows Software',
  description: '在这查看相关文档',

  theme: hopeTheme({
    logo: "/logo.png",
    plugins: {
      mdEnhance: {
        tabs: true,
      },
    },
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
],},
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
