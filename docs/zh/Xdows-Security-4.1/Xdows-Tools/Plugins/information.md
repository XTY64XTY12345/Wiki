# 插件信息

## 简介

在本文中我们将通过使用 `Information.json` 来修改插件信息！

## 配置文件

在 [快速开始](get-started.md) 中，我们已经创建了 `Information.json` 来让插件加载器来获取插件信息，`Information.json` 通常长这样：

```json
{
    "Name":"Test",
    "NameSpace":"PluginFramework",
    "EntryAddress":"PluginFramework.Plugin",
    "EntryFunction":"Entry",
    "Description":"--- IGNORE ---"
}
```

## 基础定制

在刚刚的 `Information.json` 中，我们可以修改插件的名称和简介，可以换成任何你想要的（不能包含特殊字符），像这样：

```json
{
    "Name":"这是你的插件名称",
    "NameSpace":"PluginFramework",
    "EntryAddress":"PluginFramework.Plugin",
    "EntryFunction":"Entry",
    "Description":"这是你的插件介绍"
}
```

## 其它信息

你可能关注到 Json 中还有
- NameSpace
- EntryAddress
- EntryFunction

其中 NameSpace 是你插件的以下内容：
```csharp{2}
using Microsoft.UI.Xaml.Controls;
namespace PluginFramework
{
    public partial class Plugin
    {
       // 其它方法...
    }
}
```
EntryAddress 是你插件的以下内容：
```csharp{4}
using Microsoft.UI.Xaml.Controls;
namespace PluginFramework
{
    public partial class Plugin
    {
       // 其它方法...
    }
}
```
EntryFunction 则是插件页面的方法名称：
```csharp
public virtual Page Entry()
{
    Initialize();
    Page page = new();
    Grid grid = new()
    {
        DataContext = new TextBlock
        {
               Text = "Hello from Plugin Framework!"
        }
    };
    page.Content = grid;
    return page;
}
```
这个方法会返回加载插件页面的内容
> [!TIP] 发生异常
> 发生异常 Microsoft.UI.Xaml.Markup.XamlParseException: "XAML parsing failed."
>
> 因为 `WinUI3` 的缺陷，暂不支持使用 xaml 来创建界面
>
> 请改用代码创建，不然会发生这个异常