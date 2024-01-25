---
title: "Udon 节点图（Udon Node Graph）"
description: "学习如何使用 Udon 节点图（Udon Node Graph）创建 Udon 程序。"
---

# Udon 节点图（Udon Node Graph）

## 接口

Udon 节点图（Udon Node Graph）是创建 Udon 程序的默认接口。本章节会说明如何使用它。如果你想直接查看示例，请参阅 [Udon 示例场景](/creators.vrchat.com/worlds/examples/udon-example-scene/)。

你可以在菜单栏点击 **VRChatSDK > Udon Graph** 或直接点击 UdonBehaviour 组件上的 **Open Udon Graph** 按钮来打开 Udon 节点图窗口。

![Udon 窗口](/creators.vrchat.com/images/worlds/index-a1d7f43-open-graph.png)

::: warning Minimap
Minimap 已经被移除了！您现在可以通过组名称和事件名称来搜索您的节点图，我们觉得 Minimap 更多的是分散注意力而不是帮助作用。
:::

如果你是通过菜单栏打开的 Udon 窗口，您会看到欢迎页面，其会显示一些更新日志和其他设置。

您可以同时打开多个节点图，并且通过在节点图窗口顶部的标签页来在不同的节点图之间切换。

你也可以通过点击标签一角的 X 来关闭标签页。请注意，节点图标签页并不是“真正的”的标签页，当你点击不同的标签页时，它只会重新加载节点图。

## 流（Flow）

节点图中的流决定了什么节点会按什么顺序运行。

![](/creators.vrchat.com/images/worlds/index-f9c508c-simple-branching.png)

上图中间的三角形就是 _流_ 的接口，其按从左到右连接的“面条”的顺序来触发节点。要了解 Udon 节点图中做了什么事或者制作自己的节点图请 _跟着流走_。

<!-- 这玩意怎么翻啊 -->

顶栏上有一个“高亮显示流（Highlight flow）”开关，启用后将高亮显示通过流边缘连接的节点，让您可以快速查看程序是如何到达特定节点的。

There is a "Highlight flow" toggle on the topbar, which, when enabled, will highlight the nodes connected via the flow edges, allowing you to quickly see how does the program arrive to the particular node.

![](/creators.vrchat.com/images/worlds/index-2139dee-simple-flow-highlight.png)

如果一个节点没有连接任何流，那么什么事都不会发生。

在节点图中：

1. `Start` 事件会在世界加载的时候触发
2. 在下一步触发的 “分支（Branch）” 节点中。会通过复选框的值决定是触发 _True_ 还是 _False_ 路径。
3. 如果“分支（Branch）”节点中的值为 True，则会触发上面的节点发送一个名为“Hello”的自定义事件。
4. 如果不是，则会发送一个名为 “Goodbye” 的自定义事件。

如果你不知道 **发送自定义事件（Sending a Custom Event）** 是什么意思也是正常的。先学习节点图中的流是你理解节点图的工作方式的第一步。

## 创建节点

在 Udon 节点图中，每一个节点都是一个包含了特定功能的方块。您可以将多个节点以一定的方式互相连接，构成一个“节点图”，而它就是您所制作出来的程序。

有以下几种办法可以创建节点：

- [快捷键](#快捷键)
- [拖放操作](#拖放游戏对象gameobject和组件)
- [搜索菜单](#搜索节点)

### 快捷键

安装以下任意一个快捷键再在节点图内点击你想创建节点的地方来创建对应的节点。

- `1` : float
- `2` : Vector2
- `3` : Vector3
- `4` : Vector4
- `+` : float 加法（addition）
- `-` : float 减法（subtraction）
- `=` - float 比较是否相等（equality comparison）
- `b`: 分支（Branch）
- `shift+b` : 分组（Block）

### 其他快捷键

- 按住 `C` 然后点击一个常量来把它转换成变量。
- `Shift+A` 居中选择的节点。
- 按住 `Ctrl+G` 快速创建分组。
- `L+鼠标左键` 记录所选节点的值。
- 按住 `Shift+F` 然后点击输出数组类型的节点来自动生成一个 foreach 循环。

![创建循环的简单方法！](/creators.vrchat.com/images/worlds/index-87b33a4-for-loop.gif)

## 拖放游戏对象（GameObject）和组件

If you want to add interactivity to a GameObject or Component, you can drag and drop them from your hierarchy to the graph. For example, you can drag and drop a Light component by grabbing dragging from the 'Light' title onto the graph.
![Easy way to get a reference to a Light component so you can play with it.](/creators.vrchat.com/images/worlds/index-6238d1e-light-component.jpg)
Creating nodes via Drag and Drop this way creates Variables that are tied to your GameObject or Component, so you'll see a new variable appear in the Variables window, and a node which is actually a "Get Variable" node which is automatically set up to get your new Component.

### 拖放变量Drag and Drop for Variables

You can create variables of any type by pressing the **+** button in the Variables pane of the Graph Sidebar. Then you can drag and drop the variable name onto the graph to create a "Get Variable" node, hold the **Ctrl** key while dragging to make a "Set Variable" node, or hold the **Alt** key to make an "On Variable Changed" node.

### 搜索节点

Press the **Spacebar** to open up Quick Search, then type in the first few letters of the class you want to interact with.

![](/creators.vrchat.com/images/worlds/index-08df7d3-gameobject-search.png)

This method of searching works best if you know Unity's basic classes and object types. There are other ways of searching, see: [Searching for nodes](/creators.vrchat.com/worlds/udon/graph/searching-for-nodes)

## 编译节点图

<!-- The graph automatically compiles in the background at regular variables. 这个 regular variables 指的是什么？ -->
节点图会在后台定时自动编译。编译时你会看到节点图右上角在闪动，当编译完成时会显示绿色或在编译失败时显示红色。你点击状态盒（Status Box）查看生成的“汇编”代码或者编译失败时出现的错误。

![状态盒（Status Box）显示 “OK”并且我们可以看到变量定义在了“汇编”代码的开头。](/creators.vrchat.com/images/worlds/index-fc0a2c0-assembly.png)

## 运行节点图

在上传节点图到 VRChat 之前，您有两种方式运行场景中的节点图。

### 在编辑器中运行

::: warning
这部分的内容已经过时了。
:::

您可以按下 Unity 的“播放（Play）”按钮直接在编辑器中运行场景来测试一些节点图。这适用于一些简单方法和逻辑，但是以下内容不会正常工作：

- 同步变量 & 网络事件
- VRCPlayerAPI 对象 - 使用 Stations，触发 Interact 事件，关于 Avatar 的所有东西

### 使用 Build & Test

使用 VRChat SDK 窗口来进行本地测试。把你的内容打包成一个离线世界并启动 VRChat 客户端可以让你测试和对象的交互和 VRCPlayerAPI，但是会花费更长的时间。

![测试同步功能最简单的方式是启动两个本地客户端。](/creators.vrchat.com/images/worlds/index-32da932-local-testing-2.png)

如果你需要测试同步变量和网络世界，你需要两个客户端。你可以使用“客户端数量（Number of Clients）”输入框启动最多 8 个加入本地测试世界的客户端。它们会以相同的用户名显示，但是它们都会被视为单独的玩家这样子就可以测试你的交互了。

::: danger 设置你的本地客户端路径
如果“强制桌面模式（Force Non-VR）”不关注，请到 VRChat SDK 窗口的“设置”选项卡并设置你的 VRChat 客户端路径为你的客户端实际安装的位置。
:::

![](/creators.vrchat.com/images/worlds/index-6d24b40-client-path.png)

## 上传你的世界

::: tip 译者吐槽
这和这个子标题关系不大吧？
:::

当你[注册一个 VRChat 账号](https://vrchat.com/home/register)之后，你就可以使用 Build & Test 了。如果你想要发布你的世界来让其他人也可以游玩，你需要在 VRChat 上花费一些时间：游玩不同的世界，交一些朋友然后获得一些灵感！