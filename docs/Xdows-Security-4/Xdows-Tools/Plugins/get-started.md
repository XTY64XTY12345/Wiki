# 插件系统

## 简介

插件系统 旨在为 Xdows Tools 提供更轻便、简洁的扩展功能

## 区别

插件系统源于 Xdows Security 3.01

那时候插件系统集成于 本体 而非 Xdows Tools

插件在 3.0 本质上是一个 dll 文件，本体会在某些操作时调用 dll 达到插件的效果

在 Xdows Security 3.03 时进行过更新，支持插件当作扫描引擎使用

在 Xdows Security 3.04 插件系统因为各种原因被**移除**

在 Xdows Security 4.00 中插件系统重新回归并集成在 Xdows Tools 中

## 插件

4.0 版本插件系统 是集成在 Xdows Tools 中而非本体

意味着这将**失去**对 本体 的部分访问权限，但也提高了安全性和稳定性

插件的本质是一个存放配置文件、程序文件和附件网页文件的目录

::: file-tree

- docs
  - .vuepress
    - config.ts
  - page1.md
  - README.md
- theme  一个 **主题** 目录
  - client
    - components
      - **Navbar.vue**
    - composables
      - useNavbar.ts
    - styles
      - navbar.css
    - config.ts
  - node/
- package.json
- pnpm-lock.yaml
- .gitignore
- README.md
- …
:::


在目录内通常包含以下内容

 - Plugins  目录，存放插件本体，一般为**不可更改**状态
 - Data  目录，存放插件所需的数据

## 插件包

插件包 (Plugin Packages) 是一个包含一个或多个的插件的 ZIP 压缩包

你可以在 `Xdows Tools` - `导入插件` 进行导入插件包
