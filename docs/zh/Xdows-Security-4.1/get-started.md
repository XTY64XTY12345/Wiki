# 快速开始 {#GetStarted}

来看看下一代基于 `WinUI3` + `C#` 技术构建的杀毒软件

## 简介 {#Info}

Xdows Security 4.1 是一个基于 `WinUI3` + `C#` 技术构建的杀毒软件。

## 下载 {#Download}

暂不提供直接下载方式，请进入 [QQ 群](https://qm.qq.com/q/ybEtoc5rFe) 下载软件

## 扫描引擎 {#Engine}

| 名称 | 介绍 | 开源 |
|-----|------|------|
| Xdows Local | 使用导入表、导出表等多种方式分析 PE 文件 | 全部开源 |
| SouXiaoEngine | 由 `Mint` 提供扫描引擎，基于多种分析方式| 不开源 |
| 基于云的扫描引擎 | 由 `MEMZUAC` 提供的云扫描服务 | 不开源 |
| CzkCloud | 由 `天启星图网络科技` 提供的云扫描服务 | 不开源 |

::: tip 提示
 因为需要保护 ApiKey 故在 Nightly 版中不支持 CzkCloud
:::


## 构建运行 {#Build}

1. 环境要求：
    1. Windows 10/11
    2. 安装 VS2022或更高版本 及其相关负载
    3. 安装 Git 并保证能正常访问 Github。
2. 克隆仓库
```sh
git clone https://github.com/XTY64XTY12345/Xdows-Security
```
2. 打开解决方案 `Xdows-Security.sln`。
3. 设置运行平台（x86/x64/ARM64 可选，但推荐 x64），编译并运行项目 `Xdows-Security`。

提示：构建时请保留 `SouXiaoEngine.dll` 等本地依赖在项目旁，否则运行时会出现异常或在编译过程中出现错误。
