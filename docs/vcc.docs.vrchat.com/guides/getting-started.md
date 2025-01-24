---
upstreamCommit: 75cd9a85ccd1537326752c8cac33938b93fe9147
---

# 入门

如果您是从零开始，以下是您需要做的：

## 下载
创作者助手可以在 [https://vrchat.com/home/download](https://vrchat.com/home/download) 下载。

您也可以通过这个 URL 直接下载最新版本：[https://vrchat.com/download/vcc](https://vrchat.com/download/vcc)。

## 安装
运行上一步中的安装程序，它将默认将创作者助手安装到您的 "%LOCALAPPDATA%\Programs" 文件夹中（例如 `C:\Users\UserName\AppData\Local\Programs`）。如果您愿意，您可以在安装过程中更改这个设置。安装完成后，您可以删除安装程序。

## 设置
创作者助手会在启动时检查 Unity 是否已安装。如果需要，它会提供一个按钮，方便您安装 Unity Hub 和 Unity 编辑器。按照创作者助手内的安装说明，您将获得最新版本的 Unity Hub 和当前兼容 VRChat SDK 的 Unity 版本。

要安装 Unity Hub，请[按照这些步骤操作](https://learn.unity.com/tutorial/install-the-unity-hub-and-editor)。
::: info

### Unity 安装问题

- 安装 Unity 后，请确保[激活您的 Unity 许可证](https://support.unity.com/hc/en-us/articles/211438683-How-do-I-activate-my-license-)。
- Unity 和 Unity Hub 通常需要管理员权限进行安装。当安装程序请求更改您的系统时，请点击 "是"。在极少数情况下，您可能需要[以管理员身份运行安装程序](https://www.windowscentral.com/how-run-app-administrator-windows-10)。
- 如果您的 Unity Hub 安装意外失败，您可能需要查看安装日志文件。您可以在 `%UserProfile%\AppData\Roaming\UnityHub\logs\info-log.json` 中找到它。
- Unity Hub 可能会自动提示您安装与 VRChat 不兼容的 Unity 版本。您可以安全地跳过这些提示。

:::

创作者助手仅在 Windows 10 上得到完全支持（Windows 11 可能可以工作，但尚未完全测试）。[在 Mac 和 Linux 上的 CLI 有一些功能也被支持](/vcc.docs.vrchat.com/vpm/cli#mac-and-linux-support)。

### Unity 编辑器版本
创作者助手需要使用我们当前支持的 Unity 版本才能正常工作。如果您已经安装了 Unity Hub，创作者助手可以自动为您安装。

如果创作者助手无法自动找到您已安装的 Unity 编辑器，将显示错误消息。在创作者助手的设置页面，您可以使用 📁 按钮浏览您想要使用的 Unity 编辑器。

![浏览 Unity 编辑器](/vcc.docs.vrchat.com/images/browse-unity-editor.png)

## 创建新项目

要创建新项目，只需从左侧的导航栏中按 "新建"，然后选择您想要从哪个模板开始工作：
* Avatar - 创建一个包含 Avatar 3.0 SDK 的新项目，用于创建 VRChat Avatar。
* World - 创建一个包含 World 3.0 SDK 和 Udon 的新项目，以及 ClientSim，用于直接在编辑器中测试您的世界。
* UdonSharp - 创建一个包含 World 模板中所有内容 PLUS UdonSharp 的新项目，用于以类似 C# 的语法编写 Udon 脚本。

## 迁移现有项目

如何迁移您的现有项目。这在 [VPM: 迁移项目](/vcc.docs.vrchat.com/vpm/migrating) 中有详细介绍。

## 更新现有项目

您可以通过从左侧导航中按 "Add" 按钮将现有项目添加到您的主项目列表。您可以选择一个单独的项目文件夹将其添加到列表中，或者选择一个包含多个项目的文件夹，将每个找到的有效项目添加到您的列表中（此方法只会搜索往下一层的文件夹）。