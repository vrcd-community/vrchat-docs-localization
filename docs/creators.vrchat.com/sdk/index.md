---
title: "快速开始"
description: "学习如何在Unity中创建VRChat的虚拟形象或世界项目"
---

# 快速开始

**[创作者助手](https://vcc.docs.vrchat.com/)** 是创建 VRChat 虚拟形象和世界的最简单和最快速的方式。

在你开始创作之前, 你需要配置好 SDK。 SDK 就像是一套工具箱，需要用于在特定平台上构建程序。

**创作者助手** 会同时下载并安装虚拟形象和世界的SDK，并且还会安装和管理 Unity！Unity 是 VRChat 所使用的游戏引擎，也是您需要用来创建所有内容的引擎。

这是创建一个项目的最简单方式，我们强烈推荐使用它！如果你不这样做，你将需要在后面进行更多步骤，而且你的项目可能会更加容易出错。

## 你的第一个项目
对于我们的第一个项目，我们假设你正在为 Windows PC 构建内容。

1. 点击 [这里](https://vrchat.com/download/vcc) 下载创作者助手
    - 你也可以在 [这里](https://vcc.docs.vrchat.com/) 查看 创作者助手 的文档

:::note
如果你想构建 Quest 上的内容，可以来看看这个： [在Unity中构建Quest内容](/creators.vrchat.com/platforms/android/setting-up-unity-for-creating-quest-content).
:::

2. 在安装窗口中继续。安装位置将默认为 `:\Users\UserName\AppData\Local\Programs` ，但您可以根据需要更改此位置。

3. 创作者助手会在安装后自动启动. 如果没有启动，可以尝试在Windows的搜索栏中输入 **Creator Companion** 找到它。

4. 点击 **Create New Project** 按钮.

5. 选择您要创建 **虚拟形象** 还是 **世界**

6. 给它起一个响亮的名字！

7. 确保它保存在了正确的位置。

8. 点击 **Create Project!**

## 打开你的项目

现在，你可以打开你的项目了！在创建完项目后, 会跳转到一个新的页面，你可以点击 **Open Project** 按钮打开你的项目。也可以在左侧的侧边栏中点击 **Projects** 访问你的项目.

如果你的项目没有被列出，你可以点击 **Create New Project** 旁边的下拉框，然后点击 **Add Existing Project**。

当你打开你的项目之后，你需要做一些准备工作：

1. 检查窗口标题结尾是否为 `PC, Mac & Linux Standalone <DX11>`。
    - 如果不是，点击 `File > Build Settings...`，选择 `PC, Mac & Linux Standalone`，然后点击左下角的 `Switch Platform`。

2. 前往 `VRChat SDK > Show Control Panel > Authentication`。

3. 登录你的 VRChat 账号。上传世界和虚拟形象必须登录账号。
    - 你需要拥有一个等级至少为 "New User" [Trust Rank](/docs.vrchat.com/docs/vrchat-safety-and-trust-system) 的账号才可以上传内容。你不能使用 Steam、Oculus 或 Viveport 账号上传内容。

## 改为使用Unity Hub

虽然我们不推荐这样做，但如果你想自己安装 Unity 而不使用创作者助手，可以查看[当前支持的Unity版本](/creators.vrchat.com/sdk/upgrade/current-unity-version)页面，并使用 Unity Hub 安装 VRChat 当前支持的 Unity 版本。

如果你没有使用创作者助手创建项目，你同样也可以通过 [创作者助手](https://vcc.docs.vrchat.com/guides/getting-started) 安装SDK。

在 Unity Hub 中创建项目:
<!-- 这里原文是 or just the editor, if you chose to go that route 没太看懂，that route 指的是什么？-->
* 打开 Unity Hub (或者直接启动 Unity Editor).
* 创建一个新项目, **选择 3D项目，然后保存它**.
* 不要使用 HDRP 或 URP，VRChat不使用它们。

使用 Unity Hub 打开项目:
* 点击右上角的 **Open** 按钮, 然后选择你的项目文件夹。

## 小贴士

- 如果你在为 Quest 平台构建内容，你需要选择目标平台为 Android，具体可以参考文档：[Android](/creators.vrchat.com/platforms/android/)。
- 将项目保存在空间较大的大容量硬盘中。Unity 项目可能会很大，尤其是在使用版本管理软件的情况下。
- 不要将一个项目用于大量不同的虚拟形象或世界。这样做会让未来的迁移工作变得非常麻烦！
- 如果您知道如何使用版本控制软件，如 [Git](https://git-scm.com/) 或 [Plastic SCM](https://www.plasticscm.com/)，请使用它们！它们能让您很容易地回滚那些破坏您项目的更改。

### 下一步是什么？

您的项目已准备就绪！您可以查看 [创建世界](/creators.vrchat.com/worlds/) 或 [创建虚拟形象](/creators.vrchat.com/avatars/)。

如果你遇到了任何问题, 即使是一个空项目, 也可以联系我们的 [支持团队](https://vrch.at/support).
