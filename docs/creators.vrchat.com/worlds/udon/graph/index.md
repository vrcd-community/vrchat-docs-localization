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

你也可以通过点击标签一角的 X 来关闭标签页。请注意，节点图标签页并不是"真正的"的标签页，当你点击不同的标签页时，它只会重新加载节点图。

## 流（Flow）

The Flow of your graph defines which nodes will run, and the order in which they'll do it.
![](/creators.vrchat.com/images/worlds/index-f9c508c-simple-branching.png)

The triangles in the picture above are the _Flow_ ports, and they trigger in order from left to right, following the noodles that connect them. To understand what is happening in Udon graphs and to make your own, _follow the flow_. 

There is a "Highlight flow" toggle on the topbar, which, when enabled, will highlight the nodes connected via the flow edges, allowing you to quickly see how does the program arrive to the particular node. 
![](/creators.vrchat.com/images/worlds/index-2139dee-simple-flow-highlight.png)

If the node doesn't have any flow connections, then nothing will happen.

In the graph above:
1. The _Start_ event triggers when the world loads
2. The Branch triggers next. It checks the value of its checkbox and then triggers either the *True* or *False* path.
3. If the value is True, then we trigger the top node, which sends a Custom Event called "Hello".
4. Otherwise, we will send a Custom Event called "Goodbye"

It's ok if you don't know what **Sending a Custom Event** means yet. Learning to read the flow of a graph is the first step to understanding what they do.

## Creating Nodes
Nodes are the boxes that represent the methods you can trigger. Building a graph consists of creating and connecting nodes together to create a program.

There are several ways to create nodes:
  * [Hotkeys](#hotkeys)
  * [Drag-and-Drop actions](#drag-and-drop-for-gameobjects-and-components)
  * [Search menus](#searching-for-nodes)

### Hotkeys
Press and hold one of the following keys, then click anywhere on the graph to create the corresponding node:
* `1` : float
* `2` : Vector2
* `3` : Vector3
* `4` : Vector4
* `+` : float addition
* `-` : float subtraction
* `=` - float equality comparison
* `b`: Branch
* `shift+b` : Block 

### Other Hotkeys:
* Press and hold "C", then click on a constant to convert it into a variable.
* Shift+A aligns selected nodes 
* Press and hold Ctrl+G for quick grouping
* L+Click logs the value of the selected node 
* Press and hold "Shift+F", then click on a node that outputs an array type, to generate a foreach loop automatically
Many of these features are also available in the right-click menus for their respective nodes.
![Making for loops the easy way!](/creators.vrchat.com/images/worlds/index-87b33a4-for-loop.gif)
## Drag and Drop for GameObjects and Components

If you want to add interactivity to a GameObject or Component, you can drag and drop them from your hierarchy to the graph. For example, you can drag and drop a Light component by grabbing dragging from the 'Light' title onto the graph.
![Easy way to get a reference to a Light component so you can play with it.](/creators.vrchat.com/images/worlds/index-6238d1e-light-component.jpg)
Creating nodes via Drag and Drop this way creates Variables that are tied to your GameObject or Component, so you'll see a new variable appear in the Variables window, and a node which is actually a "Get Variable" node which is automatically set up to get your new Component.

### Drag and Drop for Variables

You can create variables of any type by pressing the **+** button in the Variables pane of the Graph Sidebar. Then you can drag and drop the variable name onto the graph to create a "Get Variable" node, hold the **Ctrl** key while dragging to make a "Set Variable" node, or hold the **Alt** key to make an "On Variable Changed" node.

### Searching for Nodes

Press the **Spacebar** to open up Quick Search, then type in the first few letters of the class you want to interact with.
![](/creators.vrchat.com/images/worlds/index-08df7d3-gameobject-search.png)

This method of searching works best if you know Unity's basic classes and object types. There are other ways of searching, see: [Searching for nodes](/creators.vrchat.com/worlds/udon/graph/searching-for-nodes)

## Compiling the Graph
The graph automatically compiles in the background at regular variables. When this happens, you'll see a flash in the upper-right corner of your graph, and the Status box will turn green if things went well, or red if there's an issue. In either case, you can click on the Status box to see the Assembly Code that was generated, or the errors if there was a problem. 
![The status box shows 'OK' and we can see the Variables declared at the top of this Assembly.](/creators.vrchat.com/images/worlds/index-fc0a2c0-assembly.png)
## Running the Graph
There are two ways to run the graphs in your scene before you upload them to VRChat.

### Running In-Editor
You can use Unity's Play Button to run your scene directly in the editor to test out some graphs. This will work for some simple methods and logic, but the following items won't work as expected:
* Synced Variables & Networked Events
* The VRCPlayerAPI object - using stations, triggering Interact events, anything involving Avatars

### Running Build & Test
Use the VRChat SDK Window to do Local Testing. This takes slightly longer as it bundles your content into an offline world and launches the actual VRChat client to give you an Avatar that can Interact with objects and VRCPlayerAPI requests.
![The simplest way to test Sync features is to launch 2 local clients.](/creators.vrchat.com/images/worlds/index-32da932-local-testing-2.png)
To test Synced variables and NetworkEvents, you'll need two clients - you can use the 'Number of Clients' field to launch up to 8 local clients that will launch in a private test world. They will all have the same DisplayName, but they'll otherwise be recognized as separate players so you can test out your interactions.
::: danger Set Your Local Client Path

If 'Force Non-VR' doesn't work for you, then switch to the 'Settings' tab of the VRChat SDK Window and set your VRChat Client Path to point at your actual VRChat installation.
:::

![](/creators.vrchat.com/images/worlds/index-6d24b40-client-path.png)

## Uploading Your World
You will be able to Build & Test as soon as you [make a VRChat Account](https://vrchat.com/home/register). In order to publish a world so others can visit, you need to spend some time in VRChat - visit worlds, make some friends and get inspired!