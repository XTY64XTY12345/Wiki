# 快速开始 {#GetStarted}

来看看 Xdows Security 4.1 的简明上手指南，本版本延续 4.0 的设计理念并做了兼容性与稳定性优化。

## 简介 {#Info}

Xdows Security 4.1 是一个轻量化的防护与扫描套件，目标是在保持核心检测能力的同时降低资源占用并提升兼容性。

## 下载 {#Download}

当前提供 4.1 测试/正式包，请在发布页面选择对应版本下载。

安装前请查阅随包附带的 `README.txt`。测试版仅供试用，请在生产环境谨慎安装。

<Linkcard url="https://github.com/XTY64XTY12345/Xdows-Security/releases/download/nightly/Xdows-Security-Signed.zip
" title="下载 Xdows Security Nightly" description="请保证能正常访问 Github" logo="/logo.svg"/>

## 内核与架构 {#Kernel}

4.1 延续 4.0 的 WebUI 驱动架构：前端以 Web 技术构建，内核负责扫描与系统回调（Protection 模块）。与 3.0 的不同点在于，4.x 系列更紧密地将 UI 与内核结合，实现更好的可定制性。

## 安装与使用

1. 下载 zip 压缩包
2. 在 `设置` - `开发者选项/高级设置` 启用 `开发者模式` 和 `允许未签名的 Powershell 脚本运行`
> [!NOTE] 注意
>
> 不同系统可能位置/名称不同
3. 使用 `Powershell` 运行 `install.ps1`
4. 等待安装完成

## 与 4.0 的差异

- 4.1 为 4.0 的重构版，主要集中于稳定性与兼容性改进；如需完整功能请参考 4.0 文档。

## 参考源码位置

- `Protection/` - 保护回调实现
- `ScanEngine/` - 扫描与启发式检测
- `Xdows-Security/` - UI 与应用入口

## 技术实现（重要）

注意：Xdows-Security 4.1 不是基于网页 UI 的实现，而是使用 WinUI3 与 C# 编写的桌面应用。关键点：

- 目标框架：.NET 8（项目文件中为 `net8.0-windows10.0.19041.0`）。
- UI 技术：WinUI3（Windows App SDK），使用 `Microsoft.WindowsAppSDK`、`WinUIEx` 等包，窗口使用 `AppWindow` / Mica/Acrylic 背景。
- 架构：主应用 `Xdows-Security` 引用 `Protection` 和 `ScanEngine` 两个子项目，并加载 `SouXiaoEngine.dll` 等本地依赖作为检测引擎。

因此文档中关于“WebUI”或浏览器交互的描述不适用于 4.1，应以 WinUI3/C# 桌面实现为准。

## 构建与运行（开发者）

1. 环境要求：Windows 10/11 开发机；安装 .NET 8 SDK；安装支持 Windows App SDK 的 Visual Studio（或相应工具集）。
2. 打开解决方案 `Xdows-Security.sln`，恢复 NuGet 包（会包含 `Microsoft.WindowsAppSDK`）。
3. 设置运行平台（x86/x64/ARM64 可选），编译并运行项目 `Xdows-Security`。
4. 打包/发布：项目使用 MSIX 发布设置（`EnableMsixTooling` 在 csproj 中启用），发布时需配置签名证书（csproj 中包含证书指纹示例）。

提示：构建时请保留 `SouXiaoEngine.dll` 等本地依赖在项目旁，否则运行时会缺少本地库。
