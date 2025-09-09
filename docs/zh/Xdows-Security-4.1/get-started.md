# 快速开始 {#GetStarted}

来看看下一代基于 `WinUI3` + `C#` 技术构建的杀毒软件

## 简介 {#Info}

Xdows Security 4.1 是一个基于 `WinUI3` + `C#` 技术构建的杀毒软件。

## 下载 {#Download}

当前提供 4.1 测试/正式包，请在发布页面选择对应版本下载。

安装前请查阅随包附带的 `README.txt`。测试版仅供试用，请在生产环境谨慎安装。

<Linkcard url="https://github.com/XTY64XTY12345/Xdows-Security/releases/download/nightly/Xdows-Security-Signed.zip
" title="下载 Xdows Security Nightly" description="请保证能正常访问 Github" logo="/logo.svg"/>

此链接下载的构建为 `x64` 版本，如需其它版本请自行编译

## 安装使用

1. 下载 zip 压缩包
2. 在 `设置` - `开发者选项/高级设置` 启用 `开发者模式` 和 `允许未签名的 Powershell 脚本运行`
> [!NOTE] 注意
>
> 不同系统可能位置/名称不同
3. 使用 `Powershell` 运行 `install.ps1`
4. 等待安装完成

## 扫描引擎

- Xdows Local：使用导入表、导出表等多种方式分析 PE 文件，全部开源
- SouXiaoEngine：由 `WorkingCat` 提供扫描引擎，基于多种分析方式，不开源
- CzkCloud：由 `天启星图网络科技` 提供的云扫描服务，因为需要保护 ApiKey 故在 Nightly 版中不支持该功能

## 构建运行

1. 环境要求：Windows 10/11；安装 VS2022 及其相关负载；安装 Git 并保证能正常访问 Github。
2. 克隆仓库
```sh
git clone https://github.com/XTY64XTY12345/Xdows-Security
```
2. 打开解决方案 `Xdows-Security.sln`。
3. 设置运行平台（x86/x64/ARM64 可选，但推荐 x64），编译并运行项目 `Xdows-Security`。
4. 打包/发布：项目使用 MSIX 发布设置（`EnableMsixTooling` 在 csproj 中启用），发布时需配置签名证书（csproj 中包含证书指纹示例）。

提示：构建时请保留 `SouXiaoEngine.dll` 等本地依赖在项目旁，否则运行时会出现异常或在编译过程中出现错误。
