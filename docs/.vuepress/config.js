import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Xdows Software',
  description: '在这查看相关文档',

  theme: defaultTheme({
    logo: 'https://xty64xty12345.github.io/xdows安全/img/logo.ico',

    navbar: ['/', '/Xdows-Security/get-started'],
    sidebar: [
      {text: "Xdows Security",prefix: "/",children: [
          "Xdows-Security/get-started",
          "Xdows-Security/home-feature",
          "Xdows-Security/security-feature",
          "Xdows-Security/tools-feature",
          "Xdows-Security/settings-feature",
          "Xdows-Security/pro-version",],},
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
