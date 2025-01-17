# Plugins.ini

## 简介

该文件为存放插件配置信息的文件

只有在该文件存在时，**插件才能正常加载**

## 使用


```ini
//该配置文件为 Xdows Tools 插件配置文件
//* 代表可使用其它方式实现相同功能
//$ 代表该项只能填入 1 启用 0 禁用，除非特殊注明填入其它值默认为 0
//常量：
//{Name} 当前插件所在目录名

[Tab]
//* Xdows Tools 菜单栏相关设置
UseTab=1
//$ 是否加入 Xdows Tools 菜单栏
//启用 代表使用 Xdows Tools 菜单栏
//禁用 代表不开启 Xdows Tools 菜单栏，后续该节所有内容无效
TabName=Demo
//该值为 Xdows Tools 菜单栏名称
//当 UseTab=1 时才有效且必须填入该项否则该值无效
TabData=\Plugins\{Name}\Files\Tab.html
//该值为 Xdows Tools 菜单数据文件位置
//当 UseTab=1 时才有效且必须填入该项否则该值无效
//该值需填入路径且路径必须有效否则 UseTab=1 无效
//该值初始目录为软件的运行目录
[Dll]
//Dll 调用相关设置
DllData=\Plugins\{Name}\Files\Dll.dll
//该值为 WebUI 发送请求时所调用的
//该值需填入路径且路径必须有效否则该值无效
//该值初始目录为软件的运行目录

```
