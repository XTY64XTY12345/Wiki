# Main.dll

## 简介

Main.dll 为 Xdows Tools 实际调用的DLL

Xdows Tools 通过调用这个DLL来实现插件功能

Main.dll 的文件名和位置均可自定义

你可以在[这个文件](./Plugins.ini.md#%E4%BD%BF%E7%94%A8)中的 Dll-DllData 来自定义

## 使用
> [!IMPORTANT]
> 以下DLL程序中的必须存在
> 
> 如果不存在，程序将会崩溃


### SetUIHtml

该函数定义在 Xdows Tools 中载入的 Html 文件

要求该函数返回 Text 型数据，否则程序崩溃

返回数据为所在 Xdows Tools 中载入的 Html 文件

该函数没有参数，如有参数则程序崩溃

### SetUITitle

![XdowsToolsUI](./../../PNG/XdowsToolsUI-Main.dll.md.png)

（示例：图中红框部分即为该DLL返回的内容显示效果）

该函数定义在 Xdows Tools 中显示的标题

要求该函数返回 Text 型数据，否则程序崩溃

返回数据为所在 Xdows Tools 中显示的标题

该函数没有参数，如有参数则程序崩溃
