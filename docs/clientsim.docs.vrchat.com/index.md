---
upstreamCommit: 4d76fd612a37de18fd85c39062bade59afffb7cf
---

# ClientSim

![ClientSim 在 Unity 编辑器中](/clientsim.docs.vrchat.com/images/editor-screenshot.png)

VRChat 客户端模拟器，简称 ClientSim，是一个工具，使您能够直接在 Unity 中测试您的 VRChat SDK3 世界！您可以查看所有对象的状态以直接验证事物。

## 功能

- 在 Unity 中调试所有内容。
- 在 Play 模式下检查 Udon 变量。
- 模拟桌面客户端的控制方式
- 抓取 Pickups，使用 Interacts，UI 和 Stations。
- 在 Play 上删除 EditorOnly 对象。

## 设置

### 要求

- Unity 2019.4.29-31
- [VRChat Base](https://github.com/vrchat/packages/tree/main/packages/com.vrchat.base) 和 [Worlds](https://github.com/vrchat/packages/tree/main/packages/com.vrchat.worlds) SDKs 的合适版本

### 安装

> 注意：可以试试使用即将推出的 VRChat 创作者助手公开 Beta 版本，安装将会更加简单。
>
- 在您的项目中，打开 Unity 包管理器，点击 + 按钮并选择 ‘从 git URL 添加包...’。
    - 输入 `https://github.com/vrchat/packages.git?path=/packages/com.vrchat.base#vcc`。然后等待包导入，或者如果您关闭了自动刷新，按 Ctrl+R 刷新。
    - 再次点击 + 按钮并添加此 git url：`https://github.com/vrchat/packages.git?path=/packages/com.vrchat.worlds#vcc`
    - 最后再点一次 + 按钮并添加此 url：`https://github.com/vrchat-community/ClientSim.git?path=/ClientSim_UnityProject/Packages/com.vrchat.ClientSim#issue-12-make-docs`

### 入门

- 打开您的 VRChat 世界场景
- 在 Unity 中按下播放按钮
- 测试您的世界


## 在[系统](./systems/)部分了解所有系统的工作方式

### ClientSim 相比于 CyanEmu 的新特性
- 通过 I、J、K、L、U、O、鼠标滚动和游戏手柄进行 Pickup 操作。
- 输入基于键盘布局而不是特定键。
- 本地和远程玩家现在都有类人形的模型，支持模型骨骼 (但不包括完整的 Avatar 系统)。
- 直接查看和设置玩家数据 - 运动值，语音和模型音频设置，战斗健康度。
- 按住 tab 键解锁鼠标 - 这样您可以突出显示偏离中心的对象。
- 当 UI 元素可以进行交互时，显示指针。
- 新的运行时选项：作为非主体开始，反转鼠标，显示工具提示，改变玩家规模，设置目标帧率，延迟开始以模拟加载。
- 新的播放模式菜单，带有更新的样式，玩家信息和设置按钮。
- 在设置窗口中的新按钮，用于更新项目设置，不再在未经用户同意的情况下发生。
- 与 Android 匹配的网格突出显示。
- 更新工具提示位置以匹配客户端。
- 更好的游戏手柄支持。
- 支持禁用域重载，并以无延迟进入播放模式 - 注意，Unity 有一个 bug，如果它们没有设置为 “Editor and Runtime”，则会导致 UI 事件失败。
- 自动化测试 - 您需要特别启用这个功能，所以它不会影响您的项目。文档即将发布。

### 已知问题

- 手动更改 Unity 项目设置以启用新的输入系统可能无法正确允许输入。用户应使用 ClientSim 设置窗口中的按钮。
- Physics.RaycastNonAlloc 有时不返回已移动且没有刚体的碰撞器。
- 退出播放模式可能会偶尔抛出异常，因为对象被销毁的顺序。
- “Highlights” 着色器在 Mac (Metal) 上无法工作。

## 版权

版权所有 (c) 2021 VRChat

查看 License.md 以获取完整的版权信息

## 致谢

基于 [CyanLaser](https://github.com/CyanLaser/CyanEmu) 制作的 [CyanEmu](https://github.com/CyanLaser)，此版本也由 [CyanLaser](https://github.com/CyanLaser) 制作。