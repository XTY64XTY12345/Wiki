# Xdows Tools

![XdowsToolsUI](./PNG/XdowsToolsUI.png)

（图片仅供参考）

## 简介

Xdows Tools 是 Xdows Security 内置的工具集

Xdows Security 4.0 的 Xdows Tools 相比 3.0 在重新绘制 UI 的同时支持了 导入插件 功能

## 插件

插件系统源于 Xdows Security 3.01

那时候插件系统集成于 本体 而非 Xdows Tools

插件在 3.0 本质上是一个 dll 文件，本体会在某些操作时调用 dll 达到插件的效果

在 Xdows Security 3.03 时进行过更新，支持插件当作扫描引擎使用

在 Xdows Security 3.04 插件系统因为各种原因被**移除**

在 Xdows Security 4.00 中插件系统重新回归并集成在 Xdows Tools 中

### 4.0 中的插件

4.0 版本插件系统 是集成在 Xdows Tools 中而非本体

意味着这将**失去**对 本体 的部分访问权限，但也提高了安全性和稳定性

插件的本质是一个 zip 压缩包

在压缩包内包含以下内容

 - Plugins  目录，存放插件本体，一般为**不可更改**状态
 - Data  目录，存放插件所需的数据
 - Plugins.ini 文件，Xdows Tools 将会读取里面的内容达到插件的效果

#### Plugins.ini

暂无文档



